import {
  Link,
  LoaderFunction,
  Outlet,
  useLoaderData,
  useLocation,
} from "remix";

import Header from "~/components/Header";
import { User } from "~/users";
import { getUserBySession } from "~/utils/session.server";

import execStyles from "../styles/exec.css";

interface LoaderData {
  user: User | null;
}

export const links = () => {
  return [{ rel: "stylesheet", href: execStyles }];
};

export const loader: LoaderFunction = async ({ request }) => {
  const user = await getUserBySession(request);
  return { user };
};

export default function Executive() {
  const { user } = useLoaderData<LoaderData>();
  const { pathname } = useLocation();

  return (
    <>
      <Header showAdminLink={false} user={user} />
      <div className="exec space">
        <div className="col">
          <h1>Executive</h1>
          <Link data-active={pathname === "/executive"} to="/executive">
            Profile
          </Link>
          <Link data-active={pathname === "/executive/exotics"} to="exotics">
            Exotics
          </Link>
          <Link data-active={pathname === "/executive/media"} to="media">
            Images
          </Link>
        </div>
        <main>
          <Outlet />
        </main>
      </div>
    </>
  );
}
