import { LinksFunction, LoaderFunction, MetaFunction } from "remix";
import { Form, json, Link, useLoaderData, useSearchParams } from "remix";
import { ActionFunction, useActionData } from "remix";

import Header from "~/components/Header";
import { getUserCount, login, register, User } from "~/users";
import { createUserSession, getUserBySession } from "~/utils/session.server";

import stylesUrl from "../../styles/login.css";

function validateUsername(username: unknown) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}

type ActionData = {
  formError?: string;
  fieldErrors?: {
    username: string | undefined;
    password: string | undefined;
  };
  fields?: {
    loginType: string;
    username: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/exotics";
  const loginType = form.get("loginType");
  const permissions = form.get("permissions");

  if (
    typeof loginType !== "string" ||
    typeof username !== "string" ||
    typeof password !== "string" ||
    typeof redirectTo !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fieldErrors = {
    password: validatePassword(password),
    username: validateUsername(username),
  };
  const fields = { loginType, password, username };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const userCount = await getUserCount();
  const isAdmin = !userCount || permissions === "admin";

  const { errors, user } =
    loginType === "login"
      ? await login({ username, password })
      : await register({
          username,
          password,
          isAdmin,
        });

  switch (loginType) {
    case "login":
      if (Object.values(errors).some(Boolean) || !user) {
        return badRequest({ fieldErrors: errors, fields });
      }

      return createUserSession(user.id, redirectTo);
    case "register":
      if (!user) {
        return badRequest({
          fieldErrors: errors,
          fields,
          formError: !Object.values(errors).some(Boolean)
            ? "Something went wrong creating a new user"
            : undefined,
        });
      }

      return createUserSession(user.id, redirectTo);
    default:
      return badRequest({ fields, formError: "Login type invalid" });
  }
};

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }];
};

interface LoaderData {
  canAddUser: boolean;
  user: User | null;
}

export const loader: LoaderFunction = async ({ request }) => {
  const [user, userCount] = await Promise.all([
    getUserBySession(request),
    getUserCount(),
  ]);

  const data: LoaderData = {
    canAddUser: user?.isAdmin || !userCount,
    user,
  };

  return data;
};

export const meta: MetaFunction = () => ({
  title: "Bayou Exotics | Login",
  description: "Login to manage exotics",
});

export default function Login() {
  const [searchParams] = useSearchParams();
  const actionData = useActionData<ActionData>();
  const { canAddUser, user } = useLoaderData<LoaderData>();

  return (
    <>
      <Header canLogOut user={user} />
      <div className="container">
        <div className="content" data-light="">
          <h2>{!user ? "Login" : "Register New User"}</h2>
          <Form
            aria-describedby={
              actionData?.formError ? "form-error-message" : undefined
            }
            method="post"
          >
            <input
              type="hidden"
              name="redirectTo"
              value={searchParams.get("redirectTo") ?? undefined}
            />
            <fieldset data-hide={user ? "hide" : undefined}>
              <legend className="sr-only">Login or Register?</legend>
              <label>
                <input
                  type="radio"
                  name="loginType"
                  value="login"
                  defaultChecked={
                    (!user && !actionData?.fields?.loginType) ||
                    actionData?.fields?.loginType === "login"
                  }
                />{" "}
                Login
              </label>
              <label>
                <input
                  defaultChecked={
                    !!user || actionData?.fields?.loginType === "register"
                  }
                  name="loginType"
                  type="radio"
                  value="register"
                />{" "}
                Register
              </label>
            </fieldset>
            <div>
              <label htmlFor="username-input">Username</label>
              <input
                type="text"
                aria-describedby={
                  actionData?.fieldErrors?.username
                    ? "username-error"
                    : undefined
                }
                aria-invalid={Boolean(actionData?.fieldErrors?.username)}
                defaultValue={actionData?.fields?.username}
                id="username-input"
                name="username"
              />
              {actionData?.fieldErrors?.username ? (
                <p
                  className="form-validation-error"
                  role="alert"
                  id="username-error"
                >
                  {actionData?.fieldErrors?.username}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="password-input">Password</label>
              <input
                aria-describedby={
                  actionData?.fieldErrors?.password
                    ? "passsword-error"
                    : undefined
                }
                aria-invalid={Boolean(actionData?.fieldErrors?.password)}
                defaultValue={actionData?.fields?.password}
                id="password-input"
                name="password"
                type="password"
              />
              {actionData?.fieldErrors?.password ? (
                <p
                  className="form-validation-error"
                  role="alert"
                  id="password-error"
                >
                  {actionData?.fieldErrors?.password}
                </p>
              ) : null}
            </div>
            <div id="form-error-message">
              {actionData?.formError ? (
                <p className="form-validation-error" role="alert">
                  {actionData.formError}
                </p>
              ) : null}
            </div>
            {user ? (
              <fieldset>
                <legend className="sr-only">Admin or Manager?</legend>
                <label>
                  <input type="radio" name="permissions" value="admin" /> Admin
                </label>
                <label>
                  <input
                    defaultChecked
                    name="permissions"
                    type="radio"
                    value="manage"
                  />{" "}
                  Manage
                </label>
              </fieldset>
            ) : null}
            <button type="submit" className="button">
              Submit
            </button>
          </Form>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exotics">Exotics</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
