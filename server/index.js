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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/styles/global.css
var global_default = "/_static/build/_assets/global-P5CBY3E2.css";

// app/styles/global-large.css
var global_large_default = "/_static/build/_assets/global-large-NKTQAWDZ.css";

// app/styles/global-medium.css
var global_medium_default = "/_static/build/_assets/global-medium-DRHJR3JT.css";

// route:/Users/chaseowens/Desktop/bayou_exotics/app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: global_medium_default, media: "" },
    { rel: "stylesheet", href: global_large_default }
  ];
};
var meta = () => {
  return { description: "Best Prices on Best Quality", title: "Bayou Exotics" };
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/login/index.tsx
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
    console.log(`Error fetching users at ${"users.json" /* User */}: ${error.message}`);
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/login/index.tsx
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive.tsx
var executive_exports = {};
__export(executive_exports, {
  default: () => Executive,
  links: () => links3,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());

// app/styles/exec.css
var exec_default = "/_static/build/_assets/exec-MV6Y2EMO.css";

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive.tsx
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
    className: "row-col wrap space-noSpace"
  }, /* @__PURE__ */ React.createElement("h1", null, "Executive"), /* @__PURE__ */ React.createElement("div", {
    className: "row-col space-noSpace"
  }, /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "data-active": pathname === "/executive",
    to: "/executive"
  }, "Profile"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "data-active": pathname === "/executive/exotics",
    to: "exotics"
  }, "Exotics"), /* @__PURE__ */ React.createElement(import_remix7.Link, {
    "data-active": pathname === "/executive/media",
    to: "media"
  }, "Images"))), /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(import_remix7.Outlet, null))));
}

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/exotics.tsx
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
var createMoonRock = async (moonRock) => {
  const moonRocks = await getFile("exotics/thc/moon-rock.json" /* MoonRock */);
  moonRocks.current.push(moonRock);
  const minifiedMoonRocks = JSON.stringify(moonRocks);
  return await aws_exports_default.putObject({
    Bucket: "bayou-exotics",
    Key: "exotics/thc/moon-rock.json" /* MoonRock */,
    Body: minifiedMoonRocks
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
var getMoonRocks = () => getFile("exotics/thc/moon-rock.json" /* MoonRock */);
var getPreRolls = () => getFile("exotics/thc/pre-roll.json" /* PreRoll */);
var getWaxes = () => getFile("exotics/thc/wax.json" /* Wax */);
var deleteCurrentCart = (index) => deleteCurrentIndex("exotics/thc/cart.json" /* Cart */, index);
var deleteCurrentEdible = (index) => deleteCurrentIndex("exotics/thc/edible.json" /* Edible */, index);
var deleteCurrentFlower = (index) => deleteCurrentIndex("exotics/thc/flower.json" /* Flower */, index);
var deleteCurrentMoonRock = (index) => deleteCurrentIndex("exotics/thc/moon-rock.json" /* MoonRock */, index);
var deleteCurrentPreRoll = (index) => deleteCurrentIndex("exotics/thc/pre-roll.json" /* PreRoll */, index);
var deleteCurrentWax = (index) => deleteCurrentIndex("exotics/thc/wax.json" /* Wax */, index);

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/exotics.tsx
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const cartSelected = formData.get("cart");
  const edibleSelected = formData.get("edible");
  const flowerSelected = formData.get("flower");
  const moonRockSelected = formData.get("moonRock");
  const preRollSelected = formData.get("preRoll");
  const waxSelected = formData.get("wax");
  console.log({ moonRockSelected, edibleSelected });
  if (cartSelected) {
    return await deleteCurrentCart(+cartSelected);
  }
  if (edibleSelected) {
    return await deleteCurrentEdible(+edibleSelected);
  }
  if (flowerSelected) {
    return await deleteCurrentFlower(+flowerSelected);
  }
  if (moonRockSelected) {
    return await deleteCurrentMoonRock(+moonRockSelected);
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
  const [carts, edibles, flowers, moonRocks, preRolls, waxes] = await Promise.all([
    getCarts(),
    getEdibles(),
    getFlowers(),
    getMoonRocks(),
    getPreRolls(),
    getWaxes()
  ]);
  return { carts, edibles, flowers, moonRocks, preRolls, waxes };
};
var links4 = () => {
  return [{ rel: "stylesheet", href: exec_default }];
};
function Executive2() {
  const { carts, edibles, flowers, moonRocks, preRolls, waxes } = (0, import_remix8.useLoaderData)();
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
  }, /* @__PURE__ */ React.createElement("h2", null, "Moon Rock"), /* @__PURE__ */ React.createElement(import_remix8.Link, {
    className: "button",
    to: "/executive/new/moon-rock"
  }, "Add")), /* @__PURE__ */ React.createElement("ul", {
    className: "col space"
  }, moonRocks.current.map((moonRock, index) => /* @__PURE__ */ React.createElement("li", {
    key: `${moonRock.name}-${index}`
  }, /* @__PURE__ */ React.createElement(import_remix8.Form, {
    name: "moonRock",
    method: "post"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "moonRock",
    value: index
  }), /* @__PURE__ */ React.createElement("div", {
    className: "row spaceBetween alignCenter space"
  }, /* @__PURE__ */ React.createElement("span", null, moonRock.name), /* @__PURE__ */ React.createElement("button", {
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/index.tsx
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
var PROFILE_KEY = "bayou-exotics.json";
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
    Key: PROFILE_KEY
  }).promise().catch((error) => {
    console.log(`Error fetching executive data from  ${PROFILE_KEY}: ${error.message}`);
  });
  if (!executive || !executive.Body) {
    throw new Error(`${PROFILE_KEY} has no Body`);
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/index.tsx
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/media.tsx
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/media.tsx
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new.tsx
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/close-date.tsx
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/moon-rock.tsx
var moon_rock_exports = {};
__export(moon_rock_exports, {
  action: () => action6,
  default: () => NewCart,
  loader: () => loader6
});
init_react();
var import_remix14 = __toESM(require_remix());
var import_tiny_invariant3 = __toESM(require("tiny-invariant"));

// app/utils/getFlowerPrice.ts
init_react();

// app/utils/getFormPrice.ts
init_react();
function getFormPrice(value) {
  return !!value && !isNaN(+value) && +value > 0 ? +value : void 0;
}

// app/utils/getFlowerPrice.ts
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/moon-rock.tsx
var availableMoonRockQuantities = ["1", "2", "3.5", "7", "14", "28"];
var action6 = async ({ request }) => {
  const formData = await request.formData();
  const descriptionFormData = formData.get("description");
  const name = formData.get("name");
  const description = !descriptionFormData ? void 0 : descriptionFormData;
  const flavors = formData.get("flavors");
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
  (0, import_tiny_invariant3.default)(typeof name === "string");
  (0, import_tiny_invariant3.default)(typeof flavors === "string");
  (0, import_tiny_invariant3.default)(typeof image === "string");
  (0, import_tiny_invariant3.default)(typeof price !== "undefined");
  const moonRock = {
    class: "thc",
    description,
    flavors: flavors.split(",").map((flavor) => flavor.trim()),
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType
  };
  await createMoonRock(moonRock);
  return (0, import_remix14.redirect)("/executive/exotics");
};
var loader6 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewCart() {
  const errors = (0, import_remix14.useActionData)();
  const transition = (0, import_remix14.useTransition)();
  const { assets } = (0, import_remix14.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Moon Rock"), /* @__PURE__ */ React.createElement(import_remix14.Form, {
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
  })), /* @__PURE__ */ React.createElement("span", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "flavors"
  }, "Flavors:"), /* @__PURE__ */ React.createElement("textarea", {
    id: "flavors",
    rows: 2,
    name: "flavors",
    placeholder: "flavor 1, flavor 2"
  })), /* @__PURE__ */ React.createElement("h3", null, "Prices "), /* @__PURE__ */ React.createElement("div", {
    className: "prices col space"
  }, availableMoonRockQuantities.map((quantity) => /* @__PURE__ */ React.createElement("label", {
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
  }, transition.submission ? "Creating..." : "Create Moon Rock")))));
}

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/pre-roll.tsx
var pre_roll_exports = {};
__export(pre_roll_exports, {
  action: () => action7,
  default: () => NewPreRoll,
  loader: () => loader7
});
init_react();
var import_remix15 = __toESM(require_remix());
var import_tiny_invariant4 = __toESM(require("tiny-invariant"));

// app/utils/getPreRollPrice.ts
init_react();
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/pre-roll.tsx
var availablePreRollQuantities = ["1", "5", "10"];
var action7 = async ({ request }) => {
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
  (0, import_tiny_invariant4.default)(typeof amount === "string");
  (0, import_tiny_invariant4.default)(typeof flowerType === "string");
  (0, import_tiny_invariant4.default)(typeof image === "string");
  (0, import_tiny_invariant4.default)(typeof name === "string");
  (0, import_tiny_invariant4.default)(typeof price !== "undefined");
  (0, import_tiny_invariant4.default)(typeof wrap === "string");
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
  return (0, import_remix15.redirect)("/executive/exotics");
};
var loader7 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewPreRoll() {
  const errors = (0, import_remix15.useActionData)();
  const transition = (0, import_remix15.useTransition)();
  const { assets } = (0, import_remix15.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Pre Roll"), /* @__PURE__ */ React.createElement(import_remix15.Form, {
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/edible.tsx
var edible_exports = {};
__export(edible_exports, {
  action: () => action8,
  default: () => NewCart2,
  loader: () => loader8
});
init_react();
var import_remix16 = __toESM(require_remix());
var import_tiny_invariant5 = __toESM(require("tiny-invariant"));

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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/edible.tsx
var availableCartQuantities = ["1", "2"];
var action8 = async ({ request }) => {
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
  (0, import_tiny_invariant5.default)(typeof amount === "string");
  (0, import_tiny_invariant5.default)(typeof name === "string");
  (0, import_tiny_invariant5.default)(typeof flavors === "string");
  (0, import_tiny_invariant5.default)(typeof type === "string");
  (0, import_tiny_invariant5.default)(typeof image === "string");
  (0, import_tiny_invariant5.default)(typeof price !== "undefined");
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
  return (0, import_remix16.redirect)("/executive/exotics");
};
var loader8 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewCart2() {
  const errors = (0, import_remix16.useActionData)();
  const transition = (0, import_remix16.useTransition)();
  const { assets } = (0, import_remix16.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Edible"), /* @__PURE__ */ React.createElement(import_remix16.Form, {
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/flower.tsx
var flower_exports = {};
__export(flower_exports, {
  action: () => action9,
  default: () => NewFlower2,
  loader: () => loader9
});
init_react();
var import_remix17 = __toESM(require_remix());
var import_tiny_invariant6 = __toESM(require("tiny-invariant"));
var availableFlowerQuantities = ["1", "2", "3.5", "7", "14", "28"];
var action9 = async ({ request }) => {
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
  (0, import_tiny_invariant6.default)(typeof name === "string");
  (0, import_tiny_invariant6.default)(typeof flowerType === "string");
  (0, import_tiny_invariant6.default)(typeof image === "string");
  (0, import_tiny_invariant6.default)(typeof price !== "undefined");
  const flower = {
    class: "thc",
    description,
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type: flowerType
  };
  await createFlower(flower);
  return (0, import_remix17.redirect)("/executive/exotics");
};
var loader9 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewFlower2() {
  const errors = (0, import_remix17.useActionData)();
  const transition = (0, import_remix17.useTransition)();
  const { assets } = (0, import_remix17.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Flower"), /* @__PURE__ */ React.createElement(import_remix17.Form, {
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
  }, transition.submission ? "Creating..." : "Create Flower"))));
}

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/media.tsx
var media_exports2 = {};
__export(media_exports2, {
  action: () => action10,
  default: () => NewFlower3
});
init_react();
var import_remix18 = __toESM(require_remix());
var import_remix19 = __toESM(require_remix());
var action10 = async ({ request }) => {
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
    const data = await addAsset(filename, buffer);
    return JSON.stringify({ data });
  };
  await (0, import_remix19.unstable_parseMultipartFormData)(request, uploadHandler);
  return (0, import_remix18.redirect)("/executive/media");
};
function NewFlower3() {
  const transition = (0, import_remix18.useTransition)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Add Image"), /* @__PURE__ */ React.createElement(import_remix18.Form, {
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/cart.tsx
var cart_exports = {};
__export(cart_exports, {
  action: () => action11,
  default: () => NewCart3,
  loader: () => loader10
});
init_react();
var import_remix20 = __toESM(require_remix());
var import_tiny_invariant7 = __toESM(require("tiny-invariant"));
var availableCartQuantities2 = ["1", "2"];
var action11 = async ({ request }) => {
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
  (0, import_tiny_invariant7.default)(typeof name === "string");
  (0, import_tiny_invariant7.default)(typeof flavors === "string");
  (0, import_tiny_invariant7.default)(typeof flowerType === "string");
  (0, import_tiny_invariant7.default)(typeof image === "string");
  (0, import_tiny_invariant7.default)(typeof price !== "undefined");
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
  return (0, import_remix20.redirect)("/executive/exotics");
};
var loader10 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewCart3() {
  const errors = (0, import_remix20.useActionData)();
  const transition = (0, import_remix20.useTransition)();
  const { assets } = (0, import_remix20.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Cart"), /* @__PURE__ */ React.createElement(import_remix20.Form, {
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/executive/new/wax.tsx
var wax_exports = {};
__export(wax_exports, {
  action: () => action12,
  default: () => NewWax,
  loader: () => loader11
});
init_react();
var import_remix21 = __toESM(require_remix());
var import_tiny_invariant8 = __toESM(require("tiny-invariant"));
var availableWaxQuantities = ["1", "2", "3.5", "7", "14", "28"];
var action12 = async ({ request }) => {
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
  (0, import_tiny_invariant8.default)(typeof name === "string");
  (0, import_tiny_invariant8.default)(typeof type === "string");
  (0, import_tiny_invariant8.default)(typeof image === "string");
  (0, import_tiny_invariant8.default)(typeof price !== "undefined");
  const wax = {
    class: "thc",
    description,
    src: image === "None" ? "assets/bayou-logo.png" : image,
    name,
    price,
    type
  };
  await createWax(wax);
  return (0, import_remix21.redirect)("/executive/exotics");
};
var loader11 = async ({ request }) => {
  const assets = await getAssets();
  return { assets };
};
function NewWax() {
  const errors = (0, import_remix21.useActionData)();
  const transition = (0, import_remix21.useTransition)();
  const { assets } = (0, import_remix21.useLoaderData)();
  return /* @__PURE__ */ React.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "content",
    "data-light": ""
  }, /* @__PURE__ */ React.createElement("h2", null, "Create Wax"), /* @__PURE__ */ React.createElement(import_remix21.Form, {
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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/exotics.tsx
var exotics_exports2 = {};
__export(exotics_exports2, {
  default: () => Exotics,
  links: () => links6,
  loader: () => loader12
});
init_react();
var import_remix22 = __toESM(require_remix());

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

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/exotics.tsx
var loader12 = async ({ request }) => {
  const [carts, edibles, flowers, moonRocks, preRolls, profile, user, waxes] = await Promise.all([
    getCarts(),
    getEdibles(),
    getFlowers(),
    getMoonRocks(),
    getPreRolls(),
    getProfile(),
    getUserBySession(request),
    getWaxes()
  ]);
  return { carts, edibles, flowers, moonRocks, preRolls, profile, user, waxes };
};
var links6 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
function Exotics() {
  const { carts, edibles, flowers, moonRocks, preRolls, profile, user, waxes } = (0, import_remix22.useLoaderData)();
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
  }, wax)))), /* @__PURE__ */ React.createElement("h2", null, "Moon Rocks"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, moonRocks.current.map((moonRock, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    key: `moonrock-${moonRock.name}-${index}`,
    quantityAbbreviation: "(g)"
  }, moonRock)))), /* @__PURE__ */ React.createElement("h2", null, "Edibles"), /* @__PURE__ */ React.createElement("ul", {
    className: "cards"
  }, edibles.current.map((edible, index) => /* @__PURE__ */ React.createElement(ProductCard_default, __spreadValues({
    amountAbbreviation: "mg",
    key: `edible-${edible.name}-${index}`
  }, edible)))), /* @__PURE__ */ React.createElement(import_remix22.Outlet, null)), /* @__PURE__ */ React.createElement(Footer_default, __spreadValues({}, profile)));
}

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action13,
  loader: () => loader13
});
init_react();
var action13 = async ({ request }) => {
  return logout(request);
};
var loader13 = async ({ request }) => {
  return logout(request);
};

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/models.ts
var models_exports = {};
init_react();

