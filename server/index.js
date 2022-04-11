var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_architect = require("@remix-run/architect");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes2
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/_static/build/_assets/global-3ZBDVWBP.css";

// app/styles/global-large.css
var global_large_default = "/_static/build/_assets/global-large-NKTQAWDZ.css";

// app/styles/global-medium.css
var global_medium_default = "/_static/build/_assets/global-medium-DRHJR3JT.css";

// route:/Users/chaseowens/Desktop/bayou_boy/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: global_medium_default, media: "" },
    { rel: "stylesheet", href: global_large_default }
  ];
};
var meta = () => {
  return { title: "Bayou Exotics" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/login/index.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action,
  default: () => Login,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
init_react();
var import_remix5 = __toESM(require_remix());
var import_remix6 = __toESM(require_remix());

// app/components/Header/index.tsx
init_react();
var import_remix3 = __toESM(require_remix());
var routes = /* @__PURE__ */ new Set(["exotics"]);
var Header = ({
  canLogOut = false,
  showAdminLink = true,
  user
}) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: "nav row spaceBetween alignCenter wrap"
  }, /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    to: "/"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "logo",
    src: "https://s3-us-east-2.amazonaws.com/bayou-exotics/assets/bayou-logo.png",
    alt: "website-logo"
  })), /* @__PURE__ */ React.createElement("nav", {
    className: "row space alignCenter sideMargin"
  }, user && showAdminLink && /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    className: "button",
    to: "/executive"
  }, "Executive"), [...routes].map((route) => /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    className: "button cap",
    prefetch: "intent",
    key: route,
    to: `/${route}`
  }, route)), canLogOut && user ? /* @__PURE__ */ React.createElement(import_remix3.NavLink, {
    className: "button",
    to: "/logout"
  }, "Log Out") : null));
};
var Header_default = Header;

// app/users.ts
init_react();
var import_bcryptjs = __toESM(require("bcryptjs"));

// aws/aws-exports.ts
init_react();
var import_aws_sdk2 = __toESM(require("aws-sdk"));

// aws/aws-config.ts
init_react();
var import_aws_sdk = __toESM(require("aws-sdk"));
var myCredentials = new import_aws_sdk.default.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:6aebb5ad-dc8a-437f-b99a-90e347fd8023"
});
var config = new import_aws_sdk.default.Config({
  credentials: myCredentials,
  region: "us-east-2"
});
var aws_config_default = config;

// aws/aws-exports.ts
var s3 = new import_aws_sdk2.default.S3(aws_config_default);
s3.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY
});
var getFile = async (key) => {
  const file = await s3.getObject({ Bucket: "bayou-exotics", Key: key }).promise().catch((error) => {
    console.log(`Error at path: ${key}, ${error.message}`);
  });
  if (!file || !file.Body) {
    return null;
  }
  const data = file.Body.toString();
  return JSON.parse(data);
};
var deleteCurrentIndex = async (key, index) => {
  const data = await getFile(key);
  data.current.splice(index, 1);
  const minifiedData = JSON.stringify(data);
  return await s3.putObject({
    Bucket: "bayou-exotics",
    Key: key,
    Body: minifiedData
  }).promise();
};
var aws_exports_default = s3;

// app/utils/createId.ts
init_react();
var import_nanoid = require("nanoid");
var createId_default = (0, import_nanoid.customAlphabet)("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 16);

// app/users.ts
var login = async ({ username, password }) => {
  const users = await getUsers();
  const user = users.find((user2) => user2.username === username);
  const errors = {
    username: "",
    password: ""
  };
  if (!user) {
    errors.username = "Username not found";
    return { errors };
  }
  const isCorrectPassword = import_bcryptjs.default.compare(password, user.passwordHash);
  if (!isCorrectPassword) {
    errors.password = "Password is incorrect";
    return { errors };
  }
  return { errors, user };
};
var register = async ({
  username,
  password,
  isAdmin
}) => {
  const users = await getUsers();
  const existingUser = users.find((user2) => user2.username === username);
  const errors = {
    username: "",
    password: ""
  };
  if (existingUser) {
    errors.username = "Username already exists";
    return { errors };
  }
  const passwordHash = await import_bcryptjs.default.hash(password, 8);
  const id = createId_default();
  const user = {
    id,
    isAdmin: !!isAdmin,
    passwordHash,
    username
  };
  users.push(user);
  const minifiedUsers = JSON.stringify(users);
  await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "users.json" /* User */,
    Body: minifiedUsers
  }).promise().catch(() => console.log(`Error adding ${user}`));
  return { errors, user };
};
var getUsers = async () => {
  const data = await aws_exports_default.getObject({
    Bucket: "bayou-exotics",
    Key: "users.json" /* User */
  }).promise().then((data2) => data2).catch((error) => {
    console.log(`Error fetching assets path", ${error.message}`);
  });
  if (!data || !data.Body) {
    throw new Error(`${"users.json" /* User */} has no Body`);
  }
  const userData = data.Body.toString();
  const users = JSON.parse(userData);
  return users;
};
var getUser = async (userId) => {
  const users = await getUsers();
  const user = users.find((user2) => user2.id === userId);
  if (!user) {
    return null;
  }
  return user;
};
var getUserCount = async () => {
  const users = await getUsers();
  return users.length;
};

// app/utils/session.server.ts
init_react();
var import_remix4 = __toESM(require_remix());
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var storage = (0, import_remix4.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: false,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true
  }
});
async function createUserSession(userId, redirectTo) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return (0, import_remix4.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    return null;
  }
  return userId;
}
async function getUserBySession(request) {
  const userId = await getUserId(request);
  if (!userId) {
    return null;
  }
  try {
    return await getUser(userId);
  } catch {
    throw logout(request);
  }
}
async function logout(request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return (0, import_remix4.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/styles/login.css
var login_default = "/_static/build/_assets/login-TZZD6C6N.css";

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/login/index.tsx
function validateUsername(username) {
  if (typeof username !== "string" || username.length < 3) {
    return `Usernames must be at least 3 characters long`;
  }
}
function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return `Passwords must be at least 6 characters long`;
  }
}
var badRequest = (data) => (0, import_remix5.json)(data, { status: 400 });
var action = async ({ request }) => {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");
  const redirectTo = form.get("redirectTo") || "/exotics";
  const loginType = form.get("loginType");
  const permissions = form.get("permissions");
  if (typeof loginType !== "string" || typeof username !== "string" || typeof password !== "string" || typeof redirectTo !== "string") {
    return badRequest({
      formError: `Form not submitted correctly.`
    });
  }
  const fieldErrors = {
    password: validatePassword(password),
    username: validateUsername(username)
  };
  const fields = { loginType, password, username };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const userCount = await getUserCount();
  const isAdmin = !userCount || permissions === "admin";
  const { errors, user } = loginType === "login" ? await login({ username, password }) : await register({
    username,
    password,
    isAdmin
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
          formError: !Object.values(errors).some(Boolean) ? "Something went wrong creating a new user" : void 0
        });
      }
      return createUserSession(user.id, redirectTo);
    default:
      return badRequest({ fields, formError: "Login type invalid" });
  }
};
var links2 = () => {
  return [{ rel: "stylesheet", href: login_default }];
};
var loader = async ({ request }) => {
  const [user, userCount] = await Promise.all([
    getUserBySession(request),
    getUserCount()
  ]);
  const data = {
    canAddUser: (user == null ? void 0 : user.isAdmin) || !userCount,
    user
  };
  return data;
};
var meta2 = () => ({
  title: "Bayou Exotics | Login",
  description: "Login to manage exotics"
});
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m;
  const [searchParams] = (0, import_remix5.useSearchParams)();
  const actionData = (0, import_remix6.useActionData)();
  const { canAddUser, user } = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default, {
    canLogOut: true,
    user
  }), /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, !user ? "Login" : "Register New User"), /* @__PURE__ */ React.createElement(import_remix5.Form, {
    "aria-describedby": (actionData == null ? void 0 : actionData.formError) ? "form-error-message" : void 0,
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: searchParams.get("redirectTo") ?? void 0
  }), /* @__PURE__ */ React.createElement("fieldset", {
    "data-hide": user ? "hide" : void 0
  }, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Login or Register?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "loginType",
    value: "login",
    defaultChecked: !user && !((_a = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
  }), " ", "Login"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    defaultChecked: !!user || ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register",
    name: "loginType",
    type: "radio",
    value: "register"
  }), " ", "Register")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "username-input"
  }, "Username"), /* @__PURE__ */ React.createElement("input", {
    type: "text",
    "aria-describedby": ((_d = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _d.username) ? "username-error" : void 0,
    "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
    defaultValue: (_f = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _f.username,
    id: "username-input",
    name: "username"
  }), ((_g = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _g.username) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "username-error"
  }, (_h = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _h.username) : null), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password-input"
  }, "Password"), /* @__PURE__ */ React.createElement("input", {
    "aria-describedby": ((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password) ? "passsword-error" : void 0,
    "aria-invalid": Boolean((_j = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _j.password),
    defaultValue: (_k = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _k.password,
    id: "password-input",
    name: "password",
    type: "password"
  }), ((_l = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _l.password) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert",
    id: "password-error"
  }, (_m = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _m.password) : null), /* @__PURE__ */ React.createElement("div", {
    id: "form-error-message"
  }, (actionData == null ? void 0 : actionData.formError) ? /* @__PURE__ */ React.createElement("p", {
    className: "form-validation-error",
    role: "alert"
  }, actionData.formError) : null), user ? /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Admin or Manager?"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "permissions",
    value: "admin"
  }), " Admin"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    defaultChecked: true,
    name: "permissions",
    type: "radio",
    value: "manage"
  }), " ", "Manage")) : null, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "button"
  }, "Submit"))), /* @__PURE__ */ React.createElement("div", {
    className: "links"
  }, /* @__PURE__ */ React.createElement("ul", null, /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ React.createElement("li", null, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: "/exotics"
  }, "Exotics"))))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive.tsx
var executive_exports = {};
__export(executive_exports, {
  default: () => Executive,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/styles/exec.css
var exec_default = "/_static/build/_assets/exec-E24GAYHB.css";

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: exec_default }];
};
var loader2 = async ({ request }) => {
  const user = await getUserBySession(request);
  return { user };
};
function Executive() {
  const { user } = (0, import_remix7.useLoaderData)();
  const { pathname } = (0, import_remix7.useLocation)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default, {
    showAdminLink: false,
    user
  }), /* @__PURE__ */ React.createElement("div", {
    className: "exec space"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "col"
  }, /* @__PURE__ */ React.createElement("h1", null, "Executive"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "data-active": pathname === "/executive",
    to: "/executive"
  }, "Profile"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "data-active": pathname === "/executive/exotics",
    to: "exotics"
  }, "Exotics"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "data-active": pathname === "/executive/media",
    to: "media"
  }, "Images")), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/exotics.tsx
var exotics_exports = {};
__export(exotics_exports, {
  action: () => action2,
  default: () => Executive2,
  links: () => links4,
  loader: () => loader3
});
init_react();
var import_remix8 = __toESM(require_remix());