// route:/Users/chaseowens/Desktop/bayou_exotics/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index,
  links: () => links7,
  loader: () => loader14
});
init_react();
var import_remix23 = __toESM(require_remix());
var links7 = () => {
  return [{ rel: "stylesheet", href: styles_default }];
};
var loader14 = async ({ request }) => {
  const [user, profile] = await Promise.all([
    getUserBySession(request),
    getProfile()
  ]);
  return { profile, user };
};
function Index() {
  const { profile, user } = (0, import_remix23.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Header_default, {
    user
  }), /* @__PURE__ */ React.createElement(Footer_default, __spreadValues({}, profile)));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "5a5b22c8", "entry": { "module": "/_static/build/entry.client-QMSUHGYY.js", "imports": ["/_static/build/_shared/chunk-TWVLBSQZ.js", "/_static/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-TCDZ7J3Z.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive": { "id": "routes/executive", "parentId": "root", "path": "executive", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive-4AG37E7Y.js", "imports": ["/_static/build/_shared/chunk-XEXCYUVY.js", "/_static/build/_shared/chunk-YVBWVBKR.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/exotics": { "id": "routes/executive/exotics", "parentId": "routes/executive", "path": "exotics", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/exotics-XXNHB34Z.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/index": { "id": "routes/executive/index", "parentId": "routes/executive", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/executive/index-4L64ZZPS.js", "imports": ["/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/media": { "id": "routes/executive/media", "parentId": "routes/executive", "path": "media", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/media-GXV4OZRJ.js", "imports": ["/_static/build/_shared/chunk-G3FN7GFS.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new": { "id": "routes/executive/new", "parentId": "routes/executive", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new-CYVH2NAG.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/cart": { "id": "routes/executive/new/cart", "parentId": "routes/executive/new", "path": "cart", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/cart-QAQRFBS3.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/close-date": { "id": "routes/executive/new/close-date", "parentId": "routes/executive/new", "path": "close-date", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/close-date-22PTZNM5.js", "imports": ["/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/edible": { "id": "routes/executive/new/edible", "parentId": "routes/executive/new", "path": "edible", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/edible-ORZ2BEKN.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/flower": { "id": "routes/executive/new/flower", "parentId": "routes/executive/new", "path": "flower", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/flower-3HRS3JEL.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/media": { "id": "routes/executive/new/media", "parentId": "routes/executive/new", "path": "media", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/media-DQW67TO6.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/moon-rock": { "id": "routes/executive/new/moon-rock", "parentId": "routes/executive/new", "path": "moon-rock", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/moon-rock-5EYQDSXQ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/pre-roll": { "id": "routes/executive/new/pre-roll", "parentId": "routes/executive/new", "path": "pre-roll", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/pre-roll-KONKFK7K.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/wax": { "id": "routes/executive/new/wax", "parentId": "routes/executive/new", "path": "wax", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/wax-UI5573IT.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/exotics": { "id": "routes/exotics", "parentId": "root", "path": "exotics", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/exotics-TV7CAIBT.js", "imports": ["/_static/build/_shared/chunk-YUPFJPVL.js", "/_static/build/_shared/chunk-XEXCYUVY.js", "/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js", "/_static/build/_shared/chunk-G3FN7GFS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-7NVTBTJO.js", "imports": ["/_static/build/_shared/chunk-YUPFJPVL.js", "/_static/build/_shared/chunk-XEXCYUVY.js", "/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/login/index-OZW374Z6.js", "imports": ["/_static/build/_shared/chunk-XEXCYUVY.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/logout-G4YCE7SF.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/models": { "id": "routes/models", "parentId": "root", "path": "models", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/models-LFPAIULB.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-5A5B22C8.js" };

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
  "routes/executive/new/moon-rock": {
    id: "routes/executive/new/moon-rock",
    parentId: "routes/executive/new",
    path: "moon-rock",
    index: void 0,
    caseSensitive: void 0,
    module: moon_rock_exports
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
 * @remix-run/node v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.4.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=index.js.map