// app/exotics.ts
init_react();
var createCart = async (cart) => {
  const carts = await getCarts();
  carts.current.push(cart);
  const minifiedCarts = JSON.stringify(carts);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "exotics/thc/cart.json" /* Cart */,
    Body: minifiedCarts
  }).promise().catch((err) => console.log(err));
};
var createEdible = async (edible) => {
  const edibles = await getEdibles();
  edibles.current.push(edible);
  const minifiedEdibles = JSON.stringify(edibles);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "exotics/thc/edible.json" /* Edible */,
    Body: minifiedEdibles
  }).promise().catch((err) => console.log(err));
};
var createFlower = async (flower) => {
  const flowers = await getFlowers();
  flowers.current.push(flower);
  const minifiedFlowers = JSON.stringify(flowers);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "exotics/thc/flower.json" /* Flower */,
    Body: minifiedFlowers
  }).promise();
};
var createPreRoll = async (preRoll) => {
  const preRolls = await getPreRolls();
  preRolls.current.push(preRoll);
  const minifiedPreRolls = JSON.stringify(preRolls);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "exotics/thc/pre-roll.json" /* PreRoll */,
    Body: minifiedPreRolls
  }).promise().catch((err) => console.log(err));
};
var createWax = async (wax) => {
  const waxes = await getWaxes();
  waxes.current.push(wax);
  const minifiedWaxes = JSON.stringify(waxes);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "exotics/thc/wax.json" /* Wax */,
    Body: minifiedWaxes
  }).promise().catch((err) => console.log(err));
};
var getCarts = () => getFile("exotics/thc/cart.json" /* Cart */);
var getEdibles = () => getFile("exotics/thc/edible.json" /* Edible */);
var getFlowers = () => getFile("exotics/thc/flower.json" /* Flower */);
var getPreRolls = () => getFile("exotics/thc/pre-roll.json" /* PreRoll */);
var getWaxes = () => getFile("exotics/thc/wax.json" /* Wax */);
var deleteCurrentCart = (index) => deleteCurrentIndex("exotics/thc/cart.json" /* Cart */, index);
var deleteCurrentEdible = (index) => deleteCurrentIndex("exotics/thc/edible.json" /* Edible */, index);
var deleteCurrentFlower = (index) => deleteCurrentIndex("exotics/thc/flower.json" /* Flower */, index);
var deleteCurrentPreRoll = (index) => deleteCurrentIndex("exotics/thc/pre-roll.json" /* PreRoll */, index);
var deleteCurrentWax = (index) => deleteCurrentIndex("exotics/thc/wax.json" /* Wax */, index);

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/exotics.tsx
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const cartSelected = formData.get("cart");
  const edibleSelected = formData.get("edible");
  const flowerSelected = formData.get("flower");
  const preRollSelected = formData.get("preRoll");
  const waxSelected = formData.get("wax");
  if (cartSelected) {
    return await deleteCurrentCart(+cartSelected);
  }
  if (edibleSelected) {
    return await deleteCurrentEdible(+edibleSelected);
  }
  if (flowerSelected) {
    return await deleteCurrentFlower(+flowerSelected);
  }
  if (preRollSelected) {
    return await deleteCurrentPreRoll(+preRollSelected);
  }
  if (waxSelected) {
    return await deleteCurrentWax(+waxSelected);
  }
  return null;
};
var loader3 = async () => {
  const [carts, edibles, flowers, preRolls, waxes] = await Promise.all([
    getCarts(),
    getEdibles(),
    getFlowers(),
    getPreRolls(),
    getWaxes()
  ]);
  return { carts, edibles, flowers, preRolls, waxes };
};
var links4 = () => {
  return [{ rel: "stylesheet", href: exec_default }];
};
function Executive2() {
  const { carts, edibles, flowers, preRolls, waxes } = (0, import_remix8.useLoaderData)();
  const transition = (0, import_remix8.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "row space wrap "
  }, /* @__PURE__ */ React.createElement("section", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter spaceBetween"
  }, /* @__PURE__ */ React.createElement("h2", null, "Flowers"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "button",
    to: "/executive/new/flower"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, flowers.current.map((flower, index) => /* @__PURE__ */ React.createElement("li", {
    key: `${flower.name}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    name: "flower",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "flower",
    value: index
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row spaceBetween alignCenter space"
  }, /* @__PURE__ */ React.createElement("span", null, flower.name), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, "Delete"))))))), /* @__PURE__ */ React.createElement("section", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter spaceBetween"
  }, /* @__PURE__ */ React.createElement("h2", null, "Carts"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "button",
    to: "/executive/new/cart"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, carts.current.map((cart, index) => /* @__PURE__ */ React.createElement("li", {
    key: `${cart.name}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    name: "cart",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "cart",
    value: index
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row spaceBetween alignCenter space"
  }, /* @__PURE__ */ React.createElement("span", null, cart.name), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, "Delete"))))))), /* @__PURE__ */ React.createElement("section", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter spaceBetween"
  }, /* @__PURE__ */ React.createElement("h2", null, "Pre Rolls"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "button",
    to: "/executive/new/pre-roll"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, preRolls.current.map((preRoll, index) => /* @__PURE__ */ React.createElement("li", {
    key: `${preRoll.name}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    name: "preRoll",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "preRoll",
    value: index
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row spaceBetween alignCenter space"
  }, /* @__PURE__ */ React.createElement("span", null, preRoll.name), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, "Delete"))))))), /* @__PURE__ */ React.createElement("section", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter spaceBetween"
  }, /* @__PURE__ */ React.createElement("h2", null, "Waxes"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "button",
    to: "/executive/new/wax"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, waxes.current.map((wax, index) => /* @__PURE__ */ React.createElement("li", {
    key: `${wax.name}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    name: "wax",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "wax",
    value: index
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row spaceBetween alignCenter space"
  }, /* @__PURE__ */ React.createElement("span", null, wax.name), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, "Delete"))))))), /* @__PURE__ */ React.createElement("section", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter spaceBetween"
  }, /* @__PURE__ */ React.createElement("h2", null, "Edibles"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "button",
    to: "/executive/new/edible"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, edibles.current.map((edible, index) => /* @__PURE__ */ React.createElement("li", {
    key: `${edible.name}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    name: "edible",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "edible",
    value: index
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row spaceBetween alignCenter space"
  }, /* @__PURE__ */ React.createElement("span", null, edible.name), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit"
  }, "Delete"))))))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/index.tsx
var executive_exports2 = {};
__export(executive_exports2, {
  action: () => action3,
  default: () => ExecutiveIndex,
  loader: () => loader4
});
init_react();
var import_remix9 = __toESM(require_remix());
var import_remix10 = __toESM(require_remix());

// app/profile.ts
init_react();
var import_date_fns = require("date-fns");
var updateProfile = async (profile) => {
  const minifiedProfile = JSON.stringify(profile);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "bayou-exotics.json",
    Body: minifiedProfile
  }).promise();
};
var getProfile = async () => {
  const executive = await aws_exports_default.getObject({
    Bucket: "bayou-exotics",
    Key: "bayou-exotics.json"
  }).promise().catch((error) => {
    console.log(`Error fetching assets path", ${error.message}`);
  });
  if (!executive || !executive.Body) {
    throw new Error("bayou-exotics.json has no Body");
  }
  const data = executive.Body.toString();
  const profile = JSON.parse(data);
  profile.datesClosed = profile.datesClosed.filter(([, date2]) => !(0, import_date_fns.isPast)(new Date(date2)));
  return profile;
};

// app/utils/formatDate.ts
init_react();
var import_date_fns2 = require("date-fns");
var dateFormat = "M/d/yyyy 'at' h:mm aa";
function formatDate(date) {
  return (0, import_date_fns2.format)(date, dateFormat);
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/index.tsx
var action3 = async ({ request }) => {
  const formData = await request.formData();
  const profile = await getProfile();
  const instagramUrl = formData.get("insta");
  const name = formData.get("name");
  const date = formData.get("date");
  if (typeof date === "string" && !isNaN(+date)) {
    profile.datesClosed.splice(+date, 1);
  }
  if (instagramUrl === "string" && typeof name === "string") {
    profile.instagramUrl = instagramUrl;
    profile.name = name;
  }
  await updateProfile(profile);
  return (0, import_remix10.redirect)("/executive");
};
var loader4 = async ({ request }) => {
  const profile = await getProfile();
  return { profile };
};
function ExecutiveIndex() {
  const {
    profile: { datesClosed, instagramUrl, name }
  } = (0, import_remix10.useLoaderData)();
  const transition = (0, import_remix10.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: " row space wrap"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Update Profile"), /* @__PURE__ */ React.createElement(import_remix10.Form, {
    className: "column space",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Instagram URL:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "insta",
    defaultValue: instagramUrl
  })), /* @__PURE__ */ React.createElement("label", null, "Company Name:", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name",
    defaultValue: name
  })), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Updating..." : "Update"))), /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter spaceBetween"
  }, /* @__PURE__ */ React.createElement("h2", null, "Dates Closed"), /* @__PURE__ */ React.createElement(import_remix9.Link, {
    className: "button",
    to: "/executive/new/close-date"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, datesClosed.map((date, index) => {
    const closeTime = new Date(date[0]);
    const openTime = new Date(date[1]);
    return /* @__PURE__ */ React.createElement("li", {
      key: `${date[0]}-${index}`
    }, /* @__PURE__ */ React.createElement(import_remix10.Form, {
      name: "date",
      method: "post"
    }, /* @__PURE__ */ React.createElement("input", {
      type: "hidden",
      name: "date",
      value: index
    }), /* @__PURE__ */ React.createElement("div", {
      className: "row spaceBetween alignCenter space"
    }, /* @__PURE__ */ React.createElement("span", null, formatDate(closeTime), "-", formatDate(openTime)), /* @__PURE__ */ React.createElement("button", {
      className: "button",
      type: "submit"
    }, "Delete"))));
  }))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/media.tsx
var media_exports = {};
__export(media_exports, {
  action: () => action4,
  default: () => Executive3,
  links: () => links5,
  loader: () => loader5
});
init_react();
var import_remix11 = __toESM(require_remix());
var import_tiny_invariant = __toESM(require("tiny-invariant"));

// app/assets.ts
init_react();
var addAsset = async (filename, base64data) => {
  return aws_exports_default.upload({
    Bucket: "bayou-exotics/assets",
    Key: encodeURI(filename),
    Body: base64data
  }).promise().then((data) => data);
};
var deleteAsset = async (filename) => {
  return aws_exports_default.deleteObject({
    Bucket: "bayou-exotics",
    Key: filename
  }).promise().then((data) => data);
};
var getAssets = async () => {
  const assets = await aws_exports_default.listObjectsV2({
    Bucket: "bayou-exotics",
    Prefix: "assets/",
    StartAfter: "assets/"
  }).promise().catch((error) => {
    console.log(`Error fetching assets path", ${error.message}`);
  });
  const assetKeys = [];
  if (!assets || !assets.Contents) {
    return assetKeys;
  }
  for (const asset of assets.Contents) {
    if (asset.Key) {
      assetKeys.push(asset.Key);
    }
  }
  return assetKeys;
};

// app/utils/getAssetUrl.ts
init_react();
var BASE_URL = "https://bayou-exotics.s3.us-east-2.amazonaws.com/";
function getAssetUrl(path) {
  return `${BASE_URL}${path}`;
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/media.tsx
var action4 = async ({ request }) => {
  const formData = await request.formData();
  const asset = formData.get("asset");
  if (!asset) {
    return;
  }
  (0, import_tiny_invariant.default)(typeof asset === "string");
  return await deleteAsset(asset);
};
var loader5 = async () => {
  const data = { assets: await getAssets() };
  return data;
};
var links5 = () => {
  return [{ rel: "stylesheet", href: exec_default }];
};
function Executive3() {
  const { assets } = (0, import_remix11.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "col media"
  }, /* @__PURE__ */ React.createElement("section", {
    className: ""
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row space-2"
  }, /* @__PURE__ */ React.createElement("h2", null, "Images"), /* @__PURE__ */ React.createElement(import_remix11.Link, {
    className: "button",
    to: "/executive/new/media"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "row space wrap"
  }, assets.map((asset, index) => /* @__PURE__ */ React.createElement("li", {
    className: "content relative",
    key: `${asset}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix11.Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "asset",
    value: asset
  }), /* @__PURE__ */ React.createElement("div", {
    className: ""
  }, /* @__PURE__ */ React.createElement("img", {
    alt: "",
    src: getAssetUrl(asset),
    width: "100%"
  }), /* @__PURE__ */ React.createElement("button", {
    className: "button absolute asset-delete-position",
    type: "submit"
  }, "Delete"))))))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new.tsx
var new_exports = {};
__export(new_exports, {
  default: () => NewFlower
});
init_react();
var import_remix12 = __toESM(require_remix());
function NewFlower() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement(import_remix12.Outlet, null));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/close-date.tsx
var close_date_exports = {};
__export(close_date_exports, {
  action: () => action5,
  default: () => NewCloseDate
});
init_react();
var import_date_fns3 = require("date-fns");
var import_remix13 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));
var action5 = async ({ request }) => {
  const formData = await request.formData();
  const currentProfile = await getProfile();
  const close = formData.get("close");
  const open = formData.get("open");
  (0, import_tiny_invariant2.default)(typeof close === "string");
  (0, import_tiny_invariant2.default)(typeof open === "string");
  const closing = [close, open];
  const datesClosed = currentProfile.datesClosed.filter(([date1, date2]) => !(0, import_date_fns3.isPast)(new Date(date1)) && !(0, import_date_fns3.isPast)(new Date(date2)));
  datesClosed.push(closing);
  await updateProfile(__spreadProps(__spreadValues({}, currentProfile), { datesClosed }));
  return (0, import_remix13.redirect)("/executive");
};
function NewCloseDate() {
  const transition = (0, import_remix13.useTransition)();
  const date = new Date();
  return /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Add Date Closed"), /* @__PURE__ */ React.createElement(import_remix13.Form, {
    className: "col space",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Time Closing:", /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    min: date.toLocaleString(),
    name: "close"
  })), /* @__PURE__ */ React.createElement("label", null, "Time Re-opening:", /* @__PURE__ */ React.createElement("input", {
    type: "datetime-local",
    min: date.toLocaleString(),
    name: "open"
  })), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Updating..." : "Add Dates Closing")));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/pre-roll.tsx
var pre_roll_exports = {};
__export(pre_roll_exports, {
  action: () => action6,
  default: () => NewPreRoll,
  loader: () => loader6
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/utils/getPreRollPrice.ts
init_react();

// app/utils/getFormPrice.ts
init_react();
function getFormPrice(value) {
  return !!value && !isNaN(+value) && +value > 0 ? +value : void 0;
}

// app/utils/getPreRollPrice.ts
function getPreRollPrice(formData) {
  const errors = {};
  const priceData = {
    1: 0,
    5: 0,
    10: 0
  };
  const one = getFormPrice(formData.get("1"));
  const five = getFormPrice(formData.get("5"));
  const ten = getFormPrice(formData.get("10"));
  if (!one) {
    errors["1"] = true;
  } else {
    priceData["1"] = one;
  }
  if (!five) {
    errors["5"] = true;
  } else {
    priceData["5"] = five;
  }
  if (!ten) {
    errors["10"] = true;
  } else {
    priceData["10"] = ten;
  }
  return {
    errors: Object.keys(errors).length ? errors : void 0,
    price: Object.keys(errors).length ? void 0 : priceData
  };
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/pre-roll.tsx
var availablePreRollQuantities = ["1", "5", "10"];
var action6 = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");
  const flavorFormData = formData.get("flavors");
  const name = formData.get("name");
  const amount = formData.get("amount");
  const description = !descriptionFormData ? void 0 : descriptionFormData;
  const flavors = !flavorFormData ? void 0 : flavorFormData;
  const flowerType = formData.get("type");
  const wrap = formData.get("wrap");
  const image = formData.get("image");
  const { price, errors: priceErrors } = getPreRollPrice(formData);
  const errors = priceErrors ? __spreadValues({}, priceErrors) : {};
  if (!name) {
    errors.name = true;
  }
  if (!amount) {
    errors.amount = true;
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant3.default)(typeof amount === "string");
  (0, import_tiny_invariant3.default)(typeof flowerType === "string");
  (0, import_tiny_invariant3.default)(typeof image === "string");
  (0, import_tiny_invariant3.default)(typeof name === "string");
  (0, import_tiny_invariant3.default)(typeof price !== "undefined");
  (0, import_tiny_invariant3.default)(typeof wrap === "string");
  const preRoll = {
    amount,
    class: "thc",
    description,
    flavors: flavors ? flavors.split(",") : [],
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType,
    wrap
  };
  await createPreRoll(preRoll);
  return (0, import_remix14.redirect)("/executive/exotics");
};
var loader6 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewPreRoll() {
  const errors = (0, import_remix14.useActionData)();
  const transition = (0, import_remix14.useTransition)();
  const { assets } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Pre Roll"), /* @__PURE__ */ React.createElement(import_remix14.Form, {
    className: "col space-2",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Name: ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "Name is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  })), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Indica, Hybrid, or Both"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "indica",
    defaultChecked: true
  }), " ", "Indica"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "sativa"
  }), " Sativa"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "hybrid"
  }), " Hybrid")), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Wrap"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "wrap",
    value: "joint",
    defaultChecked: true
  }), " ", "Joint"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "wrap",
    value: "blunt"
  }), " Blunt")), /* @__PURE__ */ React.createElement("label", null, "Amount (g): ", (errors == null ? void 0 : errors.amount) ? /* @__PURE__ */ React.createElement("em", null, "Amount is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "amount",
    step: ".01"
  })), /* @__PURE__ */ React.createElement("label", null, "Image:", " ", /* @__PURE__ */ React.createElement("select", {
    name: "image"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: true
  }, "None"), assets.map((asset) => /* @__PURE__ */ React.createElement("option", {
    key: asset,
    value: asset
  }, asset)))), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description"
  }, "Description (optional):"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 2,
    name: "description"
  })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "flavors"
  }, "Flavors (optional):", " ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "At least 1 flavor is required") : null, " "), /* @__PURE__ */ React.createElement("textarea", {
    id: "flavors",
    rows: 2,
    name: "flavors",
    placeholder: "flavor 1, flavor 2"
  })), /* @__PURE__ */ React.createElement("h3", null, "Prices "), /* @__PURE__ */ React.createElement("div", {
    className: "prices col space"
  }, availablePreRollQuantities.map((quantity) => /* @__PURE__ */ React.createElement("label", {
    key: quantity
  }, /* @__PURE__ */ React.createElement("span", null, quantity, (errors == null ? void 0 : errors[quantity]) ? /* @__PURE__ */ React.createElement("em", null, "*") : null, " :", " "), "$", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${quantity}`
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "row space end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    disabled: transition.submission ? true : void 0,
    type: "reset"
  }, "Reset"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Creating..." : "Create Pre Roll")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/edible.tsx
var edible_exports = {};
__export(edible_exports, {
  action: () => action7,
  default: () => NewCart,
  loader: () => loader7
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));

// app/utils/getPriceForTwo.ts
init_react();
function getPriceForTwo(formData) {
  const errors = {};
  const priceData = {
    1: 0,
    2: 0
  };
  const one = getFormPrice(formData.get("1"));
  const two = getFormPrice(formData.get("2"));
  if (!one) {
    errors["1"] = true;
  } else {
    priceData["1"] = one;
  }
  if (!two) {
    errors["2"] = true;
  } else {
    priceData["2"] = two;
  }
  return {
    errors: Object.keys(errors).length ? errors : void 0,
    price: Object.keys(errors).length ? void 0 : priceData
  };
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/edible.tsx
var availableCartQuantities = ["1", "2"];
var action7 = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");
  const name = formData.get("name");
  const amount = formData.get("amount");
  const description = !descriptionFormData ? void 0 : descriptionFormData;
  const flavors = formData.get("flavors");
  const type = formData.get("type");
  const image = formData.get("image");
  const { price, errors: priceErrors } = getPriceForTwo(formData);
  const errors = priceErrors ? __spreadValues({}, priceErrors) : {};
  if (!name) {
    errors.name = true;
  }
  if (!amount) {
    errors.amount = true;
  }
  if (!flavors) {
    errors.flavors === true;
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant4.default)(typeof amount === "string");
  (0, import_tiny_invariant4.default)(typeof name === "string");
  (0, import_tiny_invariant4.default)(typeof flavors === "string");
  (0, import_tiny_invariant4.default)(typeof type === "string");
  (0, import_tiny_invariant4.default)(typeof image === "string");
  (0, import_tiny_invariant4.default)(typeof price !== "undefined");
  const edible = {
    amount,
    class: "thc",
    description,
    flavors: flavors.split(",").map((flavor) => flavor.trim()),
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type
  };
  await createEdible(edible);
  return (0, import_remix15.redirect)("/executive/exotics");
};
var loader7 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewCart() {
  const errors = (0, import_remix15.useActionData)();
  const transition = (0, import_remix15.useTransition)();
  const { assets } = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Edible"), /* @__PURE__ */ React.createElement(import_remix15.Form, {
    className: "col space-2",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Name: ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "Name is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  })), /* @__PURE__ */ React.createElement("label", null, "Type: ", (errors == null ? void 0 : errors.type) ? /* @__PURE__ */ React.createElement("em", null, "Type is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "type"
  })), /* @__PURE__ */ React.createElement("label", null, "Amount (mg): ", (errors == null ? void 0 : errors.amount) ? /* @__PURE__ */ React.createElement("em", null, "Amount is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: "amount",
    step: ".01"
  })), /* @__PURE__ */ React.createElement("label", null, "Image:", " ", /* @__PURE__ */ React.createElement("select", {
    name: "image"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: true
  }, "None"), assets.map((asset) => /* @__PURE__ */ React.createElement("option", {
    key: asset,
    value: asset
  }, asset)))), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description"
  }, "Description (optional):"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 2,
    name: "description"
  })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "flavors"
  }, "Flavors:", " ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "At least 1 flavor is required") : null, " "), /* @__PURE__ */ React.createElement("textarea", {
    id: "flavors",
    rows: 2,
    name: "flavors",
    placeholder: "flavor 1, flavor 2"
  })), /* @__PURE__ */ React.createElement("h3", null, "Prices "), /* @__PURE__ */ React.createElement("div", {
    className: "prices col space"
  }, availableCartQuantities.map((quantity) => /* @__PURE__ */ React.createElement("label", {
    key: quantity
  }, /* @__PURE__ */ React.createElement("span", null, quantity, (errors == null ? void 0 : errors[quantity]) ? /* @__PURE__ */ React.createElement("em", null, "*") : null, " :", " "), "$", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${quantity}`
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "row space end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    disabled: transition.submission ? true : void 0,
    type: "reset"
  }, "Reset"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Creating..." : "Create Edible")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/flower.tsx
var flower_exports = {};
__export(flower_exports, {
  action: () => action8,
  default: () => NewFlower2,
  loader: () => loader8
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));

// app/utils/getFlowerPrice.ts
init_react();
function getFlowerPrice(formData) {
  const errors = {};
  const priceData = {
    1: 0,
    2: 0,
    3.5: 0,
    7: 0,
    14: 0,
    28: 0
  };
  const one = getFormPrice(formData.get("1"));
  const two = getFormPrice(formData.get("2"));
  const eighth = getFormPrice(formData.get("3.5"));
  const quarter = getFormPrice(formData.get("7"));
  const half = getFormPrice(formData.get("14"));
  const zone = getFormPrice(formData.get("28"));
  if (!one) {
    errors["1"] = true;
  } else {
    priceData["1"] = one;
  }
  if (!two) {
    errors["2"] = true;
  } else {
    priceData["2"] = two;
  }
  if (!eighth) {
    errors["3.5"] = true;
  } else {
    priceData["3.5"] = eighth;
  }
  if (!quarter) {
    errors["7"] = true;
  } else {
    priceData["7"] = quarter;
  }
  if (!half) {
    errors["14"] = true;
  } else {
    priceData["14"] = half;
  }
  if (!zone) {
    errors["28"] = true;
  } else {
    priceData["28"] = zone;
  }
  return {
    errors: Object.keys(errors).length ? errors : void 0,
    price: Object.keys(errors).length ? void 0 : priceData
  };
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/flower.tsx
var availableFlowerQuantities = ["1", "2", "3.5", "7", "14", "28"];
var action8 = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");
  const name = formData.get("name");
  const description = !descriptionFormData ? void 0 : descriptionFormData;
  const flowerType = formData.get("type");
  const image = formData.get("image");
  const { price, errors: priceErrors } = getFlowerPrice(formData);
  const errors = priceErrors ? __spreadValues({}, priceErrors) : {};
  if (!name) {
    errors.name = true;
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant5.default)(typeof name === "string");
  (0, import_tiny_invariant5.default)(typeof flowerType === "string");
  (0, import_tiny_invariant5.default)(typeof image === "string");
  (0, import_tiny_invariant5.default)(typeof price !== "undefined");
  const flower = {
    class: "thc",
    description,
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType
  };
  await createFlower(flower);
  return (0, import_remix16.redirect)("/executive/exotics");
};
var loader8 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewFlower2() {
  const errors = (0, import_remix16.useActionData)();
  const transition = (0, import_remix16.useTransition)();
  const { assets } = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Flower"), /* @__PURE__ */ React.createElement(import_remix16.Form, {
    className: "col space-2",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Name: ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "Name is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  })), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Indica, Hybrid, or Both"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "indica",
    defaultChecked: true
  }), " ", "Indica"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "sativa"
  }), " Sativa"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "hybrid"
  }), " Hybrid")), /* @__PURE__ */ React.createElement("label", null, "Image:", " ", /* @__PURE__ */ React.createElement("select", {
    name: "image"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: true
  }, "None"), assets.map((asset) => /* @__PURE__ */ React.createElement("option", {
    key: asset,
    value: asset
  }, asset)))), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description"
  }, "Description (optional):"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 2,
    name: "description"
  })), /* @__PURE__ */ React.createElement("h3", null, "Prices "), /* @__PURE__ */ React.createElement("div", {
    className: "prices col space"
  }, availableFlowerQuantities.map((quantity) => /* @__PURE__ */ React.createElement("label", {
    key: quantity
  }, /* @__PURE__ */ React.createElement("span", null, quantity, (errors == null ? void 0 : errors[quantity]) ? /* @__PURE__ */ React.createElement("em", null, "*") : null, " :", " "), "$", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${quantity}`
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "row space end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    disabled: transition.submission ? true : void 0,
    type: "reset"
  }, "Reset"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Creating..." : "Create Flower")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/media.tsx
var media_exports2 = {};
__export(media_exports2, {
  action: () => action9,
  default: () => NewFlower3
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_remix18 = __toESM(require_remix());
var action9 = async ({ request }) => {
  const uploadHandler = async ({
    name,
    stream,
    filename
  }) => {
    if (name !== "image") {
      stream.resume();
      return;
    }
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);
    const data = addAsset(filename, buffer);
    return JSON.stringify({ data });
  };
  await (0, import_remix18.unstable_parseMultipartFormData)(request, uploadHandler);
  return (0, import_remix17.redirect)("/executive/media");
};
function NewFlower3() {
  const transition = (0, import_remix17.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Add Image"), /* @__PURE__ */ React.createElement(import_remix17.Form, {
    className: "col space-2",
    method: "post",
    encType: "multipart/form-data"
  }, /* @__PURE__ */ React.createElement("label", null, "Image: ", /* @__PURE__ */ React.createElement("input", {
    name: "image",
    type: "file"
  })), /* @__PURE__ */ React.createElement("p", {
    className: "row space end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    disabled: transition.submission ? true : void 0,
    type: "reset"
  }, "Reset"), /* @__PURE__ */ React.createElement("button", {
    disabled: transition.submission ? true : void 0,
    className: "button",
    value: "create"
  }, transition.submission ? "Adding..." : "Add Image")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action10,
  default: () => NewCart2,
  loader: () => loader9
});
init_react();
var import_remix19 = __toESM(require_remix());
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
var availableCartQuantities2 = ["1", "2"];
var action10 = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");
  const name = formData.get("name");
  const description = !descriptionFormData ? void 0 : descriptionFormData;
  const disposable = formData.get("disposable");
  const flavors = formData.get("flavors");
  const flowerType = formData.get("type");
  const image = formData.get("image");
  const { price, errors: priceErrors } = getPriceForTwo(formData);
  const errors = priceErrors ? __spreadValues({}, priceErrors) : {};
  if (!name) {
    errors.name = true;
  }
  if (!flavors) {
    errors.flavors === true;
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant6.default)(typeof name === "string");
  (0, import_tiny_invariant6.default)(typeof flavors === "string");
  (0, import_tiny_invariant6.default)(typeof flowerType === "string");
  (0, import_tiny_invariant6.default)(typeof image === "string");
  (0, import_tiny_invariant6.default)(typeof price !== "undefined");
  const cart = {
    class: "thc",
    description,
    disposable: Boolean(disposable),
    flavors: flavors.split(",").map((flavor) => flavor.trim()),
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType
  };
  await createCart(cart);
  return (0, import_remix19.redirect)("/executive/exotics");
};
var loader9 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewCart2() {
  const errors = (0, import_remix19.useActionData)();
  const transition = (0, import_remix19.useTransition)();
  const { assets } = (0, import_remix19.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Cart"), /* @__PURE__ */ React.createElement(import_remix19.Form, {
    className: "col space-2",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Name: ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "Name is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  })), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Indica, Hybrid, or Both"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "indica",
    defaultChecked: true
  }), " ", "Indica"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "sativa"
  }), " Sativa"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "hybrid"
  }), " Hybrid")), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Disposable"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "disposable",
    value: "1",
    defaultChecked: true
  }), " ", "Disposable"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "disposable",
    value: ""
  }), " Non-disposable")), /* @__PURE__ */ React.createElement("label", null, "Image:", " ", /* @__PURE__ */ React.createElement("select", {
    name: "image"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: true
  }, "None"), assets.map((asset) => /* @__PURE__ */ React.createElement("option", {
    key: asset,
    value: asset
  }, asset)))), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description"
  }, "Description (optional):"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 2,
    name: "description"
  })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "flavors"
  }, "Flavors:", " ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "At least 1 flavor is required") : null, " "), /* @__PURE__ */ React.createElement("textarea", {
    id: "flavors",
    rows: 2,
    name: "flavors",
    placeholder: "flavor 1, flavor 2"
  })), /* @__PURE__ */ React.createElement("h3", null, "Prices "), /* @__PURE__ */ React.createElement("div", {
    className: "prices col space"
  }, availableCartQuantities2.map((quantity) => /* @__PURE__ */ React.createElement("label", {
    key: quantity
  }, /* @__PURE__ */ React.createElement("span", null, quantity, (errors == null ? void 0 : errors[quantity]) ? /* @__PURE__ */ React.createElement("em", null, "*") : null, " :", " "), "$", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${quantity}`
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "row space end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    disabled: transition.submission ? true : void 0,
    type: "reset"
  }, "Reset"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Creating..." : "Create Cart")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/wax.tsx
var wax_exports = {};
__export(wax_exports, {
  action: () => action11,
  default: () => NewWax,
  loader: () => loader10
});
init_react();
var import_remix20 = __toESM(require_remix());
var import_tiny_invariant7 = __toESM(require("tiny-invariant"));
var availableWaxQuantities = ["1", "2", "3.5", "7", "14", "28"];
var action11 = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");
  const name = formData.get("name");
  const description = !descriptionFormData ? void 0 : descriptionFormData;
  const type = formData.get("type");
  const image = formData.get("image");
  const { price, errors: priceErrors } = getFlowerPrice(formData);
  const errors = priceErrors ? __spreadValues({}, priceErrors) : {};
  if (!name) {
    errors.name = true;
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  (0, import_tiny_invariant7.default)(typeof name === "string");
  (0, import_tiny_invariant7.default)(typeof type === "string");
  (0, import_tiny_invariant7.default)(typeof image === "string");
  (0, import_tiny_invariant7.default)(typeof price !== "undefined");
  const wax = {
    class: "thc",
    description,
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type
  };
  await createWax(wax);
  return (0, import_remix20.redirect)("/executive/exotics");
};
var loader10 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewWax() {
  const errors = (0, import_remix20.useActionData)();
  const transition = (0, import_remix20.useTransition)();
  const { assets } = (0, import_remix20.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Wax"), /* @__PURE__ */ React.createElement(import_remix20.Form, {
    className: "col space-2",
    method: "post"
  }, /* @__PURE__ */ React.createElement("label", null, "Name: ", (errors == null ? void 0 : errors.name) ? /* @__PURE__ */ React.createElement("em", null, "Name is required") : null, " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "name"
  })), /* @__PURE__ */ React.createElement("fieldset", null, /* @__PURE__ */ React.createElement("legend", {
    className: "sr-only"
  }, "Badder, Crumble, or Shatter"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "crumble",
    defaultChecked: true
  }), " ", "Crumble"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "badder"
  }), " Badder"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "diamond"
  }), " Diamond"), /* @__PURE__ */ React.createElement("label", null, /* @__PURE__ */ React.createElement("input", {
    type: "radio",
    name: "type",
    value: "shatter"
  }), " Shatter")), /* @__PURE__ */ React.createElement("label", null, "Image:", " ", /* @__PURE__ */ React.createElement("select", {
    name: "image"
  }, /* @__PURE__ */ React.createElement("option", {
    hidden: true
  }, "None"), assets.map((asset) => /* @__PURE__ */ React.createElement("option", {
    key: asset,
    value: asset
  }, asset)))), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "description"
  }, "Description (optional):"), /* @__PURE__ */ React.createElement("textarea", {
    id: "description",
    rows: 2,
    name: "description"
  })), /* @__PURE__ */ React.createElement("h3", null, "Prices "), /* @__PURE__ */ React.createElement("div", {
    className: "prices col space"
  }, availableWaxQuantities.map((quantity) => /* @__PURE__ */ React.createElement("label", {
    key: quantity
  }, /* @__PURE__ */ React.createElement("span", null, quantity, (errors == null ? void 0 : errors[quantity]) ? /* @__PURE__ */ React.createElement("em", null, "*") : null, " :", " "), "$", /* @__PURE__ */ React.createElement("input", {
    type: "number",
    name: `${quantity}`
  })))), /* @__PURE__ */ React.createElement("p", {
    className: "row space end"
  }, /* @__PURE__ */ React.createElement("button", {
    className: "button",
    disabled: transition.submission ? true : void 0,
    type: "reset"
  }, "Reset"), /* @__PURE__ */ React.createElement("button", {
    className: "button",
    type: "submit",
    value: "create"
  }, transition.submission ? "Creating..." : "Create Wax")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/exotics.tsx
var exotics_exports2 = {};
__export(exotics_exports2, {
  default: () => Exotics,
  links: () => links6,
  loader: () => loader11
});
init_react();
var import_remix21 = __toESM(require_remix());

// app/components/Footer/index.tsx
init_react();
var import_date_fns4 = require("date-fns");
var import_react = require("react");

// app/components/InstagramButton/index.tsx
init_react();

// public/instagram_icon.png
var instagram_icon_default = "/_static/build/_assets/instagram_icon-6RTRMJIZ.png";

// app/components/InstagramButton/index.tsx
var InstagramButton = ({ instagramUrl }) => {
  return /* @__PURE__ */ React.createElement("a", {
    className: "button",
    href: instagramUrl,
    target: "_blank"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row alignCenter space"
  }, /* @__PURE__ */ React.createElement("img", {
    src: instagram_icon_default,
    alt: "instagram logo",
    className: "insta-logo"
  }), " ", /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    role: "image",
    version: "1.1",
    width: "100",
    viewBox: "-24 -24 860 300"
  }, /* @__PURE__ */ React.createElement("path", {
    fill: "#262626",
    d: "m 64.760239,49.107948 c -16.2103,6.7854 -34.030801,25.955 -39.659101,50.016996 -7.1278,30.487496 22.534301,43.379696 24.967201,39.152496 2.8635,-4.967 -5.3151,-6.6467 -6.9986,-22.465 -2.1758,-20.430692 7.3224,-43.259692 19.2762,-53.276392 2.222,-1.861 2.1163,0.7292 2.1163,5.5203 0,8.5676 -0.4734,85.479502 -0.4734,101.531102 0,21.7198 -0.8971,28.5785 -2.5083,35.3558 -1.6325,6.8681 -4.257,11.5088 -2.2683,13.2964 2.2219,1.9996 11.7086,-2.7567 17.2006,-10.4218 6.5857,-9.1931 8.891,-20.2335 9.3049,-32.2232 0.4999,-14.4532 0.4786,-37.38741 0.4999,-50.46891 0.02,-11.9977 0.2021,-47.129592 -0.2103,-68.249592 -0.1011,-5.1803 -14.4679,-10.6152 -21.2479,-7.7745 M 640.38672,150.75505 c -0.5226,11.2916 -3.0221,20.1175 -6.1242,26.3429 -6.0055,12.052 -18.4671,15.7943 -23.7581,-1.5309 -2.8834,-9.444 -3.0181,-25.2164 -0.9451,-38.39521 2.1102,-13.4255 8.0024,-23.5648 17.7592,-22.6504 9.6235,0.9039 14.128,13.3042 13.0682,36.23311 z m -162.23548,70.0559 c -0.1306,18.7617 -3.0834,35.2118 -9.4155,39.9896 -8.9809,6.7747 -21.0519,1.6929 -18.5524,-11.9977 2.2116,-12.1149 12.6709,-24.4873 27.9933,-39.6044 0,0 0.032,3.4474 -0.025,11.6125 z m -2.4528,-70.1652 c -0.5492,10.2844 -3.2154,20.616 -6.1242,26.4536 -6.0042,12.0519 -18.5564,15.8196 -23.7581,-1.5309 -3.5566,-11.8546 -2.7048,-27.1975 -0.9451,-36.86491 2.2835,-12.543 7.8185,-24.1794 17.7592,-24.1794 9.6648,0 14.4306,10.6033 13.0682,36.12241 z m -93.9833,-0.1573 c -0.5892,10.8922 -2.7141,19.9975 -6.1241,26.6109 -6.1695,11.969 -18.3751,15.7649 -23.7581,-1.5309 -3.8806,-12.4716 -2.5595,-29.47701 -0.9452,-38.66331 2.3956,-13.632 8.3944,-23.2968 17.7593,-22.381 9.6195,0.9398 14.2959,13.3028 13.0681,35.96511 z m 430.70378,12.7226 c -2.3516,0 -3.4247,2.4239 -4.3125,6.504 -3.0794,14.1866 -6.3161,17.3899 -10.49,17.3899 -4.6631,0 -8.853,-7.0246 -9.9301,-21.0866 -0.8465,-11.0572 -0.7105,-31.41391 0.372,-51.66341 0.2212,-4.1605 -0.9265,-8.277 -12.0857,-12.3309 -4.8018,-1.7437 -11.7818,-4.311196 -15.2571,4.0779 -9.8194,23.7007 -13.6614,42.51711 -14.5652,50.16101 -0.047,0.3956 -0.5319,0.4764 -0.6172,-0.4479 -0.5759,-6.1222 -1.8636,-17.24741 -2.0236,-40.62151 -0.031,-4.5605 -0.9971,-8.4424 -6.0308,-11.6205 -3.2661,-2.0622 -13.1842,-5.709496 -16.7555,-1.3704 -3.0941,3.5487 -6.6774,13.0988 -10.4007,24.4193 -3.026,9.2009 -5.1336,15.4251 -5.1336,15.4251 0,0 0.04,-24.8259 0.076,-34.2428 0.016,-3.5526 -2.4209,-4.7364 -3.1554,-4.951 -3.3074,-0.9599 -9.8235,-2.5635 -12.5896,-2.5635 -3.4127,0 -4.2485,1.9076 -4.2485,4.6871 0,0.3639 -0.5386,32.6857 -0.5386,55.28661 0,0.9817 0,2.0528 0.01,3.1906 -1.8876,10.3876 -8.0091,24.4886 -14.6665,24.4886 -6.6654,0 -9.8101,-5.8952 -9.8101,-32.839 0,-15.71831 0.4719,-22.55301 0.7039,-33.92141 0.1346,-6.5481 0.3946,-11.5765 0.3799,-12.7176 -0.049,-3.4993 -6.1001,-5.263 -8.9156,-5.9148 -2.8288,-0.6573 -5.287,-0.9119 -7.2066,-0.8026 -2.7168,0.1533 -4.6391,1.9357 -4.6391,4.3872 0,1.3144 0.015,3.8139 0.015,3.8139 -3.4993,-5.4989 -9.1275,-9.3262 -12.8722,-10.435296 -10.086,-2.995396 -20.6107,-0.3413 -28.5491,10.767296 -6.3095,8.8263 -10.11268,18.823 -11.60978,33.1856 -1.0944,10.50011 -0.7372,21.14791 1.2078,30.15281 -2.3502,10.161 -6.7134,14.3239 -11.4911,14.3239 -6.936,0 -11.9644,-11.3212 -11.3805,-30.9007 0.3852,-12.87821 2.9621,-21.91581 5.7789,-34.99061 1.2011,-5.5736 0.2253,-8.4917 -2.2223,-11.2885 -2.2449,-2.5648 -7.0279,-3.8752 -13.904,-2.2635 -4.8977,1.1491 -11.9003,2.3848 -18.3071,3.334 0,0 0.3866,-1.5424 0.7039,-4.2618 1.6663,-14.261292 -13.8307,-13.104192 -18.7751,-8.549096 -2.9514,2.719496 -4.9604,5.926896 -5.7229,11.693796 -1.2091,9.1516 6.2548,13.4681 6.2548,13.4681 -2.4489,11.2098 -8.4517,25.85361 -14.6492,36.44091 -3.3193,5.6724 -5.8588,9.8757 -9.1369,14.3439 -0.012,-1.6638 -0.021,-3.3274 -0.027,-4.9834 -0.075,-23.56751 0.2386,-42.11591 0.3772,-48.80131 0.1347,-6.548 0.3973,-11.4431 0.3826,-12.5842 -0.037,-2.5595 -1.5317,-3.526 -4.6404,-4.7498 -2.7488,-1.0824 -5.9989,-1.8316 -9.3702,-2.0929 -4.2552,-0.3319 -6.8187,1.925 -6.7521,4.5938 0.013,0.5039 0.013,3.598 0.013,3.598 -3.4994,-5.499 -9.1276,-9.3262 -12.8722,-10.435396 -10.0861,-2.994096 -20.6107,-0.3399 -28.5492,10.767296 -6.3081,8.8263 -10.4393,21.2119 -11.6098,33.0763 -1.0904,11.05771 -0.8891,20.45471 0.5973,28.37051 -1.6037,7.9266 -6.2148,16.2156 -11.4285,16.2156 -6.6654,0 -10.458,-5.8953 -10.458,-32.839 0,-15.71831 0.4719,-22.55301 0.7039,-33.92021 0.1346,-6.548 0.3946,-11.5777 0.3799,-12.7175 -0.049,-3.4993 -6.1002,-5.263 -8.9156,-5.9162 -2.9461,-0.6812 -5.4896,-0.9318 -7.4426,-0.7879 -2.5768,0.192 -4.3885,2.4996 -4.3885,4.2206 l 0,3.9659 c -3.4993,-5.499 -9.1275,-9.3262 -12.8722,-10.435396 -10.086,-2.994096 -20.552,-0.2972 -28.5491,10.767296 -5.215,7.2146 -9.4369,15.2131 -11.6098,32.919 -0.6279,5.11671 -0.9052,9.90811 -0.8692,14.38661 -2.0796,12.7179 -11.2645,27.376 -18.7777,27.376 -4.3965,0 -8.5837,-8.5275 -8.5837,-26.7015 0,-24.20871 1.4984,-58.676706 1.7517,-61.998702 0,0 9.4928,-0.1613 11.3312,-0.1827 4.735,-0.052 9.0236,0.06 15.3303,-0.2626 3.1634,-0.1613 6.2108,-11.5138 2.9461,-12.9188 -1.4797,-0.6359 -11.9377,-1.1931 -16.0835,-1.2811 -3.486,-0.079 -13.1908,-0.7972 -13.1908,-0.7972 0,0 0.8705,-22.8783 1.0731,-25.2951 0.172,-2.0143 -2.4342,-3.0514 -3.9286,-3.6807 -3.6339,-1.537 -6.8853,-2.2729 -10.7392,-3.0674 -5.3244,-1.0984 -7.7399,-0.024 -8.2118,4.4698 -0.7105,6.8201 -1.0785,26.7962 -1.0785,26.7962 -3.9072,0 -17.254,-0.7638 -21.1625,-0.7638 -3.6313,0 -7.5506,15.617 -2.5302,15.8089 5.7762,0.224 15.8423,0.4173 22.5156,0.6186 0,0 -0.2972,35.035892 -0.2972,45.852492 0,1.1508 0.01,2.259 0.012,3.3343 -3.6727,19.14301 -16.6088,29.48361 -16.6088,29.48361 2.7781,-12.6642 -2.8968,-22.1744 -13.1188,-30.22481 -3.766,-2.9666 -11.2006,-8.5828 -19.519,-14.7372 0,0 4.8178,-4.7484 9.0903,-14.3012 3.0274,-6.7667 3.1581,-14.5106 -4.2725,-16.218196 -12.2777,-2.823496 -22.401,6.193396 -25.4205,15.819596 -2.3395,7.4572 -1.0917,12.9908 3.4914,18.739 0.3346,0.42 0.6972,0.8492 1.0718,1.2811 -2.7715,5.3419 -6.5788,12.5339 -9.8035,18.11121 -8.9503,15.485 -15.7116,27.7333 -20.8213,27.7333 -4.0846,0 -4.0299,-12.4352 -4.0299,-24.078 0,-10.03711 0.7412,-25.12721 1.3331,-40.75081 0.1959,-5.167 -2.3876,-8.1105 -6.7187,-10.7766 -2.6315,-1.6197 -8.2478,-4.8044 -11.5005,-4.8044 -4.8686,0 -18.915,0.6625 -32.1871,39.0538 -1.6726,4.8389 -4.9585,13.65601 -4.9585,13.65601 l 0.2828,-46.16711 c 0,-1.0824 -0.5765,-2.1289 -1.8965,-2.8448 -2.2365,-1.2144 -8.2099,-3.6979 -13.5214,-3.6979 -2.5307,0 -3.7936,1.1771 -3.7936,3.5233 l -0.4633,72.22881 c 0,5.488 0.1431,11.8903 0.6857,14.6905 0.5406,2.8037 1.4164,5.0845 2.5011,6.4415 1.0831,1.3544 2.336,2.3876 4.4017,2.814 1.9226,0.3958 12.4503,1.7477 12.9975,-2.2755 0.6556,-4.8215 0.6807,-10.0366 6.2088,-29.4864 8.6061,-30.28081 19.8269,-45.05531 25.1018,-50.30231 0.9223,-0.9171 1.9754,-0.9718 1.9247,0.5292 -0.2252,6.6388 -1.0171,23.2276 -1.5502,37.32091 -1.4289,37.7154 5.4322,44.706 15.2371,44.706 7.5012,0 18.0752,-7.4533 29.4103,-26.3202 7.0667,-11.7576 13.928,-23.2862 18.8577,-31.59531 3.4354,3.1802 7.2906,6.60301 11.1432,10.25951 8.9529,8.4973 11.8924,16.5715 9.9421,24.2313 -1.4917,5.8557 -7.1093,11.8904 -17.1074,6.0249 -2.9141,-1.7112 -4.1579,-3.0333 -7.088,-4.9625 -1.5743,-1.0364 -3.9779,-1.3462 -5.4189,-0.2605 -3.7433,2.8224 -5.8842,6.4123 -7.1066,10.8568 -1.1891,4.3247 3.142,6.6108 7.6318,8.6104 3.8659,1.721 12.175,3.2805 17.474,3.4581 20.6467,0.6905 37.1862,-9.9689 48.6999,-37.4648 2.061,23.7461 10.8326,37.1835 26.0724,37.1835 10.1887,0 20.404,-13.1698 24.8712,-26.1256 1.2824,5.2812 3.1807,9.8737 5.6322,13.7573 11.7431,18.6058 34.524,14.6012 45.9672,-1.1981 3.538,-4.8819 4.0765,-6.6362 4.0765,-6.6362 1.669,14.9184 13.6827,20.1308 20.5614,20.1308 7.7039,0 15.6583,-3.642 21.2332,-16.1929 0.6533,1.3621 1.3664,2.6629 2.145,3.896 11.743,18.6058 34.524,14.6012 45.9671,-1.1981 0.5399,-0.7411 1.0078,-1.4134 1.4171,-2.0168 l 0.3359,9.7991 c 0,0 -6.5281,5.9885 -10.5353,9.6622 -17.6366,16.1809 -31.0473,28.4572 -32.0338,42.7531 -1.2664,18.2285 13.5174,25.0032 24.7019,25.891 11.8777,0.9426 22.0491,-5.6187 28.3012,-14.8012 5.4989,-8.0823 9.0983,-25.4777 8.8343,-42.6584 -0.1053,-6.8799 -0.2786,-15.6277 -0.4146,-25.0045 6.1988,-7.1986 13.1828,-16.2969 19.6136,-26.9468 7.008,-11.6061 14.5185,-27.19211 18.3644,-39.32181 0,0 6.5255,0.056 13.4894,-0.3999 2.2276,-0.1453 2.8675,0.3092 2.4556,1.9423 -0.4973,1.9729 -8.7983,33.99081 -1.2225,55.32001 5.1857,14.6012 16.8755,19.2989 23.8061,19.2989 8.1131,0 15.8743,-6.1269 20.03348,-15.225 0.5012,1.0143 1.0251,1.9958 1.597,2.9019 11.7431,18.6058 34.4441,14.5772 45.9672,-1.1981 2.6008,-3.5592 4.0765,-6.6362 4.0765,-6.6362 2.4729,15.4397 14.4799,20.2094 21.3572,20.2094 7.164,0 13.9627,-2.9369 19.479,-15.9889 0.2306,5.7468 0.5932,10.4459 1.1664,11.9274 0.3493,0.906 2.3849,2.0434 3.8659,2.5927 6.5534,2.4302 13.2375,1.281 15.7103,0.7811 1.713,-0.3467 3.0488,-1.721 3.2314,-5.2698 0.4799,-9.3181 0.1853,-24.9739 3.0101,-36.609 4.7418,-19.52691 9.1649,-27.10141 11.2632,-30.85131 1.1744,-2.101 2.4995,-2.4476 2.5475,-0.224 0.099,4.4991 0.3226,17.7113 2.1596,35.46251 1.349,13.0554 3.1514,20.772 4.5364,23.2142 3.9526,6.984 8.8343,7.3147 12.8096,7.3147 2.5288,0 7.8171,-0.6988 7.3439,-5.1432 -0.2306,-2.1663 0.1733,-15.5544 4.8484,-34.792 3.0527,-12.56281 8.1424,-23.91411 9.9781,-28.06391 0.6772,-1.5304 0.9918,-0.324 0.9811,-0.089 -0.3866,8.6517 -1.2544,36.95031 2.2702,52.42731 4.7778,20.9666 18.5991,23.3128 23.4155,23.3128 10.282,0 18.6911,-7.8214 21.5239,-28.4012 0.6825,-4.9526 -0.328,-8.7768 -3.3554,-8.7768"
  }))));
};
var InstagramButton_default = InstagramButton;

// app/components/Footer/index.tsx
var Footer = ({ hourOpen, instagramUrl, datesClosed }) => {
  const updatedDatesClosed = (0, import_react.useMemo)(() => {
    return datesClosed.filter(([, date2]) => !(0, import_date_fns4.isPast)(new Date(date2)));
  }, [datesClosed]);
  return /* @__PURE__ */ React.createElement("footer", {
    className: "footer row spaceBetween alignCenter"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "column space"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mr-4 row wrap"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-4"
  }, "Hours:"), /* @__PURE__ */ React.createElement("span", null, hourOpen, ":00 AM - TBD")), updatedDatesClosed.length > 0 ? /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("h2", null, "Reminder"), updatedDatesClosed.map(([close, open], index) => /* @__PURE__ */ React.createElement("div", {
    className: "column",
    key: `close-date-${close}-${open}-${index}`
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 row wrap"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-4"
  }, "Close:"), /* @__PURE__ */ React.createElement("span", null, formatDate(new Date(close)))), /* @__PURE__ */ React.createElement("div", {
    className: "mr-4 row wrap"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "mr-4"
  }, "Reopen:"), /* @__PURE__ */ React.createElement("span", null, formatDate(new Date(open))))))) : null), /* @__PURE__ */ React.createElement("div", {
    className: "column space"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "center-text desktop-only"
  }, "Follow us for more updates"), /* @__PURE__ */ React.createElement(InstagramButton_default, {
    instagramUrl
  })));
};
var Footer_default = Footer;

// app/components/ProductCard/index.tsx
init_react();

// app/components/ProductCard/Flavors/index.tsx
init_react();
var listFormatter = new Intl.ListFormat("en", {});
var Flavors = ({ flavors = [] }) => {
  const transformedFlavors = listFormatter.format(flavors);
  return transformedFlavors ? /* @__PURE__ */ React.createElement("p", {
    className: "cap"
  }, transformedFlavors) : null;
};
var Flavors_default = Flavors;

// app/components/ProductCard/PreRollDescription/index.tsx
init_react();
var PreRollDescription = ({
  amountAbbreviation,
  amount,
  wrap
}) => {
  return amount || wrap ? /* @__PURE__ */ React.createElement("p", {
    className: "col"
  }, wrap ? /* @__PURE__ */ React.createElement("span", {
    className: "cap"
  }, wrap) : null, wrap && amount ? "   -   " : null, amount ? /* @__PURE__ */ React.createElement("span", null, `${amount} ${amountAbbreviation ?? ""}`) : null) : null;
};
var PreRollDescription_default = PreRollDescription;

// app/components/ProductCard/Prices/index.tsx
init_react();
var Prices = ({ quantityAbbreviation, name, prices }) => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "table-wrap"
  }, /* @__PURE__ */ React.createElement("table", null, /* @__PURE__ */ React.createElement("thead", null, /* @__PURE__ */ React.createElement("tr", null, /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Quantity ", quantityAbbreviation && quantityAbbreviation), /* @__PURE__ */ React.createElement("th", {
    scope: "col"
  }, "Price"))), /* @__PURE__ */ React.createElement("tbody", null, Array.from(Object.keys(prices)).sort((a, b) => +a < +b ? -1 : 0).map((quantity, index) => {
    return /* @__PURE__ */ React.createElement("tr", {
      key: `${name}-${index}-${quantity}`
    }, /* @__PURE__ */ React.createElement("td", null, quantity, " "), /* @__PURE__ */ React.createElement("td", {
      "data-type": "price"
    }, "$", prices[quantity] ?? "NA"));
  }))));
};
var Prices_default = Prices;

// app/components/ProductCard/index.tsx
var ProductCard = ({
  amountAbbreviation,
  amount,
  description,
  disposable,
  flavors = [],
  name,
  price,
  quantityAbbreviation,
  src,
  supplier,
  supplierUrl,
  type,
  wrap
}) => {
  return /* @__PURE__ */ React.createElement("article", {
    className: "column card topPad",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("header", {
    className: "sideMargin"
  }, /* @__PURE__ */ React.createElement("h3", null, name)), /* @__PURE__ */ React.createElement("div", {
    className: "grow column sideMargin bottomPad"
  }, /* @__PURE__ */ React.createElement("span", {
    className: "row spaceBetween alignCenter"
  }, /* @__PURE__ */ React.createElement("span", null, type), disposable !== void 0 ? /* @__PURE__ */ React.createElement("span", null, disposable ? /* @__PURE__ */ React.createElement("span", null, "\u2705") : /* @__PURE__ */ React.createElement("span", null, "\u274C"), " ", "Disposable") : null), src ? /* @__PURE__ */ React.createElement("div", {
    className: "cardImageWrap"
  }, /* @__PURE__ */ React.createElement("img", {
    className: "cardImage",
    alt: `${name}-image`,
    src: getAssetUrl(src)
  })) : null, /* @__PURE__ */ React.createElement("div", {
    className: "grow column end"
  }, /* @__PURE__ */ React.createElement(PreRollDescription_default, {
    amount,
    amountAbbreviation,
    wrap
  }), /* @__PURE__ */ React.createElement(Flavors_default, {
    flavors
  }), description ? /* @__PURE__ */ React.createElement("p", null, description) : null, /* @__PURE__ */ React.createElement(Prices_default, {
    quantityAbbreviation,
    name,
    prices: price
  }))), /* @__PURE__ */ React.createElement("footer", {
    className: "dark sidePad vertPad"
  }, supplierUrl ? /* @__PURE__ */ React.createElement("a", {
    target: "_blank",
    href: supplierUrl
  }, supplier) : null));
};
var ProductCard_default = ProductCard;

// app/styles/index.css
var styles_default = "/_static/build/_assets/index-HOHPSBA3.css";

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/exotics.tsx
var loader11 = async ({ request }) => {
  const [carts, edibles, flowers, preRolls, profile, user, waxes] = await Promise.all([
    getCarts(),
    getEdibles(),
    getFlowers(),
    getPreRolls(),
    getProfile(),
    getUserBySession(request),
    getWaxes()
  ]);
  return { carts, edibles, flowers, preRolls, profile, user, waxes };
};
var links6 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Exotics() {
  const { carts, edibles, flowers, preRolls, profile, user, waxes } = (0, import_remix21.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Header_default, {
    user
  }), /* @__PURE__ */ React.createElement("main", {
    className: "body footer-padding"
  }, /* @__PURE__ */ React.createElement("h2", null, "Flower"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, flowers.current.map((flower, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    quantityAbbreviation: "(g)",
    key: `flower-${flower.name}-${index}`
  }, flower)))), /* @__PURE__ */ React.createElement("h2", null, "Pre-Roll"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, preRolls.current.map((preRoll, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    amountAbbreviation: "grams",
    key: `pre-roll-${preRoll.name}-${index}`
  }, preRoll)))), /* @__PURE__ */ React.createElement("h2", null, "Carts"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, carts.current.map((cart, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    key: `cart-${cart.name}-${index}`
  }, cart)))), /* @__PURE__ */ React.createElement("h2", null, "Waxes"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, waxes.current.map((wax, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    key: `wax-${wax.name}-${index}`,
    quantityAbbreviation: "(g)"
  }, wax)))), /* @__PURE__ */ React.createElement("h2", null, "Edibles"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, edibles.current.map((edible, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    amountAbbreviation: "mg",
    key: `edible-${edible.name}-${index}`
  }, edible)))), /* @__PURE__ */ React.createElement(import_remix21.Outlet, null)), /* @__PURE__ */ React.createElement(Footer_default, __spreadValues({}, profile)));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action12,
  loader: () => loader12
});
init_react();
var action12 = async ({ request }) => {
  return logout(request);
};
var loader12 = async ({ request }) => {
  return logout(request);
};

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/models.ts
var models_exports = {};
init_react();

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links7,
  loader: () => loader13
});
init_react();
var import_remix22 = __toESM(require_remix());
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader13 = async ({ request }) => {
  const [user, profile] = await Promise.all([
    getUserBySession(request),
    getProfile()
  ]);
  return { profile, user };
};
function Index() {
  const { profile, user } = (0, import_remix22.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default, {
    user
  }), /* @__PURE__ */ React.createElement(Footer_default, __spreadValues({}, profile)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d73c380b", "entry": { "module": "/_static/build/entry.client-BKP2KWVD.js", "imports": ["/_static/build/_shared/chunk-RMCQDDGV.js", "/_static/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-T3BOJ3GF.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive": { "id": "routes/executive", "parentId": "root", "path": "executive", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive-JBO2JRLK.js", "imports": ["/_static/build/_shared/chunk-2QVBVRUF.js", "/_static/build/_shared/chunk-GK56CZJG.js", "/_static/build/_shared/chunk-PNOL62WZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/exotics": { "id": "routes/executive/exotics", "parentId": "routes/executive", "path": "exotics", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/exotics-ANJ2WMY3.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/index": { "id": "routes/executive/index", "parentId": "routes/executive", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/executive/index-SD4FUMAG.js", "imports": ["/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/media": { "id": "routes/executive/media", "parentId": "routes/executive", "path": "media", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/media-BGZCINWV.js", "imports": ["/_static/build/_shared/chunk-G3FN7GFS.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new": { "id": "routes/executive/new", "parentId": "routes/executive", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new-VXG3JW4J.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/cart": { "id": "routes/executive/new/cart", "parentId": "routes/executive/new", "path": "cart", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/cart-EQNMS74J.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/close-date": { "id": "routes/executive/new/close-date", "parentId": "routes/executive/new", "path": "close-date", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/close-date-SRWPZLWP.js", "imports": ["/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/edible": { "id": "routes/executive/new/edible", "parentId": "routes/executive/new", "path": "edible", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/edible-S7Q3FZFS.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/flower": { "id": "routes/executive/new/flower", "parentId": "routes/executive/new", "path": "flower", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/flower-2HJE3GB2.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/media": { "id": "routes/executive/new/media", "parentId": "routes/executive/new", "path": "media", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/media-UW45NDKF.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/pre-roll": { "id": "routes/executive/new/pre-roll", "parentId": "routes/executive/new", "path": "pre-roll", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/pre-roll-ZBLP2V66.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/wax": { "id": "routes/executive/new/wax", "parentId": "routes/executive/new", "path": "wax", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/wax-RUXKMA2S.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/exotics": { "id": "routes/exotics", "parentId": "root", "path": "exotics", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/exotics-BGRSWRTQ.js", "imports": ["/_static/build/_shared/chunk-YUPFJPVL.js", "/_static/build/_shared/chunk-2QVBVRUF.js", "/_static/build/_shared/chunk-GK56CZJG.js", "/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js", "/_static/build/_shared/chunk-G3FN7GFS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-LFG5FSZR.js", "imports": ["/_static/build/_shared/chunk-YUPFJPVL.js", "/_static/build/_shared/chunk-2QVBVRUF.js", "/_static/build/_shared/chunk-GK56CZJG.js", "/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/login/index-THJKSAX5.js", "imports": ["/_static/build/_shared/chunk-2QVBVRUF.js", "/_static/build/_shared/chunk-GK56CZJG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/logout-6JYBEHUI.js", "imports": ["/_static/build/_shared/chunk-GK56CZJG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/models": { "id": "routes/models", "parentId": "root", "path": "models", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/models-RKGTVP4S.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-D73C380B.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes2 = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/login/index": {
    id: "routes/login/index",
    parentId: "root",
    path: "login",
    index: true,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/executive": {
    id: "routes/executive",
    parentId: "root",
    path: "executive",
    index: void 0,
    caseSensitive: void 0,
    module: executive_exports
  },
  "routes/executive/exotics": {
    id: "routes/executive/exotics",
    parentId: "routes/executive",
    path: "exotics",
    index: void 0,
    caseSensitive: void 0,
    module: exotics_exports
  },
  "routes/executive/index": {
    id: "routes/executive/index",
    parentId: "routes/executive",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: executive_exports2
  },
  "routes/executive/media": {
    id: "routes/executive/media",
    parentId: "routes/executive",
    path: "media",
    index: void 0,
    caseSensitive: void 0,
    module: media_exports
  },
  "routes/executive/new": {
    id: "routes/executive/new",
    parentId: "routes/executive",
    path: "new",
    index: void 0,
    caseSensitive: void 0,
    module: new_exports
  },
  "routes/executive/new/close-date": {
    id: "routes/executive/new/close-date",
    parentId: "routes/executive/new",
    path: "close-date",
    index: void 0,
    caseSensitive: void 0,
    module: close_date_exports
  },
  "routes/executive/new/pre-roll": {
    id: "routes/executive/new/pre-roll",
    parentId: "routes/executive/new",
    path: "pre-roll",
    index: void 0,
    caseSensitive: void 0,
    module: pre_roll_exports
  },
  "routes/executive/new/edible": {
    id: "routes/executive/new/edible",
    parentId: "routes/executive/new",
    path: "edible",
    index: void 0,
    caseSensitive: void 0,
    module: edible_exports
  },
  "routes/executive/new/flower": {
    id: "routes/executive/new/flower",
    parentId: "routes/executive/new",
    path: "flower",
    index: void 0,
    caseSensitive: void 0,
    module: flower_exports
  },
  "routes/executive/new/media": {
    id: "routes/executive/new/media",
    parentId: "routes/executive/new",
    path: "media",
    index: void 0,
    caseSensitive: void 0,
    module: media_exports2
  },
  "routes/executive/new/cart": {
    id: "routes/executive/new/cart",
    parentId: "routes/executive/new",
    path: "cart",
    index: void 0,
    caseSensitive: void 0,
    module: cart_exports
  },
  "routes/executive/new/wax": {
    id: "routes/executive/new/wax",
    parentId: "routes/executive/new",
    path: "wax",
    index: void 0,
    caseSensitive: void 0,
    module: wax_exports
  },
  "routes/exotics": {
    id: "routes/exotics",
    parentId: "root",
    path: "exotics",
    index: void 0,
    caseSensitive: void 0,
    module: exotics_exports2
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/models": {
    id: "routes/models",
    parentId: "root",
    path: "models",
    index: void 0,
    caseSensitive: void 0,
    module: models_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var handler = (0, import_architect.createRequestHandler)({
  build: server_build_exports,
  mode: "development"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvbG9naW4vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCAiLi4vYXBwL3VzZXJzLnRzIiwgIi4uL2F3cy9hd3MtZXhwb3J0cy50cyIsICIuLi9hd3MvYXdzLWNvbmZpZy50cyIsICIuLi9hcHAvdXRpbHMvY3JlYXRlSWQudHMiLCAiLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlLnRzeCIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9leG90aWNzLnRzeCIsICIuLi9hcHAvZXhvdGljcy50cyIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9pbmRleC50c3giLCAiLi4vYXBwL3Byb2ZpbGUudHMiLCAiLi4vYXBwL3V0aWxzL2Zvcm1hdERhdGUudHMiLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbWVkaWEudHN4IiwgIi4uL2FwcC9hc3NldHMudHMiLCAiLi4vYXBwL3V0aWxzL2dldEFzc2V0VXJsLnRzIiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGUudHN4IiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9wcmUtcm9sbC50c3giLCAiLi4vYXBwL3V0aWxzL2dldFByZVJvbGxQcmljZS50cyIsICIuLi9hcHAvdXRpbHMvZ2V0Rm9ybVByaWNlLnRzIiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9lZGlibGUudHN4IiwgIi4uL2FwcC91dGlscy9nZXRQcmljZUZvclR3by50cyIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvZmxvd2VyLnRzeCIsICIuLi9hcHAvdXRpbHMvZ2V0Rmxvd2VyUHJpY2UudHMiLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L21lZGlhLnRzeCIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2FydC50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L3dheC50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leG90aWNzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0luc3RhZ3JhbUJ1dHRvbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL0ZsYXZvcnMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL1ByZVJvbGxEZXNjcmlwdGlvbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvUHJpY2VzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2xvZ291dC50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9tb2RlbHMudHMiLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9hcmNoaXRlY3RcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2xvZ2luL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvZXhvdGljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL21lZGlhLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvcHJlLXJvbGwudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTkgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9lZGlibGUudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvZmxvd2VyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L21lZGlhLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMiBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L2NhcnQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEzIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvd2F4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leG90aWNzLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNSBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9sb2dvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTE2IGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL21vZGVscy50c1wiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9pbmRleC50c3hcIjtcbiAgZXhwb3J0IHsgZGVmYXVsdCBhcyBhc3NldHMgfSBmcm9tIFwiQHJlbWl4LXJ1bi9kZXYvYXNzZXRzLW1hbmlmZXN0XCI7XG4gIGV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuICBleHBvcnQgY29uc3Qgcm91dGVzID0ge1xuICAgIFwicm9vdFwiOiB7XG4gICAgICBpZDogXCJyb290XCIsXG4gICAgICBwYXJlbnRJZDogdW5kZWZpbmVkLFxuICAgICAgcGF0aDogXCJcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ2luL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9sb2dpbi9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJsb2dpblwiLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMVxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImV4ZWN1dGl2ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUyXG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL2V4b3RpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9leG90aWNzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZXhlY3V0aXZlXCIsXG4gICAgICBwYXRoOiBcImV4b3RpY3NcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlM1xuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL2luZGV4XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZXhlY3V0aXZlXCIsXG4gICAgICBwYXRoOiB1bmRlZmluZWQsXG4gICAgICBpbmRleDogdHJ1ZSxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU0XG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL21lZGlhXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbWVkaWFcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmVcIixcbiAgICAgIHBhdGg6IFwibWVkaWFcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNVxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9uZXdcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXdcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmVcIixcbiAgICAgIHBhdGg6IFwibmV3XCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTZcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2xvc2UtZGF0ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXdcIixcbiAgICAgIHBhdGg6IFwiY2xvc2UtZGF0ZVwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU3XG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9wcmUtcm9sbFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9wcmUtcm9sbFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXdcIixcbiAgICAgIHBhdGg6IFwicHJlLXJvbGxcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlOFxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2VkaWJsZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXdcIixcbiAgICAgIHBhdGg6IFwiZWRpYmxlXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTlcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9mbG93ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcImZsb3dlclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMFxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvbWVkaWFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvbWVkaWFcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcIm1lZGlhXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTExXG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9jYXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2NhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcImNhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTJcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3L3dheFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy93YXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcIndheFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxM1xuICAgIH0sXG4gIFwicm91dGVzL2V4b3RpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4b3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZXhvdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL21vZGVsc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbW9kZWxzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1vZGVsc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTdcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGdsb2JhbExhcmdlU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbGFyZ2UuY3NzXCI7XG5pbXBvcnQgZ2xvYmFsTWVkaXVtU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbWVkaXVtLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGdsb2JhbE1lZGl1bVN0eWxlc1VybCwgbWVkaWE6IFwiXCIgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGdsb2JhbExhcmdlU3R5bGVzVXJsIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyB0aXRsZTogXCJCYXlvdSBFeG90aWNzXCIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPFNjcm9sbFJlc3RvcmF0aW9uIC8+XG4gICAgICAgIDxTY3JpcHRzIC8+XG4gICAgICAgIHtwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiICYmIDxMaXZlUmVsb2FkIC8+fVxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgTWV0YUZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGb3JtLCBqc29uLCBMaW5rLCB1c2VMb2FkZXJEYXRhLCB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCB1c2VBY3Rpb25EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IGdldFVzZXJDb3VudCwgbG9naW4sIHJlZ2lzdGVyLCBVc2VyIH0gZnJvbSBcIn4vdXNlcnNcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZXJTZXNzaW9uLCBnZXRVc2VyQnlTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW1wb3J0IHN0eWxlc1VybCBmcm9tIFwiLi4vLi4vc3R5bGVzL2xvZ2luLmNzc1wiO1xuXG5mdW5jdGlvbiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHwgdXNlcm5hbWUubGVuZ3RoIDwgMykge1xuICAgIHJldHVybiBgVXNlcm5hbWVzIG11c3QgYmUgYXQgbGVhc3QgMyBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQ6IHVua25vd24pIHtcbiAgaWYgKHR5cGVvZiBwYXNzd29yZCAhPT0gXCJzdHJpbmdcIiB8fCBwYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgcmV0dXJuIGBQYXNzd29yZHMgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnMgbG9uZ2A7XG4gIH1cbn1cblxudHlwZSBBY3Rpb25EYXRhID0ge1xuICBmb3JtRXJyb3I/OiBzdHJpbmc7XG4gIGZpZWxkRXJyb3JzPzoge1xuICAgIHVzZXJuYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gICAgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgfTtcbiAgZmllbGRzPzoge1xuICAgIGxvZ2luVHlwZTogc3RyaW5nO1xuICAgIHVzZXJuYW1lOiBzdHJpbmc7XG4gICAgcGFzc3dvcmQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmNvbnN0IGJhZFJlcXVlc3QgPSAoZGF0YTogQWN0aW9uRGF0YSkgPT4ganNvbihkYXRhLCB7IHN0YXR1czogNDAwIH0pO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCB1c2VybmFtZSA9IGZvcm0uZ2V0KFwidXNlcm5hbWVcIik7XG4gIGNvbnN0IHBhc3N3b3JkID0gZm9ybS5nZXQoXCJwYXNzd29yZFwiKTtcbiAgY29uc3QgcmVkaXJlY3RUbyA9IGZvcm0uZ2V0KFwicmVkaXJlY3RUb1wiKSB8fCBcIi9leG90aWNzXCI7XG4gIGNvbnN0IGxvZ2luVHlwZSA9IGZvcm0uZ2V0KFwibG9naW5UeXBlXCIpO1xuICBjb25zdCBwZXJtaXNzaW9ucyA9IGZvcm0uZ2V0KFwicGVybWlzc2lvbnNcIik7XG5cbiAgaWYgKFxuICAgIHR5cGVvZiBsb2dpblR5cGUgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgdXNlcm5hbWUgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHxcbiAgICB0eXBlb2YgcmVkaXJlY3RUbyAhPT0gXCJzdHJpbmdcIlxuICApIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICBmb3JtRXJyb3I6IGBGb3JtIG5vdCBzdWJtaXR0ZWQgY29ycmVjdGx5LmAsXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBmaWVsZEVycm9ycyA9IHtcbiAgICBwYXNzd29yZDogdmFsaWRhdGVQYXNzd29yZChwYXNzd29yZCksXG4gICAgdXNlcm5hbWU6IHZhbGlkYXRlVXNlcm5hbWUodXNlcm5hbWUpLFxuICB9O1xuICBjb25zdCBmaWVsZHMgPSB7IGxvZ2luVHlwZSwgcGFzc3dvcmQsIHVzZXJuYW1lIH07XG5cbiAgaWYgKE9iamVjdC52YWx1ZXMoZmllbGRFcnJvcnMpLnNvbWUoQm9vbGVhbikpIHtcbiAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzLCBmaWVsZHMgfSk7XG4gIH1cblxuICBjb25zdCB1c2VyQ291bnQgPSBhd2FpdCBnZXRVc2VyQ291bnQoKTtcbiAgY29uc3QgaXNBZG1pbiA9ICF1c2VyQ291bnQgfHwgcGVybWlzc2lvbnMgPT09IFwiYWRtaW5cIjtcblxuICBjb25zdCB7IGVycm9ycywgdXNlciB9ID1cbiAgICBsb2dpblR5cGUgPT09IFwibG9naW5cIlxuICAgICAgPyBhd2FpdCBsb2dpbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICAgOiBhd2FpdCByZWdpc3Rlcih7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgaXNBZG1pbixcbiAgICAgICAgfSk7XG5cbiAgc3dpdGNoIChsb2dpblR5cGUpIHtcbiAgICBjYXNlIFwibG9naW5cIjpcbiAgICAgIGlmIChPYmplY3QudmFsdWVzKGVycm9ycykuc29tZShCb29sZWFuKSB8fCAhdXNlcikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkRXJyb3JzOiBlcnJvcnMsIGZpZWxkcyB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIHJlZGlyZWN0VG8pO1xuICAgIGNhc2UgXCJyZWdpc3RlclwiOlxuICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHtcbiAgICAgICAgICBmaWVsZEVycm9yczogZXJyb3JzLFxuICAgICAgICAgIGZpZWxkcyxcbiAgICAgICAgICBmb3JtRXJyb3I6ICFPYmplY3QudmFsdWVzKGVycm9ycykuc29tZShCb29sZWFuKVxuICAgICAgICAgICAgPyBcIlNvbWV0aGluZyB3ZW50IHdyb25nIGNyZWF0aW5nIGEgbmV3IHVzZXJcIlxuICAgICAgICAgICAgOiB1bmRlZmluZWQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY3JlYXRlVXNlclNlc3Npb24odXNlci5pZCwgcmVkaXJlY3RUbyk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBiYWRSZXF1ZXN0KHsgZmllbGRzLCBmb3JtRXJyb3I6IFwiTG9naW4gdHlwZSBpbnZhbGlkXCIgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlc1VybCB9XTtcbn07XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgY2FuQWRkVXNlcjogYm9vbGVhbjtcbiAgdXNlcjogVXNlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IFt1c2VyLCB1c2VyQ291bnRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgIGdldFVzZXJCeVNlc3Npb24ocmVxdWVzdCksXG4gICAgZ2V0VXNlckNvdW50KCksXG4gIF0pO1xuXG4gIGNvbnN0IGRhdGE6IExvYWRlckRhdGEgPSB7XG4gICAgY2FuQWRkVXNlcjogdXNlcj8uaXNBZG1pbiB8fCAhdXNlckNvdW50LFxuICAgIHVzZXIsXG4gIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4gKHtcbiAgdGl0bGU6IFwiQmF5b3UgRXhvdGljcyB8IExvZ2luXCIsXG4gIGRlc2NyaXB0aW9uOiBcIkxvZ2luIHRvIG1hbmFnZSBleG90aWNzXCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG4gIGNvbnN0IFtzZWFyY2hQYXJhbXNdID0gdXNlU2VhcmNoUGFyYW1zKCk7XG4gIGNvbnN0IGFjdGlvbkRhdGEgPSB1c2VBY3Rpb25EYXRhPEFjdGlvbkRhdGE+KCk7XG4gIGNvbnN0IHsgY2FuQWRkVXNlciwgdXNlciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgY2FuTG9nT3V0IHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgICAgPGgyPnshdXNlciA/IFwiTG9naW5cIiA6IFwiUmVnaXN0ZXIgTmV3IFVzZXJcIn08L2gyPlxuICAgICAgICAgIDxGb3JtXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZm9ybUVycm9yID8gXCJmb3JtLWVycm9yLW1lc3NhZ2VcIiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RUb1wiXG4gICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hQYXJhbXMuZ2V0KFwicmVkaXJlY3RUb1wiKSA/PyB1bmRlZmluZWR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGZpZWxkc2V0IGRhdGEtaGlkZT17dXNlciA/IFwiaGlkZVwiIDogdW5kZWZpbmVkfT5cbiAgICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9naW4gb3IgUmVnaXN0ZXI/PC9sZWdlbmQ+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwibG9naW5UeXBlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAoIXVzZXIgJiYgIWFjdGlvbkRhdGE/LmZpZWxkcz8ubG9naW5UeXBlKSB8fFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZHM/LmxvZ2luVHlwZSA9PT0gXCJsb2dpblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgZGVmYXVsdENoZWNrZWQ9e1xuICAgICAgICAgICAgICAgICAgICAhIXVzZXIgfHwgYWN0aW9uRGF0YT8uZmllbGRzPy5sb2dpblR5cGUgPT09IFwicmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luVHlwZVwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJyZWdpc3RlclwiXG4gICAgICAgICAgICAgICAgLz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgUmVnaXN0ZXJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJuYW1lLWlucHV0XCI+VXNlcm5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWVcbiAgICAgICAgICAgICAgICAgICAgPyBcInVzZXJuYW1lLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZSl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWUgPyAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGlvbi1lcnJvclwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZS1lcnJvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkLWlucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PXtcbiAgICAgICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICA/IFwicGFzc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJpYS1pbnZhbGlkPXtCb29sZWFuKGFjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCl9XG4gICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXthY3Rpb25EYXRhPy5maWVsZHM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmQtaW5wdXRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZCA/IChcbiAgICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS12YWxpZGF0aW9uLWVycm9yXCJcbiAgICAgICAgICAgICAgICAgIHJvbGU9XCJhbGVydFwiXG4gICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWVycm9yXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJmb3JtLWVycm9yLW1lc3NhZ2VcIj5cbiAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZvcm1FcnJvciA/IChcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIiByb2xlPVwiYWxlcnRcIj5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhLmZvcm1FcnJvcn1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkFkbWluIG9yIE1hbmFnZXI/PC9sZWdlbmQ+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJwZXJtaXNzaW9uc1wiIHZhbHVlPVwiYWRtaW5cIiAvPiBBZG1pblxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwibWFuYWdlXCJcbiAgICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgTWFuYWdlXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9Gb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5rc1wiPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPExpbmsgdG89XCIvXCI+SG9tZTwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2V4b3RpY3NcIj5FeG90aWNzPC9MaW5rPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIiwgImltcG9ydCB7IEZDIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBOYXZMaW5rIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi91c2Vyc1wiO1xuXG5jb25zdCByb3V0ZXMgPSBuZXcgU2V0KFtcImV4b3RpY3NcIl0pO1xuXG5pbnRlcmZhY2UgSGVhZGVyUHJvcHMge1xuICBjYW5Mb2dPdXQ/OiBib29sZWFuO1xuICBzaG93QWRtaW5MaW5rPzogYm9vbGVhbjtcbiAgdXNlcjogVXNlciB8IG51bGw7XG59XG5cbmNvbnN0IEhlYWRlcjogRkM8SGVhZGVyUHJvcHM+ID0gKHtcbiAgY2FuTG9nT3V0ID0gZmFsc2UsXG4gIHNob3dBZG1pbkxpbmsgPSB0cnVlLFxuICB1c2VyLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwibmF2IHJvdyBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXIgd3JhcFwiPlxuICAgICAgPE5hdkxpbmsgdG89XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2dvXCJcbiAgICAgICAgICBzcmM9XCJodHRwczovL3MzLXVzLWVhc3QtMi5hbWF6b25hd3MuY29tL2JheW91LWV4b3RpY3MvYXNzZXRzL2JheW91LWxvZ28ucG5nXCJcbiAgICAgICAgICBhbHQ9XCJ3ZWJzaXRlLWxvZ29cIlxuICAgICAgICAvPlxuICAgICAgPC9OYXZMaW5rPlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJyb3cgc3BhY2UgYWxpZ25DZW50ZXIgc2lkZU1hcmdpblwiPlxuICAgICAgICB7dXNlciAmJiBzaG93QWRtaW5MaW5rICYmIChcbiAgICAgICAgICA8TmF2TGluayBjbGFzc05hbWU9XCJidXR0b25cIiB0bz1cIi9leGVjdXRpdmVcIj5cbiAgICAgICAgICAgIEV4ZWN1dGl2ZVxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKX1cbiAgICAgICAge1suLi5yb3V0ZXNdLm1hcCgocm91dGUpID0+IChcbiAgICAgICAgICA8TmF2TGlua1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGNhcFwiXG4gICAgICAgICAgICBwcmVmZXRjaD1cImludGVudFwiXG4gICAgICAgICAgICBrZXk9e3JvdXRlfVxuICAgICAgICAgICAgdG89e2AvJHtyb3V0ZX1gfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtyb3V0ZX1cbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICkpfVxuICAgICAgICB7Y2FuTG9nT3V0ICYmIHVzZXIgPyAoXG4gICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvbG9nb3V0XCI+XG4gICAgICAgICAgICBMb2cgT3V0XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyO1xuIiwgImltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdGpzXCI7XG5cbmltcG9ydCBzMywgeyBLZXlzIH0gZnJvbSBcIi4uL2F3cy9hd3MtZXhwb3J0c1wiO1xuaW1wb3J0IGNyZWF0ZUlkIGZyb20gXCIuL3V0aWxzL2NyZWF0ZUlkXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXNlciB7XG4gIGlkOiBzdHJpbmc7XG4gIGlzQWRtaW46IGJvb2xlYW47XG4gIHBhc3N3b3JkSGFzaDogc3RyaW5nO1xuICB1c2VybmFtZTogc3RyaW5nO1xufVxuXG50eXBlIFVzZXJMb2dpbkZvcm0gPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGlzQWRtaW4/OiBib29sZWFuO1xufTtcblxudHlwZSBVc2VyTG9naW5FcnJvcnMgPSB7IHVzZXJuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH06IFVzZXJMb2dpbkZvcm0pID0+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2VycygpO1xuXG4gIGNvbnN0IHVzZXIgPSB1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLnVzZXJuYW1lID09PSB1c2VybmFtZSk7XG5cbiAgY29uc3QgZXJyb3JzOiBVc2VyTG9naW5FcnJvcnMgPSB7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gIH07XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgZXJyb3JzLnVzZXJuYW1lID0gXCJVc2VybmFtZSBub3QgZm91bmRcIjtcbiAgICByZXR1cm4geyBlcnJvcnMgfTtcbiAgfVxuXG4gIGNvbnN0IGlzQ29ycmVjdFBhc3N3b3JkID0gYmNyeXB0LmNvbXBhcmUocGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcblxuICBpZiAoIWlzQ29ycmVjdFBhc3N3b3JkKSB7XG4gICAgZXJyb3JzLnBhc3N3b3JkID0gXCJQYXNzd29yZCBpcyBpbmNvcnJlY3RcIjtcbiAgICByZXR1cm4geyBlcnJvcnMgfTtcbiAgfVxuXG4gIHJldHVybiB7IGVycm9ycywgdXNlciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdGVyID0gYXN5bmMgKHtcbiAgdXNlcm5hbWUsXG4gIHBhc3N3b3JkLFxuICBpc0FkbWluLFxufTogVXNlckxvZ2luRm9ybSkgPT4ge1xuICBjb25zdCB1c2VycyA9IGF3YWl0IGdldFVzZXJzKCk7XG5cbiAgY29uc3QgZXhpc3RpbmdVc2VyID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpO1xuXG4gIGNvbnN0IGVycm9yczogVXNlckxvZ2luRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9O1xuXG4gIGlmIChleGlzdGluZ1VzZXIpIHtcbiAgICBlcnJvcnMudXNlcm5hbWUgPSBcIlVzZXJuYW1lIGFscmVhZHkgZXhpc3RzXCI7XG4gICAgcmV0dXJuIHsgZXJyb3JzIH07XG4gIH1cblxuICBjb25zdCBwYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgOCk7XG4gIGNvbnN0IGlkID0gY3JlYXRlSWQoKTtcblxuICBjb25zdCB1c2VyOiBVc2VyID0ge1xuICAgIGlkLFxuICAgIGlzQWRtaW46ICEhaXNBZG1pbixcbiAgICBwYXNzd29yZEhhc2gsXG4gICAgdXNlcm5hbWUsXG4gIH07XG5cbiAgdXNlcnMucHVzaCh1c2VyKTtcblxuICBjb25zdCBtaW5pZmllZFVzZXJzID0gSlNPTi5zdHJpbmdpZnkodXNlcnMpO1xuXG4gIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBLZXlzLlVzZXIsXG4gICAgICBCb2R5OiBtaW5pZmllZFVzZXJzLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC5jYXRjaCgoKSA9PiBjb25zb2xlLmxvZyhgRXJyb3IgYWRkaW5nICR7dXNlcn1gKSk7XG5cbiAgcmV0dXJuIHsgZXJyb3JzLCB1c2VyIH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBzM1xuICAgIC5nZXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleTogS2V5cy5Vc2VyLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBmZXRjaGluZyBhc3NldHMgcGF0aFwiLCAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSk7XG5cbiAgaWYgKCFkYXRhIHx8ICFkYXRhLkJvZHkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7S2V5cy5Vc2VyfSBoYXMgbm8gQm9keWApO1xuICB9XG5cbiAgY29uc3QgdXNlckRhdGEgPSBkYXRhLkJvZHkudG9TdHJpbmcoKTtcblxuICBjb25zdCB1c2VyczogVXNlcltdID0gSlNPTi5wYXJzZSh1c2VyRGF0YSk7XG5cbiAgcmV0dXJuIHVzZXJzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSBhc3luYyAodXNlcklkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2VycygpO1xuICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5pZCA9PT0gdXNlcklkKTtcblxuICBpZiAoIXVzZXIpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB1c2VyO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJDb3VudCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2VycygpO1xuICByZXR1cm4gdXNlcnMubGVuZ3RoO1xufTtcbiIsICJpbXBvcnQgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XG5cbmltcG9ydCBjb25maWcgZnJvbSBcIi4vYXdzLWNvbmZpZ1wiO1xuXG5jb25zdCBzMyA9IG5ldyBBV1MuUzMoY29uZmlnKTtcblxuczMuY29uZmlnLnVwZGF0ZSh7XG4gIGFjY2Vzc0tleUlkOiBwcm9jZXNzLmVudi5BQ0NFU1NfS0VZX0lELFxuICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LlNFQ1JFVF9BQ0NFU1NfS0VZLFxufSk7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEtleXMge1xuICBDYXJ0ID0gXCJleG90aWNzL3RoYy9jYXJ0Lmpzb25cIixcbiAgRWRpYmxlID0gXCJleG90aWNzL3RoYy9lZGlibGUuanNvblwiLFxuICBGbG93ZXIgPSBcImV4b3RpY3MvdGhjL2Zsb3dlci5qc29uXCIsXG4gIFByZVJvbGwgPSBcImV4b3RpY3MvdGhjL3ByZS1yb2xsLmpzb25cIixcbiAgVXNlciA9IFwidXNlcnMuanNvblwiLFxuICBXYXggPSBcImV4b3RpY3MvdGhjL3dheC5qc29uXCIsXG59XG5cbmV4cG9ydCBjb25zdCBnZXRGaWxlID0gYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IGZpbGUgPSBhd2FpdCBzM1xuICAgIC5nZXRPYmplY3QoeyBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLCBLZXk6IGtleSB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgYXQgcGF0aDogJHtrZXl9LCAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSk7XG5cbiAgaWYgKCFmaWxlIHx8ICFmaWxlLkJvZHkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBmaWxlLkJvZHkudG9TdHJpbmcoKTtcblxuICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDdXJyZW50SW5kZXggPSBhc3luYyAoa2V5OiBzdHJpbmcsIGluZGV4OiBudW1iZXIpID0+IHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEZpbGUoa2V5KTtcblxuICBkYXRhLmN1cnJlbnQuc3BsaWNlKGluZGV4LCAxKTtcblxuICBjb25zdCBtaW5pZmllZERhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcblxuICByZXR1cm4gYXdhaXQgczNcbiAgICAucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IGtleSxcbiAgICAgIEJvZHk6IG1pbmlmaWVkRGF0YSxcbiAgICB9KVxuICAgIC5wcm9taXNlKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzMztcbiIsICJpbXBvcnQgQVdTIGZyb20gXCJhd3Mtc2RrXCI7XG5cbmNvbnN0IG15Q3JlZGVudGlhbHMgPSBuZXcgQVdTLkNvZ25pdG9JZGVudGl0eUNyZWRlbnRpYWxzKHtcbiAgSWRlbnRpdHlQb29sSWQ6IFwidXMtZWFzdC0yOjZhZWJiNWFkLWRjOGEtNDM3Zi1iOTlhLTkwZTM0N2ZkODAyM1wiLFxufSk7XG5cbmNvbnN0IGNvbmZpZyA9IG5ldyBBV1MuQ29uZmlnKHtcbiAgY3JlZGVudGlhbHM6IG15Q3JlZGVudGlhbHMsXG4gIHJlZ2lvbjogXCJ1cy1lYXN0LTJcIixcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iLCAiaW1wb3J0IHsgY3VzdG9tQWxwaGFiZXQgfSBmcm9tIFwibmFub2lkXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGN1c3RvbUFscGhhYmV0KFxuICBcIjAxMjM0NTY3ODlBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIsXG4gIDE2XG4pO1xuIiwgImltcG9ydCB7IGNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlLCByZWRpcmVjdCB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBnZXRVc2VyIH0gZnJvbSBcIn4vdXNlcnNcIjtcblxuY29uc3Qgc2Vzc2lvblNlY3JldCA9IHByb2Nlc3MuZW52LlNFU1NJT05fU0VDUkVUO1xuaWYgKCFzZXNzaW9uU2VjcmV0KSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlNFU1NJT05fU0VDUkVUIG11c3QgYmUgc2V0XCIpO1xufVxuXG5jb25zdCBzdG9yYWdlID0gY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2Uoe1xuICBjb29raWU6IHtcbiAgICBuYW1lOiBcIlJKX3Nlc3Npb25cIixcbiAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIixcbiAgICBzZWNyZXRzOiBbc2Vzc2lvblNlY3JldF0sXG4gICAgc2FtZVNpdGU6IFwibGF4XCIsXG4gICAgcGF0aDogXCIvXCIsXG4gICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCxcbiAgICBodHRwT25seTogdHJ1ZSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlclNlc3Npb24odXNlcklkOiBzdHJpbmcsIHJlZGlyZWN0VG86IHN0cmluZykge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKCk7XG4gIHNlc3Npb24uc2V0KFwidXNlcklkXCIsIHVzZXJJZCk7XG4gIHJldHVybiByZWRpcmVjdChyZWRpcmVjdFRvLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuY29tbWl0U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJTZXNzaW9uKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgcmV0dXJuIHN0b3JhZ2UuZ2V0U2Vzc2lvbihyZXF1ZXN0LmhlYWRlcnMuZ2V0KFwiQ29va2llXCIpKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJJZChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRVc2VyU2Vzc2lvbihyZXF1ZXN0KTtcbiAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi5nZXQoXCJ1c2VySWRcIik7XG5cbiAgaWYgKCF1c2VySWQgfHwgdHlwZW9mIHVzZXJJZCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHVzZXJJZDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJCeVNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCB1c2VySWQgPSBhd2FpdCBnZXRVc2VySWQocmVxdWVzdCk7XG5cbiAgaWYgKCF1c2VySWQpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHRyeSB7XG4gICAgcmV0dXJuIGF3YWl0IGdldFVzZXIodXNlcklkKTtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbG9nb3V0KHJlcXVlc3QpO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2dvdXQocmVxdWVzdDogUmVxdWVzdCkge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9sb2dpblwiLCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgXCJTZXQtQ29va2llXCI6IGF3YWl0IHN0b3JhZ2UuZGVzdHJveVNlc3Npb24oc2Vzc2lvbiksXG4gICAgfSxcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHtcbiAgTGluayxcbiAgTG9hZGVyRnVuY3Rpb24sXG4gIE91dGxldCxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlTG9jYXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vdXNlcnNcIjtcbmltcG9ydCB7IGdldFVzZXJCeVNlc3Npb24gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbXBvcnQgZXhlY1N0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2V4ZWMuY3NzXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBsaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGV4ZWNTdHlsZXMgfV07XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCB1c2VyID0gYXdhaXQgZ2V0VXNlckJ5U2Vzc2lvbihyZXF1ZXN0KTtcbiAgcmV0dXJuIHsgdXNlciB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlY3V0aXZlKCkge1xuICBjb25zdCB7IHVzZXIgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlTG9jYXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIHNob3dBZG1pbkxpbms9e2ZhbHNlfSB1c2VyPXt1c2VyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGVjIHNwYWNlXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPGgxPkV4ZWN1dGl2ZTwvaDE+XG4gICAgICAgICAgPExpbmsgZGF0YS1hY3RpdmU9e3BhdGhuYW1lID09PSBcIi9leGVjdXRpdmVcIn0gdG89XCIvZXhlY3V0aXZlXCI+XG4gICAgICAgICAgICBQcm9maWxlXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGRhdGEtYWN0aXZlPXtwYXRobmFtZSA9PT0gXCIvZXhlY3V0aXZlL2V4b3RpY3NcIn0gdG89XCJleG90aWNzXCI+XG4gICAgICAgICAgICBFeG90aWNzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGRhdGEtYWN0aXZlPXtwYXRobmFtZSA9PT0gXCIvZXhlY3V0aXZlL21lZGlhXCJ9IHRvPVwibWVkaWFcIj5cbiAgICAgICAgICAgIEltYWdlc1xuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtYWluPlxuICAgICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExpbmtzRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGb3JtLCBMaW5rLCB1c2VMb2FkZXJEYXRhLCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7XG4gIENhcnRzLFxuICBkZWxldGVDdXJyZW50Q2FydCxcbiAgZGVsZXRlQ3VycmVudEVkaWJsZSxcbiAgZGVsZXRlQ3VycmVudEZsb3dlcixcbiAgZGVsZXRlQ3VycmVudFByZVJvbGwsXG4gIGRlbGV0ZUN1cnJlbnRXYXgsXG4gIEVkaWJsZXMsXG4gIEZsb3dlcnMsXG4gIGdldENhcnRzLFxuICBnZXRFZGlibGVzLFxuICBnZXRGbG93ZXJzLFxuICBnZXRQcmVSb2xscyxcbiAgZ2V0V2F4ZXMsXG4gIFByZVJvbGxzLFxuICBXYXhlcyxcbn0gZnJvbSBcIn4vZXhvdGljc1wiO1xuXG5pbXBvcnQgZXhlY1N0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2V4ZWMuY3NzXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgY2FydHM6IENhcnRzO1xuICBlZGlibGVzOiBFZGlibGVzO1xuICBmbG93ZXJzOiBGbG93ZXJzO1xuICBwcmVSb2xsczogUHJlUm9sbHM7XG4gIHdheGVzOiBXYXhlcztcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgY2FydFNlbGVjdGVkID0gZm9ybURhdGEuZ2V0KFwiY2FydFwiKTtcbiAgY29uc3QgZWRpYmxlU2VsZWN0ZWQgPSBmb3JtRGF0YS5nZXQoXCJlZGlibGVcIik7XG4gIGNvbnN0IGZsb3dlclNlbGVjdGVkID0gZm9ybURhdGEuZ2V0KFwiZmxvd2VyXCIpO1xuICBjb25zdCBwcmVSb2xsU2VsZWN0ZWQgPSBmb3JtRGF0YS5nZXQoXCJwcmVSb2xsXCIpO1xuICBjb25zdCB3YXhTZWxlY3RlZCA9IGZvcm1EYXRhLmdldChcIndheFwiKTtcblxuICBpZiAoY2FydFNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUN1cnJlbnRDYXJ0KCtjYXJ0U2VsZWN0ZWQpO1xuICB9XG5cbiAgaWYgKGVkaWJsZVNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUN1cnJlbnRFZGlibGUoK2VkaWJsZVNlbGVjdGVkKTtcbiAgfVxuXG4gIGlmIChmbG93ZXJTZWxlY3RlZCkge1xuICAgIHJldHVybiBhd2FpdCBkZWxldGVDdXJyZW50Rmxvd2VyKCtmbG93ZXJTZWxlY3RlZCk7XG4gIH1cblxuICBpZiAocHJlUm9sbFNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUN1cnJlbnRQcmVSb2xsKCtwcmVSb2xsU2VsZWN0ZWQpO1xuICB9XG5cbiAgaWYgKHdheFNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUN1cnJlbnRXYXgoK3dheFNlbGVjdGVkKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IFtjYXJ0cywgZWRpYmxlcywgZmxvd2VycywgcHJlUm9sbHMsIHdheGVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRDYXJ0cygpLFxuICAgIGdldEVkaWJsZXMoKSxcbiAgICBnZXRGbG93ZXJzKCksXG4gICAgZ2V0UHJlUm9sbHMoKSxcbiAgICBnZXRXYXhlcygpLFxuICBdKTtcblxuICByZXR1cm4geyBjYXJ0cywgZWRpYmxlcywgZmxvd2VycywgcHJlUm9sbHMsIHdheGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleGVjU3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlY3V0aXZlKCkge1xuICBjb25zdCB7IGNhcnRzLCBlZGlibGVzLCBmbG93ZXJzLCBwcmVSb2xscywgd2F4ZXMgfSA9XG4gICAgdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2Ugd3JhcCBcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdyBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8aDI+Rmxvd2VyczwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy9mbG93ZXJcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+XG4gICAgICAgICAge2Zsb3dlcnMuY3VycmVudC5tYXAoKGZsb3dlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake2Zsb3dlci5uYW1lfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwiZmxvd2VyXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImZsb3dlclwiIHZhbHVlPXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXIgc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntmbG93ZXIubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdyBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8aDI+Q2FydHM8L2gyPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRvPVwiL2V4ZWN1dGl2ZS9uZXcvY2FydFwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wgc3BhY2VcIj5cbiAgICAgICAgICB7Y2FydHMuY3VycmVudC5tYXAoKGNhcnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHtjYXJ0Lm5hbWV9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJjYXJ0XCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNhcnRcIiB2YWx1ZT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57Y2FydC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm93IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxoMj5QcmUgUm9sbHM8L2gyPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRvPVwiL2V4ZWN1dGl2ZS9uZXcvcHJlLXJvbGxcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+XG4gICAgICAgICAge3ByZVJvbGxzLmN1cnJlbnQubWFwKChwcmVSb2xsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YCR7cHJlUm9sbC5uYW1lfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwicHJlUm9sbFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwcmVSb2xsXCIgdmFsdWU9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlciBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3ByZVJvbGwubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdyBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8aDI+V2F4ZXM8L2gyPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRvPVwiL2V4ZWN1dGl2ZS9uZXcvd2F4XCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPlxuICAgICAgICAgIHt3YXhlcy5jdXJyZW50Lm1hcCgod2F4LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YCR7d2F4Lm5hbWV9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJ3YXhcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwid2F4XCIgdmFsdWU9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlciBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3dheC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm93IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxoMj5FZGlibGVzPC9oMj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidXR0b25cIiB0bz1cIi9leGVjdXRpdmUvbmV3L2VkaWJsZVwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wgc3BhY2VcIj5cbiAgICAgICAgICB7ZWRpYmxlcy5jdXJyZW50Lm1hcCgoZWRpYmxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YCR7ZWRpYmxlLm5hbWV9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJlZGlibGVcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZWRpYmxlXCIgdmFsdWU9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlciBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2VkaWJsZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBzMywgeyBkZWxldGVDdXJyZW50SW5kZXgsIGdldEZpbGUsIEtleXMgfSBmcm9tIFwiLi4vYXdzL2F3cy1leHBvcnRzXCI7XG5cbmV4cG9ydCBlbnVtIEZsb3dlclR5cGUge1xuICBIeWJyaWQgPSBcImh5YnJpZFwiLFxuICBJbmRpY2EgPSBcImluZGljYVwiLFxuICBTYXRpdmEgPSBcInNhdGl2YVwiLFxufVxuXG5leHBvcnQgZW51bSBXYXhUeXBlIHtcbiAgQmFkZGVyID0gXCJiYWRkZXJcIixcbiAgQ3J1bWJsZSA9IFwiY3J1bWJsZVwiLFxuICBTaGF0dGVyID0gXCJzaGF0dGVyXCIsXG4gIFNhdWNlID0gXCJzYXVjZVwiLFxufVxuXG5leHBvcnQgZW51bSBXcmFwIHtcbiAgSm9pbnQgPSBcImpvaW50XCIsXG4gIEJsdW50ID0gXCJibHVudFwiLFxufVxuXG5leHBvcnQgdHlwZSBQcmljZSA9IFJlY29yZDxzdHJpbmcsIG51bWJlcj47XG5cbmV4cG9ydCB0eXBlIEZsb3dlciA9IHtcbiAgY2xhc3M6IFwidGhjXCI7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBpbmRpY2E/OiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpY2U6IFByaWNlO1xuICBzYXRpdmE/OiBudW1iZXI7XG4gIHNyYz86IHN0cmluZztcbiAgc3VwcGxpZXI/OiBzdHJpbmc7XG4gIHN1cHBsaWVyVXJsPzogc3RyaW5nO1xuICB0eXBlOiBGbG93ZXJUeXBlO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBDYXJ0IGV4dGVuZHMgRmxvd2VyIHtcbiAgYW1vdW50Pzogc3RyaW5nO1xuICBkaXNwb3NhYmxlOiBib29sZWFuO1xuICBmbGF2b3JzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBFZGlibGUgZXh0ZW5kcyBPbWl0PEZsb3dlciwgXCJ0eXBlXCI+IHtcbiAgYW1vdW50OiBzdHJpbmc7XG4gIGZsYXZvcnM6IHN0cmluZ1tdO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlUm9sbCBleHRlbmRzIEZsb3dlciB7XG4gIGFtb3VudD86IHN0cmluZztcbiAgZmxhdm9yczogc3RyaW5nW107XG4gIHdyYXA6IFdyYXA7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdheCBleHRlbmRzIE9taXQ8Rmxvd2VyLCBcInR5cGVcIj4ge1xuICB0eXBlOiBXYXhUeXBlO1xufVxuXG5leHBvcnQgdHlwZSBGbG93ZXJzID0ge1xuICBjdXJyZW50OiBGbG93ZXJbXTtcbiAgdXBjb21pbmc6IEZsb3dlcltdO1xufTtcbmV4cG9ydCB0eXBlIENhcnRzID0ge1xuICBjdXJyZW50OiBDYXJ0W107XG4gIHVwY29taW5nOiBDYXJ0W107XG59O1xuXG5leHBvcnQgdHlwZSBFZGlibGVzID0ge1xuICBjdXJyZW50OiBFZGlibGVbXTtcbiAgdXBjb21pbmc6IEVkaWJsZVtdO1xufTtcblxuZXhwb3J0IHR5cGUgUHJlUm9sbHMgPSB7XG4gIGN1cnJlbnQ6IFByZVJvbGxbXTtcbiAgdXBjb21pbmc6IFByZVJvbGxbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdheGVzID0ge1xuICBjdXJyZW50OiBXYXhbXTtcbiAgdXBjb21pbmc6IFdheFtdO1xufTtcblxuLy8gQ3JlYXRlXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FydCA9IGFzeW5jIChjYXJ0OiBDYXJ0KSA9PiB7XG4gIGNvbnN0IGNhcnRzID0gYXdhaXQgZ2V0Q2FydHMoKTtcblxuICBjYXJ0cy5jdXJyZW50LnB1c2goY2FydCk7XG5cbiAgY29uc3QgbWluaWZpZWRDYXJ0cyA9IEpTT04uc3RyaW5naWZ5KGNhcnRzKTtcblxuICByZXR1cm4gYXdhaXQgczNcbiAgICAucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IEtleXMuQ2FydCxcbiAgICAgIEJvZHk6IG1pbmlmaWVkQ2FydHMsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVkaWJsZSA9IGFzeW5jIChlZGlibGU6IEVkaWJsZSkgPT4ge1xuICBjb25zdCBlZGlibGVzID0gYXdhaXQgZ2V0RWRpYmxlcygpO1xuXG4gIGVkaWJsZXMuY3VycmVudC5wdXNoKGVkaWJsZSk7XG5cbiAgY29uc3QgbWluaWZpZWRFZGlibGVzID0gSlNPTi5zdHJpbmdpZnkoZWRpYmxlcyk7XG5cbiAgcmV0dXJuIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBLZXlzLkVkaWJsZSxcbiAgICAgIEJvZHk6IG1pbmlmaWVkRWRpYmxlcyxcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRmxvd2VyID0gYXN5bmMgKGZsb3dlcjogRmxvd2VyKSA9PiB7XG4gIGNvbnN0IGZsb3dlcnMgPSBhd2FpdCBnZXRGbG93ZXJzKCk7XG5cbiAgZmxvd2Vycy5jdXJyZW50LnB1c2goZmxvd2VyKTtcblxuICBjb25zdCBtaW5pZmllZEZsb3dlcnMgPSBKU09OLnN0cmluZ2lmeShmbG93ZXJzKTtcblxuICByZXR1cm4gYXdhaXQgczNcbiAgICAucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IEtleXMuRmxvd2VyLFxuICAgICAgQm9keTogbWluaWZpZWRGbG93ZXJzLFxuICAgIH0pXG4gICAgLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQcmVSb2xsID0gYXN5bmMgKHByZVJvbGw6IFByZVJvbGwpID0+IHtcbiAgY29uc3QgcHJlUm9sbHMgPSBhd2FpdCBnZXRQcmVSb2xscygpO1xuXG4gIHByZVJvbGxzLmN1cnJlbnQucHVzaChwcmVSb2xsKTtcblxuICBjb25zdCBtaW5pZmllZFByZVJvbGxzID0gSlNPTi5zdHJpbmdpZnkocHJlUm9sbHMpO1xuXG4gIHJldHVybiBhd2FpdCBzM1xuICAgIC5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleTogS2V5cy5QcmVSb2xsLFxuICAgICAgQm9keTogbWluaWZpZWRQcmVSb2xscyxcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlV2F4ID0gYXN5bmMgKHdheDogV2F4KSA9PiB7XG4gIGNvbnN0IHdheGVzID0gYXdhaXQgZ2V0V2F4ZXMoKTtcblxuICB3YXhlcy5jdXJyZW50LnB1c2god2F4KTtcblxuICBjb25zdCBtaW5pZmllZFdheGVzID0gSlNPTi5zdHJpbmdpZnkod2F4ZXMpO1xuXG4gIHJldHVybiBhd2FpdCBzM1xuICAgIC5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleTogS2V5cy5XYXgsXG4gICAgICBCb2R5OiBtaW5pZmllZFdheGVzLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn07XG5cbi8vIFJlYWRcbmV4cG9ydCBjb25zdCBnZXRDYXJ0cyA9ICgpID0+IGdldEZpbGUoS2V5cy5DYXJ0KTtcblxuZXhwb3J0IGNvbnN0IGdldEVkaWJsZXMgPSAoKSA9PiBnZXRGaWxlKEtleXMuRWRpYmxlKTtcblxuZXhwb3J0IGNvbnN0IGdldEZsb3dlcnMgPSAoKSA9PiBnZXRGaWxlKEtleXMuRmxvd2VyKTtcblxuZXhwb3J0IGNvbnN0IGdldFByZVJvbGxzID0gKCkgPT4gZ2V0RmlsZShLZXlzLlByZVJvbGwpO1xuXG5leHBvcnQgY29uc3QgZ2V0V2F4ZXMgPSAoKSA9PiBnZXRGaWxlKEtleXMuV2F4KTtcblxuLy8gRGVsZXRlXG5leHBvcnQgY29uc3QgZGVsZXRlQ3VycmVudENhcnQgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgZGVsZXRlQ3VycmVudEluZGV4KEtleXMuQ2FydCwgaW5kZXgpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ3VycmVudEVkaWJsZSA9IChpbmRleDogbnVtYmVyKSA9PlxuICBkZWxldGVDdXJyZW50SW5kZXgoS2V5cy5FZGlibGUsIGluZGV4KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUN1cnJlbnRGbG93ZXIgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgZGVsZXRlQ3VycmVudEluZGV4KEtleXMuRmxvd2VyLCBpbmRleCk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDdXJyZW50UHJlUm9sbCA9IChpbmRleDogbnVtYmVyKSA9PlxuICBkZWxldGVDdXJyZW50SW5kZXgoS2V5cy5QcmVSb2xsLCBpbmRleCk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDdXJyZW50V2F4ID0gKGluZGV4OiBudW1iZXIpID0+XG4gIGRlbGV0ZUN1cnJlbnRJbmRleChLZXlzLldheCwgaW5kZXgpO1xuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMaW5rLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRm9ybSwgcmVkaXJlY3QsIHVzZUxvYWRlckRhdGEsIHVzZVRyYW5zaXRpb24gfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHsgZ2V0UHJvZmlsZSwgUHJvZmlsZSwgdXBkYXRlUHJvZmlsZSB9IGZyb20gXCJ+L3Byb2ZpbGVcIjtcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gXCJ+L3V0aWxzL2Zvcm1hdERhdGVcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBwcm9maWxlOiBQcm9maWxlO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBwcm9maWxlID0gKGF3YWl0IGdldFByb2ZpbGUoKSkgYXMgUHJvZmlsZTtcblxuICBjb25zdCBpbnN0YWdyYW1VcmwgPSBmb3JtRGF0YS5nZXQoXCJpbnN0YVwiKTtcbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRhdGUgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpO1xuXG4gIGlmICh0eXBlb2YgZGF0ZSA9PT0gXCJzdHJpbmdcIiAmJiAhaXNOYU4oK2RhdGUpKSB7XG4gICAgcHJvZmlsZS5kYXRlc0Nsb3NlZC5zcGxpY2UoK2RhdGUsIDEpO1xuICB9XG5cbiAgaWYgKGluc3RhZ3JhbVVybCA9PT0gXCJzdHJpbmdcIiAmJiB0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIHByb2ZpbGUuaW5zdGFncmFtVXJsID0gaW5zdGFncmFtVXJsO1xuICAgIHByb2ZpbGUubmFtZSA9IG5hbWU7XG4gIH1cblxuICBhd2FpdCB1cGRhdGVQcm9maWxlKHByb2ZpbGUpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9leGVjdXRpdmVcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBwcm9maWxlID0gYXdhaXQgZ2V0UHJvZmlsZSgpO1xuXG4gIHJldHVybiB7IHByb2ZpbGUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZWN1dGl2ZUluZGV4KCkge1xuICBjb25zdCB7XG4gICAgcHJvZmlsZTogeyBkYXRlc0Nsb3NlZCwgaW5zdGFncmFtVXJsLCBuYW1lIH0sXG4gIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiByb3cgc3BhY2Ugd3JhcFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8aDI+VXBkYXRlIFByb2ZpbGU8L2gyPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2x1bW4gc3BhY2VcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSW5zdGFncmFtIFVSTDpcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJpbnN0YVwiIGRlZmF1bHRWYWx1ZT17aW5zdGFncmFtVXJsfSAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQ29tcGFueSBOYW1lOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBkZWZhdWx0VmFsdWU9e25hbWV9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImNyZWF0ZVwiPlxuICAgICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiVXBkYXRpbmcuLi5cIiA6IFwiVXBkYXRlXCJ9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPGgyPkRhdGVzIENsb3NlZDwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlXCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPlxuICAgICAgICAgIHtkYXRlc0Nsb3NlZC5tYXAoKGRhdGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjbG9zZVRpbWUgPSBuZXcgRGF0ZShkYXRlWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5UaW1lID0gbmV3IERhdGUoZGF0ZVsxXSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8bGkga2V5PXtgJHtkYXRlWzBdfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJkYXRlXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZGF0ZVwiIHZhbHVlPXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlciBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShjbG9zZVRpbWUpfS17Zm9ybWF0RGF0ZShvcGVuVGltZSl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5pbXBvcnQgczMgZnJvbSBcIi4uL2F3cy9hd3MtZXhwb3J0c1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFByb2ZpbGUge1xuICBkYXRlc0Nsb3NlZDogc3RyaW5nW11bXTtcbiAgaG91ck9wZW46IG51bWJlcjtcbiAgaW5zdGFncmFtVXJsOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgdXBkYXRlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVQcm9maWxlID0gYXN5bmMgKHByb2ZpbGU6IFByb2ZpbGUpID0+IHtcbiAgY29uc3QgbWluaWZpZWRQcm9maWxlID0gSlNPTi5zdHJpbmdpZnkocHJvZmlsZSk7XG5cbiAgcmV0dXJuIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBcImJheW91LWV4b3RpY3MuanNvblwiLFxuICAgICAgQm9keTogbWluaWZpZWRQcm9maWxlLFxuICAgIH0pXG4gICAgLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9maWxlID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBleGVjdXRpdmUgPSBhd2FpdCBzM1xuICAgIC5nZXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleTogXCJiYXlvdS1leG90aWNzLmpzb25cIixcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgZmV0Y2hpbmcgYXNzZXRzIHBhdGhcIiwgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0pO1xuXG4gIGlmICghZXhlY3V0aXZlIHx8ICFleGVjdXRpdmUuQm9keSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcImJheW91LWV4b3RpY3MuanNvbiBoYXMgbm8gQm9keVwiKTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSBleGVjdXRpdmUuQm9keS50b1N0cmluZygpO1xuXG4gIGNvbnN0IHByb2ZpbGU6IFByb2ZpbGUgPSBKU09OLnBhcnNlKGRhdGEpO1xuXG4gIHByb2ZpbGUuZGF0ZXNDbG9zZWQgPSBwcm9maWxlLmRhdGVzQ2xvc2VkLmZpbHRlcihcbiAgICAoWywgZGF0ZTJdKSA9PiAhaXNQYXN0KG5ldyBEYXRlKGRhdGUyKSlcbiAgKTtcblxuICByZXR1cm4gcHJvZmlsZTtcbn07XG4iLCAiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGRhdGVGb3JtYXQgPSBcIk0vZC95eXl5ICdhdCcgaDptbSBhYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGU6IERhdGUpIHtcbiAgcmV0dXJuIGZvcm1hdChkYXRlLCBkYXRlRm9ybWF0KTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGRlbGV0ZUFzc2V0LCBnZXRBc3NldHMgfSBmcm9tIFwifi9hc3NldHNcIjtcbmltcG9ydCBnZXRBc3NldFVybCBmcm9tIFwifi91dGlscy9nZXRBc3NldFVybFwiO1xuXG5pbXBvcnQgZXhlY1N0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL2V4ZWMuY3NzXCI7XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgYXNzZXRzOiBzdHJpbmdbXTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGFzc2V0ID0gZm9ybURhdGEuZ2V0KFwiYXNzZXRcIik7XG5cbiAgaWYgKCFhc3NldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgYXNzZXQgPT09IFwic3RyaW5nXCIpO1xuXG4gIHJldHVybiBhd2FpdCBkZWxldGVBc3NldChhc3NldCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YTogTG9hZGVyRGF0YSA9IHsgYXNzZXRzOiBhd2FpdCBnZXRBc3NldHMoKSB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZXhlY1N0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZWN1dGl2ZSgpIHtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG1lZGlhXCI+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm93IHNwYWNlLTJcIj5cbiAgICAgICAgICA8aDI+SW1hZ2VzPC9oMj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidXR0b25cIiB0bz1cIi9leGVjdXRpdmUvbmV3L21lZGlhXCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInJvdyBzcGFjZSB3cmFwXCI+XG4gICAgICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImNvbnRlbnQgcmVsYXRpdmVcIiBrZXk9e2Ake2Fzc2V0fS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8Rm9ybSBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiYXNzZXRcIiB2YWx1ZT17YXNzZXR9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiXCIgc3JjPXtnZXRBc3NldFVybChhc3NldCl9IHdpZHRoPVwiMTAwJVwiIC8+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBhYnNvbHV0ZSBhc3NldC1kZWxldGUtcG9zaXRpb25cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgczMgZnJvbSBcIi4uL2F3cy9hd3MtZXhwb3J0c1wiO1xuXG5leHBvcnQgY29uc3QgYWRkQXNzZXQgPSBhc3luYyAoZmlsZW5hbWU6IHN0cmluZywgYmFzZTY0ZGF0YT86IEJ1ZmZlcikgPT4ge1xuICByZXR1cm4gczNcbiAgICAudXBsb2FkKHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzL2Fzc2V0c1wiLFxuICAgICAgS2V5OiBlbmNvZGVVUkkoZmlsZW5hbWUpLFxuICAgICAgQm9keTogYmFzZTY0ZGF0YSxcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSk7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQXNzZXQgPSBhc3luYyAoZmlsZW5hbWU6IHN0cmluZykgPT4ge1xuICByZXR1cm4gczNcbiAgICAuZGVsZXRlT2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IGZpbGVuYW1lLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRBc3NldHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFzc2V0cyA9IGF3YWl0IHMzXG4gICAgLmxpc3RPYmplY3RzVjIoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIFByZWZpeDogXCJhc3NldHMvXCIsXG4gICAgICBTdGFydEFmdGVyOiBcImFzc2V0cy9cIixcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgZmV0Y2hpbmcgYXNzZXRzIHBhdGhcIiwgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0pO1xuXG4gIGNvbnN0IGFzc2V0S2V5czogc3RyaW5nW10gPSBbXTtcblxuICBpZiAoIWFzc2V0cyB8fCAhYXNzZXRzLkNvbnRlbnRzKSB7XG4gICAgcmV0dXJuIGFzc2V0S2V5cztcbiAgfVxuXG4gIGZvciAoY29uc3QgYXNzZXQgb2YgYXNzZXRzLkNvbnRlbnRzKSB7XG4gICAgaWYgKGFzc2V0LktleSkge1xuICAgICAgYXNzZXRLZXlzLnB1c2goYXNzZXQuS2V5KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXNzZXRLZXlzO1xufTtcbiIsICJjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9iYXlvdS1leG90aWNzLnMzLnVzLWVhc3QtMi5hbWF6b25hd3MuY29tL1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRBc3NldFVybChwYXRoOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGAke0JBU0VfVVJMfSR7cGF0aH1gO1xufVxuIiwgImltcG9ydCB7IE91dGxldCB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdGbG93ZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxPdXRsZXQgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBpc1Bhc3QgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGb3JtLCByZWRpcmVjdCwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgZ2V0UHJvZmlsZSwgUHJvZmlsZSwgdXBkYXRlUHJvZmlsZSB9IGZyb20gXCJ+L3Byb2ZpbGVcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgY3VycmVudFByb2ZpbGUgPSAoYXdhaXQgZ2V0UHJvZmlsZSgpKSBhcyBQcm9maWxlO1xuXG4gIGNvbnN0IGNsb3NlID0gZm9ybURhdGEuZ2V0KFwiY2xvc2VcIik7XG4gIGNvbnN0IG9wZW4gPSBmb3JtRGF0YS5nZXQoXCJvcGVuXCIpO1xuXG4gIGludmFyaWFudCh0eXBlb2YgY2xvc2UgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG9wZW4gPT09IFwic3RyaW5nXCIpO1xuXG4gIGNvbnN0IGNsb3NpbmcgPSBbY2xvc2UsIG9wZW5dO1xuXG4gIGNvbnN0IGRhdGVzQ2xvc2VkID0gY3VycmVudFByb2ZpbGUuZGF0ZXNDbG9zZWQuZmlsdGVyKFxuICAgIChbZGF0ZTEsIGRhdGUyXSkgPT4gIWlzUGFzdChuZXcgRGF0ZShkYXRlMSkpICYmICFpc1Bhc3QobmV3IERhdGUoZGF0ZTIpKVxuICApO1xuXG4gIGRhdGVzQ2xvc2VkLnB1c2goY2xvc2luZyk7XG5cbiAgYXdhaXQgdXBkYXRlUHJvZmlsZSh7IC4uLmN1cnJlbnRQcm9maWxlLCBkYXRlc0Nsb3NlZCB9KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlXCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3Q2xvc2VEYXRlKCkge1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgPGgyPkFkZCBEYXRlIENsb3NlZDwvaDI+XG4gICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2wgc3BhY2VcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBUaW1lIENsb3Npbmc6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgbWluPXtkYXRlLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICBuYW1lPVwiY2xvc2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbD5cbiAgICAgICAgICBUaW1lIFJlLW9wZW5pbmc6XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiZGF0ZXRpbWUtbG9jYWxcIlxuICAgICAgICAgICAgbWluPXtkYXRlLnRvTG9jYWxlU3RyaW5nKCl9XG4gICAgICAgICAgICBuYW1lPVwib3BlblwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjcmVhdGVcIj5cbiAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJVcGRhdGluZy4uLlwiIDogXCJBZGQgRGF0ZXMgQ2xvc2luZ1wifVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvRm9ybT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgZ2V0QXNzZXRzIH0gZnJvbSBcIn4vYXNzZXRzXCI7XG5pbXBvcnQgeyBjcmVhdGVQcmVSb2xsLCBGbG93ZXJUeXBlLCBQcmVSb2xsLCBXcmFwIH0gZnJvbSBcIn4vZXhvdGljc1wiO1xuaW1wb3J0IGdldFByZVJvbGxQcmljZSwgeyBQcmljZUVycm9yIH0gZnJvbSBcIn4vdXRpbHMvZ2V0UHJlUm9sbFByaWNlXCI7XG5cbmludGVyZmFjZSBQb3N0RXJyb3IgZXh0ZW5kcyBQcmljZUVycm9yIHtcbiAgYW1vdW50PzogYm9vbGVhbjtcbiAgbmFtZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgYXNzZXRzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgYXZhaWxhYmxlUHJlUm9sbFF1YW50aXRpZXMgPSBbXCIxXCIsIFwiNVwiLCBcIjEwXCJdO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGZsYXZvckZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZmxhdm9yc1wiKTtcblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcbiAgY29uc3QgYW1vdW50ID0gZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICFkZXNjcmlwdGlvbkZvcm1EYXRhXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChkZXNjcmlwdGlvbkZvcm1EYXRhIGFzIHN0cmluZyk7XG4gIGNvbnN0IGZsYXZvcnMgPSAhZmxhdm9yRm9ybURhdGEgPyB1bmRlZmluZWQgOiAoZmxhdm9yRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgZmxvd2VyVHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgRmxvd2VyVHlwZTtcbiAgY29uc3Qgd3JhcCA9IGZvcm1EYXRhLmdldChcIndyYXBcIikgYXMgV3JhcDtcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcblxuICBjb25zdCB7IHByaWNlLCBlcnJvcnM6IHByaWNlRXJyb3JzIH0gPSBnZXRQcmVSb2xsUHJpY2UoZm9ybURhdGEpO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0gcHJpY2VFcnJvcnMgPyB7IC4uLnByaWNlRXJyb3JzIH0gOiB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgZXJyb3JzLm5hbWUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKCFhbW91bnQpIHtcbiAgICBlcnJvcnMuYW1vdW50ID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIGFtb3VudCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZmxvd2VyVHlwZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHByaWNlICE9PSBcInVuZGVmaW5lZFwiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB3cmFwID09PSBcInN0cmluZ1wiKTtcblxuICBjb25zdCBwcmVSb2xsOiBQcmVSb2xsID0ge1xuICAgIGFtb3VudCxcbiAgICBjbGFzczogXCJ0aGNcIixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBmbGF2b3JzOiBmbGF2b3JzID8gZmxhdm9ycy5zcGxpdChcIixcIikgOiBbXSxcbiAgICBzcmM6IGltYWdlID09PSBcIk5vbmVcIiA/IFwiYXNzZXRzL2JheW91LWxvZ28ucG5nXCIgOiBpbWFnZSxcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIHR5cGU6IGZsb3dlclR5cGUsXG4gICAgd3JhcCxcbiAgfTtcblxuICBhd2FpdCBjcmVhdGVQcmVSb2xsKHByZVJvbGwpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9leGVjdXRpdmUvZXhvdGljc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0cygpO1xuXG4gIHJldHVybiB7IGFzc2V0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3UHJlUm9sbCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPGgyPkNyZWF0ZSBQcmUgUm9sbDwvaDI+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbCBzcGFjZS0yXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IHtlcnJvcnM/Lm5hbWUgPyA8ZW0+TmFtZSBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5JbmRpY2EsIEh5YnJpZCwgb3IgQm90aDwvbGVnZW5kPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImluZGljYVwiIGRlZmF1bHRDaGVja2VkIC8+e1wiIFwifVxuICAgICAgICAgICAgICBJbmRpY2FcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwic2F0aXZhXCIgLz4gU2F0aXZhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImh5YnJpZFwiIC8+IEh5YnJpZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPldyYXA8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ3cmFwXCIgdmFsdWU9XCJqb2ludFwiIGRlZmF1bHRDaGVja2VkIC8+e1wiIFwifVxuICAgICAgICAgICAgICBKb2ludFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ3cmFwXCIgdmFsdWU9XCJibHVudFwiIC8+IEJsdW50XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQW1vdW50IChnKToge2Vycm9ycz8uYW1vdW50ID8gPGVtPkFtb3VudCBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBzdGVwPVwiLjAxXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEltYWdlOntcIiBcIn1cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2Fzc2V0fSB2YWx1ZT17YXNzZXR9PlxuICAgICAgICAgICAgICAgICAge2Fzc2V0fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gKG9wdGlvbmFsKTo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPXsyfSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmxhdm9yc1wiPlxuICAgICAgICAgICAgICBGbGF2b3JzIChvcHRpb25hbCk6e1wiIFwifVxuICAgICAgICAgICAgICB7ZXJyb3JzPy5uYW1lID8gPGVtPkF0IGxlYXN0IDEgZmxhdm9yIGlzIHJlcXVpcmVkPC9lbT4gOiBudWxsfXtcIiBcIn1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJmbGF2b3JzXCJcbiAgICAgICAgICAgICAgcm93cz17Mn1cbiAgICAgICAgICAgICAgbmFtZT1cImZsYXZvcnNcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZsYXZvciAxLCBmbGF2b3IgMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aDM+UHJpY2VzIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZXMgY29sIHNwYWNlXCI+XG4gICAgICAgICAgICB7YXZhaWxhYmxlUHJlUm9sbFF1YW50aXRpZXMubWFwKChxdWFudGl0eSkgPT4gKFxuICAgICAgICAgICAgICA8bGFiZWwga2V5PXtxdWFudGl0eX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7cXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzPy5bcXVhbnRpdHldID8gPGVtPio8L2VtPiA6IG51bGx9IDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICRcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9e2Ake3F1YW50aXR5fWB9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb3cgc3BhY2UgZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImNyZWF0ZVwiPlxuICAgICAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJDcmVhdGluZy4uLlwiIDogXCJDcmVhdGUgUHJlIFJvbGxcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpY2UgfSBmcm9tIFwifi9leG90aWNzXCI7XG5cbmltcG9ydCBnZXRGb3JtUHJpY2UgZnJvbSBcIi4vZ2V0Rm9ybVByaWNlXCI7XG5cbmV4cG9ydCB0eXBlIFByaWNlRXJyb3IgPSB7XG4gIFwiMVwiPzogYm9vbGVhbjtcbiAgXCI1XCI/OiBib29sZWFuO1xuICBcIjEwXCI/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJlUm9sbFByaWNlKGZvcm1EYXRhOiBnbG9iYWxUaGlzLkZvcm1EYXRhKSB7XG4gIGNvbnN0IGVycm9yczogUHJpY2VFcnJvciA9IHt9O1xuXG4gIGNvbnN0IHByaWNlRGF0YTogUHJpY2UgPSB7XG4gICAgMTogMCxcbiAgICA1OiAwLFxuICAgIDEwOiAwLFxuICB9O1xuXG4gIGNvbnN0IG9uZSA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCIxXCIpKTtcbiAgY29uc3QgZml2ZSA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCI1XCIpKTtcbiAgY29uc3QgdGVuID0gZ2V0Rm9ybVByaWNlKGZvcm1EYXRhLmdldChcIjEwXCIpKTtcblxuICBpZiAoIW9uZSkge1xuICAgIGVycm9yc1tcIjFcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjFcIl0gPSBvbmU7XG4gIH1cblxuICBpZiAoIWZpdmUpIHtcbiAgICBlcnJvcnNbXCI1XCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCI1XCJdID0gZml2ZTtcbiAgfVxuXG4gIGlmICghdGVuKSB7XG4gICAgZXJyb3JzW1wiMTBcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjEwXCJdID0gdGVuO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLFxuICAgIHByaWNlOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA/IHVuZGVmaW5lZCA6IHByaWNlRGF0YSxcbiAgfTtcbn1cbiIsICJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGb3JtUHJpY2UodmFsdWU6IEZvcm1EYXRhRW50cnlWYWx1ZSB8IG51bGwpIHtcbiAgcmV0dXJuICEhdmFsdWUgJiYgIWlzTmFOKCt2YWx1ZSkgJiYgK3ZhbHVlID4gMCA/ICt2YWx1ZSA6IHVuZGVmaW5lZDtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgZ2V0QXNzZXRzIH0gZnJvbSBcIn4vYXNzZXRzXCI7XG5pbXBvcnQgeyBjcmVhdGVFZGlibGUsIEVkaWJsZSB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCBnZXRFZGlibGVQcmljZSwgeyBQcmljZUVycm9yIH0gZnJvbSBcIn4vdXRpbHMvZ2V0UHJpY2VGb3JUd29cIjtcblxuaW50ZXJmYWNlIFBvc3RFcnJvciBleHRlbmRzIFByaWNlRXJyb3Ige1xuICBhbW91bnQ/OiBib29sZWFuO1xuICBuYW1lPzogYm9vbGVhbjtcbiAgZmxhdm9ycz86IGJvb2xlYW47XG4gIHR5cGU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZUNhcnRRdWFudGl0aWVzID0gW1wiMVwiLCBcIjJcIl07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IGZvcm1EYXRhLmdldChcImFtb3VudFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAhZGVzY3JpcHRpb25Gb3JtRGF0YVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoZGVzY3JpcHRpb25Gb3JtRGF0YSBhcyBzdHJpbmcpO1xuICBjb25zdCBmbGF2b3JzID0gZm9ybURhdGEuZ2V0KFwiZmxhdm9yc1wiKTtcbiAgY29uc3QgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIik7XG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIik7XG5cbiAgY29uc3QgeyBwcmljZSwgZXJyb3JzOiBwcmljZUVycm9ycyB9ID0gZ2V0RWRpYmxlUHJpY2UoZm9ybURhdGEpO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0gcHJpY2VFcnJvcnMgPyB7IC4uLnByaWNlRXJyb3JzIH0gOiB7fTtcblxuICBpZiAoIW5hbWUpIHtcbiAgICBlcnJvcnMubmFtZSA9IHRydWU7XG4gIH1cbiAgaWYgKCFhbW91bnQpIHtcbiAgICBlcnJvcnMuYW1vdW50ID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWZsYXZvcnMpIHtcbiAgICBlcnJvcnMuZmxhdm9ycyA9PT0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIGFtb3VudCA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZmxhdm9ycyA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHByaWNlICE9PSBcInVuZGVmaW5lZFwiKTtcblxuICBjb25zdCBlZGlibGU6IEVkaWJsZSA9IHtcbiAgICBhbW91bnQsXG4gICAgY2xhc3M6IFwidGhjXCIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZmxhdm9yczogZmxhdm9ycy5zcGxpdChcIixcIikubWFwKChmbGF2b3IpID0+IGZsYXZvci50cmltKCkpLFxuICAgIHNyYzogaW1hZ2UgPT09IFwiTm9uZVwiID8gXCJhc3NldHMvYmF5b3UtbG9nby5wbmdcIiA6IGltYWdlLFxuICAgIG5hbWUsXG4gICAgcHJpY2UsXG4gICAgdHlwZSxcbiAgfTtcblxuICBhd2FpdCBjcmVhdGVFZGlibGUoZWRpYmxlKTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0NhcnQoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxoMj5DcmVhdGUgRWRpYmxlPC9oMj5cbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY29sIHNwYWNlLTJcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTmFtZToge2Vycm9ycz8ubmFtZSA/IDxlbT5OYW1lIGlzIHJlcXVpcmVkPC9lbT4gOiBudWxsfXtcIiBcIn1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIFR5cGU6IHtlcnJvcnM/LnR5cGUgPyA8ZW0+VHlwZSBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidHlwZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBBbW91bnQgKG1nKToge2Vycm9ycz8uYW1vdW50ID8gPGVtPkFtb3VudCBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9XCJhbW91bnRcIiBzdGVwPVwiLjAxXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEltYWdlOntcIiBcIn1cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2Fzc2V0fSB2YWx1ZT17YXNzZXR9PlxuICAgICAgICAgICAgICAgICAge2Fzc2V0fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gKG9wdGlvbmFsKTo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPXsyfSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmxhdm9yc1wiPlxuICAgICAgICAgICAgICBGbGF2b3JzOntcIiBcIn1cbiAgICAgICAgICAgICAge2Vycm9ycz8ubmFtZSA/IDxlbT5BdCBsZWFzdCAxIGZsYXZvciBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwiZmxhdm9yc1wiXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XG4gICAgICAgICAgICAgIG5hbWU9XCJmbGF2b3JzXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmbGF2b3IgMSwgZmxhdm9yIDJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGgzPlByaWNlcyA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzIGNvbCBzcGFjZVwiPlxuICAgICAgICAgICAge2F2YWlsYWJsZUNhcnRRdWFudGl0aWVzLm1hcCgocXVhbnRpdHkpID0+IChcbiAgICAgICAgICAgICAgPGxhYmVsIGtleT17cXVhbnRpdHl9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAge2Vycm9ycz8uW3F1YW50aXR5XSA/IDxlbT4qPC9lbT4gOiBudWxsfSA6e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAkXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPXtgJHtxdWFudGl0eX1gfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm93IHNwYWNlIGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjcmVhdGVcIj5cbiAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiQ3JlYXRpbmcuLi5cIiA6IFwiQ3JlYXRlIEVkaWJsZVwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQcmljZSB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcblxuaW1wb3J0IGdldEZvcm1QcmljZSBmcm9tIFwiLi9nZXRGb3JtUHJpY2VcIjtcblxuZXhwb3J0IHR5cGUgUHJpY2VFcnJvciA9IHtcbiAgXCIxXCI/OiBib29sZWFuO1xuICBcIjJcIj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcmljZUZvclR3byhmb3JtRGF0YTogZ2xvYmFsVGhpcy5Gb3JtRGF0YSkge1xuICBjb25zdCBlcnJvcnM6IFByaWNlRXJyb3IgPSB7fTtcblxuICBjb25zdCBwcmljZURhdGE6IFByaWNlID0ge1xuICAgIDE6IDAsXG4gICAgMjogMCxcbiAgfTtcblxuICBjb25zdCBvbmUgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMVwiKSk7XG4gIGNvbnN0IHR3byA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCIyXCIpKTtcblxuICBpZiAoIW9uZSkge1xuICAgIGVycm9yc1tcIjFcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjFcIl0gPSBvbmU7XG4gIH1cblxuICBpZiAoIXR3bykge1xuICAgIGVycm9yc1tcIjJcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjJcIl0gPSB0d287XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGVycm9yczogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPyBlcnJvcnMgOiB1bmRlZmluZWQsXG4gICAgcHJpY2U6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID8gdW5kZWZpbmVkIDogcHJpY2VEYXRhLFxuICB9O1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBGb3JtLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgeyBnZXRBc3NldHMgfSBmcm9tIFwifi9hc3NldHNcIjtcbmltcG9ydCB7IGNyZWF0ZUZsb3dlciwgRmxvd2VyLCBGbG93ZXJUeXBlIH0gZnJvbSBcIn4vZXhvdGljc1wiO1xuaW1wb3J0IGdldEZsb3dlclByaWNlLCB7IFByaWNlRXJyb3IgfSBmcm9tIFwifi91dGlscy9nZXRGbG93ZXJQcmljZVwiO1xuXG5pbnRlcmZhY2UgUG9zdEVycm9yIGV4dGVuZHMgUHJpY2VFcnJvciB7XG4gIG5hbWU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZUZsb3dlclF1YW50aXRpZXMgPSBbXCIxXCIsIFwiMlwiLCBcIjMuNVwiLCBcIjdcIiwgXCIxNFwiLCBcIjI4XCJdO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gIWRlc2NyaXB0aW9uRm9ybURhdGFcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGRlc2NyaXB0aW9uRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgZmxvd2VyVHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgRmxvd2VyVHlwZTtcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcblxuICBjb25zdCB7IHByaWNlLCBlcnJvcnM6IHByaWNlRXJyb3JzIH0gPSBnZXRGbG93ZXJQcmljZShmb3JtRGF0YSk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSBwcmljZUVycm9ycyA/IHsgLi4ucHJpY2VFcnJvcnMgfSA6IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICBlcnJvcnMubmFtZSA9IHRydWU7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBmbG93ZXJUeXBlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHJpY2UgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gIGNvbnN0IGZsb3dlcjogRmxvd2VyID0ge1xuICAgIGNsYXNzOiBcInRoY1wiLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHNyYzogaW1hZ2UgPT09IFwiTm9uZVwiID8gXCJhc3NldHMvYmF5b3UtbG9nby5wbmdcIiA6IGltYWdlLFxuICAgIG5hbWUsXG4gICAgcHJpY2UsXG4gICAgdHlwZTogZmxvd2VyVHlwZSxcbiAgfTtcblxuICBhd2FpdCBjcmVhdGVGbG93ZXIoZmxvd2VyKTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0Zsb3dlcigpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPGgyPkNyZWF0ZSBGbG93ZXI8L2gyPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiB7ZXJyb3JzPy5uYW1lID8gPGVtPk5hbWUgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzci1vbmx5XCI+SW5kaWNhLCBIeWJyaWQsIG9yIEJvdGg8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJpbmRpY2FcIiBkZWZhdWx0Q2hlY2tlZCAvPntcIiBcIn1cbiAgICAgICAgICAgICAgSW5kaWNhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInNhdGl2YVwiIC8+IFNhdGl2YVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJoeWJyaWRcIiAvPiBIeWJyaWRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbWFnZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldH0gdmFsdWU9e2Fzc2V0fT5cbiAgICAgICAgICAgICAgICAgIHthc3NldH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChvcHRpb25hbCk6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz17Mn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGgzPlByaWNlcyA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzIGNvbCBzcGFjZVwiPlxuICAgICAgICAgICAge2F2YWlsYWJsZUZsb3dlclF1YW50aXRpZXMubWFwKChxdWFudGl0eSkgPT4gKFxuICAgICAgICAgICAgICA8bGFiZWwga2V5PXtxdWFudGl0eX0+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICB7cXVhbnRpdHl9XG4gICAgICAgICAgICAgICAgICB7ZXJyb3JzPy5bcXVhbnRpdHldID8gPGVtPio8L2VtPiA6IG51bGx9IDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICRcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIG5hbWU9e2Ake3F1YW50aXR5fWB9IC8+XG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb3cgc3BhY2UgZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImNyZWF0ZVwiPlxuICAgICAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJDcmVhdGluZy4uLlwiIDogXCJDcmVhdGUgRmxvd2VyXCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaWNlIH0gZnJvbSBcIn4vZXhvdGljc1wiO1xuXG5pbXBvcnQgZ2V0Rm9ybVByaWNlIGZyb20gXCIuL2dldEZvcm1QcmljZVwiO1xuXG5leHBvcnQgdHlwZSBQcmljZUVycm9yID0ge1xuICBcIjFcIj86IGJvb2xlYW47XG4gIFwiMlwiPzogYm9vbGVhbjtcbiAgXCIzLjVcIj86IGJvb2xlYW47XG4gIFwiN1wiPzogYm9vbGVhbjtcbiAgXCIxNFwiPzogYm9vbGVhbjtcbiAgXCIyOFwiPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEZsb3dlclByaWNlKGZvcm1EYXRhOiBnbG9iYWxUaGlzLkZvcm1EYXRhKSB7XG4gIGNvbnN0IGVycm9yczogUHJpY2VFcnJvciA9IHt9O1xuXG4gIGNvbnN0IHByaWNlRGF0YTogUHJpY2UgPSB7XG4gICAgMTogMCxcbiAgICAyOiAwLFxuICAgIDMuNTogMCxcbiAgICA3OiAwLFxuICAgIDE0OiAwLFxuICAgIDI4OiAwLFxuICB9O1xuXG4gIGNvbnN0IG9uZSA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCIxXCIpKTtcbiAgY29uc3QgdHdvID0gZ2V0Rm9ybVByaWNlKGZvcm1EYXRhLmdldChcIjJcIikpO1xuICBjb25zdCBlaWdodGggPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMy41XCIpKTtcbiAgY29uc3QgcXVhcnRlciA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCI3XCIpKTtcbiAgY29uc3QgaGFsZiA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCIxNFwiKSk7XG4gIGNvbnN0IHpvbmUgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMjhcIikpO1xuXG4gIGlmICghb25lKSB7XG4gICAgZXJyb3JzW1wiMVwiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiMVwiXSA9IG9uZTtcbiAgfVxuXG4gIGlmICghdHdvKSB7XG4gICAgZXJyb3JzW1wiMlwiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiMlwiXSA9IHR3bztcbiAgfVxuXG4gIGlmICghZWlnaHRoKSB7XG4gICAgZXJyb3JzW1wiMy41XCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCIzLjVcIl0gPSBlaWdodGg7XG4gIH1cblxuICBpZiAoIXF1YXJ0ZXIpIHtcbiAgICBlcnJvcnNbXCI3XCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCI3XCJdID0gcXVhcnRlcjtcbiAgfVxuXG4gIGlmICghaGFsZikge1xuICAgIGVycm9yc1tcIjE0XCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCIxNFwiXSA9IGhhbGY7XG4gIH1cblxuICBpZiAoIXpvbmUpIHtcbiAgICBlcnJvcnNbXCIyOFwiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiMjhcIl0gPSB6b25lO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLFxuICAgIHByaWNlOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA/IHVuZGVmaW5lZCA6IHByaWNlRGF0YSxcbiAgfTtcbn1cbiIsICJpbXBvcnQgeyBVcGxvYWRIYW5kbGVyQXJncyB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGUvZm9ybURhdGFcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIHJlZGlyZWN0LCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGFkZEFzc2V0IH0gZnJvbSBcIn4vYXNzZXRzXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVwbG9hZEhhbmRsZXIgPSBhc3luYyAoe1xuICAgIG5hbWUsXG4gICAgc3RyZWFtLFxuICAgIGZpbGVuYW1lLFxuICB9OiBVcGxvYWRIYW5kbGVyQXJncykgPT4ge1xuICAgIGlmIChuYW1lICE9PSBcImltYWdlXCIpIHtcbiAgICAgIHN0cmVhbS5yZXN1bWUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBmaWxlIGFzIGEgYnVmZmVyXG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBzdHJlYW0pIHtcbiAgICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmNvbmNhdChjaHVua3MpO1xuXG4gICAgLy8gdXBsb2FkIGltYWdlIHRvIGJ1Y2tldFxuICAgIGNvbnN0IGRhdGEgPSBhZGRBc3NldChmaWxlbmFtZSwgYnVmZmVyKTtcblxuICAgIC8vIHJldHVybiBpbmZvcm1hdGlvbiBhYm91dCB1cGxvYWRlZCBmaWxlXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgZGF0YSB9KTtcbiAgfTtcblxuICBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKHJlcXVlc3QsIHVwbG9hZEhhbmRsZXIpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9leGVjdXRpdmUvbWVkaWFcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdGbG93ZXIoKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8aDI+QWRkIEltYWdlPC9oMj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSW1hZ2U6IDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb3cgc3BhY2UgZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cImNyZWF0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkFkZGluZy4uLlwiIDogXCJBZGQgSW1hZ2VcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGdldEFzc2V0cyB9IGZyb20gXCJ+L2Fzc2V0c1wiO1xuaW1wb3J0IHsgQ2FydCwgY3JlYXRlQ2FydCwgRmxvd2VyVHlwZSB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCBnZXRDYXJ0UHJpY2UsIHsgUHJpY2VFcnJvciB9IGZyb20gXCJ+L3V0aWxzL2dldFByaWNlRm9yVHdvXCI7XG5cbmludGVyZmFjZSBQb3N0RXJyb3IgZXh0ZW5kcyBQcmljZUVycm9yIHtcbiAgbmFtZT86IGJvb2xlYW47XG4gIGZsYXZvcnM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZUNhcnRRdWFudGl0aWVzID0gW1wiMVwiLCBcIjJcIl07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gIWRlc2NyaXB0aW9uRm9ybURhdGFcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGRlc2NyaXB0aW9uRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgZGlzcG9zYWJsZSA9IGZvcm1EYXRhLmdldChcImRpc3Bvc2FibGVcIik7XG4gIGNvbnN0IGZsYXZvcnMgPSBmb3JtRGF0YS5nZXQoXCJmbGF2b3JzXCIpO1xuICBjb25zdCBmbG93ZXJUeXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBGbG93ZXJUeXBlO1xuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpO1xuXG4gIGNvbnN0IHsgcHJpY2UsIGVycm9yczogcHJpY2VFcnJvcnMgfSA9IGdldENhcnRQcmljZShmb3JtRGF0YSk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSBwcmljZUVycm9ycyA/IHsgLi4ucHJpY2VFcnJvcnMgfSA6IHt9O1xuXG4gIGlmICghbmFtZSkge1xuICAgIGVycm9ycy5uYW1lID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWZsYXZvcnMpIHtcbiAgICBlcnJvcnMuZmxhdm9ycyA9PT0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsYXZvcnMgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsb3dlclR5cGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwcmljZSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgY29uc3QgY2FydDogQ2FydCA9IHtcbiAgICBjbGFzczogXCJ0aGNcIixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkaXNwb3NhYmxlOiBCb29sZWFuKGRpc3Bvc2FibGUpLFxuICAgIGZsYXZvcnM6IGZsYXZvcnMuc3BsaXQoXCIsXCIpLm1hcCgoZmxhdm9yKSA9PiBmbGF2b3IudHJpbSgpKSxcbiAgICBzcmM6IGltYWdlID09PSBcIk5vbmVcIiA/IFwiYXNzZXRzL2JheW91LWxvZ28ucG5nXCIgOiBpbWFnZSxcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIHR5cGU6IGZsb3dlclR5cGUsXG4gIH07XG5cbiAgYXdhaXQgY3JlYXRlQ2FydChjYXJ0KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0NhcnQoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxoMj5DcmVhdGUgQ2FydDwvaDI+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbCBzcGFjZS0yXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IHtlcnJvcnM/Lm5hbWUgPyA8ZW0+TmFtZSBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5JbmRpY2EsIEh5YnJpZCwgb3IgQm90aDwvbGVnZW5kPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImluZGljYVwiIGRlZmF1bHRDaGVja2VkIC8+e1wiIFwifVxuICAgICAgICAgICAgICBJbmRpY2FcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwic2F0aXZhXCIgLz4gU2F0aXZhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImh5YnJpZFwiIC8+IEh5YnJpZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkRpc3Bvc2FibGU8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJkaXNwb3NhYmxlXCIgdmFsdWU9XCIxXCIgZGVmYXVsdENoZWNrZWQgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIERpc3Bvc2FibGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZGlzcG9zYWJsZVwiIHZhbHVlPVwiXCIgLz4gTm9uLWRpc3Bvc2FibGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbWFnZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldH0gdmFsdWU9e2Fzc2V0fT5cbiAgICAgICAgICAgICAgICAgIHthc3NldH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChvcHRpb25hbCk6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz17Mn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsYXZvcnNcIj5cbiAgICAgICAgICAgICAgRmxhdm9yczp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtlcnJvcnM/Lm5hbWUgPyA8ZW0+QXQgbGVhc3QgMSBmbGF2b3IgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cImZsYXZvcnNcIlxuICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICBuYW1lPVwiZmxhdm9yc1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmxhdm9yIDEsIGZsYXZvciAyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMz5QcmljZXMgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlcyBjb2wgc3BhY2VcIj5cbiAgICAgICAgICAgIHthdmFpbGFibGVDYXJ0UXVhbnRpdGllcy5tYXAoKHF1YW50aXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3F1YW50aXR5fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LltxdWFudGl0eV0gPyA8ZW0+KjwvZW0+IDogbnVsbH0gOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT17YCR7cXVhbnRpdHl9YH0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdyBzcGFjZSBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkNyZWF0aW5nLi4uXCIgOiBcIkNyZWF0ZSBDYXJ0XCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgeyBnZXRBc3NldHMgfSBmcm9tIFwifi9hc3NldHNcIjtcbmltcG9ydCB7IGNyZWF0ZVdheCwgV2F4LCBXYXhUeXBlIH0gZnJvbSBcIn4vZXhvdGljc1wiO1xuaW1wb3J0IGdldEZsb3dlclByaWNlLCB7IFByaWNlRXJyb3IgfSBmcm9tIFwifi91dGlscy9nZXRGbG93ZXJQcmljZVwiO1xuXG5pbnRlcmZhY2UgUG9zdEVycm9yIGV4dGVuZHMgUHJpY2VFcnJvciB7XG4gIG5hbWU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZVdheFF1YW50aXRpZXMgPSBbXCIxXCIsIFwiMlwiLCBcIjMuNVwiLCBcIjdcIiwgXCIxNFwiLCBcIjI4XCJdO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gIWRlc2NyaXB0aW9uRm9ybURhdGFcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGRlc2NyaXB0aW9uRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgV2F4VHlwZTtcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcblxuICBjb25zdCB7IHByaWNlLCBlcnJvcnM6IHByaWNlRXJyb3JzIH0gPSBnZXRGbG93ZXJQcmljZShmb3JtRGF0YSk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSBwcmljZUVycm9ycyA/IHsgLi4ucHJpY2VFcnJvcnMgfSA6IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICBlcnJvcnMubmFtZSA9IHRydWU7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHJpY2UgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gIGNvbnN0IHdheDogV2F4ID0ge1xuICAgIGNsYXNzOiBcInRoY1wiLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHNyYzogaW1hZ2UgPT09IFwiTm9uZVwiID8gXCJhc3NldHMvYmF5b3UtbG9nby5wbmdcIiA6IGltYWdlLFxuICAgIG5hbWUsXG4gICAgcHJpY2UsXG4gICAgdHlwZSxcbiAgfTtcblxuICBhd2FpdCBjcmVhdGVXYXgod2F4KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dheCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPGgyPkNyZWF0ZSBXYXg8L2gyPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiB7ZXJyb3JzPy5uYW1lID8gPGVtPk5hbWUgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzci1vbmx5XCI+QmFkZGVyLCBDcnVtYmxlLCBvciBTaGF0dGVyPC9sZWdlbmQ+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwiY3J1bWJsZVwiIGRlZmF1bHRDaGVja2VkIC8+e1wiIFwifVxuICAgICAgICAgICAgICBDcnVtYmxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImJhZGRlclwiIC8+IEJhZGRlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJkaWFtb25kXCIgLz4gRGlhbW9uZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJzaGF0dGVyXCIgLz4gU2hhdHRlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEltYWdlOntcIiBcIn1cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2Fzc2V0fSB2YWx1ZT17YXNzZXR9PlxuICAgICAgICAgICAgICAgICAge2Fzc2V0fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gKG9wdGlvbmFsKTo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPXsyfSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aDM+UHJpY2VzIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZXMgY29sIHNwYWNlXCI+XG4gICAgICAgICAgICB7YXZhaWxhYmxlV2F4UXVhbnRpdGllcy5tYXAoKHF1YW50aXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3F1YW50aXR5fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LltxdWFudGl0eV0gPyA8ZW0+KjwvZW0+IDogbnVsbH0gOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT17YCR7cXVhbnRpdHl9YH0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdyBzcGFjZSBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkNyZWF0aW5nLi4uXCIgOiBcIkNyZWF0ZSBXYXhcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIn4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHtcbiAgQ2FydHMsXG4gIEVkaWJsZXMsXG4gIEZsb3dlcnMsXG4gIGdldENhcnRzLFxuICBnZXRFZGlibGVzLFxuICBnZXRGbG93ZXJzLFxuICBnZXRQcmVSb2xscyxcbiAgZ2V0V2F4ZXMsXG4gIFByZVJvbGxzLFxuICBXYXhlcyxcbn0gZnJvbSBcIn4vZXhvdGljc1wiO1xuaW1wb3J0IHsgZ2V0UHJvZmlsZSwgUHJvZmlsZSB9IGZyb20gXCJ+L3Byb2ZpbGVcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi91c2Vyc1wiO1xuaW1wb3J0IHsgZ2V0VXNlckJ5U2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9pbmRleC5jc3NcIjtcblxudHlwZSBMb2FkZXJEYXRhID0ge1xuICBjYXJ0czogQ2FydHM7XG4gIGVkaWJsZXM6IEVkaWJsZXM7XG4gIGZsb3dlcnM6IEZsb3dlcnM7XG4gIHByZVJvbGxzOiBQcmVSb2xscztcbiAgcHJvZmlsZTogUHJvZmlsZTtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIHdheGVzOiBXYXhlcztcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IFtjYXJ0cywgZWRpYmxlcywgZmxvd2VycywgcHJlUm9sbHMsIHByb2ZpbGUsIHVzZXIsIHdheGVzXSA9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0Q2FydHMoKSxcbiAgICAgIGdldEVkaWJsZXMoKSxcbiAgICAgIGdldEZsb3dlcnMoKSxcbiAgICAgIGdldFByZVJvbGxzKCksXG4gICAgICBnZXRQcm9maWxlKCksXG4gICAgICBnZXRVc2VyQnlTZXNzaW9uKHJlcXVlc3QpLFxuICAgICAgZ2V0V2F4ZXMoKSxcbiAgICBdKTtcblxuICByZXR1cm4geyBjYXJ0cywgZWRpYmxlcywgZmxvd2VycywgcHJlUm9sbHMsIHByb2ZpbGUsIHVzZXIsIHdheGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXMgfV07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeG90aWNzKCkge1xuICBjb25zdCB7IGNhcnRzLCBlZGlibGVzLCBmbG93ZXJzLCBwcmVSb2xscywgcHJvZmlsZSwgdXNlciwgd2F4ZXMgfSA9XG4gICAgdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkZXIgdXNlcj17dXNlcn0gLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImJvZHkgZm9vdGVyLXBhZGRpbmdcIj5cbiAgICAgICAgPGgyPkZsb3dlcjwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgIHtmbG93ZXJzLmN1cnJlbnQubWFwKChmbG93ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAgcXVhbnRpdHlBYmJyZXZpYXRpb249XCIoZylcIlxuICAgICAgICAgICAgICBrZXk9e2BmbG93ZXItJHtmbG93ZXIubmFtZX0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICB7Li4uZmxvd2VyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPlByZS1Sb2xsPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAge3ByZVJvbGxzLmN1cnJlbnQubWFwKChwcmVSb2xsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIGFtb3VudEFiYnJldmlhdGlvbj1cImdyYW1zXCJcbiAgICAgICAgICAgICAga2V5PXtgcHJlLXJvbGwtJHtwcmVSb2xsLm5hbWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgey4uLnByZVJvbGx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgICA8aDI+Q2FydHM8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICB7Y2FydHMuY3VycmVudC5tYXAoKGNhcnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmQga2V5PXtgY2FydC0ke2NhcnQubmFtZX0tJHtpbmRleH1gfSB7Li4uY2FydH0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPldheGVzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAge3dheGVzLmN1cnJlbnQubWFwKCh3YXgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtgd2F4LSR7d2F4Lm5hbWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgcXVhbnRpdHlBYmJyZXZpYXRpb249XCIoZylcIlxuICAgICAgICAgICAgICB7Li4ud2F4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPkVkaWJsZXM8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICB7ZWRpYmxlcy5jdXJyZW50Lm1hcCgoZWRpYmxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIGFtb3VudEFiYnJldmlhdGlvbj1cIm1nXCJcbiAgICAgICAgICAgICAga2V5PXtgZWRpYmxlLSR7ZWRpYmxlLm5hbWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgey4uLmVkaWJsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgey4uLnByb2ZpbGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgaXNQYXN0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBGQywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIn4vcHJvZmlsZVwiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIn4vdXRpbHMvZm9ybWF0RGF0ZVwiO1xuXG5pbXBvcnQgSW5zdGFncmFtQnV0dG9uIGZyb20gXCIuLi9JbnN0YWdyYW1CdXR0b25cIjtcblxuY29uc3QgRm9vdGVyOiBGQzxQcm9maWxlPiA9ICh7IGhvdXJPcGVuLCBpbnN0YWdyYW1VcmwsIGRhdGVzQ2xvc2VkIH0pID0+IHtcbiAgY29uc3QgdXBkYXRlZERhdGVzQ2xvc2VkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGRhdGVzQ2xvc2VkLmZpbHRlcigoWywgZGF0ZTJdKSA9PiAhaXNQYXN0KG5ldyBEYXRlKGRhdGUyKSkpO1xuICB9LCBbZGF0ZXNDbG9zZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIHJvdyBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHNwYWNlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTQgcm93IHdyYXBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+SG91cnM6PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntob3VyT3Blbn06MDAgQU0gLSBUQkQ8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAge3VwZGF0ZWREYXRlc0Nsb3NlZC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGgyPlJlbWluZGVyPC9oMj5cbiAgICAgICAgICAgIHt1cGRhdGVkRGF0ZXNDbG9zZWQubWFwKChbY2xvc2UsIG9wZW5dLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbG9zZS1kYXRlLSR7Y2xvc2V9LSR7b3Blbn0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHJvdyB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+Q2xvc2U6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdERhdGUobmV3IERhdGUoY2xvc2UpKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHJvdyB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+UmVvcGVuOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXREYXRlKG5ldyBEYXRlKG9wZW4pKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gc3BhY2VcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2VudGVyLXRleHQgZGVza3RvcC1vbmx5XCI+XG4gICAgICAgICAgRm9sbG93IHVzIGZvciBtb3JlIHVwZGF0ZXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8SW5zdGFncmFtQnV0dG9uIGluc3RhZ3JhbVVybD17aW5zdGFncmFtVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwifi9wcm9maWxlXCI7XG5cbmltcG9ydCBpbnN0YUxvZ28gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbnN0YWdyYW1faWNvbi5wbmdcIjtcblxuaW50ZXJmYWNlIEluc3RhZ3JhbUJ1dHRvblByb3BzIHtcbiAgaW5zdGFncmFtVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGluc3RhZ3JhbVVybCB9ID0gYXdhaXQgZ2V0UHJvZmlsZSgpO1xuXG4gIHJldHVybiB7IGluc3RhZ3JhbVVybCB9O1xufTtcblxuY29uc3QgSW5zdGFncmFtQnV0dG9uOiBGQzxJbnN0YWdyYW1CdXR0b25Qcm9wcz4gPSAoeyBpbnN0YWdyYW1VcmwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9e2luc3RhZ3JhbVVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgYWxpZ25DZW50ZXIgc3BhY2VcIj5cbiAgICAgICAgPGltZyBzcmM9e2luc3RhTG9nb30gYWx0PVwiaW5zdGFncmFtIGxvZ29cIiBjbGFzc05hbWU9XCJpbnN0YS1sb2dvXCIgLz57XCIgXCJ9XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICByb2xlPVwiaW1hZ2VcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcbiAgICAgICAgICB2aWV3Qm94PVwiLTI0IC0yNCA4NjAgMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsPVwiIzI2MjYyNlwiXG4gICAgICAgICAgICBkPVwibSA2NC43NjAyMzksNDkuMTA3OTQ4IGMgLTE2LjIxMDMsNi43ODU0IC0zNC4wMzA4MDEsMjUuOTU1IC0zOS42NTkxMDEsNTAuMDE2OTk2IC03LjEyNzgsMzAuNDg3NDk2IDIyLjUzNDMwMSw0My4zNzk2OTYgMjQuOTY3MjAxLDM5LjE1MjQ5NiAyLjg2MzUsLTQuOTY3IC01LjMxNTEsLTYuNjQ2NyAtNi45OTg2LC0yMi40NjUgLTIuMTc1OCwtMjAuNDMwNjkyIDcuMzIyNCwtNDMuMjU5NjkyIDE5LjI3NjIsLTUzLjI3NjM5MiAyLjIyMiwtMS44NjEgMi4xMTYzLDAuNzI5MiAyLjExNjMsNS41MjAzIDAsOC41Njc2IC0wLjQ3MzQsODUuNDc5NTAyIC0wLjQ3MzQsMTAxLjUzMTEwMiAwLDIxLjcxOTggLTAuODk3MSwyOC41Nzg1IC0yLjUwODMsMzUuMzU1OCAtMS42MzI1LDYuODY4MSAtNC4yNTcsMTEuNTA4OCAtMi4yNjgzLDEzLjI5NjQgMi4yMjE5LDEuOTk5NiAxMS43MDg2LC0yLjc1NjcgMTcuMjAwNiwtMTAuNDIxOCA2LjU4NTcsLTkuMTkzMSA4Ljg5MSwtMjAuMjMzNSA5LjMwNDksLTMyLjIyMzIgMC40OTk5LC0xNC40NTMyIDAuNDc4NiwtMzcuMzg3NDEgMC40OTk5LC01MC40Njg5MSAwLjAyLC0xMS45OTc3IDAuMjAyMSwtNDcuMTI5NTkyIC0wLjIxMDMsLTY4LjI0OTU5MiAtMC4xMDExLC01LjE4MDMgLTE0LjQ2NzksLTEwLjYxNTIgLTIxLjI0NzksLTcuNzc0NSBNIDY0MC4zODY3MiwxNTAuNzU1MDUgYyAtMC41MjI2LDExLjI5MTYgLTMuMDIyMSwyMC4xMTc1IC02LjEyNDIsMjYuMzQyOSAtNi4wMDU1LDEyLjA1MiAtMTguNDY3MSwxNS43OTQzIC0yMy43NTgxLC0xLjUzMDkgLTIuODgzNCwtOS40NDQgLTMuMDE4MSwtMjUuMjE2NCAtMC45NDUxLC0zOC4zOTUyMSAyLjExMDIsLTEzLjQyNTUgOC4wMDI0LC0yMy41NjQ4IDE3Ljc1OTIsLTIyLjY1MDQgOS42MjM1LDAuOTAzOSAxNC4xMjgsMTMuMzA0MiAxMy4wNjgyLDM2LjIzMzExIHogbSAtMTYyLjIzNTQ4LDcwLjA1NTkgYyAtMC4xMzA2LDE4Ljc2MTcgLTMuMDgzNCwzNS4yMTE4IC05LjQxNTUsMzkuOTg5NiAtOC45ODA5LDYuNzc0NyAtMjEuMDUxOSwxLjY5MjkgLTE4LjU1MjQsLTExLjk5NzcgMi4yMTE2LC0xMi4xMTQ5IDEyLjY3MDksLTI0LjQ4NzMgMjcuOTkzMywtMzkuNjA0NCAwLDAgMC4wMzIsMy40NDc0IC0wLjAyNSwxMS42MTI1IHogbSAtMi40NTI4LC03MC4xNjUyIGMgLTAuNTQ5MiwxMC4yODQ0IC0zLjIxNTQsMjAuNjE2IC02LjEyNDIsMjYuNDUzNiAtNi4wMDQyLDEyLjA1MTkgLTE4LjU1NjQsMTUuODE5NiAtMjMuNzU4MSwtMS41MzA5IC0zLjU1NjYsLTExLjg1NDYgLTIuNzA0OCwtMjcuMTk3NSAtMC45NDUxLC0zNi44NjQ5MSAyLjI4MzUsLTEyLjU0MyA3LjgxODUsLTI0LjE3OTQgMTcuNzU5MiwtMjQuMTc5NCA5LjY2NDgsMCAxNC40MzA2LDEwLjYwMzMgMTMuMDY4MiwzNi4xMjI0MSB6IG0gLTkzLjk4MzMsLTAuMTU3MyBjIC0wLjU4OTIsMTAuODkyMiAtMi43MTQxLDE5Ljk5NzUgLTYuMTI0MSwyNi42MTA5IC02LjE2OTUsMTEuOTY5IC0xOC4zNzUxLDE1Ljc2NDkgLTIzLjc1ODEsLTEuNTMwOSAtMy44ODA2LC0xMi40NzE2IC0yLjU1OTUsLTI5LjQ3NzAxIC0wLjk0NTIsLTM4LjY2MzMxIDIuMzk1NiwtMTMuNjMyIDguMzk0NCwtMjMuMjk2OCAxNy43NTkzLC0yMi4zODEgOS42MTk1LDAuOTM5OCAxNC4yOTU5LDEzLjMwMjggMTMuMDY4MSwzNS45NjUxMSB6IG0gNDMwLjcwMzc4LDEyLjcyMjYgYyAtMi4zNTE2LDAgLTMuNDI0NywyLjQyMzkgLTQuMzEyNSw2LjUwNCAtMy4wNzk0LDE0LjE4NjYgLTYuMzE2MSwxNy4zODk5IC0xMC40OSwxNy4zODk5IC00LjY2MzEsMCAtOC44NTMsLTcuMDI0NiAtOS45MzAxLC0yMS4wODY2IC0wLjg0NjUsLTExLjA1NzIgLTAuNzEwNSwtMzEuNDEzOTEgMC4zNzIsLTUxLjY2MzQxIDAuMjIxMiwtNC4xNjA1IC0wLjkyNjUsLTguMjc3IC0xMi4wODU3LC0xMi4zMzA5IC00LjgwMTgsLTEuNzQzNyAtMTEuNzgxOCwtNC4zMTExOTYgLTE1LjI1NzEsNC4wNzc5IC05LjgxOTQsMjMuNzAwNyAtMTMuNjYxNCw0Mi41MTcxMSAtMTQuNTY1Miw1MC4xNjEwMSAtMC4wNDcsMC4zOTU2IC0wLjUzMTksMC40NzY0IC0wLjYxNzIsLTAuNDQ3OSAtMC41NzU5LC02LjEyMjIgLTEuODYzNiwtMTcuMjQ3NDEgLTIuMDIzNiwtNDAuNjIxNTEgLTAuMDMxLC00LjU2MDUgLTAuOTk3MSwtOC40NDI0IC02LjAzMDgsLTExLjYyMDUgLTMuMjY2MSwtMi4wNjIyIC0xMy4xODQyLC01LjcwOTQ5NiAtMTYuNzU1NSwtMS4zNzA0IC0zLjA5NDEsMy41NDg3IC02LjY3NzQsMTMuMDk4OCAtMTAuNDAwNywyNC40MTkzIC0zLjAyNiw5LjIwMDkgLTUuMTMzNiwxNS40MjUxIC01LjEzMzYsMTUuNDI1MSAwLDAgMC4wNCwtMjQuODI1OSAwLjA3NiwtMzQuMjQyOCAwLjAxNiwtMy41NTI2IC0yLjQyMDksLTQuNzM2NCAtMy4xNTU0LC00Ljk1MSAtMy4zMDc0LC0wLjk1OTkgLTkuODIzNSwtMi41NjM1IC0xMi41ODk2LC0yLjU2MzUgLTMuNDEyNywwIC00LjI0ODUsMS45MDc2IC00LjI0ODUsNC42ODcxIDAsMC4zNjM5IC0wLjUzODYsMzIuNjg1NyAtMC41Mzg2LDU1LjI4NjYxIDAsMC45ODE3IDAsMi4wNTI4IDAuMDEsMy4xOTA2IC0xLjg4NzYsMTAuMzg3NiAtOC4wMDkxLDI0LjQ4ODYgLTE0LjY2NjUsMjQuNDg4NiAtNi42NjU0LDAgLTkuODEwMSwtNS44OTUyIC05LjgxMDEsLTMyLjgzOSAwLC0xNS43MTgzMSAwLjQ3MTksLTIyLjU1MzAxIDAuNzAzOSwtMzMuOTIxNDEgMC4xMzQ2LC02LjU0ODEgMC4zOTQ2LC0xMS41NzY1IDAuMzc5OSwtMTIuNzE3NiAtMC4wNDksLTMuNDk5MyAtNi4xMDAxLC01LjI2MyAtOC45MTU2LC01LjkxNDggLTIuODI4OCwtMC42NTczIC01LjI4NywtMC45MTE5IC03LjIwNjYsLTAuODAyNiAtMi43MTY4LDAuMTUzMyAtNC42MzkxLDEuOTM1NyAtNC42MzkxLDQuMzg3MiAwLDEuMzE0NCAwLjAxNSwzLjgxMzkgMC4wMTUsMy44MTM5IC0zLjQ5OTMsLTUuNDk4OSAtOS4xMjc1LC05LjMyNjIgLTEyLjg3MjIsLTEwLjQzNTI5NiAtMTAuMDg2LC0yLjk5NTM5NiAtMjAuNjEwNywtMC4zNDEzIC0yOC41NDkxLDEwLjc2NzI5NiAtNi4zMDk1LDguODI2MyAtMTAuMTEyNjgsMTguODIzIC0xMS42MDk3OCwzMy4xODU2IC0xLjA5NDQsMTAuNTAwMTEgLTAuNzM3MiwyMS4xNDc5MSAxLjIwNzgsMzAuMTUyODEgLTIuMzUwMiwxMC4xNjEgLTYuNzEzNCwxNC4zMjM5IC0xMS40OTExLDE0LjMyMzkgLTYuOTM2LDAgLTExLjk2NDQsLTExLjMyMTIgLTExLjM4MDUsLTMwLjkwMDcgMC4zODUyLC0xMi44NzgyMSAyLjk2MjEsLTIxLjkxNTgxIDUuNzc4OSwtMzQuOTkwNjEgMS4yMDExLC01LjU3MzYgMC4yMjUzLC04LjQ5MTcgLTIuMjIyMywtMTEuMjg4NSAtMi4yNDQ5LC0yLjU2NDggLTcuMDI3OSwtMy44NzUyIC0xMy45MDQsLTIuMjYzNSAtNC44OTc3LDEuMTQ5MSAtMTEuOTAwMywyLjM4NDggLTE4LjMwNzEsMy4zMzQgMCwwIDAuMzg2NiwtMS41NDI0IDAuNzAzOSwtNC4yNjE4IDEuNjY2MywtMTQuMjYxMjkyIC0xMy44MzA3LC0xMy4xMDQxOTIgLTE4Ljc3NTEsLTguNTQ5MDk2IC0yLjk1MTQsMi43MTk0OTYgLTQuOTYwNCw1LjkyNjg5NiAtNS43MjI5LDExLjY5Mzc5NiAtMS4yMDkxLDkuMTUxNiA2LjI1NDgsMTMuNDY4MSA2LjI1NDgsMTMuNDY4MSAtMi40NDg5LDExLjIwOTggLTguNDUxNywyNS44NTM2MSAtMTQuNjQ5MiwzNi40NDA5MSAtMy4zMTkzLDUuNjcyNCAtNS44NTg4LDkuODc1NyAtOS4xMzY5LDE0LjM0MzkgLTAuMDEyLC0xLjY2MzggLTAuMDIxLC0zLjMyNzQgLTAuMDI3LC00Ljk4MzQgLTAuMDc1LC0yMy41Njc1MSAwLjIzODYsLTQyLjExNTkxIDAuMzc3MiwtNDguODAxMzEgMC4xMzQ3LC02LjU0OCAwLjM5NzMsLTExLjQ0MzEgMC4zODI2LC0xMi41ODQyIC0wLjAzNywtMi41NTk1IC0xLjUzMTcsLTMuNTI2IC00LjY0MDQsLTQuNzQ5OCAtMi43NDg4LC0xLjA4MjQgLTUuOTk4OSwtMS44MzE2IC05LjM3MDIsLTIuMDkyOSAtNC4yNTUyLC0wLjMzMTkgLTYuODE4NywxLjkyNSAtNi43NTIxLDQuNTkzOCAwLjAxMywwLjUwMzkgMC4wMTMsMy41OTggMC4wMTMsMy41OTggLTMuNDk5NCwtNS40OTkgLTkuMTI3NiwtOS4zMjYyIC0xMi44NzIyLC0xMC40MzUzOTYgLTEwLjA4NjEsLTIuOTk0MDk2IC0yMC42MTA3LC0wLjMzOTkgLTI4LjU0OTIsMTAuNzY3Mjk2IC02LjMwODEsOC44MjYzIC0xMC40MzkzLDIxLjIxMTkgLTExLjYwOTgsMzMuMDc2MyAtMS4wOTA0LDExLjA1NzcxIC0wLjg4OTEsMjAuNDU0NzEgMC41OTczLDI4LjM3MDUxIC0xLjYwMzcsNy45MjY2IC02LjIxNDgsMTYuMjE1NiAtMTEuNDI4NSwxNi4yMTU2IC02LjY2NTQsMCAtMTAuNDU4LC01Ljg5NTMgLTEwLjQ1OCwtMzIuODM5IDAsLTE1LjcxODMxIDAuNDcxOSwtMjIuNTUzMDEgMC43MDM5LC0zMy45MjAyMSAwLjEzNDYsLTYuNTQ4IDAuMzk0NiwtMTEuNTc3NyAwLjM3OTksLTEyLjcxNzUgLTAuMDQ5LC0zLjQ5OTMgLTYuMTAwMiwtNS4yNjMgLTguOTE1NiwtNS45MTYyIC0yLjk0NjEsLTAuNjgxMiAtNS40ODk2LC0wLjkzMTggLTcuNDQyNiwtMC43ODc5IC0yLjU3NjgsMC4xOTIgLTQuMzg4NSwyLjQ5OTYgLTQuMzg4NSw0LjIyMDYgbCAwLDMuOTY1OSBjIC0zLjQ5OTMsLTUuNDk5IC05LjEyNzUsLTkuMzI2MiAtMTIuODcyMiwtMTAuNDM1Mzk2IC0xMC4wODYsLTIuOTk0MDk2IC0yMC41NTIsLTAuMjk3MiAtMjguNTQ5MSwxMC43NjcyOTYgLTUuMjE1LDcuMjE0NiAtOS40MzY5LDE1LjIxMzEgLTExLjYwOTgsMzIuOTE5IC0wLjYyNzksNS4xMTY3MSAtMC45MDUyLDkuOTA4MTEgLTAuODY5MiwxNC4zODY2MSAtMi4wNzk2LDEyLjcxNzkgLTExLjI2NDUsMjcuMzc2IC0xOC43Nzc3LDI3LjM3NiAtNC4zOTY1LDAgLTguNTgzNywtOC41Mjc1IC04LjU4MzcsLTI2LjcwMTUgMCwtMjQuMjA4NzEgMS40OTg0LC01OC42NzY3MDYgMS43NTE3LC02MS45OTg3MDIgMCwwIDkuNDkyOCwtMC4xNjEzIDExLjMzMTIsLTAuMTgyNyA0LjczNSwtMC4wNTIgOS4wMjM2LDAuMDYgMTUuMzMwMywtMC4yNjI2IDMuMTYzNCwtMC4xNjEzIDYuMjEwOCwtMTEuNTEzOCAyLjk0NjEsLTEyLjkxODggLTEuNDc5NywtMC42MzU5IC0xMS45Mzc3LC0xLjE5MzEgLTE2LjA4MzUsLTEuMjgxMSAtMy40ODYsLTAuMDc5IC0xMy4xOTA4LC0wLjc5NzIgLTEzLjE5MDgsLTAuNzk3MiAwLDAgMC44NzA1LC0yMi44NzgzIDEuMDczMSwtMjUuMjk1MSAwLjE3MiwtMi4wMTQzIC0yLjQzNDIsLTMuMDUxNCAtMy45Mjg2LC0zLjY4MDcgLTMuNjMzOSwtMS41MzcgLTYuODg1MywtMi4yNzI5IC0xMC43MzkyLC0zLjA2NzQgLTUuMzI0NCwtMS4wOTg0IC03LjczOTksLTAuMDI0IC04LjIxMTgsNC40Njk4IC0wLjcxMDUsNi44MjAxIC0xLjA3ODUsMjYuNzk2MiAtMS4wNzg1LDI2Ljc5NjIgLTMuOTA3MiwwIC0xNy4yNTQsLTAuNzYzOCAtMjEuMTYyNSwtMC43NjM4IC0zLjYzMTMsMCAtNy41NTA2LDE1LjYxNyAtMi41MzAyLDE1LjgwODkgNS43NzYyLDAuMjI0IDE1Ljg0MjMsMC40MTczIDIyLjUxNTYsMC42MTg2IDAsMCAtMC4yOTcyLDM1LjAzNTg5MiAtMC4yOTcyLDQ1Ljg1MjQ5MiAwLDEuMTUwOCAwLjAxLDIuMjU5IDAuMDEyLDMuMzM0MyAtMy42NzI3LDE5LjE0MzAxIC0xNi42MDg4LDI5LjQ4MzYxIC0xNi42MDg4LDI5LjQ4MzYxIDIuNzc4MSwtMTIuNjY0MiAtMi44OTY4LC0yMi4xNzQ0IC0xMy4xMTg4LC0zMC4yMjQ4MSAtMy43NjYsLTIuOTY2NiAtMTEuMjAwNiwtOC41ODI4IC0xOS41MTksLTE0LjczNzIgMCwwIDQuODE3OCwtNC43NDg0IDkuMDkwMywtMTQuMzAxMiAzLjAyNzQsLTYuNzY2NyAzLjE1ODEsLTE0LjUxMDYgLTQuMjcyNSwtMTYuMjE4MTk2IC0xMi4yNzc3LC0yLjgyMzQ5NiAtMjIuNDAxLDYuMTkzMzk2IC0yNS40MjA1LDE1LjgxOTU5NiAtMi4zMzk1LDcuNDU3MiAtMS4wOTE3LDEyLjk5MDggMy40OTE0LDE4LjczOSAwLjMzNDYsMC40MiAwLjY5NzIsMC44NDkyIDEuMDcxOCwxLjI4MTEgLTIuNzcxNSw1LjM0MTkgLTYuNTc4OCwxMi41MzM5IC05LjgwMzUsMTguMTExMjEgLTguOTUwMywxNS40ODUgLTE1LjcxMTYsMjcuNzMzMyAtMjAuODIxMywyNy43MzMzIC00LjA4NDYsMCAtNC4wMjk5LC0xMi40MzUyIC00LjAyOTksLTI0LjA3OCAwLC0xMC4wMzcxMSAwLjc0MTIsLTI1LjEyNzIxIDEuMzMzMSwtNDAuNzUwODEgMC4xOTU5LC01LjE2NyAtMi4zODc2LC04LjExMDUgLTYuNzE4NywtMTAuNzc2NiAtMi42MzE1LC0xLjYxOTcgLTguMjQ3OCwtNC44MDQ0IC0xMS41MDA1LC00LjgwNDQgLTQuODY4NiwwIC0xOC45MTUsMC42NjI1IC0zMi4xODcxLDM5LjA1MzggLTEuNjcyNiw0LjgzODkgLTQuOTU4NSwxMy42NTYwMSAtNC45NTg1LDEzLjY1NjAxIGwgMC4yODI4LC00Ni4xNjcxMSBjIDAsLTEuMDgyNCAtMC41NzY1LC0yLjEyODkgLTEuODk2NSwtMi44NDQ4IC0yLjIzNjUsLTEuMjE0NCAtOC4yMDk5LC0zLjY5NzkgLTEzLjUyMTQsLTMuNjk3OSAtMi41MzA3LDAgLTMuNzkzNiwxLjE3NzEgLTMuNzkzNiwzLjUyMzMgbCAtMC40NjMzLDcyLjIyODgxIGMgMCw1LjQ4OCAwLjE0MzEsMTEuODkwMyAwLjY4NTcsMTQuNjkwNSAwLjU0MDYsMi44MDM3IDEuNDE2NCw1LjA4NDUgMi41MDExLDYuNDQxNSAxLjA4MzEsMS4zNTQ0IDIuMzM2LDIuMzg3NiA0LjQwMTcsMi44MTQgMS45MjI2LDAuMzk1OCAxMi40NTAzLDEuNzQ3NyAxMi45OTc1LC0yLjI3NTUgMC42NTU2LC00LjgyMTUgMC42ODA3LC0xMC4wMzY2IDYuMjA4OCwtMjkuNDg2NCA4LjYwNjEsLTMwLjI4MDgxIDE5LjgyNjksLTQ1LjA1NTMxIDI1LjEwMTgsLTUwLjMwMjMxIDAuOTIyMywtMC45MTcxIDEuOTc1NCwtMC45NzE4IDEuOTI0NywwLjUyOTIgLTAuMjI1Miw2LjYzODggLTEuMDE3MSwyMy4yMjc2IC0xLjU1MDIsMzcuMzIwOTEgLTEuNDI4OSwzNy43MTU0IDUuNDMyMiw0NC43MDYgMTUuMjM3MSw0NC43MDYgNy41MDEyLDAgMTguMDc1MiwtNy40NTMzIDI5LjQxMDMsLTI2LjMyMDIgNy4wNjY3LC0xMS43NTc2IDEzLjkyOCwtMjMuMjg2MiAxOC44NTc3LC0zMS41OTUzMSAzLjQzNTQsMy4xODAyIDcuMjkwNiw2LjYwMzAxIDExLjE0MzIsMTAuMjU5NTEgOC45NTI5LDguNDk3MyAxMS44OTI0LDE2LjU3MTUgOS45NDIxLDI0LjIzMTMgLTEuNDkxNyw1Ljg1NTcgLTcuMTA5MywxMS44OTA0IC0xNy4xMDc0LDYuMDI0OSAtMi45MTQxLC0xLjcxMTIgLTQuMTU3OSwtMy4wMzMzIC03LjA4OCwtNC45NjI1IC0xLjU3NDMsLTEuMDM2NCAtMy45Nzc5LC0xLjM0NjIgLTUuNDE4OSwtMC4yNjA1IC0zLjc0MzMsMi44MjI0IC01Ljg4NDIsNi40MTIzIC03LjEwNjYsMTAuODU2OCAtMS4xODkxLDQuMzI0NyAzLjE0Miw2LjYxMDggNy42MzE4LDguNjEwNCAzLjg2NTksMS43MjEgMTIuMTc1LDMuMjgwNSAxNy40NzQsMy40NTgxIDIwLjY0NjcsMC42OTA1IDM3LjE4NjIsLTkuOTY4OSA0OC42OTk5LC0zNy40NjQ4IDIuMDYxLDIzLjc0NjEgMTAuODMyNiwzNy4xODM1IDI2LjA3MjQsMzcuMTgzNSAxMC4xODg3LDAgMjAuNDA0LC0xMy4xNjk4IDI0Ljg3MTIsLTI2LjEyNTYgMS4yODI0LDUuMjgxMiAzLjE4MDcsOS44NzM3IDUuNjMyMiwxMy43NTczIDExLjc0MzEsMTguNjA1OCAzNC41MjQsMTQuNjAxMiA0NS45NjcyLC0xLjE5ODEgMy41MzgsLTQuODgxOSA0LjA3NjUsLTYuNjM2MiA0LjA3NjUsLTYuNjM2MiAxLjY2OSwxNC45MTg0IDEzLjY4MjcsMjAuMTMwOCAyMC41NjE0LDIwLjEzMDggNy43MDM5LDAgMTUuNjU4MywtMy42NDIgMjEuMjMzMiwtMTYuMTkyOSAwLjY1MzMsMS4zNjIxIDEuMzY2NCwyLjY2MjkgMi4xNDUsMy44OTYgMTEuNzQzLDE4LjYwNTggMzQuNTI0LDE0LjYwMTIgNDUuOTY3MSwtMS4xOTgxIDAuNTM5OSwtMC43NDExIDEuMDA3OCwtMS40MTM0IDEuNDE3MSwtMi4wMTY4IGwgMC4zMzU5LDkuNzk5MSBjIDAsMCAtNi41MjgxLDUuOTg4NSAtMTAuNTM1Myw5LjY2MjIgLTE3LjYzNjYsMTYuMTgwOSAtMzEuMDQ3MywyOC40NTcyIC0zMi4wMzM4LDQyLjc1MzEgLTEuMjY2NCwxOC4yMjg1IDEzLjUxNzQsMjUuMDAzMiAyNC43MDE5LDI1Ljg5MSAxMS44Nzc3LDAuOTQyNiAyMi4wNDkxLC01LjYxODcgMjguMzAxMiwtMTQuODAxMiA1LjQ5ODksLTguMDgyMyA5LjA5ODMsLTI1LjQ3NzcgOC44MzQzLC00Mi42NTg0IC0wLjEwNTMsLTYuODc5OSAtMC4yNzg2LC0xNS42Mjc3IC0wLjQxNDYsLTI1LjAwNDUgNi4xOTg4LC03LjE5ODYgMTMuMTgyOCwtMTYuMjk2OSAxOS42MTM2LC0yNi45NDY4IDcuMDA4LC0xMS42MDYxIDE0LjUxODUsLTI3LjE5MjExIDE4LjM2NDQsLTM5LjMyMTgxIDAsMCA2LjUyNTUsMC4wNTYgMTMuNDg5NCwtMC4zOTk5IDIuMjI3NiwtMC4xNDUzIDIuODY3NSwwLjMwOTIgMi40NTU2LDEuOTQyMyAtMC40OTczLDEuOTcyOSAtOC43OTgzLDMzLjk5MDgxIC0xLjIyMjUsNTUuMzIwMDEgNS4xODU3LDE0LjYwMTIgMTYuODc1NSwxOS4yOTg5IDIzLjgwNjEsMTkuMjk4OSA4LjExMzEsMCAxNS44NzQzLC02LjEyNjkgMjAuMDMzNDgsLTE1LjIyNSAwLjUwMTIsMS4wMTQzIDEuMDI1MSwxLjk5NTggMS41OTcsMi45MDE5IDExLjc0MzEsMTguNjA1OCAzNC40NDQxLDE0LjU3NzIgNDUuOTY3MiwtMS4xOTgxIDIuNjAwOCwtMy41NTkyIDQuMDc2NSwtNi42MzYyIDQuMDc2NSwtNi42MzYyIDIuNDcyOSwxNS40Mzk3IDE0LjQ3OTksMjAuMjA5NCAyMS4zNTcyLDIwLjIwOTQgNy4xNjQsMCAxMy45NjI3LC0yLjkzNjkgMTkuNDc5LC0xNS45ODg5IDAuMjMwNiw1Ljc0NjggMC41OTMyLDEwLjQ0NTkgMS4xNjY0LDExLjkyNzQgMC4zNDkzLDAuOTA2IDIuMzg0OSwyLjA0MzQgMy44NjU5LDIuNTkyNyA2LjU1MzQsMi40MzAyIDEzLjIzNzUsMS4yODEgMTUuNzEwMywwLjc4MTEgMS43MTMsLTAuMzQ2NyAzLjA0ODgsLTEuNzIxIDMuMjMxNCwtNS4yNjk4IDAuNDc5OSwtOS4zMTgxIDAuMTg1MywtMjQuOTczOSAzLjAxMDEsLTM2LjYwOSA0Ljc0MTgsLTE5LjUyNjkxIDkuMTY0OSwtMjcuMTAxNDEgMTEuMjYzMiwtMzAuODUxMzEgMS4xNzQ0LC0yLjEwMSAyLjQ5OTUsLTIuNDQ3NiAyLjU0NzUsLTAuMjI0IDAuMDk5LDQuNDk5MSAwLjMyMjYsMTcuNzExMyAyLjE1OTYsMzUuNDYyNTEgMS4zNDksMTMuMDU1NCAzLjE1MTQsMjAuNzcyIDQuNTM2NCwyMy4yMTQyIDMuOTUyNiw2Ljk4NCA4LjgzNDMsNy4zMTQ3IDEyLjgwOTYsNy4zMTQ3IDIuNTI4OCwwIDcuODE3MSwtMC42OTg4IDcuMzQzOSwtNS4xNDMyIC0wLjIzMDYsLTIuMTY2MyAwLjE3MzMsLTE1LjU1NDQgNC44NDg0LC0zNC43OTIgMy4wNTI3LC0xMi41NjI4MSA4LjE0MjQsLTIzLjkxNDExIDkuOTc4MSwtMjguMDYzOTEgMC42NzcyLC0xLjUzMDQgMC45OTE4LC0wLjMyNCAwLjk4MTEsLTAuMDg5IC0wLjM4NjYsOC42NTE3IC0xLjI1NDQsMzYuOTUwMzEgMi4yNzAyLDUyLjQyNzMxIDQuNzc3OCwyMC45NjY2IDE4LjU5OTEsMjMuMzEyOCAyMy40MTU1LDIzLjMxMjggMTAuMjgyLDAgMTguNjkxMSwtNy44MjE0IDIxLjUyMzksLTI4LjQwMTIgMC42ODI1LC00Ljk1MjYgLTAuMzI4LC04Ljc3NjggLTMuMzU1NCwtOC43NzY4XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW1CdXR0b247XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUHJpY2UgfSBmcm9tIFwifi9leG90aWNzXCI7XG5pbXBvcnQgZ2V0QXNzZXRVcmwgZnJvbSBcIn4vdXRpbHMvZ2V0QXNzZXRVcmxcIjtcblxuaW1wb3J0IEZsYXZvcnMgZnJvbSBcIi4vRmxhdm9yc1wiO1xuaW1wb3J0IFByZVJvbGxEZXNjcmlwdGlvbiBmcm9tIFwiLi9QcmVSb2xsRGVzY3JpcHRpb25cIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XG5cbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgYW1vdW50QWJicmV2aWF0aW9uPzogc3RyaW5nO1xuICBhbW91bnQ/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXNwb3NhYmxlPzogYm9vbGVhbjtcbiAgZmxhdm9ycz86IHN0cmluZ1tdO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlOiBQcmljZTtcbiAgcXVhbnRpdHlBYmJyZXZpYXRpb24/OiBzdHJpbmc7XG4gIHNyYz86IHN0cmluZztcbiAgc3VwcGxpZXI/OiBzdHJpbmc7XG4gIHN1cHBsaWVyVXJsPzogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdyYXA/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBGQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7XG4gIGFtb3VudEFiYnJldmlhdGlvbixcbiAgYW1vdW50LFxuICBkZXNjcmlwdGlvbixcbiAgZGlzcG9zYWJsZSxcbiAgZmxhdm9ycyA9IFtdLFxuICBuYW1lLFxuICBwcmljZSxcbiAgcXVhbnRpdHlBYmJyZXZpYXRpb24sXG4gIHNyYyxcbiAgc3VwcGxpZXIsXG4gIHN1cHBsaWVyVXJsLFxuICB0eXBlLFxuICB3cmFwLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbHVtbiBjYXJkIHRvcFBhZFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2lkZU1hcmdpblwiPlxuICAgICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGNvbHVtbiBzaWRlTWFyZ2luIGJvdHRvbVBhZFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4+e3R5cGV9PC9zcGFuPlxuICAgICAgICAgIHtkaXNwb3NhYmxlICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge2Rpc3Bvc2FibGUgPyA8c3Bhbj4mIzk5ODk7PC9zcGFuPiA6IDxzcGFuPiYjMTAwNjA7PC9zcGFuPn17XCIgXCJ9XG4gICAgICAgICAgICAgIERpc3Bvc2FibGVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7c3JjID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZEltYWdlV3JhcFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkSW1hZ2VcIlxuICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9LWltYWdlYH1cbiAgICAgICAgICAgICAgc3JjPXtnZXRBc3NldFVybChzcmMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBjb2x1bW4gZW5kXCI+XG4gICAgICAgICAgPFByZVJvbGxEZXNjcmlwdGlvblxuICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICBhbW91bnRBYmJyZXZpYXRpb249e2Ftb3VudEFiYnJldmlhdGlvbn1cbiAgICAgICAgICAgIHdyYXA9e3dyYXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rmxhdm9ycyBmbGF2b3JzPXtmbGF2b3JzfSAvPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbiA/IDxwPntkZXNjcmlwdGlvbn08L3A+IDogbnVsbH1cbiAgICAgICAgICA8UHJpY2VzXG4gICAgICAgICAgICBxdWFudGl0eUFiYnJldmlhdGlvbj17cXVhbnRpdHlBYmJyZXZpYXRpb259XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgcHJpY2VzPXtwcmljZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJkYXJrIHNpZGVQYWQgdmVydFBhZFwiPlxuICAgICAgICB7c3VwcGxpZXJVcmwgPyAoXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17c3VwcGxpZXJVcmx9PlxuICAgICAgICAgICAge3N1cHBsaWVyfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRmxhdm9yc1Byb3BzIHtcbiAgZmxhdm9ycz86IHN0cmluZ1tdO1xufVxuXG50eXBlIExpc3RGb3JtYXRPcHRpb25zID0ge1xuICB0eXBlPzogXCJjb25qdW5jdGlvblwiIHwgXCJkaXNqdW5jdGlvblwiIHwgXCJ1bml0XCI7XG4gIHN0eWxlPzogXCJsb25nXCIgfCBcInNob3J0XCIgfCBcIm5hcnJvd1wiO1xuICBsb2NhbGVNYXRjaGVyPzogXCJsb29rdXBcIiB8IFwiYmVzdCBmaXRcIjtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5kZWNsYXJlIG5hbWVzcGFjZSBJbnRsIHtcbiAgY2xhc3MgTGlzdEZvcm1hdCB7XG4gICAgY29uc3RydWN0b3IobG9jYWxlOiBzdHJpbmcsIG9wdGlvbnM6IExpc3RGb3JtYXRPcHRpb25zKTtcbiAgICBwdWJsaWMgZm9ybWF0OiAoaXRlbXM6IEFycmF5PHN0cmluZz4pID0+IHN0cmluZztcbiAgfVxufVxuXG5jb25zdCBsaXN0Rm9ybWF0dGVyID0gbmV3IEludGwuTGlzdEZvcm1hdChcImVuXCIsIHt9KTtcblxuY29uc3QgRmxhdm9yczogRkM8Rmxhdm9yc1Byb3BzPiA9ICh7IGZsYXZvcnMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IHRyYW5zZm9ybWVkRmxhdm9ycyA9IGxpc3RGb3JtYXR0ZXIuZm9ybWF0KGZsYXZvcnMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEZsYXZvcnMgPyAoXG4gICAgPHAgY2xhc3NOYW1lPVwiY2FwXCI+e3RyYW5zZm9ybWVkRmxhdm9yc308L3A+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxhdm9ycztcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJlUm9sbERlc2NyaXB0aW9uUHJvcHMge1xuICBhbW91bnRBYmJyZXZpYXRpb24/OiBzdHJpbmc7XG4gIGFtb3VudD86IHN0cmluZztcbiAgd3JhcD86IHN0cmluZztcbn1cblxuY29uc3QgUHJlUm9sbERlc2NyaXB0aW9uOiBGQzxQcmVSb2xsRGVzY3JpcHRpb25Qcm9wcz4gPSAoe1xuICBhbW91bnRBYmJyZXZpYXRpb24sXG4gIGFtb3VudCxcbiAgd3JhcCxcbn0pID0+IHtcbiAgcmV0dXJuIGFtb3VudCB8fCB3cmFwID8gKFxuICAgIDxwIGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAge3dyYXAgPyA8c3BhbiBjbGFzc05hbWU9XCJjYXBcIj57d3JhcH08L3NwYW4+IDogbnVsbH1cbiAgICAgIHt3cmFwICYmIGFtb3VudCA/IFwiICAgLSAgIFwiIDogbnVsbH1cbiAgICAgIHthbW91bnQgPyA8c3Bhbj57YCR7YW1vdW50fSAke2Ftb3VudEFiYnJldmlhdGlvbiA/PyBcIlwifWB9PC9zcGFuPiA6IG51bGx9XG4gICAgPC9wPlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZVJvbGxEZXNjcmlwdGlvbjtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJpY2VzUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcbiAgcXVhbnRpdHlBYmJyZXZpYXRpb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFByaWNlczogRkM8UHJpY2VzUHJvcHM+ID0gKHsgcXVhbnRpdHlBYmJyZXZpYXRpb24sIG5hbWUsIHByaWNlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwXCI+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgUXVhbnRpdHkge3F1YW50aXR5QWJicmV2aWF0aW9uICYmIHF1YW50aXR5QWJicmV2aWF0aW9ufVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge0FycmF5LmZyb20oT2JqZWN0LmtleXMocHJpY2VzKSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoK2EgPCArYiA/IC0xIDogMCkpXG4gICAgICAgICAgICAubWFwKChxdWFudGl0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHtuYW1lfS0ke2luZGV4fS0ke3F1YW50aXR5fWB9PlxuICAgICAgICAgICAgICAgICAgPHRkPntxdWFudGl0eX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJwcmljZVwiPiR7cHJpY2VzW3F1YW50aXR5XSA/PyBcIk5BXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcbiIsICJleHBvcnQgdHlwZSBUcmFuc2Zvcm1lZE1hcmtkb3duID0geyBodG1sOiBzdHJpbmcgfTtcbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBnZXRQcm9maWxlLCBQcm9maWxlIH0gZnJvbSBcIn4vcHJvZmlsZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L3VzZXJzXCI7XG5pbXBvcnQgeyBnZXRVc2VyQnlTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW1wb3J0IGNzc1VybCBmcm9tIFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBjc3NVcmwgfV07XG59O1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHByb2ZpbGU6IFByb2ZpbGU7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBbdXNlciwgcHJvZmlsZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0VXNlckJ5U2Vzc2lvbihyZXF1ZXN0KSxcbiAgICBnZXRQcm9maWxlKCksXG4gIF0pO1xuXG4gIHJldHVybiB7IHByb2ZpbGUsIHVzZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHByb2ZpbGUsIHVzZXIgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8Rm9vdGVyIHsuLi5wcm9maWxlfSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6J2Q3M2MzODBiJywnZW50cnknOnsnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvZW50cnkuY2xpZW50LUJLUDJLV1ZELmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVJNQ1FEREdWLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm9vdC1UM0JPSjNHRi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZSc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZXhlY3V0aXZlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlLUpCTzJKUkxLLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTJRVkJWUlVGLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5PTDYyV1ouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL2V4b3RpY3MnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL2V4b3RpY3MnLCdwYXJlbnRJZCc6J3JvdXRlcy9leGVjdXRpdmUnLCdwYXRoJzonZXhvdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9leG90aWNzLUFOSjJXTVkzLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9pbmRleCc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9leGVjdXRpdmUnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvaW5kZXgtU0Q0RlVNQUcuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNTNXT1ZCM0YuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRVVUJJUzdILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL21lZGlhJzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9tZWRpYScsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZScsJ3BhdGgnOidtZWRpYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9tZWRpYS1CR1pDSU5XVi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HM0ZON0dGUy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZScsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3LVZYRzNKVzRKLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL25ldy9jYXJ0Jzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2FydCcsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcnLCdwYXRoJzonY2FydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2FydC1FUU5NUzc0Si5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGUnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidjbG9zZS1kYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlLVNSV1BaTFdQLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRVVUJJUzdILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlJzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidlZGlibGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3L2VkaWJsZS1TN1EzRlpGUy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlcic6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlcicsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcnLCdwYXRoJzonZmxvd2VyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9mbG93ZXItMkhKRTNHQjIuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL25ldy9tZWRpYSc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvbmV3L21lZGlhJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidtZWRpYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvbWVkaWEtVVc0NU5ES0YuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcvcHJlLXJvbGwnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldy9wcmUtcm9sbCcsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcnLCdwYXRoJzoncHJlLXJvbGwnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3L3ByZS1yb2xsLVpCTFAyVjY2LmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcvd2F4Jzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvd2F4JywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOid3YXgnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3L3dheC1SVVhLTUEyUy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leG90aWNzJzp7J2lkJzoncm91dGVzL2V4b3RpY3MnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZXhvdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4b3RpY3MtQkdSU1dSVFEuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstWVVQRkpQVkwuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTJRVkJWUlVGLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNTNXT1ZCM0YuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRVVUJJUzdILmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HM0ZON0dGUy5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9pbmRleCc6eydpZCc6J3JvdXRlcy9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOnVuZGVmaW5lZCwnaW5kZXgnOnRydWUsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2luZGV4LUxGRzVGU1pSLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVlVUEZKUFZMLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay0yUVZCVlJVRi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstR0s1NkNaSkcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTUzV09WQjNGLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay00VVVCSVM3SC5qcyddLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dpbi9pbmRleCc6eydpZCc6J3JvdXRlcy9sb2dpbi9pbmRleCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dpbicsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9sb2dpbi9pbmRleC1USEpLU0FYNS5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay0yUVZCVlJVRi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstR0s1NkNaSkcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9sb2dvdXQnOnsnaWQnOidyb3V0ZXMvbG9nb3V0JywncGFyZW50SWQnOidyb290JywncGF0aCc6J2xvZ291dCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2xvZ291dC02SllCRUhVSS5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL21vZGVscyc6eydpZCc6J3JvdXRlcy9tb2RlbHMnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbW9kZWxzJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvbW9kZWxzLVJLR1RWUDRTLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9fSwndXJsJzonL19zdGF0aWMvYnVpbGQvbWFuaWZlc3QtRDczQzM4MEIuanMnfTsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFDQTtBQURBO0FBQUE7QUFDQSxZQUF1QjtBQUFBO0FBQUE7OztBQ0R2QjtBQUFBO0FBQUE7QUFBQTtBQVlBLFdBQU8sZUFBZSxTQUFTLGNBQWMsRUFBRSxPQUFPO0FBRXRELFFBQUksT0FBTyxRQUFRO0FBSW5CLFdBQU8sZUFBZSxTQUFTLGdCQUFnQjtBQUFBLE1BQzdDLFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsOEJBQThCO0FBQUEsTUFDM0QsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyw0QkFBNEI7QUFBQSxNQUN6RCxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8sZUFBZSxTQUFTLDhCQUE4QjtBQUFBLE1BQzNELFlBQVk7QUFBQSxNQUNaLEtBQUssV0FBWTtBQUFFLGVBQU8sS0FBSztBQUFBO0FBQUE7QUFFakMsV0FBTyxlQUFlLFNBQVMsd0JBQXdCO0FBQUEsTUFDckQsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxLQUFLO0FBQUE7QUFBQTtBQUVqQyxXQUFPLGVBQWUsU0FBUyxvQ0FBb0M7QUFBQSxNQUNqRSxZQUFZO0FBQUEsTUFDWixLQUFLLFdBQVk7QUFBRSxlQUFPLEtBQUs7QUFBQTtBQUFBO0FBRWpDLFdBQU8s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QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosK0JBQStCO0FBQUEsSUFDM0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiw4QkFBOEI7QUFBQSxJQUMxQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZCQUE2QjtBQUFBLElBQ3pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNEJBQTRCO0FBQUEsSUFDeEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QURsS1AsSUFBTSxVQUFVLDJDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQSxNQUFNO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
