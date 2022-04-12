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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/exotics.tsx
var action2 = async ({ request }) => {
  const formData = await request.formData();
  const cartSelected = formData.get("cart");
  const edibleSelected = formData.get("edible");
  const flowerSelected = formData.get("flower");
  const moonRockSelected = formData.get("moonRocks");
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/moon-rock.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/moon-rock.tsx
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
  }, transition.submission ? "Creating..." : "Create Edible")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/pre-roll.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/pre-roll.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/edible.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/edible.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/flower.tsx
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
    className: "container"
  }, /* @__PURE__ */ React.createElement("div", {
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
  }, transition.submission ? "Creating..." : "Create Flower")))));
}

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/media.tsx
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
    const data = addAsset(filename, buffer);
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/cart.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/executive/new/wax.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/exotics.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/exotics.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/logout.tsx
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

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/models.ts
var models_exports = {};
init_react();

// route:/Users/chaseowens/Desktop/bayou_boy/app/routes/index.tsx
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
var assets_manifest_default = { "version": "5fb51e56", "entry": { "module": "/_static/build/entry.client-2FI46M4Z.js", "imports": ["/_static/build/_shared/chunk-HZSQUDOJ.js", "/_static/build/_shared/chunk-6BO74FWO.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/root-Y6CTXEQS.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive": { "id": "routes/executive", "parentId": "root", "path": "executive", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive-YPGVFGLF.js", "imports": ["/_static/build/_shared/chunk-52VOKHOY.js", "/_static/build/_shared/chunk-GK56CZJG.js", "/_static/build/_shared/chunk-PNOL62WZ.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/exotics": { "id": "routes/executive/exotics", "parentId": "routes/executive", "path": "exotics", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/exotics-YXM4XHKK.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/index": { "id": "routes/executive/index", "parentId": "routes/executive", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/executive/index-ASXOWKUK.js", "imports": ["/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/media": { "id": "routes/executive/media", "parentId": "routes/executive", "path": "media", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/media-AYFYS3WL.js", "imports": ["/_static/build/_shared/chunk-G3FN7GFS.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new": { "id": "routes/executive/new", "parentId": "routes/executive", "path": "new", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new-EC2EK22O.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/cart": { "id": "routes/executive/new/cart", "parentId": "routes/executive/new", "path": "cart", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/cart-Q3WPXXUJ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/close-date": { "id": "routes/executive/new/close-date", "parentId": "routes/executive/new", "path": "close-date", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/close-date-3R5PNEVW.js", "imports": ["/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/edible": { "id": "routes/executive/new/edible", "parentId": "routes/executive/new", "path": "edible", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/edible-QI4UFPAR.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/flower": { "id": "routes/executive/new/flower", "parentId": "routes/executive/new", "path": "flower", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/flower-3MTJSBXT.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/media": { "id": "routes/executive/new/media", "parentId": "routes/executive/new", "path": "media", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/media-Z2N5IWLP.js", "imports": void 0, "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/moon-rock": { "id": "routes/executive/new/moon-rock", "parentId": "routes/executive/new", "path": "moon-rock", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/moon-rock-S5PEZHK3.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/pre-roll": { "id": "routes/executive/new/pre-roll", "parentId": "routes/executive/new", "path": "pre-roll", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/pre-roll-YAVIEAGV.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/executive/new/wax": { "id": "routes/executive/new/wax", "parentId": "routes/executive/new", "path": "wax", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/executive/new/wax-CCJM3JXZ.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/exotics": { "id": "routes/exotics", "parentId": "root", "path": "exotics", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/exotics-ZAGHPJ4R.js", "imports": ["/_static/build/_shared/chunk-YUPFJPVL.js", "/_static/build/_shared/chunk-52VOKHOY.js", "/_static/build/_shared/chunk-GK56CZJG.js", "/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js", "/_static/build/_shared/chunk-G3FN7GFS.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/index-JOIO3RHV.js", "imports": ["/_static/build/_shared/chunk-YUPFJPVL.js", "/_static/build/_shared/chunk-52VOKHOY.js", "/_static/build/_shared/chunk-GK56CZJG.js", "/_static/build/_shared/chunk-53WOVB3F.js", "/_static/build/_shared/chunk-4UUBIS7H.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/login/index": { "id": "routes/login/index", "parentId": "root", "path": "login", "index": true, "caseSensitive": void 0, "module": "/_static/build/routes/login/index-R4ON5RAZ.js", "imports": ["/_static/build/_shared/chunk-52VOKHOY.js", "/_static/build/_shared/chunk-GK56CZJG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/logout": { "id": "routes/logout", "parentId": "root", "path": "logout", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/logout-6JYBEHUI.js", "imports": ["/_static/build/_shared/chunk-GK56CZJG.js"], "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/models": { "id": "routes/models", "parentId": "root", "path": "models", "index": void 0, "caseSensitive": void 0, "module": "/_static/build/routes/models-RKGTVP4S.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/_static/build/manifest-5FB51E56.js" };

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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9pbmRleC5qcyIsICIuLi9zZXJ2ZXIuanMiLCAic2VydmVyLWVudHJ5LW1vZHVsZTpAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGQiLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3Jvb3QudHN4IiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvbG9naW4vaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0hlYWRlci9pbmRleC50c3giLCAiLi4vYXBwL3VzZXJzLnRzIiwgIi4uL2F3cy9hd3MtZXhwb3J0cy50cyIsICIuLi9hd3MvYXdzLWNvbmZpZy50cyIsICIuLi9hcHAvdXRpbHMvY3JlYXRlSWQudHMiLCAiLi4vYXBwL3V0aWxzL3Nlc3Npb24uc2VydmVyLnRzIiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlLnRzeCIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9leG90aWNzLnRzeCIsICIuLi9hcHAvZXhvdGljcy50cyIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9pbmRleC50c3giLCAiLi4vYXBwL3Byb2ZpbGUudHMiLCAiLi4vYXBwL3V0aWxzL2Zvcm1hdERhdGUudHMiLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbWVkaWEudHN4IiwgIi4uL2FwcC9hc3NldHMudHMiLCAiLi4vYXBwL3V0aWxzL2dldEFzc2V0VXJsLnRzIiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGUudHN4IiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9tb29uLXJvY2sudHN4IiwgIi4uL2FwcC91dGlscy9nZXRGbG93ZXJQcmljZS50cyIsICIuLi9hcHAvdXRpbHMvZ2V0Rm9ybVByaWNlLnRzIiwgInJvdXRlOi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9wcmUtcm9sbC50c3giLCAiLi4vYXBwL3V0aWxzL2dldFByZVJvbGxQcmljZS50cyIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlLnRzeCIsICIuLi9hcHAvdXRpbHMvZ2V0UHJpY2VGb3JUd28udHMiLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlci50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L21lZGlhLnRzeCIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2FydC50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L3dheC50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leG90aWNzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL0luc3RhZ3JhbUJ1dHRvbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL0ZsYXZvcnMvaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL1Byb2R1Y3RDYXJkL1ByZVJvbGxEZXNjcmlwdGlvbi9pbmRleC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvUHJvZHVjdENhcmQvUHJpY2VzL2luZGV4LnRzeCIsICJyb3V0ZTovVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2xvZ291dC50c3giLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9tb2RlbHMudHMiLCAicm91dGU6L1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9pbmRleC50c3giLCAic2VydmVyLWFzc2V0cy1tYW5pZmVzdDpAcmVtaXgtcnVuL2Rldi9hc3NldHMtbWFuaWZlc3QiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXNcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IHsgUmVhY3QgfTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vbm9kZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgbm9kZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vbm9kZScpO1xuXG5cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVDb29raWU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLmNyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlTWVtb3J5U2Vzc2lvblN0b3JhZ2UnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS5jcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZUZpbGVVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlTWVtb3J5VXBsb2FkSGFuZGxlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUudW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YTsgfVxufSk7XG5cbi8qKlxuICogQHJlbWl4LXJ1bi9zZXJ2ZXItcnVudGltZSB2MS4zLjRcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgc2VydmVyUnVudGltZSA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdpc0Nvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzQ29va2llOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNTZXNzaW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuaXNTZXNzaW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnanNvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmpzb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdyZWRpcmVjdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLnJlZGlyZWN0OyB9XG59KTtcblxuLyoqXG4gKiBAcmVtaXgtcnVuL3JlYWN0IHYxLjMuNFxuICpcbiAqIENvcHlyaWdodCAoYykgUmVtaXggU29mdHdhcmUgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRS5tZCBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICpcbiAqIEBsaWNlbnNlIE1JVFxuICovXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciByZWFjdCA9IHJlcXVpcmUoJ0ByZW1peC1ydW4vcmVhY3QnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnRm9ybScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5Gb3JtOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdMaXZlUmVsb2FkJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpdmVSZWxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdNZXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk1ldGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdOYXZMaW5rJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk5hdkxpbms7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdPdXRsZXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuT3V0bGV0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUHJlZmV0Y2hQYWdlTGlua3MnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUHJlZmV0Y2hQYWdlTGlua3M7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSZW1peEJyb3dzZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhCcm93c2VyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhTZXJ2ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuUmVtaXhTZXJ2ZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JpcHRzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlNjcmlwdHM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdTY3JvbGxSZXN0b3JhdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JvbGxSZXN0b3JhdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUFjdGlvbkRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQWN0aW9uRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUJlZm9yZVVubG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VCZWZvcmVVbmxvYWQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VDYXRjaCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VDYXRjaDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRmV0Y2hlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZldGNoZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXJzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlRm9ybUFjdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGb3JtQWN0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlSHJlZicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VIcmVmOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9hZGVyRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VMb2FkZXJEYXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTG9jYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9jYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VNYXRjaGVzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU1hdGNoZXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0ZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0ZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU5hdmlnYXRpb25UeXBlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU5hdmlnYXRpb25UeXBlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldENvbnRleHQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlT3V0bGV0Q29udGV4dDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSZXNvbHZlZFBhdGgnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUmVzb2x2ZWRQYXRoOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlU2VhcmNoUGFyYW1zJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVNlYXJjaFBhcmFtczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVN1Ym1pdCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTdWJtaXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VUcmFuc2l0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVRyYW5zaXRpb247IH1cbn0pO1xuXG4iLCAiaW1wb3J0IHsgY3JlYXRlUmVxdWVzdEhhbmRsZXIgfSBmcm9tIFwiQHJlbWl4LXJ1bi9hcmNoaXRlY3RcIjtcbmltcG9ydCAqIGFzIGJ1aWxkIGZyb20gXCJAcmVtaXgtcnVuL2Rldi9zZXJ2ZXItYnVpbGRcIjtcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVSZXF1ZXN0SGFuZGxlcih7XG4gIGJ1aWxkLFxuICBtb2RlOiBwcm9jZXNzLmVudi5OT0RFX0VOVixcbn0pO1xuIiwgIlxuaW1wb3J0ICogYXMgZW50cnlTZXJ2ZXIgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9lbnRyeS5zZXJ2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTAgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2xvZ2luL2luZGV4LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUyIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMyBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvZXhvdGljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlNCBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTUgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL21lZGlhLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU2IGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTcgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU4IGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvbW9vbi1yb2NrLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU5IGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvcHJlLXJvbGwudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTEwIGZyb20gXCIvVXNlcnMvY2hhc2Vvd2Vucy9EZXNrdG9wL2JheW91X2JveS9hcHAvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxMSBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlci50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTIgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9tZWRpYS50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTMgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9jYXJ0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNCBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9leGVjdXRpdmUvbmV3L3dheC50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTUgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvZXhvdGljcy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTYgZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvbG9nb3V0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxNyBmcm9tIFwiL1VzZXJzL2NoYXNlb3dlbnMvRGVza3RvcC9iYXlvdV9ib3kvYXBwL3JvdXRlcy9tb2RlbHMudHNcIjtcbmltcG9ydCAqIGFzIHJvdXRlMTggZnJvbSBcIi9Vc2Vycy9jaGFzZW93ZW5zL0Rlc2t0b3AvYmF5b3VfYm95L2FwcC9yb3V0ZXMvaW5kZXgudHN4XCI7XG4gIGV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIkByZW1peC1ydW4vZGV2L2Fzc2V0cy1tYW5pZmVzdFwiO1xuICBleHBvcnQgY29uc3QgZW50cnkgPSB7IG1vZHVsZTogZW50cnlTZXJ2ZXIgfTtcbiAgZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgICBcInJvb3RcIjoge1xuICAgICAgaWQ6IFwicm9vdFwiLFxuICAgICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICAgIHBhdGg6IFwiXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTBcbiAgICB9LFxuICBcInJvdXRlcy9sb2dpbi9pbmRleFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9naW4vaW5kZXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwibG9naW5cIixcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTFcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZVwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogXCJleGVjdXRpdmVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMlxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9leG90aWNzXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvZXhvdGljc1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2V4ZWN1dGl2ZVwiLFxuICAgICAgcGF0aDogXCJleG90aWNzXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTNcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvaW5kZXhcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2V4ZWN1dGl2ZVwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlNFxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9tZWRpYVwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL21lZGlhXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZXhlY3V0aXZlXCIsXG4gICAgICBwYXRoOiBcIm1lZGlhXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTVcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZXhlY3V0aXZlXCIsXG4gICAgICBwYXRoOiBcIm5ld1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU2XG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGVcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcImNsb3NlLWRhdGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlN1xuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvbW9vbi1yb2NrXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3L21vb24tcm9ja1wiLFxuICAgICAgcGFyZW50SWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXdcIixcbiAgICAgIHBhdGg6IFwibW9vbi1yb2NrXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZThcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3L3ByZS1yb2xsXCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3L3ByZS1yb2xsXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ld1wiLFxuICAgICAgcGF0aDogXCJwcmUtcm9sbFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGU5XG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9lZGlibGVcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ld1wiLFxuICAgICAgcGF0aDogXCJlZGlibGVcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTBcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlclwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9mbG93ZXJcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcImZsb3dlclwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxMVxuICAgIH0sXG4gIFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvbWVkaWFcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4ZWN1dGl2ZS9uZXcvbWVkaWFcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcIm1lZGlhXCIsXG4gICAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgICAgbW9kdWxlOiByb3V0ZTEyXG4gICAgfSxcbiAgXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy9jYXJ0XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3L2NhcnRcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcImNhcnRcIixcbiAgICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMTNcbiAgICB9LFxuICBcInJvdXRlcy9leGVjdXRpdmUvbmV3L3dheFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvZXhlY3V0aXZlL25ldy93YXhcIixcbiAgICAgIHBhcmVudElkOiBcInJvdXRlcy9leGVjdXRpdmUvbmV3XCIsXG4gICAgICBwYXRoOiBcIndheFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNFxuICAgIH0sXG4gIFwicm91dGVzL2V4b3RpY3NcIjoge1xuICAgICAgaWQ6IFwicm91dGVzL2V4b3RpY3NcIixcbiAgICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICAgIHBhdGg6IFwiZXhvdGljc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNVxuICAgIH0sXG4gIFwicm91dGVzL2xvZ291dFwiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbG9nb3V0XCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcImxvZ291dFwiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxNlxuICAgIH0sXG4gIFwicm91dGVzL21vZGVsc1wiOiB7XG4gICAgICBpZDogXCJyb3V0ZXMvbW9kZWxzXCIsXG4gICAgICBwYXJlbnRJZDogXCJyb290XCIsXG4gICAgICBwYXRoOiBcIm1vZGVsc1wiLFxuICAgICAgaW5kZXg6IHVuZGVmaW5lZCxcbiAgICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICAgIG1vZHVsZTogcm91dGUxN1xuICAgIH0sXG4gIFwicm91dGVzL2luZGV4XCI6IHtcbiAgICAgIGlkOiBcInJvdXRlcy9pbmRleFwiLFxuICAgICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgICAgcGF0aDogdW5kZWZpbmVkLFxuICAgICAgaW5kZXg6IHRydWUsXG4gICAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgICBtb2R1bGU6IHJvdXRlMThcbiAgICB9XG4gIH07IiwgImltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSBcInJlYWN0LWRvbS9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBSZW1peFNlcnZlciB9IGZyb20gXCJyZW1peFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgIDxSZW1peFNlcnZlciBjb250ZXh0PXtyZW1peENvbnRleHR9IHVybD17cmVxdWVzdC51cmx9IC8+XG4gICk7XG5cbiAgcmVzcG9uc2VIZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLCBcInRleHQvaHRtbFwiKTtcblxuICByZXR1cm4gbmV3IFJlc3BvbnNlKFwiPCFET0NUWVBFIGh0bWw+XCIgKyBtYXJrdXAsIHtcbiAgICBzdGF0dXM6IHJlc3BvbnNlU3RhdHVzQ29kZSxcbiAgICBoZWFkZXJzOiByZXNwb25zZUhlYWRlcnNcbiAgfSk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBMaW5rc0Z1bmN0aW9uLCBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIExpbmtzLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IGdsb2JhbFN0eWxlc1VybCBmcm9tIFwiLi9zdHlsZXMvZ2xvYmFsLmNzc1wiO1xuaW1wb3J0IGdsb2JhbExhcmdlU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbGFyZ2UuY3NzXCI7XG5pbXBvcnQgZ2xvYmFsTWVkaXVtU3R5bGVzVXJsIGZyb20gXCIuL3N0eWxlcy9nbG9iYWwtbWVkaXVtLmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBnbG9iYWxTdHlsZXNVcmwgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGdsb2JhbE1lZGl1bVN0eWxlc1VybCwgbWVkaWE6IFwiXCIgfSxcbiAgICB7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IGdsb2JhbExhcmdlU3R5bGVzVXJsIH0sXG4gIF07XG59O1xuXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4geyBkZXNjcmlwdGlvbjogXCJCZXN0IFByaWNlcyBvbiBCZXN0IFF1YWxpdHlcIiwgdGl0bGU6IFwiQmF5b3UgRXhvdGljc1wiIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG4gIHJldHVybiAoXG4gICAgPGh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8TWV0YSAvPlxuICAgICAgICA8TGlua3MgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8T3V0bGV0IC8+XG4gICAgICAgIDxTY3JvbGxSZXN0b3JhdGlvbiAvPlxuICAgICAgICA8U2NyaXB0cyAvPlxuICAgICAgICB7cHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwiZGV2ZWxvcG1lbnRcIiAmJiA8TGl2ZVJlbG9hZCAvPn1cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRm9ybSwganNvbiwgTGluaywgdXNlTG9hZGVyRGF0YSwgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgdXNlQWN0aW9uRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBnZXRVc2VyQ291bnQsIGxvZ2luLCByZWdpc3RlciwgVXNlciB9IGZyb20gXCJ+L3VzZXJzXCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VyU2Vzc2lvbiwgZ2V0VXNlckJ5U2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmltcG9ydCBzdHlsZXNVcmwgZnJvbSBcIi4uLy4uL3N0eWxlcy9sb2dpbi5jc3NcIjtcblxuZnVuY3Rpb24gdmFsaWRhdGVVc2VybmFtZSh1c2VybmFtZTogdW5rbm93bikge1xuICBpZiAodHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8IHVzZXJuYW1lLmxlbmd0aCA8IDMpIHtcbiAgICByZXR1cm4gYFVzZXJuYW1lcyBtdXN0IGJlIGF0IGxlYXN0IDMgY2hhcmFjdGVycyBsb25nYDtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZVBhc3N3b3JkKHBhc3N3b3JkOiB1bmtub3duKSB7XG4gIGlmICh0eXBlb2YgcGFzc3dvcmQgIT09IFwic3RyaW5nXCIgfHwgcGFzc3dvcmQubGVuZ3RoIDwgNikge1xuICAgIHJldHVybiBgUGFzc3dvcmRzIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzIGxvbmdgO1xuICB9XG59XG5cbnR5cGUgQWN0aW9uRGF0YSA9IHtcbiAgZm9ybUVycm9yPzogc3RyaW5nO1xuICBmaWVsZEVycm9ycz86IHtcbiAgICB1c2VybmFtZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICAgIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIH07XG4gIGZpZWxkcz86IHtcbiAgICBsb2dpblR5cGU6IHN0cmluZztcbiAgICB1c2VybmFtZTogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG4gIH07XG59O1xuXG5jb25zdCBiYWRSZXF1ZXN0ID0gKGRhdGE6IEFjdGlvbkRhdGEpID0+IGpzb24oZGF0YSwgeyBzdGF0dXM6IDQwMCB9KTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgdXNlcm5hbWUgPSBmb3JtLmdldChcInVzZXJuYW1lXCIpO1xuICBjb25zdCBwYXNzd29yZCA9IGZvcm0uZ2V0KFwicGFzc3dvcmRcIik7XG4gIGNvbnN0IHJlZGlyZWN0VG8gPSBmb3JtLmdldChcInJlZGlyZWN0VG9cIikgfHwgXCIvZXhvdGljc1wiO1xuICBjb25zdCBsb2dpblR5cGUgPSBmb3JtLmdldChcImxvZ2luVHlwZVwiKTtcbiAgY29uc3QgcGVybWlzc2lvbnMgPSBmb3JtLmdldChcInBlcm1pc3Npb25zXCIpO1xuXG4gIGlmIChcbiAgICB0eXBlb2YgbG9naW5UeXBlICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHVzZXJuYW1lICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHBhc3N3b3JkICE9PSBcInN0cmluZ1wiIHx8XG4gICAgdHlwZW9mIHJlZGlyZWN0VG8gIT09IFwic3RyaW5nXCJcbiAgKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3Qoe1xuICAgICAgZm9ybUVycm9yOiBgRm9ybSBub3Qgc3VibWl0dGVkIGNvcnJlY3RseS5gLFxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgZmllbGRFcnJvcnMgPSB7XG4gICAgcGFzc3dvcmQ6IHZhbGlkYXRlUGFzc3dvcmQocGFzc3dvcmQpLFxuICAgIHVzZXJuYW1lOiB2YWxpZGF0ZVVzZXJuYW1lKHVzZXJuYW1lKSxcbiAgfTtcbiAgY29uc3QgZmllbGRzID0geyBsb2dpblR5cGUsIHBhc3N3b3JkLCB1c2VybmFtZSB9O1xuXG4gIGlmIChPYmplY3QudmFsdWVzKGZpZWxkRXJyb3JzKS5zb21lKEJvb2xlYW4pKSB7XG4gICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9ycywgZmllbGRzIH0pO1xuICB9XG5cbiAgY29uc3QgdXNlckNvdW50ID0gYXdhaXQgZ2V0VXNlckNvdW50KCk7XG4gIGNvbnN0IGlzQWRtaW4gPSAhdXNlckNvdW50IHx8IHBlcm1pc3Npb25zID09PSBcImFkbWluXCI7XG5cbiAgY29uc3QgeyBlcnJvcnMsIHVzZXIgfSA9XG4gICAgbG9naW5UeXBlID09PSBcImxvZ2luXCJcbiAgICAgID8gYXdhaXQgbG9naW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICAgIDogYXdhaXQgcmVnaXN0ZXIoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgIGlzQWRtaW4sXG4gICAgICAgIH0pO1xuXG4gIHN3aXRjaCAobG9naW5UeXBlKSB7XG4gICAgY2FzZSBcImxvZ2luXCI6XG4gICAgICBpZiAoT2JqZWN0LnZhbHVlcyhlcnJvcnMpLnNvbWUoQm9vbGVhbikgfHwgIXVzZXIpIHtcbiAgICAgICAgcmV0dXJuIGJhZFJlcXVlc3QoeyBmaWVsZEVycm9yczogZXJyb3JzLCBmaWVsZHMgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VyLmlkLCByZWRpcmVjdFRvKTtcbiAgICBjYXNlIFwicmVnaXN0ZXJcIjpcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gYmFkUmVxdWVzdCh7XG4gICAgICAgICAgZmllbGRFcnJvcnM6IGVycm9ycyxcbiAgICAgICAgICBmaWVsZHMsXG4gICAgICAgICAgZm9ybUVycm9yOiAhT2JqZWN0LnZhbHVlcyhlcnJvcnMpLnNvbWUoQm9vbGVhbilcbiAgICAgICAgICAgID8gXCJTb21ldGhpbmcgd2VudCB3cm9uZyBjcmVhdGluZyBhIG5ldyB1c2VyXCJcbiAgICAgICAgICAgIDogdW5kZWZpbmVkLFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNyZWF0ZVVzZXJTZXNzaW9uKHVzZXIuaWQsIHJlZGlyZWN0VG8pO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gYmFkUmVxdWVzdCh7IGZpZWxkcywgZm9ybUVycm9yOiBcIkxvZ2luIHR5cGUgaW52YWxpZFwiIH0pO1xuICB9XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBzdHlsZXNVcmwgfV07XG59O1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGNhbkFkZFVzZXI6IGJvb2xlYW47XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBbdXNlciwgdXNlckNvdW50XSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICBnZXRVc2VyQnlTZXNzaW9uKHJlcXVlc3QpLFxuICAgIGdldFVzZXJDb3VudCgpLFxuICBdKTtcblxuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0ge1xuICAgIGNhbkFkZFVzZXI6IHVzZXI/LmlzQWRtaW4gfHwgIXVzZXJDb3VudCxcbiAgICB1c2VyLFxuICB9O1xuXG4gIHJldHVybiBkYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+ICh7XG4gIHRpdGxlOiBcIkJheW91IEV4b3RpY3MgfCBMb2dpblwiLFxuICBkZXNjcmlwdGlvbjogXCJMb2dpbiB0byBtYW5hZ2UgZXhvdGljc1wiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xuICBjb25zdCBbc2VhcmNoUGFyYW1zXSA9IHVzZVNlYXJjaFBhcmFtcygpO1xuICBjb25zdCBhY3Rpb25EYXRhID0gdXNlQWN0aW9uRGF0YTxBY3Rpb25EYXRhPigpO1xuICBjb25zdCB7IGNhbkFkZFVzZXIsIHVzZXIgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIGNhbkxvZ091dCB1c2VyPXt1c2VyfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICAgIDxoMj57IXVzZXIgPyBcIkxvZ2luXCIgOiBcIlJlZ2lzdGVyIE5ldyBVc2VyXCJ9PC9oMj5cbiAgICAgICAgICA8Rm9ybVxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgIGFjdGlvbkRhdGE/LmZvcm1FcnJvciA/IFwiZm9ybS1lcnJvci1tZXNzYWdlXCIgOiB1bmRlZmluZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1ldGhvZD1cInBvc3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgbmFtZT1cInJlZGlyZWN0VG9cIlxuICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoUGFyYW1zLmdldChcInJlZGlyZWN0VG9cIikgPz8gdW5kZWZpbmVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxmaWVsZHNldCBkYXRhLWhpZGU9e3VzZXIgPyBcImhpZGVcIiA6IHVuZGVmaW5lZH0+XG4gICAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkxvZ2luIG9yIFJlZ2lzdGVyPzwvbGVnZW5kPlxuICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImxvZ2luVHlwZVwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgKCF1c2VyICYmICFhY3Rpb25EYXRhPy5maWVsZHM/LmxvZ2luVHlwZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRzPy5sb2dpblR5cGUgPT09IFwibG9naW5cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgIExvZ2luXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHRDaGVja2VkPXtcbiAgICAgICAgICAgICAgICAgICAgISF1c2VyIHx8IGFjdGlvbkRhdGE/LmZpZWxkcz8ubG9naW5UeXBlID09PSBcInJlZ2lzdGVyXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJsb2dpblR5cGVcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwicmVnaXN0ZXJcIlxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxuICAgICAgICAgICAgICAgIFJlZ2lzdGVyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZS1pbnB1dFwiPlVzZXJuYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e1xuICAgICAgICAgICAgICAgICAgYWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVzZXJuYW1lXG4gICAgICAgICAgICAgICAgICAgID8gXCJ1c2VybmFtZS1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWUpfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICBpZD1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7YWN0aW9uRGF0YT8uZmllbGRFcnJvcnM/LnVzZXJuYW1lID8gKFxuICAgICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXZhbGlkYXRpb24tZXJyb3JcIlxuICAgICAgICAgICAgICAgICAgcm9sZT1cImFsZXJ0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWUtZXJyb3JcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZC1pbnB1dFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT17XG4gICAgICAgICAgICAgICAgICBhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmRcbiAgICAgICAgICAgICAgICAgICAgPyBcInBhc3Nzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyaWEtaW52YWxpZD17Qm9vbGVhbihhY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQpfVxuICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17YWN0aW9uRGF0YT8uZmllbGRzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkLWlucHV0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5maWVsZEVycm9ycz8ucGFzc3dvcmQgPyAoXG4gICAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tdmFsaWRhdGlvbi1lcnJvclwiXG4gICAgICAgICAgICAgICAgICByb2xlPVwiYWxlcnRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZC1lcnJvclwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2FjdGlvbkRhdGE/LmZpZWxkRXJyb3JzPy5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZm9ybS1lcnJvci1tZXNzYWdlXCI+XG4gICAgICAgICAgICAgIHthY3Rpb25EYXRhPy5mb3JtRXJyb3IgPyAoXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9ybS12YWxpZGF0aW9uLWVycm9yXCIgcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgICB7YWN0aW9uRGF0YS5mb3JtRXJyb3J9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5BZG1pbiBvciBNYW5hZ2VyPzwvbGVnZW5kPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwicGVybWlzc2lvbnNcIiB2YWx1ZT1cImFkbWluXCIgLz4gQWRtaW5cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0Q2hlY2tlZFxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIm1hbmFnZVwiXG4gICAgICAgICAgICAgICAgICAvPntcIiBcIn1cbiAgICAgICAgICAgICAgICAgIE1hbmFnZVxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGlua3NcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxMaW5rIHRvPVwiL1wiPkhvbWU8L0xpbms+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8TGluayB0bz1cIi9leG90aWNzXCI+RXhvdGljczwvTGluaz5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgTmF2TGluayB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vdXNlcnNcIjtcblxuY29uc3Qgcm91dGVzID0gbmV3IFNldChbXCJleG90aWNzXCJdKTtcblxuaW50ZXJmYWNlIEhlYWRlclByb3BzIHtcbiAgY2FuTG9nT3V0PzogYm9vbGVhbjtcbiAgc2hvd0FkbWluTGluaz86IGJvb2xlYW47XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufVxuXG5jb25zdCBIZWFkZXI6IEZDPEhlYWRlclByb3BzPiA9ICh7XG4gIGNhbkxvZ091dCA9IGZhbHNlLFxuICBzaG93QWRtaW5MaW5rID0gdHJ1ZSxcbiAgdXNlcixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIm5hdiByb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHdyYXBcIj5cbiAgICAgIDxOYXZMaW5rIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9nb1wiXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zMy11cy1lYXN0LTIuYW1hem9uYXdzLmNvbS9iYXlvdS1leG90aWNzL2Fzc2V0cy9iYXlvdS1sb2dvLnBuZ1wiXG4gICAgICAgICAgYWx0PVwid2Vic2l0ZS1sb2dvXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTmF2TGluaz5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicm93IHNwYWNlIGFsaWduQ2VudGVyIHNpZGVNYXJnaW5cIj5cbiAgICAgICAge3VzZXIgJiYgc2hvd0FkbWluTGluayAmJiAoXG4gICAgICAgICAgPE5hdkxpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlXCI+XG4gICAgICAgICAgICBFeGVjdXRpdmVcbiAgICAgICAgICA8L05hdkxpbms+XG4gICAgICAgICl9XG4gICAgICAgIHtbLi4ucm91dGVzXS5tYXAoKHJvdXRlKSA9PiAoXG4gICAgICAgICAgPE5hdkxpbmtcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbiBjYXBcIlxuICAgICAgICAgICAgcHJlZmV0Y2g9XCJpbnRlbnRcIlxuICAgICAgICAgICAga2V5PXtyb3V0ZX1cbiAgICAgICAgICAgIHRvPXtgLyR7cm91dGV9YH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7cm91dGV9XG4gICAgICAgICAgPC9OYXZMaW5rPlxuICAgICAgICApKX1cbiAgICAgICAge2NhbkxvZ091dCAmJiB1c2VyID8gKFxuICAgICAgICAgIDxOYXZMaW5rIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRvPVwiL2xvZ291dFwiPlxuICAgICAgICAgICAgTG9nIE91dFxuICAgICAgICAgIDwvTmF2TGluaz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiIsICJpbXBvcnQgYmNyeXB0IGZyb20gXCJiY3J5cHRqc1wiO1xuXG5pbXBvcnQgczMsIHsgS2V5cyB9IGZyb20gXCIuLi9hd3MvYXdzLWV4cG9ydHNcIjtcbmltcG9ydCBjcmVhdGVJZCBmcm9tIFwiLi91dGlscy9jcmVhdGVJZFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICBpZDogc3RyaW5nO1xuICBpc0FkbWluOiBib29sZWFuO1xuICBwYXNzd29yZEhhc2g6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn1cblxudHlwZSBVc2VyTG9naW5Gb3JtID0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBpc0FkbWluPzogYm9vbGVhbjtcbn07XG5cbnR5cGUgVXNlckxvZ2luRXJyb3JzID0geyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH07XG5cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh7IHVzZXJuYW1lLCBwYXNzd29yZCB9OiBVc2VyTG9naW5Gb3JtKSA9PiB7XG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0VXNlcnMoKTtcblxuICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci51c2VybmFtZSA9PT0gdXNlcm5hbWUpO1xuXG4gIGNvbnN0IGVycm9yczogVXNlckxvZ2luRXJyb3JzID0ge1xuICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgIHBhc3N3b3JkOiBcIlwiLFxuICB9O1xuXG4gIGlmICghdXNlcikge1xuICAgIGVycm9ycy51c2VybmFtZSA9IFwiVXNlcm5hbWUgbm90IGZvdW5kXCI7XG4gICAgcmV0dXJuIHsgZXJyb3JzIH07XG4gIH1cblxuICBjb25zdCBpc0NvcnJlY3RQYXNzd29yZCA9IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkSGFzaCk7XG5cbiAgaWYgKCFpc0NvcnJlY3RQYXNzd29yZCkge1xuICAgIGVycm9ycy5wYXNzd29yZCA9IFwiUGFzc3dvcmQgaXMgaW5jb3JyZWN0XCI7XG4gICAgcmV0dXJuIHsgZXJyb3JzIH07XG4gIH1cblxuICByZXR1cm4geyBlcnJvcnMsIHVzZXIgfTtcbn07XG5cbmV4cG9ydCBjb25zdCByZWdpc3RlciA9IGFzeW5jICh7XG4gIHVzZXJuYW1lLFxuICBwYXNzd29yZCxcbiAgaXNBZG1pbixcbn06IFVzZXJMb2dpbkZvcm0pID0+IHtcbiAgY29uc3QgdXNlcnMgPSBhd2FpdCBnZXRVc2VycygpO1xuXG4gIGNvbnN0IGV4aXN0aW5nVXNlciA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIudXNlcm5hbWUgPT09IHVzZXJuYW1lKTtcblxuICBjb25zdCBlcnJvcnM6IFVzZXJMb2dpbkVycm9ycyA9IHtcbiAgICB1c2VybmFtZTogXCJcIixcbiAgICBwYXNzd29yZDogXCJcIixcbiAgfTtcblxuICBpZiAoZXhpc3RpbmdVc2VyKSB7XG4gICAgZXJyb3JzLnVzZXJuYW1lID0gXCJVc2VybmFtZSBhbHJlYWR5IGV4aXN0c1wiO1xuICAgIHJldHVybiB7IGVycm9ycyB9O1xuICB9XG5cbiAgY29uc3QgcGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDgpO1xuICBjb25zdCBpZCA9IGNyZWF0ZUlkKCk7XG5cbiAgY29uc3QgdXNlcjogVXNlciA9IHtcbiAgICBpZCxcbiAgICBpc0FkbWluOiAhIWlzQWRtaW4sXG4gICAgcGFzc3dvcmRIYXNoLFxuICAgIHVzZXJuYW1lLFxuICB9O1xuXG4gIHVzZXJzLnB1c2godXNlcik7XG5cbiAgY29uc3QgbWluaWZpZWRVc2VycyA9IEpTT04uc3RyaW5naWZ5KHVzZXJzKTtcblxuICBhd2FpdCBzM1xuICAgIC5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleTogS2V5cy5Vc2VyLFxuICAgICAgQm9keTogbWluaWZpZWRVc2VycyxcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKCkgPT4gY29uc29sZS5sb2coYEVycm9yIGFkZGluZyAke3VzZXJ9YCkpO1xuXG4gIHJldHVybiB7IGVycm9ycywgdXNlciB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgczNcbiAgICAuZ2V0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IEtleXMuVXNlcixcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhgRXJyb3IgZmV0Y2hpbmcgYXNzZXRzIHBhdGhcIiwgJHtlcnJvci5tZXNzYWdlfWApO1xuICAgIH0pO1xuXG4gIGlmICghZGF0YSB8fCAhZGF0YS5Cb2R5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0tleXMuVXNlcn0gaGFzIG5vIEJvZHlgKTtcbiAgfVxuXG4gIGNvbnN0IHVzZXJEYXRhID0gZGF0YS5Cb2R5LnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IEpTT04ucGFyc2UodXNlckRhdGEpO1xuXG4gIHJldHVybiB1c2Vycztcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyID0gYXN5bmMgKHVzZXJJZDogc3RyaW5nKSA9PiB7XG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0VXNlcnMoKTtcbiAgY29uc3QgdXNlciA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuaWQgPT09IHVzZXJJZCk7XG5cbiAgaWYgKCF1c2VyKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdXNlcjtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyQ291bnQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHVzZXJzID0gYXdhaXQgZ2V0VXNlcnMoKTtcbiAgcmV0dXJuIHVzZXJzLmxlbmd0aDtcbn07XG4iLCAiaW1wb3J0IEFXUyBmcm9tIFwiYXdzLXNka1wiO1xuXG5pbXBvcnQgY29uZmlnIGZyb20gXCIuL2F3cy1jb25maWdcIjtcblxuY29uc3QgczMgPSBuZXcgQVdTLlMzKGNvbmZpZyk7XG5cbnMzLmNvbmZpZy51cGRhdGUoe1xuICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWV9JRCxcbiAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudi5TRUNSRVRfQUNDRVNTX0tFWSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZW51bSBLZXlzIHtcbiAgQ2FydCA9IFwiZXhvdGljcy90aGMvY2FydC5qc29uXCIsXG4gIEVkaWJsZSA9IFwiZXhvdGljcy90aGMvZWRpYmxlLmpzb25cIixcbiAgRmxvd2VyID0gXCJleG90aWNzL3RoYy9mbG93ZXIuanNvblwiLFxuICBNb29uUm9jayA9IFwiZXhvdGljcy90aGMvbW9vbi1yb2NrLmpzb25cIixcbiAgUHJlUm9sbCA9IFwiZXhvdGljcy90aGMvcHJlLXJvbGwuanNvblwiLFxuICBVc2VyID0gXCJ1c2Vycy5qc29uXCIsXG4gIFdheCA9IFwiZXhvdGljcy90aGMvd2F4Lmpzb25cIixcbn1cblxuZXhwb3J0IGNvbnN0IGdldEZpbGUgPSBhc3luYyAoa2V5OiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZmlsZSA9IGF3YWl0IHMzXG4gICAgLmdldE9iamVjdCh7IEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsIEtleToga2V5IH0pXG4gICAgLnByb21pc2UoKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBhdCBwYXRoOiAke2tleX0sICR7ZXJyb3IubWVzc2FnZX1gKTtcbiAgICB9KTtcblxuICBpZiAoIWZpbGUgfHwgIWZpbGUuQm9keSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGZpbGUuQm9keS50b1N0cmluZygpO1xuXG4gIHJldHVybiBKU09OLnBhcnNlKGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUN1cnJlbnRJbmRleCA9IGFzeW5jIChrZXk6IHN0cmluZywgaW5kZXg6IG51bWJlcikgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0RmlsZShrZXkpO1xuXG4gIGRhdGEuY3VycmVudC5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gIGNvbnN0IG1pbmlmaWVkRGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXG4gIHJldHVybiBhd2FpdCBzM1xuICAgIC5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleToga2V5LFxuICAgICAgQm9keTogbWluaWZpZWREYXRhLFxuICAgIH0pXG4gICAgLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHMzO1xuIiwgImltcG9ydCBBV1MgZnJvbSBcImF3cy1zZGtcIjtcblxuY29uc3QgbXlDcmVkZW50aWFscyA9IG5ldyBBV1MuQ29nbml0b0lkZW50aXR5Q3JlZGVudGlhbHMoe1xuICBJZGVudGl0eVBvb2xJZDogXCJ1cy1lYXN0LTI6NmFlYmI1YWQtZGM4YS00MzdmLWI5OWEtOTBlMzQ3ZmQ4MDIzXCIsXG59KTtcblxuY29uc3QgY29uZmlnID0gbmV3IEFXUy5Db25maWcoe1xuICBjcmVkZW50aWFsczogbXlDcmVkZW50aWFscyxcbiAgcmVnaW9uOiBcInVzLWVhc3QtMlwiLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbmZpZztcbiIsICJpbXBvcnQgeyBjdXN0b21BbHBoYWJldCB9IGZyb20gXCJuYW5vaWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY3VzdG9tQWxwaGFiZXQoXG4gIFwiMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIixcbiAgMTZcbik7XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2UsIHJlZGlyZWN0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGdldFVzZXIgfSBmcm9tIFwifi91c2Vyc1wiO1xuXG5jb25zdCBzZXNzaW9uU2VjcmV0ID0gcHJvY2Vzcy5lbnYuU0VTU0lPTl9TRUNSRVQ7XG5pZiAoIXNlc3Npb25TZWNyZXQpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwiU0VTU0lPTl9TRUNSRVQgbXVzdCBiZSBzZXRcIik7XG59XG5cbmNvbnN0IHN0b3JhZ2UgPSBjcmVhdGVDb29raWVTZXNzaW9uU3RvcmFnZSh7XG4gIGNvb2tpZToge1xuICAgIG5hbWU6IFwiUkpfc2Vzc2lvblwiLFxuICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiLFxuICAgIHNlY3JldHM6IFtzZXNzaW9uU2VjcmV0XSxcbiAgICBzYW1lU2l0ZTogXCJsYXhcIixcbiAgICBwYXRoOiBcIi9cIixcbiAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLFxuICAgIGh0dHBPbmx5OiB0cnVlLFxuICB9LFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVVc2VyU2Vzc2lvbih1c2VySWQ6IHN0cmluZywgcmVkaXJlY3RUbzogc3RyaW5nKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24oKTtcbiAgc2Vzc2lvbi5zZXQoXCJ1c2VySWRcIiwgdXNlcklkKTtcbiAgcmV0dXJuIHJlZGlyZWN0KHJlZGlyZWN0VG8sIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5jb21taXRTZXNzaW9uKHNlc3Npb24pLFxuICAgIH0sXG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclNlc3Npb24ocmVxdWVzdDogUmVxdWVzdCkge1xuICByZXR1cm4gc3RvcmFnZS5nZXRTZXNzaW9uKHJlcXVlc3QuaGVhZGVycy5nZXQoXCJDb29raWVcIikpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlcklkKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFVzZXJTZXNzaW9uKHJlcXVlc3QpO1xuICBjb25zdCB1c2VySWQgPSBzZXNzaW9uLmdldChcInVzZXJJZFwiKTtcblxuICBpZiAoIXVzZXJJZCB8fCB0eXBlb2YgdXNlcklkICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gdXNlcklkO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckJ5U2Vzc2lvbihyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHVzZXJJZCA9IGF3YWl0IGdldFVzZXJJZChyZXF1ZXN0KTtcblxuICBpZiAoIXVzZXJJZCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdHJ5IHtcbiAgICByZXR1cm4gYXdhaXQgZ2V0VXNlcih1c2VySWQpO1xuICB9IGNhdGNoIHtcbiAgICB0aHJvdyBsb2dvdXQocmVxdWVzdCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvZ291dChyZXF1ZXN0OiBSZXF1ZXN0KSB7XG4gIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBzdG9yYWdlLmdldFNlc3Npb24ocmVxdWVzdC5oZWFkZXJzLmdldChcIkNvb2tpZVwiKSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2xvZ2luXCIsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIlNldC1Db29raWVcIjogYXdhaXQgc3RvcmFnZS5kZXN0cm95U2Vzc2lvbihzZXNzaW9uKSxcbiAgICB9LFxuICB9KTtcbn1cbiIsICJpbXBvcnQge1xuICBMaW5rLFxuICBMb2FkZXJGdW5jdGlvbixcbiAgT3V0bGV0LFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VMb2NhdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCBIZWFkZXIgZnJvbSBcIn4vY29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwifi91c2Vyc1wiO1xuaW1wb3J0IHsgZ2V0VXNlckJ5U2Vzc2lvbiB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmltcG9ydCBleGVjU3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvZXhlYy5jc3NcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbn1cblxuZXhwb3J0IGNvbnN0IGxpbmtzID0gKCkgPT4ge1xuICByZXR1cm4gW3sgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogZXhlY1N0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBnZXRVc2VyQnlTZXNzaW9uKHJlcXVlc3QpO1xuICByZXR1cm4geyB1c2VyIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVjdXRpdmUoKSB7XG4gIGNvbnN0IHsgdXNlciB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSB1c2VMb2NhdGlvbigpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgc2hvd0FkbWluTGluaz17ZmFsc2V9IHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZWMgc3BhY2VcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8aDE+RXhlY3V0aXZlPC9oMT5cbiAgICAgICAgICA8TGluayBkYXRhLWFjdGl2ZT17cGF0aG5hbWUgPT09IFwiL2V4ZWN1dGl2ZVwifSB0bz1cIi9leGVjdXRpdmVcIj5cbiAgICAgICAgICAgIFByb2ZpbGVcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgZGF0YS1hY3RpdmU9e3BhdGhuYW1lID09PSBcIi9leGVjdXRpdmUvZXhvdGljc1wifSB0bz1cImV4b3RpY3NcIj5cbiAgICAgICAgICAgIEV4b3RpY3NcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPExpbmsgZGF0YS1hY3RpdmU9e3BhdGhuYW1lID09PSBcIi9leGVjdXRpdmUvbWVkaWFcIn0gdG89XCJtZWRpYVwiPlxuICAgICAgICAgICAgSW1hZ2VzXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1haW4+XG4gICAgICAgICAgPE91dGxldCAvPlxuICAgICAgICA8L21haW4+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBBY3Rpb25GdW5jdGlvbiwgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIExpbmssIHVzZUxvYWRlckRhdGEgfSBmcm9tIFwicmVtaXhcIjtcblxuaW1wb3J0IHtcbiAgQ2FydHMsXG4gIGRlbGV0ZUN1cnJlbnRDYXJ0LFxuICBkZWxldGVDdXJyZW50RWRpYmxlLFxuICBkZWxldGVDdXJyZW50Rmxvd2VyLFxuICBkZWxldGVDdXJyZW50TW9vblJvY2ssXG4gIGRlbGV0ZUN1cnJlbnRQcmVSb2xsLFxuICBkZWxldGVDdXJyZW50V2F4LFxuICBFZGlibGVzLFxuICBGbG93ZXJzLFxuICBnZXRDYXJ0cyxcbiAgZ2V0RWRpYmxlcyxcbiAgZ2V0Rmxvd2VycyxcbiAgZ2V0TW9vblJvY2tzLFxuICBnZXRQcmVSb2xscyxcbiAgZ2V0V2F4ZXMsXG4gIE1vb25Sb2NrcyxcbiAgUHJlUm9sbHMsXG4gIFdheGVzLFxufSBmcm9tIFwifi9leG90aWNzXCI7XG5cbmltcG9ydCBleGVjU3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZXhlYy5jc3NcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBjYXJ0czogQ2FydHM7XG4gIGVkaWJsZXM6IEVkaWJsZXM7XG4gIGZsb3dlcnM6IEZsb3dlcnM7XG4gIG1vb25Sb2NrczogTW9vblJvY2tzO1xuICBwcmVSb2xsczogUHJlUm9sbHM7XG4gIHdheGVzOiBXYXhlcztcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgY2FydFNlbGVjdGVkID0gZm9ybURhdGEuZ2V0KFwiY2FydFwiKTtcbiAgY29uc3QgZWRpYmxlU2VsZWN0ZWQgPSBmb3JtRGF0YS5nZXQoXCJlZGlibGVcIik7XG4gIGNvbnN0IGZsb3dlclNlbGVjdGVkID0gZm9ybURhdGEuZ2V0KFwiZmxvd2VyXCIpO1xuICBjb25zdCBtb29uUm9ja1NlbGVjdGVkID0gZm9ybURhdGEuZ2V0KFwibW9vblJvY2tzXCIpO1xuICBjb25zdCBwcmVSb2xsU2VsZWN0ZWQgPSBmb3JtRGF0YS5nZXQoXCJwcmVSb2xsXCIpO1xuICBjb25zdCB3YXhTZWxlY3RlZCA9IGZvcm1EYXRhLmdldChcIndheFwiKTtcblxuICBpZiAoY2FydFNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUN1cnJlbnRDYXJ0KCtjYXJ0U2VsZWN0ZWQpO1xuICB9XG5cbiAgaWYgKGVkaWJsZVNlbGVjdGVkKSB7XG4gICAgcmV0dXJuIGF3YWl0IGRlbGV0ZUN1cnJlbnRFZGlibGUoK2VkaWJsZVNlbGVjdGVkKTtcbiAgfVxuXG4gIGlmIChmbG93ZXJTZWxlY3RlZCkge1xuICAgIHJldHVybiBhd2FpdCBkZWxldGVDdXJyZW50Rmxvd2VyKCtmbG93ZXJTZWxlY3RlZCk7XG4gIH1cblxuICBpZiAobW9vblJvY2tTZWxlY3RlZCkge1xuICAgIHJldHVybiBhd2FpdCBkZWxldGVDdXJyZW50TW9vblJvY2soK21vb25Sb2NrU2VsZWN0ZWQpO1xuICB9XG5cbiAgaWYgKHByZVJvbGxTZWxlY3RlZCkge1xuICAgIHJldHVybiBhd2FpdCBkZWxldGVDdXJyZW50UHJlUm9sbCgrcHJlUm9sbFNlbGVjdGVkKTtcbiAgfVxuXG4gIGlmICh3YXhTZWxlY3RlZCkge1xuICAgIHJldHVybiBhd2FpdCBkZWxldGVDdXJyZW50V2F4KCt3YXhTZWxlY3RlZCk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBbY2FydHMsIGVkaWJsZXMsIGZsb3dlcnMsIG1vb25Sb2NrcywgcHJlUm9sbHMsIHdheGVzXSA9XG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgZ2V0Q2FydHMoKSxcbiAgICAgIGdldEVkaWJsZXMoKSxcbiAgICAgIGdldEZsb3dlcnMoKSxcbiAgICAgIGdldE1vb25Sb2NrcygpLFxuICAgICAgZ2V0UHJlUm9sbHMoKSxcbiAgICAgIGdldFdheGVzKCksXG4gICAgXSk7XG5cbiAgcmV0dXJuIHsgY2FydHMsIGVkaWJsZXMsIGZsb3dlcnMsIG1vb25Sb2NrcywgcHJlUm9sbHMsIHdheGVzIH07XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleGVjU3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlY3V0aXZlKCkge1xuICBjb25zdCB7IGNhcnRzLCBlZGlibGVzLCBmbG93ZXJzLCBtb29uUm9ja3MsIHByZVJvbGxzLCB3YXhlcyB9ID1cbiAgICB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZSB3cmFwIFwiPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm93IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxoMj5GbG93ZXJzPC9oMj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidXR0b25cIiB0bz1cIi9leGVjdXRpdmUvbmV3L2Zsb3dlclwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wgc3BhY2VcIj5cbiAgICAgICAgICB7Zmxvd2Vycy5jdXJyZW50Lm1hcCgoZmxvd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGxpIGtleT17YCR7Zmxvd2VyLm5hbWV9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJmbG93ZXJcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZmxvd2VyXCIgdmFsdWU9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHNwYWNlQmV0d2VlbiBhbGlnbkNlbnRlciBzcGFjZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zsb3dlci5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm93IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxoMj5DYXJ0czwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy9jYXJ0XCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiPlxuICAgICAgICAgIHtjYXJ0cy5jdXJyZW50Lm1hcCgoY2FydCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake2NhcnQubmFtZX0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cImNhcnRcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiY2FydFwiIHZhbHVlPXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXIgc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntjYXJ0Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPGgyPlByZSBSb2xsczwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy9wcmUtcm9sbFwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2wgc3BhY2VcIj5cbiAgICAgICAgICB7cHJlUm9sbHMuY3VycmVudC5tYXAoKHByZVJvbGwsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHtwcmVSb2xsLm5hbWV9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxGb3JtIG5hbWU9XCJwcmVSb2xsXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInByZVJvbGxcIiB2YWx1ZT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57cHJlUm9sbC5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicm93IGFsaWduQ2VudGVyIHNwYWNlQmV0d2VlblwiPlxuICAgICAgICAgIDxoMj5XYXhlczwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy93YXhcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+XG4gICAgICAgICAge3dheGVzLmN1cnJlbnQubWFwKCh3YXgsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHt3YXgubmFtZX0tJHtpbmRleH1gfT5cbiAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cIndheFwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ3YXhcIiB2YWx1ZT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57d2F4Lm5hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgYWxpZ25DZW50ZXIgc3BhY2VCZXR3ZWVuXCI+XG4gICAgICAgICAgPGgyPk1vb24gUm9jazwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy9tb29uLXJvY2tcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+XG4gICAgICAgICAge21vb25Sb2Nrcy5jdXJyZW50Lm1hcCgobW9vblJvY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkga2V5PXtgJHttb29uUm9jay5uYW1lfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwibW9vblJvY2tcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwibW9vblJvY2tcIiB2YWx1ZT17aW5kZXh9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57bW9vblJvY2submFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdyBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8aDI+RWRpYmxlczwvaDI+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwiYnV0dG9uXCIgdG89XCIvZXhlY3V0aXZlL25ldy9lZGlibGVcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+XG4gICAgICAgICAge2VkaWJsZXMuY3VycmVudC5tYXAoKGVkaWJsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxsaSBrZXk9e2Ake2VkaWJsZS5uYW1lfS0ke2luZGV4fWB9PlxuICAgICAgICAgICAgICA8Rm9ybSBuYW1lPVwiZWRpYmxlXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImVkaWJsZVwiIHZhbHVlPXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXIgc3BhY2VcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntlZGlibGUubmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9Gb3JtPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgczMsIHsgZGVsZXRlQ3VycmVudEluZGV4LCBnZXRGaWxlLCBLZXlzIH0gZnJvbSBcIi4uL2F3cy9hd3MtZXhwb3J0c1wiO1xuXG5leHBvcnQgZW51bSBGbG93ZXJUeXBlIHtcbiAgSHlicmlkID0gXCJoeWJyaWRcIixcbiAgSW5kaWNhID0gXCJpbmRpY2FcIixcbiAgU2F0aXZhID0gXCJzYXRpdmFcIixcbn1cblxuZXhwb3J0IGVudW0gV2F4VHlwZSB7XG4gIEJhZGRlciA9IFwiYmFkZGVyXCIsXG4gIENydW1ibGUgPSBcImNydW1ibGVcIixcbiAgU2hhdHRlciA9IFwic2hhdHRlclwiLFxuICBTYXVjZSA9IFwic2F1Y2VcIixcbn1cblxuZXhwb3J0IGVudW0gV3JhcCB7XG4gIEpvaW50ID0gXCJqb2ludFwiLFxuICBCbHVudCA9IFwiYmx1bnRcIixcbn1cblxuZXhwb3J0IHR5cGUgUHJpY2UgPSBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+O1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcnQgZXh0ZW5kcyBGbG93ZXIge1xuICBhbW91bnQ/OiBzdHJpbmc7XG4gIGRpc3Bvc2FibGU6IGJvb2xlYW47XG4gIGZsYXZvcnM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEVkaWJsZSBleHRlbmRzIE9taXQ8Rmxvd2VyLCBcInR5cGVcIj4ge1xuICBhbW91bnQ6IHN0cmluZztcbiAgZmxhdm9yczogc3RyaW5nW107XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgRmxvd2VyID0ge1xuICBjbGFzczogXCJ0aGNcIjtcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGluZGljYT86IG51bWJlcjtcbiAgbmFtZTogc3RyaW5nO1xuICBwcmljZTogUHJpY2U7XG4gIHNhdGl2YT86IG51bWJlcjtcbiAgc3JjPzogc3RyaW5nO1xuICBzdXBwbGllcj86IHN0cmluZztcbiAgc3VwcGxpZXJVcmw/OiBzdHJpbmc7XG4gIHR5cGU6IEZsb3dlclR5cGU7XG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIE1vb25Sb2NrIGV4dGVuZHMgRmxvd2VyIHtcbiAgZmxhdm9yczogc3RyaW5nW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJlUm9sbCBleHRlbmRzIEZsb3dlciB7XG4gIGFtb3VudD86IHN0cmluZztcbiAgZmxhdm9yczogc3RyaW5nW107XG4gIHdyYXA6IFdyYXA7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdheCBleHRlbmRzIE9taXQ8Rmxvd2VyLCBcInR5cGVcIj4ge1xuICB0eXBlOiBXYXhUeXBlO1xufVxuXG5leHBvcnQgdHlwZSBDYXJ0cyA9IHtcbiAgY3VycmVudDogQ2FydFtdO1xuICB1cGNvbWluZzogQ2FydFtdO1xufTtcblxuZXhwb3J0IHR5cGUgRWRpYmxlcyA9IHtcbiAgY3VycmVudDogRWRpYmxlW107XG4gIHVwY29taW5nOiBFZGlibGVbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEZsb3dlcnMgPSB7XG4gIGN1cnJlbnQ6IEZsb3dlcltdO1xuICB1cGNvbWluZzogRmxvd2VyW107XG59O1xuXG5leHBvcnQgdHlwZSBNb29uUm9ja3MgPSB7XG4gIGN1cnJlbnQ6IE1vb25Sb2NrW107XG4gIHVwY29taW5nOiBNb29uUm9ja1tdO1xufTtcblxuZXhwb3J0IHR5cGUgUHJlUm9sbHMgPSB7XG4gIGN1cnJlbnQ6IFByZVJvbGxbXTtcbiAgdXBjb21pbmc6IFByZVJvbGxbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFdheGVzID0ge1xuICBjdXJyZW50OiBXYXhbXTtcbiAgdXBjb21pbmc6IFdheFtdO1xufTtcblxuLy8gQ3JlYXRlXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FydCA9IGFzeW5jIChjYXJ0OiBDYXJ0KSA9PiB7XG4gIGNvbnN0IGNhcnRzID0gYXdhaXQgZ2V0Q2FydHMoKTtcblxuICBjYXJ0cy5jdXJyZW50LnB1c2goY2FydCk7XG5cbiAgY29uc3QgbWluaWZpZWRDYXJ0cyA9IEpTT04uc3RyaW5naWZ5KGNhcnRzKTtcblxuICByZXR1cm4gYXdhaXQgczNcbiAgICAucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IEtleXMuQ2FydCxcbiAgICAgIEJvZHk6IG1pbmlmaWVkQ2FydHMsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUVkaWJsZSA9IGFzeW5jIChlZGlibGU6IEVkaWJsZSkgPT4ge1xuICBjb25zdCBlZGlibGVzID0gYXdhaXQgZ2V0RWRpYmxlcygpO1xuXG4gIGVkaWJsZXMuY3VycmVudC5wdXNoKGVkaWJsZSk7XG5cbiAgY29uc3QgbWluaWZpZWRFZGlibGVzID0gSlNPTi5zdHJpbmdpZnkoZWRpYmxlcyk7XG5cbiAgcmV0dXJuIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBLZXlzLkVkaWJsZSxcbiAgICAgIEJvZHk6IG1pbmlmaWVkRWRpYmxlcyxcbiAgICB9KVxuICAgIC5wcm9taXNlKClcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlRmxvd2VyID0gYXN5bmMgKGZsb3dlcjogRmxvd2VyKSA9PiB7XG4gIGNvbnN0IGZsb3dlcnMgPSBhd2FpdCBnZXRGbG93ZXJzKCk7XG5cbiAgZmxvd2Vycy5jdXJyZW50LnB1c2goZmxvd2VyKTtcblxuICBjb25zdCBtaW5pZmllZEZsb3dlcnMgPSBKU09OLnN0cmluZ2lmeShmbG93ZXJzKTtcblxuICByZXR1cm4gYXdhaXQgczNcbiAgICAucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IEtleXMuRmxvd2VyLFxuICAgICAgQm9keTogbWluaWZpZWRGbG93ZXJzLFxuICAgIH0pXG4gICAgLnByb21pc2UoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVNb29uUm9jayA9IGFzeW5jIChtb29uUm9jazogTW9vblJvY2spID0+IHtcbiAgY29uc3QgbW9vblJvY2tzID0gYXdhaXQgZ2V0RmlsZShLZXlzLk1vb25Sb2NrKTtcblxuICBtb29uUm9ja3MuY3VycmVudC5wdXNoKG1vb25Sb2NrKTtcblxuICBjb25zdCBtaW5pZmllZE1vb25Sb2NrcyA9IEpTT04uc3RyaW5naWZ5KG1vb25Sb2Nrcyk7XG5cbiAgcmV0dXJuIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBLZXlzLk1vb25Sb2NrLFxuICAgICAgQm9keTogbWluaWZpZWRNb29uUm9ja3MsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByZVJvbGwgPSBhc3luYyAocHJlUm9sbDogUHJlUm9sbCkgPT4ge1xuICBjb25zdCBwcmVSb2xscyA9IGF3YWl0IGdldFByZVJvbGxzKCk7XG5cbiAgcHJlUm9sbHMuY3VycmVudC5wdXNoKHByZVJvbGwpO1xuXG4gIGNvbnN0IG1pbmlmaWVkUHJlUm9sbHMgPSBKU09OLnN0cmluZ2lmeShwcmVSb2xscyk7XG5cbiAgcmV0dXJuIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBLZXlzLlByZVJvbGwsXG4gICAgICBCb2R5OiBtaW5pZmllZFByZVJvbGxzLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVXYXggPSBhc3luYyAod2F4OiBXYXgpID0+IHtcbiAgY29uc3Qgd2F4ZXMgPSBhd2FpdCBnZXRXYXhlcygpO1xuXG4gIHdheGVzLmN1cnJlbnQucHVzaCh3YXgpO1xuXG4gIGNvbnN0IG1pbmlmaWVkV2F4ZXMgPSBKU09OLnN0cmluZ2lmeSh3YXhlcyk7XG5cbiAgcmV0dXJuIGF3YWl0IHMzXG4gICAgLnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBLZXlzLldheCxcbiAgICAgIEJvZHk6IG1pbmlmaWVkV2F4ZXMsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xufTtcblxuLy8gUmVhZFxuZXhwb3J0IGNvbnN0IGdldENhcnRzID0gKCkgPT4gZ2V0RmlsZShLZXlzLkNhcnQpO1xuXG5leHBvcnQgY29uc3QgZ2V0RWRpYmxlcyA9ICgpID0+IGdldEZpbGUoS2V5cy5FZGlibGUpO1xuXG5leHBvcnQgY29uc3QgZ2V0Rmxvd2VycyA9ICgpID0+IGdldEZpbGUoS2V5cy5GbG93ZXIpO1xuXG5leHBvcnQgY29uc3QgZ2V0TW9vblJvY2tzID0gKCkgPT4gZ2V0RmlsZShLZXlzLk1vb25Sb2NrKTtcblxuZXhwb3J0IGNvbnN0IGdldFByZVJvbGxzID0gKCkgPT4gZ2V0RmlsZShLZXlzLlByZVJvbGwpO1xuXG5leHBvcnQgY29uc3QgZ2V0V2F4ZXMgPSAoKSA9PiBnZXRGaWxlKEtleXMuV2F4KTtcblxuLy8gRGVsZXRlXG5leHBvcnQgY29uc3QgZGVsZXRlQ3VycmVudENhcnQgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgZGVsZXRlQ3VycmVudEluZGV4KEtleXMuQ2FydCwgaW5kZXgpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ3VycmVudEVkaWJsZSA9IChpbmRleDogbnVtYmVyKSA9PlxuICBkZWxldGVDdXJyZW50SW5kZXgoS2V5cy5FZGlibGUsIGluZGV4KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUN1cnJlbnRGbG93ZXIgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgZGVsZXRlQ3VycmVudEluZGV4KEtleXMuRmxvd2VyLCBpbmRleCk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDdXJyZW50TW9vblJvY2sgPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgZGVsZXRlQ3VycmVudEluZGV4KEtleXMuTW9vblJvY2ssIGluZGV4KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUN1cnJlbnRQcmVSb2xsID0gKGluZGV4OiBudW1iZXIpID0+XG4gIGRlbGV0ZUN1cnJlbnRJbmRleChLZXlzLlByZVJvbGwsIGluZGV4KTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUN1cnJlbnRXYXggPSAoaW5kZXg6IG51bWJlcikgPT5cbiAgZGVsZXRlQ3VycmVudEluZGV4KEtleXMuV2F4LCBpbmRleCk7XG4iLCAiaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24sIExpbmssIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyBGb3JtLCByZWRpcmVjdCwgdXNlTG9hZGVyRGF0YSwgdXNlVHJhbnNpdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBQcm9maWxlLCB1cGRhdGVQcm9maWxlIH0gZnJvbSBcIn4vcHJvZmlsZVwiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIn4vdXRpbHMvZm9ybWF0RGF0ZVwiO1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHByb2ZpbGU6IFByb2ZpbGU7XG59XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuXG4gIGNvbnN0IHByb2ZpbGUgPSAoYXdhaXQgZ2V0UHJvZmlsZSgpKSBhcyBQcm9maWxlO1xuXG4gIGNvbnN0IGluc3RhZ3JhbVVybCA9IGZvcm1EYXRhLmdldChcImluc3RhXCIpO1xuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcbiAgY29uc3QgZGF0ZSA9IGZvcm1EYXRhLmdldChcImRhdGVcIik7XG5cbiAgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiICYmICFpc05hTigrZGF0ZSkpIHtcbiAgICBwcm9maWxlLmRhdGVzQ2xvc2VkLnNwbGljZSgrZGF0ZSwgMSk7XG4gIH1cblxuICBpZiAoaW5zdGFncmFtVXJsID09PSBcInN0cmluZ1wiICYmIHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKSB7XG4gICAgcHJvZmlsZS5pbnN0YWdyYW1VcmwgPSBpbnN0YWdyYW1Vcmw7XG4gICAgcHJvZmlsZS5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGF3YWl0IHVwZGF0ZVByb2ZpbGUocHJvZmlsZSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2V4ZWN1dGl2ZVwiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHByb2ZpbGUgPSBhd2FpdCBnZXRQcm9maWxlKCk7XG5cbiAgcmV0dXJuIHsgcHJvZmlsZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlY3V0aXZlSW5kZXgoKSB7XG4gIGNvbnN0IHtcbiAgICBwcm9maWxlOiB7IGRhdGVzQ2xvc2VkLCBpbnN0YWdyYW1VcmwsIG5hbWUgfSxcbiAgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHJvdyBzcGFjZSB3cmFwXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxoMj5VcGRhdGUgUHJvZmlsZTwvaDI+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbHVtbiBzcGFjZVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbnN0YWdyYW0gVVJMOlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImluc3RhXCIgZGVmYXVsdFZhbHVlPXtpbnN0YWdyYW1Vcmx9IC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBDb21wYW55IE5hbWU6XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIGRlZmF1bHRWYWx1ZT17bmFtZX0gLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICB7dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gXCJVcGRhdGluZy4uLlwiIDogXCJVcGRhdGVcIn1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJvdyBhbGlnbkNlbnRlciBzcGFjZUJldHdlZW5cIj5cbiAgICAgICAgICA8aDI+RGF0ZXMgQ2xvc2VkPC9oMj5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9XCJidXR0b25cIiB0bz1cIi9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGVcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sIHNwYWNlXCI+XG4gICAgICAgICAge2RhdGVzQ2xvc2VkLm1hcCgoZGF0ZSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNsb3NlVGltZSA9IG5ldyBEYXRlKGRhdGVbMF0pO1xuICAgICAgICAgICAgY29uc3Qgb3BlblRpbWUgPSBuZXcgRGF0ZShkYXRlWzFdKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2Ake2RhdGVbMF19LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgICAgPEZvcm0gbmFtZT1cImRhdGVcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJkYXRlXCIgdmFsdWU9e2luZGV4fSAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyIHNwYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKGNsb3NlVGltZSl9LXtmb3JtYXREYXRlKG9wZW5UaW1lKX1cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgaXNQYXN0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmltcG9ydCBzMyBmcm9tIFwiLi4vYXdzL2F3cy1leHBvcnRzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvZmlsZSB7XG4gIGRhdGVzQ2xvc2VkOiBzdHJpbmdbXVtdO1xuICBob3VyT3BlbjogbnVtYmVyO1xuICBpbnN0YWdyYW1Vcmw6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB1cGRhdGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVByb2ZpbGUgPSBhc3luYyAocHJvZmlsZTogUHJvZmlsZSkgPT4ge1xuICBjb25zdCBtaW5pZmllZFByb2ZpbGUgPSBKU09OLnN0cmluZ2lmeShwcm9maWxlKTtcblxuICByZXR1cm4gYXdhaXQgczNcbiAgICAucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogXCJiYXlvdS1leG90aWNzXCIsXG4gICAgICBLZXk6IFwiYmF5b3UtZXhvdGljcy5qc29uXCIsXG4gICAgICBCb2R5OiBtaW5pZmllZFByb2ZpbGUsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFByb2ZpbGUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGV4ZWN1dGl2ZSA9IGF3YWl0IHMzXG4gICAgLmdldE9iamVjdCh7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgS2V5OiBcImJheW91LWV4b3RpY3MuanNvblwiLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBmZXRjaGluZyBhc3NldHMgcGF0aFwiLCAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSk7XG5cbiAgaWYgKCFleGVjdXRpdmUgfHwgIWV4ZWN1dGl2ZS5Cb2R5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiYmF5b3UtZXhvdGljcy5qc29uIGhhcyBubyBCb2R5XCIpO1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IGV4ZWN1dGl2ZS5Cb2R5LnRvU3RyaW5nKCk7XG5cbiAgY29uc3QgcHJvZmlsZTogUHJvZmlsZSA9IEpTT04ucGFyc2UoZGF0YSk7XG5cbiAgcHJvZmlsZS5kYXRlc0Nsb3NlZCA9IHByb2ZpbGUuZGF0ZXNDbG9zZWQuZmlsdGVyKFxuICAgIChbLCBkYXRlMl0pID0+ICFpc1Bhc3QobmV3IERhdGUoZGF0ZTIpKVxuICApO1xuXG4gIHJldHVybiBwcm9maWxlO1xufTtcbiIsICJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuY29uc3QgZGF0ZUZvcm1hdCA9IFwiTS9kL3l5eXkgJ2F0JyBoOm1tIGFhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZTogRGF0ZSkge1xuICByZXR1cm4gZm9ybWF0KGRhdGUsIGRhdGVGb3JtYXQpO1xufVxuIiwgImltcG9ydCB7IEFjdGlvbkZ1bmN0aW9uLCBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHsgRm9ybSwgTGluaywgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgZGVsZXRlQXNzZXQsIGdldEFzc2V0cyB9IGZyb20gXCJ+L2Fzc2V0c1wiO1xuaW1wb3J0IGdldEFzc2V0VXJsIGZyb20gXCJ+L3V0aWxzL2dldEFzc2V0VXJsXCI7XG5cbmltcG9ydCBleGVjU3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvZXhlYy5jc3NcIjtcblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBhc3NldHM6IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgYXNzZXQgPSBmb3JtRGF0YS5nZXQoXCJhc3NldFwiKTtcblxuICBpZiAoIWFzc2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiBhc3NldCA9PT0gXCJzdHJpbmdcIik7XG5cbiAgcmV0dXJuIGF3YWl0IGRlbGV0ZUFzc2V0KGFzc2V0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhOiBMb2FkZXJEYXRhID0geyBhc3NldHM6IGF3YWl0IGdldEFzc2V0cygpIH07XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBleGVjU3R5bGVzIH1dO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlY3V0aXZlKCkge1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbWVkaWFcIj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgc3BhY2UtMlwiPlxuICAgICAgICAgIDxoMj5JbWFnZXM8L2gyPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cImJ1dHRvblwiIHRvPVwiL2V4ZWN1dGl2ZS9uZXcvbWVkaWFcIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwicm93IHNwYWNlIHdyYXBcIj5cbiAgICAgICAgICB7YXNzZXRzLm1hcCgoYXNzZXQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiY29udGVudCByZWxhdGl2ZVwiIGtleT17YCR7YXNzZXR9LSR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxGb3JtIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJhc3NldFwiIHZhbHVlPXthc3NldH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJcIiBzcmM9e2dldEFzc2V0VXJsKGFzc2V0KX0gd2lkdGg9XCIxMDAlXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uIGFic29sdXRlIGFzc2V0LWRlbGV0ZS1wb3NpdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L0Zvcm0+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3VsPlxuICAgICAgPC9zZWN0aW9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCBzMyBmcm9tIFwiLi4vYXdzL2F3cy1leHBvcnRzXCI7XG5cbmV4cG9ydCBjb25zdCBhZGRBc3NldCA9IGFzeW5jIChmaWxlbmFtZTogc3RyaW5nLCBiYXNlNjRkYXRhPzogQnVmZmVyKSA9PiB7XG4gIHJldHVybiBzM1xuICAgIC51cGxvYWQoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3MvYXNzZXRzXCIsXG4gICAgICBLZXk6IGVuY29kZVVSSShmaWxlbmFtZSksXG4gICAgICBCb2R5OiBiYXNlNjRkYXRhLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiBkYXRhKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVBc3NldCA9IGFzeW5jIChmaWxlbmFtZTogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBzM1xuICAgIC5kZWxldGVPYmplY3Qoe1xuICAgICAgQnVja2V0OiBcImJheW91LWV4b3RpY3NcIixcbiAgICAgIEtleTogZmlsZW5hbWUsXG4gICAgfSlcbiAgICAucHJvbWlzZSgpXG4gICAgLnRoZW4oKGRhdGEpID0+IGRhdGEpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFzc2V0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgYXNzZXRzID0gYXdhaXQgczNcbiAgICAubGlzdE9iamVjdHNWMih7XG4gICAgICBCdWNrZXQ6IFwiYmF5b3UtZXhvdGljc1wiLFxuICAgICAgUHJlZml4OiBcImFzc2V0cy9cIixcbiAgICAgIFN0YXJ0QWZ0ZXI6IFwiYXNzZXRzL1wiLFxuICAgIH0pXG4gICAgLnByb21pc2UoKVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciBmZXRjaGluZyBhc3NldHMgcGF0aFwiLCAke2Vycm9yLm1lc3NhZ2V9YCk7XG4gICAgfSk7XG5cbiAgY29uc3QgYXNzZXRLZXlzOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGlmICghYXNzZXRzIHx8ICFhc3NldHMuQ29udGVudHMpIHtcbiAgICByZXR1cm4gYXNzZXRLZXlzO1xuICB9XG5cbiAgZm9yIChjb25zdCBhc3NldCBvZiBhc3NldHMuQ29udGVudHMpIHtcbiAgICBpZiAoYXNzZXQuS2V5KSB7XG4gICAgICBhc3NldEtleXMucHVzaChhc3NldC5LZXkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhc3NldEtleXM7XG59O1xuIiwgImNvbnN0IEJBU0VfVVJMID0gXCJodHRwczovL2JheW91LWV4b3RpY3MuczMudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldEFzc2V0VXJsKHBhdGg6IHN0cmluZykge1xuICByZXR1cm4gYCR7QkFTRV9VUkx9JHtwYXRofWA7XG59XG4iLCAiaW1wb3J0IHsgT3V0bGV0IH0gZnJvbSBcInJlbWl4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0Zsb3dlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPE91dGxldCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IGlzUGFzdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIHJlZGlyZWN0LCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgeyBnZXRQcm9maWxlLCBQcm9maWxlLCB1cGRhdGVQcm9maWxlIH0gZnJvbSBcIn4vcHJvZmlsZVwiO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBjdXJyZW50UHJvZmlsZSA9IChhd2FpdCBnZXRQcm9maWxlKCkpIGFzIFByb2ZpbGU7XG5cbiAgY29uc3QgY2xvc2UgPSBmb3JtRGF0YS5nZXQoXCJjbG9zZVwiKTtcbiAgY29uc3Qgb3BlbiA9IGZvcm1EYXRhLmdldChcIm9wZW5cIik7XG5cbiAgaW52YXJpYW50KHR5cGVvZiBjbG9zZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygb3BlbiA9PT0gXCJzdHJpbmdcIik7XG5cbiAgY29uc3QgY2xvc2luZyA9IFtjbG9zZSwgb3Blbl07XG5cbiAgY29uc3QgZGF0ZXNDbG9zZWQgPSBjdXJyZW50UHJvZmlsZS5kYXRlc0Nsb3NlZC5maWx0ZXIoXG4gICAgKFtkYXRlMSwgZGF0ZTJdKSA9PiAhaXNQYXN0KG5ldyBEYXRlKGRhdGUxKSkgJiYgIWlzUGFzdChuZXcgRGF0ZShkYXRlMikpXG4gICk7XG5cbiAgZGF0ZXNDbG9zZWQucHVzaChjbG9zaW5nKTtcblxuICBhd2FpdCB1cGRhdGVQcm9maWxlKHsgLi4uY3VycmVudFByb2ZpbGUsIGRhdGVzQ2xvc2VkIH0pO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9leGVjdXRpdmVcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdDbG9zZURhdGUoKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICA8aDI+QWRkIERhdGUgQ2xvc2VkPC9oMj5cbiAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbCBzcGFjZVwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFRpbWUgQ2xvc2luZzpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICBtaW49e2RhdGUudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgIG5hbWU9XCJjbG9zZVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsPlxuICAgICAgICAgIFRpbWUgUmUtb3BlbmluZzpcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJkYXRldGltZS1sb2NhbFwiXG4gICAgICAgICAgICBtaW49e2RhdGUudG9Mb2NhbGVTdHJpbmcoKX1cbiAgICAgICAgICAgIG5hbWU9XCJvcGVuXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImNyZWF0ZVwiPlxuICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIlVwZGF0aW5nLi4uXCIgOiBcIkFkZCBEYXRlcyBDbG9zaW5nXCJ9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQge1xuICBGb3JtLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgeyBnZXRBc3NldHMgfSBmcm9tIFwifi9hc3NldHNcIjtcbmltcG9ydCB7IGNyZWF0ZU1vb25Sb2NrLCBGbG93ZXJUeXBlLCBNb29uUm9jayB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCBnZXRGbG93ZXJQcmljZSwgeyBQcmljZUVycm9yIH0gZnJvbSBcIn4vdXRpbHMvZ2V0Rmxvd2VyUHJpY2VcIjtcblxuaW50ZXJmYWNlIFBvc3RFcnJvciBleHRlbmRzIFByaWNlRXJyb3Ige1xuICBuYW1lPzogYm9vbGVhbjtcbiAgZmxhdm9ycz86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBMb2FkZXJEYXRhIHtcbiAgYXNzZXRzOiBzdHJpbmdbXTtcbn1cblxuY29uc3QgYXZhaWxhYmxlTW9vblJvY2tRdWFudGl0aWVzID0gW1wiMVwiLCBcIjJcIiwgXCIzLjVcIiwgXCI3XCIsIFwiMTRcIiwgXCIyOFwiXTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG4gIGNvbnN0IGRlc2NyaXB0aW9uRm9ybURhdGEgPSBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKTtcblxuICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAhZGVzY3JpcHRpb25Gb3JtRGF0YVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoZGVzY3JpcHRpb25Gb3JtRGF0YSBhcyBzdHJpbmcpO1xuICBjb25zdCBmbGF2b3JzID0gZm9ybURhdGEuZ2V0KFwiZmxhdm9yc1wiKTtcbiAgY29uc3QgZmxvd2VyVHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgRmxvd2VyVHlwZTtcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcblxuICBjb25zdCB7IHByaWNlLCBlcnJvcnM6IHByaWNlRXJyb3JzIH0gPSBnZXRGbG93ZXJQcmljZShmb3JtRGF0YSk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSBwcmljZUVycm9ycyA/IHsgLi4ucHJpY2VFcnJvcnMgfSA6IHt9O1xuXG4gIGlmICghbmFtZSkge1xuICAgIGVycm9ycy5uYW1lID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsYXZvcnMgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwcmljZSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgY29uc3QgbW9vblJvY2s6IE1vb25Sb2NrID0ge1xuICAgIGNsYXNzOiBcInRoY1wiLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGZsYXZvcnM6IGZsYXZvcnMuc3BsaXQoXCIsXCIpLm1hcCgoZmxhdm9yKSA9PiBmbGF2b3IudHJpbSgpKSxcbiAgICBzcmM6IGltYWdlID09PSBcIk5vbmVcIiA/IFwiYXNzZXRzL2JheW91LWxvZ28ucG5nXCIgOiBpbWFnZSxcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIHR5cGU6IGZsb3dlclR5cGUsXG4gIH07XG5cbiAgYXdhaXQgY3JlYXRlTW9vblJvY2sobW9vblJvY2spO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9leGVjdXRpdmUvZXhvdGljc1wiKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGFzc2V0cyA9IGF3YWl0IGdldEFzc2V0cygpO1xuXG4gIHJldHVybiB7IGFzc2V0cyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3Q2FydCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPGgyPkNyZWF0ZSBNb29uIFJvY2s8L2gyPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiB7ZXJyb3JzPy5uYW1lID8gPGVtPk5hbWUgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzci1vbmx5XCI+SW5kaWNhLCBIeWJyaWQsIG9yIEJvdGg8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJpbmRpY2FcIiBkZWZhdWx0Q2hlY2tlZCAvPntcIiBcIn1cbiAgICAgICAgICAgICAgSW5kaWNhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInNhdGl2YVwiIC8+IFNhdGl2YVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJoeWJyaWRcIiAvPiBIeWJyaWRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbWFnZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldH0gdmFsdWU9e2Fzc2V0fT5cbiAgICAgICAgICAgICAgICAgIHthc3NldH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChvcHRpb25hbCk6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz17Mn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsYXZvcnNcIj5GbGF2b3JzOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgaWQ9XCJmbGF2b3JzXCJcbiAgICAgICAgICAgICAgcm93cz17Mn1cbiAgICAgICAgICAgICAgbmFtZT1cImZsYXZvcnNcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZsYXZvciAxLCBmbGF2b3IgMlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aDM+UHJpY2VzIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZXMgY29sIHNwYWNlXCI+XG4gICAgICAgICAgICB7YXZhaWxhYmxlTW9vblJvY2tRdWFudGl0aWVzLm1hcCgocXVhbnRpdHkpID0+IChcbiAgICAgICAgICAgICAgPGxhYmVsIGtleT17cXVhbnRpdHl9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAge2Vycm9ycz8uW3F1YW50aXR5XSA/IDxlbT4qPC9lbT4gOiBudWxsfSA6e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAkXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPXtgJHtxdWFudGl0eX1gfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm93IHNwYWNlIGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjcmVhdGVcIj5cbiAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiQ3JlYXRpbmcuLi5cIiA6IFwiQ3JlYXRlIEVkaWJsZVwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBQcmljZSB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcblxuaW1wb3J0IGdldEZvcm1QcmljZSBmcm9tIFwiLi9nZXRGb3JtUHJpY2VcIjtcblxuZXhwb3J0IHR5cGUgUHJpY2VFcnJvciA9IHtcbiAgXCIxXCI/OiBib29sZWFuO1xuICBcIjJcIj86IGJvb2xlYW47XG4gIFwiMy41XCI/OiBib29sZWFuO1xuICBcIjdcIj86IGJvb2xlYW47XG4gIFwiMTRcIj86IGJvb2xlYW47XG4gIFwiMjhcIj86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGbG93ZXJQcmljZShmb3JtRGF0YTogZ2xvYmFsVGhpcy5Gb3JtRGF0YSkge1xuICBjb25zdCBlcnJvcnM6IFByaWNlRXJyb3IgPSB7fTtcblxuICBjb25zdCBwcmljZURhdGE6IFByaWNlID0ge1xuICAgIDE6IDAsXG4gICAgMjogMCxcbiAgICAzLjU6IDAsXG4gICAgNzogMCxcbiAgICAxNDogMCxcbiAgICAyODogMCxcbiAgfTtcblxuICBjb25zdCBvbmUgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMVwiKSk7XG4gIGNvbnN0IHR3byA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCIyXCIpKTtcbiAgY29uc3QgZWlnaHRoID0gZ2V0Rm9ybVByaWNlKGZvcm1EYXRhLmdldChcIjMuNVwiKSk7XG4gIGNvbnN0IHF1YXJ0ZXIgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiN1wiKSk7XG4gIGNvbnN0IGhhbGYgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMTRcIikpO1xuICBjb25zdCB6b25lID0gZ2V0Rm9ybVByaWNlKGZvcm1EYXRhLmdldChcIjI4XCIpKTtcblxuICBpZiAoIW9uZSkge1xuICAgIGVycm9yc1tcIjFcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjFcIl0gPSBvbmU7XG4gIH1cblxuICBpZiAoIXR3bykge1xuICAgIGVycm9yc1tcIjJcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjJcIl0gPSB0d287XG4gIH1cblxuICBpZiAoIWVpZ2h0aCkge1xuICAgIGVycm9yc1tcIjMuNVwiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiMy41XCJdID0gZWlnaHRoO1xuICB9XG5cbiAgaWYgKCFxdWFydGVyKSB7XG4gICAgZXJyb3JzW1wiN1wiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiN1wiXSA9IHF1YXJ0ZXI7XG4gIH1cblxuICBpZiAoIWhhbGYpIHtcbiAgICBlcnJvcnNbXCIxNFwiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiMTRcIl0gPSBoYWxmO1xuICB9XG5cbiAgaWYgKCF6b25lKSB7XG4gICAgZXJyb3JzW1wiMjhcIl0gPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHByaWNlRGF0YVtcIjI4XCJdID0gem9uZTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcbiAgICBwcmljZTogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPyB1bmRlZmluZWQgOiBwcmljZURhdGEsXG4gIH07XG59XG4iLCAiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Rm9ybVByaWNlKHZhbHVlOiBGb3JtRGF0YUVudHJ5VmFsdWUgfCBudWxsKSB7XG4gIHJldHVybiAhIXZhbHVlICYmICFpc05hTigrdmFsdWUpICYmICt2YWx1ZSA+IDAgPyArdmFsdWUgOiB1bmRlZmluZWQ7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGdldEFzc2V0cyB9IGZyb20gXCJ+L2Fzc2V0c1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJlUm9sbCwgRmxvd2VyVHlwZSwgUHJlUm9sbCwgV3JhcCB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCBnZXRQcmVSb2xsUHJpY2UsIHsgUHJpY2VFcnJvciB9IGZyb20gXCJ+L3V0aWxzL2dldFByZVJvbGxQcmljZVwiO1xuXG5pbnRlcmZhY2UgUG9zdEVycm9yIGV4dGVuZHMgUHJpY2VFcnJvciB7XG4gIGFtb3VudD86IGJvb2xlYW47XG4gIG5hbWU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZVByZVJvbGxRdWFudGl0aWVzID0gW1wiMVwiLCBcIjVcIiwgXCIxMFwiXTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25Gb3JtRGF0YSA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuICBjb25zdCBmbGF2b3JGb3JtRGF0YSA9IGZvcm1EYXRhLmdldChcImZsYXZvcnNcIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGFtb3VudCA9IGZvcm1EYXRhLmdldChcImFtb3VudFwiKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSAhZGVzY3JpcHRpb25Gb3JtRGF0YVxuICAgID8gdW5kZWZpbmVkXG4gICAgOiAoZGVzY3JpcHRpb25Gb3JtRGF0YSBhcyBzdHJpbmcpO1xuICBjb25zdCBmbGF2b3JzID0gIWZsYXZvckZvcm1EYXRhID8gdW5kZWZpbmVkIDogKGZsYXZvckZvcm1EYXRhIGFzIHN0cmluZyk7XG4gIGNvbnN0IGZsb3dlclR5cGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIEZsb3dlclR5cGU7XG4gIGNvbnN0IHdyYXAgPSBmb3JtRGF0YS5nZXQoXCJ3cmFwXCIpIGFzIFdyYXA7XG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIik7XG5cbiAgY29uc3QgeyBwcmljZSwgZXJyb3JzOiBwcmljZUVycm9ycyB9ID0gZ2V0UHJlUm9sbFByaWNlKGZvcm1EYXRhKTtcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHByaWNlRXJyb3JzID8geyAuLi5wcmljZUVycm9ycyB9IDoge307XG4gIGlmICghbmFtZSkge1xuICAgIGVycm9ycy5uYW1lID0gdHJ1ZTtcbiAgfVxuXG4gIGlmICghYW1vdW50KSB7XG4gICAgZXJyb3JzLmFtb3VudCA9IHRydWU7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsb3dlclR5cGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwcmljZSAhPT0gXCJ1bmRlZmluZWRcIik7XG4gIGludmFyaWFudCh0eXBlb2Ygd3JhcCA9PT0gXCJzdHJpbmdcIik7XG5cbiAgY29uc3QgcHJlUm9sbDogUHJlUm9sbCA9IHtcbiAgICBhbW91bnQsXG4gICAgY2xhc3M6IFwidGhjXCIsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgZmxhdm9yczogZmxhdm9ycyA/IGZsYXZvcnMuc3BsaXQoXCIsXCIpIDogW10sXG4gICAgc3JjOiBpbWFnZSA9PT0gXCJOb25lXCIgPyBcImFzc2V0cy9iYXlvdS1sb2dvLnBuZ1wiIDogaW1hZ2UsXG4gICAgbmFtZSxcbiAgICBwcmljZSxcbiAgICB0eXBlOiBmbG93ZXJUeXBlLFxuICAgIHdyYXAsXG4gIH07XG5cbiAgYXdhaXQgY3JlYXRlUHJlUm9sbChwcmVSb2xsKTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1ByZVJvbGwoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxoMj5DcmVhdGUgUHJlIFJvbGw8L2gyPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiB7ZXJyb3JzPy5uYW1lID8gPGVtPk5hbWUgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzci1vbmx5XCI+SW5kaWNhLCBIeWJyaWQsIG9yIEJvdGg8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJpbmRpY2FcIiBkZWZhdWx0Q2hlY2tlZCAvPntcIiBcIn1cbiAgICAgICAgICAgICAgSW5kaWNhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInNhdGl2YVwiIC8+IFNhdGl2YVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJoeWJyaWRcIiAvPiBIeWJyaWRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5XcmFwPC9sZWdlbmQ+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwid3JhcFwiIHZhbHVlPVwiam9pbnRcIiBkZWZhdWx0Q2hlY2tlZCAvPntcIiBcIn1cbiAgICAgICAgICAgICAgSm9pbnRcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwid3JhcFwiIHZhbHVlPVwiYmx1bnRcIiAvPiBCbHVudFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEFtb3VudCAoZyk6IHtlcnJvcnM/LmFtb3VudCA/IDxlbT5BbW91bnQgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgc3RlcD1cIi4wMVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbWFnZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldH0gdmFsdWU9e2Fzc2V0fT5cbiAgICAgICAgICAgICAgICAgIHthc3NldH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChvcHRpb25hbCk6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz17Mn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsYXZvcnNcIj5cbiAgICAgICAgICAgICAgRmxhdm9ycyAob3B0aW9uYWwpOntcIiBcIn1cbiAgICAgICAgICAgICAge2Vycm9ycz8ubmFtZSA/IDxlbT5BdCBsZWFzdCAxIGZsYXZvciBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgIGlkPVwiZmxhdm9yc1wiXG4gICAgICAgICAgICAgIHJvd3M9ezJ9XG4gICAgICAgICAgICAgIG5hbWU9XCJmbGF2b3JzXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmbGF2b3IgMSwgZmxhdm9yIDJcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGgzPlByaWNlcyA8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJpY2VzIGNvbCBzcGFjZVwiPlxuICAgICAgICAgICAge2F2YWlsYWJsZVByZVJvbGxRdWFudGl0aWVzLm1hcCgocXVhbnRpdHkpID0+IChcbiAgICAgICAgICAgICAgPGxhYmVsIGtleT17cXVhbnRpdHl9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAge2Vycm9ycz8uW3F1YW50aXR5XSA/IDxlbT4qPC9lbT4gOiBudWxsfSA6e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAkXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPXtgJHtxdWFudGl0eX1gfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm93IHNwYWNlIGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjcmVhdGVcIj5cbiAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiQ3JlYXRpbmcuLi5cIiA6IFwiQ3JlYXRlIFByZSBSb2xsXCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB7IFByaWNlIH0gZnJvbSBcIn4vZXhvdGljc1wiO1xuXG5pbXBvcnQgZ2V0Rm9ybVByaWNlIGZyb20gXCIuL2dldEZvcm1QcmljZVwiO1xuXG5leHBvcnQgdHlwZSBQcmljZUVycm9yID0ge1xuICBcIjFcIj86IGJvb2xlYW47XG4gIFwiNVwiPzogYm9vbGVhbjtcbiAgXCIxMFwiPzogYm9vbGVhbjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByZVJvbGxQcmljZShmb3JtRGF0YTogZ2xvYmFsVGhpcy5Gb3JtRGF0YSkge1xuICBjb25zdCBlcnJvcnM6IFByaWNlRXJyb3IgPSB7fTtcblxuICBjb25zdCBwcmljZURhdGE6IFByaWNlID0ge1xuICAgIDE6IDAsXG4gICAgNTogMCxcbiAgICAxMDogMCxcbiAgfTtcblxuICBjb25zdCBvbmUgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMVwiKSk7XG4gIGNvbnN0IGZpdmUgPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiNVwiKSk7XG4gIGNvbnN0IHRlbiA9IGdldEZvcm1QcmljZShmb3JtRGF0YS5nZXQoXCIxMFwiKSk7XG5cbiAgaWYgKCFvbmUpIHtcbiAgICBlcnJvcnNbXCIxXCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCIxXCJdID0gb25lO1xuICB9XG5cbiAgaWYgKCFmaXZlKSB7XG4gICAgZXJyb3JzW1wiNVwiXSA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcHJpY2VEYXRhW1wiNVwiXSA9IGZpdmU7XG4gIH1cblxuICBpZiAoIXRlbikge1xuICAgIGVycm9yc1tcIjEwXCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCIxMFwiXSA9IHRlbjtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXJyb3JzOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA/IGVycm9ycyA6IHVuZGVmaW5lZCxcbiAgICBwcmljZTogT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGggPyB1bmRlZmluZWQgOiBwcmljZURhdGEsXG4gIH07XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGdldEFzc2V0cyB9IGZyb20gXCJ+L2Fzc2V0c1wiO1xuaW1wb3J0IHsgY3JlYXRlRWRpYmxlLCBFZGlibGUgfSBmcm9tIFwifi9leG90aWNzXCI7XG5pbXBvcnQgZ2V0RWRpYmxlUHJpY2UsIHsgUHJpY2VFcnJvciB9IGZyb20gXCJ+L3V0aWxzL2dldFByaWNlRm9yVHdvXCI7XG5cbmludGVyZmFjZSBQb3N0RXJyb3IgZXh0ZW5kcyBQcmljZUVycm9yIHtcbiAgYW1vdW50PzogYm9vbGVhbjtcbiAgbmFtZT86IGJvb2xlYW47XG4gIGZsYXZvcnM/OiBib29sZWFuO1xuICB0eXBlPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBhc3NldHM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBhdmFpbGFibGVDYXJ0UXVhbnRpdGllcyA9IFtcIjFcIiwgXCIyXCJdO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcbiAgY29uc3QgZGVzY3JpcHRpb25Gb3JtRGF0YSA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBhbW91bnQgPSBmb3JtRGF0YS5nZXQoXCJhbW91bnRcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gIWRlc2NyaXB0aW9uRm9ybURhdGFcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGRlc2NyaXB0aW9uRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgZmxhdm9ycyA9IGZvcm1EYXRhLmdldChcImZsYXZvcnNcIik7XG4gIGNvbnN0IHR5cGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpO1xuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpO1xuXG4gIGNvbnN0IHsgcHJpY2UsIGVycm9yczogcHJpY2VFcnJvcnMgfSA9IGdldEVkaWJsZVByaWNlKGZvcm1EYXRhKTtcblxuICBjb25zdCBlcnJvcnM6IFBvc3RFcnJvciA9IHByaWNlRXJyb3JzID8geyAuLi5wcmljZUVycm9ycyB9IDoge307XG5cbiAgaWYgKCFuYW1lKSB7XG4gICAgZXJyb3JzLm5hbWUgPSB0cnVlO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgZXJyb3JzLmFtb3VudCA9IHRydWU7XG4gIH1cbiAgaWYgKCFmbGF2b3JzKSB7XG4gICAgZXJyb3JzLmZsYXZvcnMgPT09IHRydWU7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiBhbW91bnQgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsYXZvcnMgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHR5cGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwcmljZSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgY29uc3QgZWRpYmxlOiBFZGlibGUgPSB7XG4gICAgYW1vdW50LFxuICAgIGNsYXNzOiBcInRoY1wiLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIGZsYXZvcnM6IGZsYXZvcnMuc3BsaXQoXCIsXCIpLm1hcCgoZmxhdm9yKSA9PiBmbGF2b3IudHJpbSgpKSxcbiAgICBzcmM6IGltYWdlID09PSBcIk5vbmVcIiA/IFwiYXNzZXRzL2JheW91LWxvZ28ucG5nXCIgOiBpbWFnZSxcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIHR5cGUsXG4gIH07XG5cbiAgYXdhaXQgY3JlYXRlRWRpYmxlKGVkaWJsZSk7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2V4ZWN1dGl2ZS9leG90aWNzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzKCk7XG5cbiAgcmV0dXJuIHsgYXNzZXRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdDYXJ0KCkge1xuICBjb25zdCBlcnJvcnMgPSB1c2VBY3Rpb25EYXRhKCk7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG4gIGNvbnN0IHsgYXNzZXRzIH0gPSB1c2VMb2FkZXJEYXRhPExvYWRlckRhdGE+KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8aDI+Q3JlYXRlIEVkaWJsZTwvaDI+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbCBzcGFjZS0yXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IHtlcnJvcnM/Lm5hbWUgPyA8ZW0+TmFtZSBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBUeXBlOiB7ZXJyb3JzPy50eXBlID8gPGVtPlR5cGUgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInR5cGVcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgQW1vdW50IChtZyk6IHtlcnJvcnM/LmFtb3VudCA/IDxlbT5BbW91bnQgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPVwiYW1vdW50XCIgc3RlcD1cIi4wMVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbWFnZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldH0gdmFsdWU9e2Fzc2V0fT5cbiAgICAgICAgICAgICAgICAgIHthc3NldH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChvcHRpb25hbCk6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz17Mn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsYXZvcnNcIj5cbiAgICAgICAgICAgICAgRmxhdm9yczp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtlcnJvcnM/Lm5hbWUgPyA8ZW0+QXQgbGVhc3QgMSBmbGF2b3IgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cImZsYXZvcnNcIlxuICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICBuYW1lPVwiZmxhdm9yc1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmxhdm9yIDEsIGZsYXZvciAyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMz5QcmljZXMgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlcyBjb2wgc3BhY2VcIj5cbiAgICAgICAgICAgIHthdmFpbGFibGVDYXJ0UXVhbnRpdGllcy5tYXAoKHF1YW50aXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3F1YW50aXR5fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LltxdWFudGl0eV0gPyA8ZW0+KjwvZW0+IDogbnVsbH0gOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT17YCR7cXVhbnRpdHl9YH0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdyBzcGFjZSBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkNyZWF0aW5nLi4uXCIgOiBcIkNyZWF0ZSBFZGlibGVcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgUHJpY2UgfSBmcm9tIFwifi9leG90aWNzXCI7XG5cbmltcG9ydCBnZXRGb3JtUHJpY2UgZnJvbSBcIi4vZ2V0Rm9ybVByaWNlXCI7XG5cbmV4cG9ydCB0eXBlIFByaWNlRXJyb3IgPSB7XG4gIFwiMVwiPzogYm9vbGVhbjtcbiAgXCIyXCI/OiBib29sZWFuO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0UHJpY2VGb3JUd28oZm9ybURhdGE6IGdsb2JhbFRoaXMuRm9ybURhdGEpIHtcbiAgY29uc3QgZXJyb3JzOiBQcmljZUVycm9yID0ge307XG5cbiAgY29uc3QgcHJpY2VEYXRhOiBQcmljZSA9IHtcbiAgICAxOiAwLFxuICAgIDI6IDAsXG4gIH07XG5cbiAgY29uc3Qgb25lID0gZ2V0Rm9ybVByaWNlKGZvcm1EYXRhLmdldChcIjFcIikpO1xuICBjb25zdCB0d28gPSBnZXRGb3JtUHJpY2UoZm9ybURhdGEuZ2V0KFwiMlwiKSk7XG5cbiAgaWYgKCFvbmUpIHtcbiAgICBlcnJvcnNbXCIxXCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCIxXCJdID0gb25lO1xuICB9XG5cbiAgaWYgKCF0d28pIHtcbiAgICBlcnJvcnNbXCIyXCJdID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBwcmljZURhdGFbXCIyXCJdID0gdHdvO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlcnJvcnM6IE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoID8gZXJyb3JzIDogdW5kZWZpbmVkLFxuICAgIHByaWNlOiBPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCA/IHVuZGVmaW5lZCA6IHByaWNlRGF0YSxcbiAgfTtcbn1cbiIsICJpbXBvcnQgdHlwZSB7IEFjdGlvbkZ1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgcmVkaXJlY3QsXG4gIHVzZUFjdGlvbkRhdGEsXG4gIHVzZUxvYWRlckRhdGEsXG4gIHVzZVRyYW5zaXRpb24sXG59IGZyb20gXCJyZW1peFwiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgZ2V0QXNzZXRzIH0gZnJvbSBcIn4vYXNzZXRzXCI7XG5pbXBvcnQgeyBjcmVhdGVGbG93ZXIsIEZsb3dlciwgRmxvd2VyVHlwZSB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCBnZXRGbG93ZXJQcmljZSwgeyBQcmljZUVycm9yIH0gZnJvbSBcIn4vdXRpbHMvZ2V0Rmxvd2VyUHJpY2VcIjtcblxuaW50ZXJmYWNlIFBvc3RFcnJvciBleHRlbmRzIFByaWNlRXJyb3Ige1xuICBuYW1lPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIExvYWRlckRhdGEge1xuICBhc3NldHM6IHN0cmluZ1tdO1xufVxuXG5jb25zdCBhdmFpbGFibGVGbG93ZXJRdWFudGl0aWVzID0gW1wiMVwiLCBcIjJcIiwgXCIzLjVcIiwgXCI3XCIsIFwiMTRcIiwgXCIyOFwiXTtcblxuZXhwb3J0IGNvbnN0IGFjdGlvbjogQWN0aW9uRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgZm9ybURhdGEgPSBhd2FpdCByZXF1ZXN0LmZvcm1EYXRhKCk7XG5cbiAgY29uc3QgZGVzY3JpcHRpb25Gb3JtRGF0YSA9IGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpO1xuXG4gIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9ICFkZXNjcmlwdGlvbkZvcm1EYXRhXG4gICAgPyB1bmRlZmluZWRcbiAgICA6IChkZXNjcmlwdGlvbkZvcm1EYXRhIGFzIHN0cmluZyk7XG4gIGNvbnN0IGZsb3dlclR5cGUgPSBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIEZsb3dlclR5cGU7XG4gIGNvbnN0IGltYWdlID0gZm9ybURhdGEuZ2V0KFwiaW1hZ2VcIik7XG5cbiAgY29uc3QgeyBwcmljZSwgZXJyb3JzOiBwcmljZUVycm9ycyB9ID0gZ2V0Rmxvd2VyUHJpY2UoZm9ybURhdGEpO1xuXG4gIGNvbnN0IGVycm9yczogUG9zdEVycm9yID0gcHJpY2VFcnJvcnMgPyB7IC4uLnByaWNlRXJyb3JzIH0gOiB7fTtcbiAgaWYgKCFuYW1lKSB7XG4gICAgZXJyb3JzLm5hbWUgPSB0cnVlO1xuICB9XG5cbiAgaWYgKE9iamVjdC5rZXlzKGVycm9ycykubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9ycztcbiAgfVxuXG4gIGludmFyaWFudCh0eXBlb2YgbmFtZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgZmxvd2VyVHlwZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIHByaWNlICE9PSBcInVuZGVmaW5lZFwiKTtcblxuICBjb25zdCBmbG93ZXI6IEZsb3dlciA9IHtcbiAgICBjbGFzczogXCJ0aGNcIixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBzcmM6IGltYWdlID09PSBcIk5vbmVcIiA/IFwiYXNzZXRzL2JheW91LWxvZ28ucG5nXCIgOiBpbWFnZSxcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIHR5cGU6IGZsb3dlclR5cGUsXG4gIH07XG5cbiAgYXdhaXQgY3JlYXRlRmxvd2VyKGZsb3dlcik7XG5cbiAgcmV0dXJuIHJlZGlyZWN0KFwiL2V4ZWN1dGl2ZS9leG90aWNzXCIpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgYXNzZXRzID0gYXdhaXQgZ2V0QXNzZXRzKCk7XG5cbiAgcmV0dXJuIHsgYXNzZXRzIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdGbG93ZXIoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxoMj5DcmVhdGUgRmxvd2VyPC9oMj5cbiAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiY29sIHNwYWNlLTJcIiBtZXRob2Q9XCJwb3N0XCI+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgTmFtZToge2Vycm9ycz8ubmFtZSA/IDxlbT5OYW1lIGlzIHJlcXVpcmVkPC9lbT4gOiBudWxsfXtcIiBcIn1cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCIgLz5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkluZGljYSwgSHlicmlkLCBvciBCb3RoPC9sZWdlbmQ+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwiaW5kaWNhXCIgZGVmYXVsdENoZWNrZWQgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIEluZGljYVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJzYXRpdmFcIiAvPiBTYXRpdmFcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwiaHlicmlkXCIgLz4gSHlicmlkXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDwvZmllbGRzZXQ+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSW1hZ2U6e1wiIFwifVxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwiaW1hZ2VcIj5cbiAgICAgICAgICAgICAgPG9wdGlvbiBoaWRkZW4+Tm9uZTwvb3B0aW9uPlxuICAgICAgICAgICAgICB7YXNzZXRzLm1hcCgoYXNzZXQpID0+IChcbiAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YXNzZXR9IHZhbHVlPXthc3NldH0+XG4gICAgICAgICAgICAgICAgICB7YXNzZXR9XG4gICAgICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbiAob3B0aW9uYWwpOjwvbGFiZWw+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIHJvd3M9ezJ9IG5hbWU9XCJkZXNjcmlwdGlvblwiIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMz5QcmljZXMgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlcyBjb2wgc3BhY2VcIj5cbiAgICAgICAgICAgIHthdmFpbGFibGVGbG93ZXJRdWFudGl0aWVzLm1hcCgocXVhbnRpdHkpID0+IChcbiAgICAgICAgICAgICAgPGxhYmVsIGtleT17cXVhbnRpdHl9PlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAge3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAge2Vycm9ycz8uW3F1YW50aXR5XSA/IDxlbT4qPC9lbT4gOiBudWxsfSA6e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAkXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBuYW1lPXtgJHtxdWFudGl0eX1gfSAvPlxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicm93IHNwYWNlIGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17dHJhbnNpdGlvbi5zdWJtaXNzaW9uID8gdHJ1ZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgICAgdHlwZT1cInJlc2V0XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUmVzZXRcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJjcmVhdGVcIj5cbiAgICAgICAgICAgICAge3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IFwiQ3JlYXRpbmcuLi5cIiA6IFwiQ3JlYXRlIEZsb3dlclwifVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsICJpbXBvcnQgeyBVcGxvYWRIYW5kbGVyQXJncyB9IGZyb20gXCJAcmVtaXgtcnVuL25vZGUvZm9ybURhdGFcIjtcbmltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7IEZvcm0sIHJlZGlyZWN0LCB1c2VUcmFuc2l0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgeyB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGFkZEFzc2V0IH0gZnJvbSBcIn4vYXNzZXRzXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IHVwbG9hZEhhbmRsZXIgPSBhc3luYyAoe1xuICAgIG5hbWUsXG4gICAgc3RyZWFtLFxuICAgIGZpbGVuYW1lLFxuICB9OiBVcGxvYWRIYW5kbGVyQXJncykgPT4ge1xuICAgIGlmIChuYW1lICE9PSBcImltYWdlXCIpIHtcbiAgICAgIHN0cmVhbS5yZXN1bWUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gR2V0IHRoZSBmaWxlIGFzIGEgYnVmZmVyXG4gICAgY29uc3QgY2h1bmtzID0gW107XG4gICAgZm9yIGF3YWl0IChjb25zdCBjaHVuayBvZiBzdHJlYW0pIHtcbiAgICAgIGNodW5rcy5wdXNoKGNodW5rKTtcbiAgICB9XG4gICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmNvbmNhdChjaHVua3MpO1xuXG4gICAgLy8gdXBsb2FkIGltYWdlIHRvIGJ1Y2tldFxuICAgIGNvbnN0IGRhdGEgPSBhZGRBc3NldChmaWxlbmFtZSwgYnVmZmVyKTtcblxuICAgIC8vIHJldHVybiBpbmZvcm1hdGlvbiBhYm91dCB1cGxvYWRlZCBmaWxlXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHsgZGF0YSB9KTtcbiAgfTtcblxuICBhd2FpdCB1bnN0YWJsZV9wYXJzZU11bHRpcGFydEZvcm1EYXRhKHJlcXVlc3QsIHVwbG9hZEhhbmRsZXIpO1xuXG4gIHJldHVybiByZWRpcmVjdChcIi9leGVjdXRpdmUvbWVkaWFcIik7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXdGbG93ZXIoKSB7XG4gIGNvbnN0IHRyYW5zaXRpb24gPSB1c2VUcmFuc2l0aW9uKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCIgZGF0YS1saWdodD1cIlwiPlxuICAgICAgICA8aDI+QWRkIEltYWdlPC9oMj5cbiAgICAgICAgPEZvcm1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiXG4gICAgICAgICAgbWV0aG9kPVwicG9zdFwiXG4gICAgICAgICAgZW5jVHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgSW1hZ2U6IDxpbnB1dCBuYW1lPVwiaW1hZ2VcIiB0eXBlPVwiZmlsZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyb3cgc3BhY2UgZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICB0eXBlPVwicmVzZXRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBSZXNldFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyB0cnVlIDogdW5kZWZpbmVkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cImNyZWF0ZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkFkZGluZy4uLlwiIDogXCJBZGQgSW1hZ2VcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHR5cGUgeyBBY3Rpb25GdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIHJlZGlyZWN0LFxuICB1c2VBY3Rpb25EYXRhLFxuICB1c2VMb2FkZXJEYXRhLFxuICB1c2VUcmFuc2l0aW9uLFxufSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGdldEFzc2V0cyB9IGZyb20gXCJ+L2Fzc2V0c1wiO1xuaW1wb3J0IHsgQ2FydCwgY3JlYXRlQ2FydCwgRmxvd2VyVHlwZSB9IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCBnZXRDYXJ0UHJpY2UsIHsgUHJpY2VFcnJvciB9IGZyb20gXCJ+L3V0aWxzL2dldFByaWNlRm9yVHdvXCI7XG5cbmludGVyZmFjZSBQb3N0RXJyb3IgZXh0ZW5kcyBQcmljZUVycm9yIHtcbiAgbmFtZT86IGJvb2xlYW47XG4gIGZsYXZvcnM/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZUNhcnRRdWFudGl0aWVzID0gW1wiMVwiLCBcIjJcIl07XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxdWVzdC5mb3JtRGF0YSgpO1xuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gIWRlc2NyaXB0aW9uRm9ybURhdGFcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGRlc2NyaXB0aW9uRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgZGlzcG9zYWJsZSA9IGZvcm1EYXRhLmdldChcImRpc3Bvc2FibGVcIik7XG4gIGNvbnN0IGZsYXZvcnMgPSBmb3JtRGF0YS5nZXQoXCJmbGF2b3JzXCIpO1xuICBjb25zdCBmbG93ZXJUeXBlID0gZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBGbG93ZXJUeXBlO1xuICBjb25zdCBpbWFnZSA9IGZvcm1EYXRhLmdldChcImltYWdlXCIpO1xuXG4gIGNvbnN0IHsgcHJpY2UsIGVycm9yczogcHJpY2VFcnJvcnMgfSA9IGdldENhcnRQcmljZShmb3JtRGF0YSk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSBwcmljZUVycm9ycyA/IHsgLi4ucHJpY2VFcnJvcnMgfSA6IHt9O1xuXG4gIGlmICghbmFtZSkge1xuICAgIGVycm9ycy5uYW1lID0gdHJ1ZTtcbiAgfVxuICBpZiAoIWZsYXZvcnMpIHtcbiAgICBlcnJvcnMuZmxhdm9ycyA9PT0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChPYmplY3Qua2V5cyhlcnJvcnMpLmxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcnM7XG4gIH1cblxuICBpbnZhcmlhbnQodHlwZW9mIG5hbWUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsYXZvcnMgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGZsb3dlclR5cGUgPT09IFwic3RyaW5nXCIpO1xuICBpbnZhcmlhbnQodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBwcmljZSAhPT0gXCJ1bmRlZmluZWRcIik7XG5cbiAgY29uc3QgY2FydDogQ2FydCA9IHtcbiAgICBjbGFzczogXCJ0aGNcIixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBkaXNwb3NhYmxlOiBCb29sZWFuKGRpc3Bvc2FibGUpLFxuICAgIGZsYXZvcnM6IGZsYXZvcnMuc3BsaXQoXCIsXCIpLm1hcCgoZmxhdm9yKSA9PiBmbGF2b3IudHJpbSgpKSxcbiAgICBzcmM6IGltYWdlID09PSBcIk5vbmVcIiA/IFwiYXNzZXRzL2JheW91LWxvZ28ucG5nXCIgOiBpbWFnZSxcbiAgICBuYW1lLFxuICAgIHByaWNlLFxuICAgIHR5cGU6IGZsb3dlclR5cGUsXG4gIH07XG5cbiAgYXdhaXQgY3JlYXRlQ2FydChjYXJ0KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld0NhcnQoKSB7XG4gIGNvbnN0IGVycm9ycyA9IHVzZUFjdGlvbkRhdGEoKTtcbiAgY29uc3QgdHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb24oKTtcbiAgY29uc3QgeyBhc3NldHMgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIiBkYXRhLWxpZ2h0PVwiXCI+XG4gICAgICAgIDxoMj5DcmVhdGUgQ2FydDwvaDI+XG4gICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImNvbCBzcGFjZS0yXCIgbWV0aG9kPVwicG9zdFwiPlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIE5hbWU6IHtlcnJvcnM/Lm5hbWUgPyA8ZW0+TmFtZSBpcyByZXF1aXJlZDwvZW0+IDogbnVsbH17XCIgXCJ9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8ZmllbGRzZXQ+XG4gICAgICAgICAgICA8bGVnZW5kIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5JbmRpY2EsIEh5YnJpZCwgb3IgQm90aDwvbGVnZW5kPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImluZGljYVwiIGRlZmF1bHRDaGVja2VkIC8+e1wiIFwifVxuICAgICAgICAgICAgICBJbmRpY2FcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwic2F0aXZhXCIgLz4gU2F0aXZhXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImh5YnJpZFwiIC8+IEh5YnJpZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxmaWVsZHNldD5cbiAgICAgICAgICAgIDxsZWdlbmQgY2xhc3NOYW1lPVwic3Itb25seVwiPkRpc3Bvc2FibGU8L2xlZ2VuZD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJkaXNwb3NhYmxlXCIgdmFsdWU9XCIxXCIgZGVmYXVsdENoZWNrZWQgLz57XCIgXCJ9XG4gICAgICAgICAgICAgIERpc3Bvc2FibGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwiZGlzcG9zYWJsZVwiIHZhbHVlPVwiXCIgLz4gTm9uLWRpc3Bvc2FibGVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9maWVsZHNldD5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBJbWFnZTp7XCIgXCJ9XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJpbWFnZVwiPlxuICAgICAgICAgICAgICA8b3B0aW9uIGhpZGRlbj5Ob25lPC9vcHRpb24+XG4gICAgICAgICAgICAgIHthc3NldHMubWFwKChhc3NldCkgPT4gKFxuICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5PXthc3NldH0gdmFsdWU9e2Fzc2V0fT5cbiAgICAgICAgICAgICAgICAgIHthc3NldH1cbiAgICAgICAgICAgICAgICA8L29wdGlvbj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uIChvcHRpb25hbCk6PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz17Mn0gbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZsYXZvcnNcIj5cbiAgICAgICAgICAgICAgRmxhdm9yczp7XCIgXCJ9XG4gICAgICAgICAgICAgIHtlcnJvcnM/Lm5hbWUgPyA8ZW0+QXQgbGVhc3QgMSBmbGF2b3IgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICBpZD1cImZsYXZvcnNcIlxuICAgICAgICAgICAgICByb3dzPXsyfVxuICAgICAgICAgICAgICBuYW1lPVwiZmxhdm9yc1wiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZmxhdm9yIDEsIGZsYXZvciAyXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxoMz5QcmljZXMgPC9oMz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByaWNlcyBjb2wgc3BhY2VcIj5cbiAgICAgICAgICAgIHthdmFpbGFibGVDYXJ0UXVhbnRpdGllcy5tYXAoKHF1YW50aXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3F1YW50aXR5fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LltxdWFudGl0eV0gPyA8ZW0+KjwvZW0+IDogbnVsbH0gOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT17YCR7cXVhbnRpdHl9YH0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdyBzcGFjZSBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkNyZWF0aW5nLi4uXCIgOiBcIkNyZWF0ZSBDYXJ0XCJ9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIExvYWRlckZ1bmN0aW9uLFxuICByZWRpcmVjdCxcbiAgdXNlQWN0aW9uRGF0YSxcbiAgdXNlTG9hZGVyRGF0YSxcbiAgdXNlVHJhbnNpdGlvbixcbn0gZnJvbSBcInJlbWl4XCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgeyBnZXRBc3NldHMgfSBmcm9tIFwifi9hc3NldHNcIjtcbmltcG9ydCB7IGNyZWF0ZVdheCwgV2F4LCBXYXhUeXBlIH0gZnJvbSBcIn4vZXhvdGljc1wiO1xuaW1wb3J0IGdldEZsb3dlclByaWNlLCB7IFByaWNlRXJyb3IgfSBmcm9tIFwifi91dGlscy9nZXRGbG93ZXJQcmljZVwiO1xuXG5pbnRlcmZhY2UgUG9zdEVycm9yIGV4dGVuZHMgUHJpY2VFcnJvciB7XG4gIG5hbWU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIGFzc2V0czogc3RyaW5nW107XG59XG5cbmNvbnN0IGF2YWlsYWJsZVdheFF1YW50aXRpZXMgPSBbXCIxXCIsIFwiMlwiLCBcIjMuNVwiLCBcIjdcIiwgXCIxNFwiLCBcIjI4XCJdO1xuXG5leHBvcnQgY29uc3QgYWN0aW9uOiBBY3Rpb25GdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBmb3JtRGF0YSA9IGF3YWl0IHJlcXVlc3QuZm9ybURhdGEoKTtcblxuICBjb25zdCBkZXNjcmlwdGlvbkZvcm1EYXRhID0gZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIik7XG5cbiAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIik7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gIWRlc2NyaXB0aW9uRm9ybURhdGFcbiAgICA/IHVuZGVmaW5lZFxuICAgIDogKGRlc2NyaXB0aW9uRm9ybURhdGEgYXMgc3RyaW5nKTtcbiAgY29uc3QgdHlwZSA9IGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgV2F4VHlwZTtcbiAgY29uc3QgaW1hZ2UgPSBmb3JtRGF0YS5nZXQoXCJpbWFnZVwiKTtcblxuICBjb25zdCB7IHByaWNlLCBlcnJvcnM6IHByaWNlRXJyb3JzIH0gPSBnZXRGbG93ZXJQcmljZShmb3JtRGF0YSk7XG5cbiAgY29uc3QgZXJyb3JzOiBQb3N0RXJyb3IgPSBwcmljZUVycm9ycyA/IHsgLi4ucHJpY2VFcnJvcnMgfSA6IHt9O1xuICBpZiAoIW5hbWUpIHtcbiAgICBlcnJvcnMubmFtZSA9IHRydWU7XG4gIH1cblxuICBpZiAoT2JqZWN0LmtleXMoZXJyb3JzKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3JzO1xuICB9XG5cbiAgaW52YXJpYW50KHR5cGVvZiBuYW1lID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiB0eXBlID09PSBcInN0cmluZ1wiKTtcbiAgaW52YXJpYW50KHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIik7XG4gIGludmFyaWFudCh0eXBlb2YgcHJpY2UgIT09IFwidW5kZWZpbmVkXCIpO1xuXG4gIGNvbnN0IHdheDogV2F4ID0ge1xuICAgIGNsYXNzOiBcInRoY1wiLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHNyYzogaW1hZ2UgPT09IFwiTm9uZVwiID8gXCJhc3NldHMvYmF5b3UtbG9nby5wbmdcIiA6IGltYWdlLFxuICAgIG5hbWUsXG4gICAgcHJpY2UsXG4gICAgdHlwZSxcbiAgfTtcblxuICBhd2FpdCBjcmVhdGVXYXgod2F4KTtcblxuICByZXR1cm4gcmVkaXJlY3QoXCIvZXhlY3V0aXZlL2V4b3RpY3NcIik7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBhc3NldHMgPSBhd2FpdCBnZXRBc3NldHMoKTtcblxuICByZXR1cm4geyBhc3NldHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld1dheCgpIHtcbiAgY29uc3QgZXJyb3JzID0gdXNlQWN0aW9uRGF0YSgpO1xuICBjb25zdCB0cmFuc2l0aW9uID0gdXNlVHJhbnNpdGlvbigpO1xuICBjb25zdCB7IGFzc2V0cyB9ID0gdXNlTG9hZGVyRGF0YTxMb2FkZXJEYXRhPigpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgICAgPGgyPkNyZWF0ZSBXYXg8L2gyPlxuICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJjb2wgc3BhY2UtMlwiIG1ldGhvZD1cInBvc3RcIj5cbiAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICBOYW1lOiB7ZXJyb3JzPy5uYW1lID8gPGVtPk5hbWUgaXMgcmVxdWlyZWQ8L2VtPiA6IG51bGx9e1wiIFwifVxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiAvPlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGZpZWxkc2V0PlxuICAgICAgICAgICAgPGxlZ2VuZCBjbGFzc05hbWU9XCJzci1vbmx5XCI+QmFkZGVyLCBDcnVtYmxlLCBvciBTaGF0dGVyPC9sZWdlbmQ+XG4gICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwiY3J1bWJsZVwiIGRlZmF1bHRDaGVja2VkIC8+e1wiIFwifVxuICAgICAgICAgICAgICBDcnVtYmxlXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGxhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cImJhZGRlclwiIC8+IEJhZGRlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJkaWFtb25kXCIgLz4gRGlhbW9uZFxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ0eXBlXCIgdmFsdWU9XCJzaGF0dGVyXCIgLz4gU2hhdHRlclxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2ZpZWxkc2V0PlxuICAgICAgICAgIDxsYWJlbD5cbiAgICAgICAgICAgIEltYWdlOntcIiBcIn1cbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cImltYWdlXCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gaGlkZGVuPk5vbmU8L29wdGlvbj5cbiAgICAgICAgICAgICAge2Fzc2V0cy5tYXAoKGFzc2V0KSA9PiAoXG4gICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2Fzc2V0fSB2YWx1ZT17YXNzZXR9PlxuICAgICAgICAgICAgICAgICAge2Fzc2V0fVxuICAgICAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb24gKG9wdGlvbmFsKTo8L2xhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPXsyfSBuYW1lPVwiZGVzY3JpcHRpb25cIiAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aDM+UHJpY2VzIDwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZXMgY29sIHNwYWNlXCI+XG4gICAgICAgICAgICB7YXZhaWxhYmxlV2F4UXVhbnRpdGllcy5tYXAoKHF1YW50aXR5KSA9PiAoXG4gICAgICAgICAgICAgIDxsYWJlbCBrZXk9e3F1YW50aXR5fT5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgIHtxdWFudGl0eX1cbiAgICAgICAgICAgICAgICAgIHtlcnJvcnM/LltxdWFudGl0eV0gPyA8ZW0+KjwvZW0+IDogbnVsbH0gOntcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgJFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgbmFtZT17YCR7cXVhbnRpdHl9YH0gLz5cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJvdyBzcGFjZSBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3RyYW5zaXRpb24uc3VibWlzc2lvbiA/IHRydWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIHR5cGU9XCJyZXNldFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFJlc2V0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiY3JlYXRlXCI+XG4gICAgICAgICAgICAgIHt0cmFuc2l0aW9uLnN1Ym1pc3Npb24gPyBcIkNyZWF0aW5nLi4uXCIgOiBcIkNyZWF0ZSBXYXhcIn1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9Gb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgTGlua3NGdW5jdGlvbiwgTG9hZGVyRnVuY3Rpb24sIE91dGxldCwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgUHJvZHVjdENhcmQgZnJvbSBcIn4vY29tcG9uZW50cy9Qcm9kdWN0Q2FyZFwiO1xuaW1wb3J0IHtcbiAgQ2FydHMsXG4gIEVkaWJsZXMsXG4gIEZsb3dlcnMsXG4gIGdldENhcnRzLFxuICBnZXRFZGlibGVzLFxuICBnZXRGbG93ZXJzLFxuICBnZXRNb29uUm9ja3MsXG4gIGdldFByZVJvbGxzLFxuICBnZXRXYXhlcyxcbiAgTW9vblJvY2tzLFxuICBQcmVSb2xscyxcbiAgV2F4ZXMsXG59IGZyb20gXCJ+L2V4b3RpY3NcIjtcbmltcG9ydCB7IGdldFByb2ZpbGUsIFByb2ZpbGUgfSBmcm9tIFwifi9wcm9maWxlXCI7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIn4vdXNlcnNcIjtcbmltcG9ydCB7IGdldFVzZXJCeVNlc3Npb24gfSBmcm9tIFwifi91dGlscy9zZXNzaW9uLnNlcnZlclwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbnR5cGUgTG9hZGVyRGF0YSA9IHtcbiAgY2FydHM6IENhcnRzO1xuICBlZGlibGVzOiBFZGlibGVzO1xuICBmbG93ZXJzOiBGbG93ZXJzO1xuICBtb29uUm9ja3M6IE1vb25Sb2NrcztcbiAgcHJlUm9sbHM6IFByZVJvbGxzO1xuICBwcm9maWxlOiBQcm9maWxlO1xuICB1c2VyOiBVc2VyIHwgbnVsbDtcbiAgd2F4ZXM6IFdheGVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvYWRlcjogTG9hZGVyRnVuY3Rpb24gPSBhc3luYyAoeyByZXF1ZXN0IH0pID0+IHtcbiAgY29uc3QgW2NhcnRzLCBlZGlibGVzLCBmbG93ZXJzLCBtb29uUm9ja3MsIHByZVJvbGxzLCBwcm9maWxlLCB1c2VyLCB3YXhlc10gPVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIGdldENhcnRzKCksXG4gICAgICBnZXRFZGlibGVzKCksXG4gICAgICBnZXRGbG93ZXJzKCksXG4gICAgICBnZXRNb29uUm9ja3MoKSxcbiAgICAgIGdldFByZVJvbGxzKCksXG4gICAgICBnZXRQcm9maWxlKCksXG4gICAgICBnZXRVc2VyQnlTZXNzaW9uKHJlcXVlc3QpLFxuICAgICAgZ2V0V2F4ZXMoKSxcbiAgICBdKTtcblxuICByZXR1cm4geyBjYXJ0cywgZWRpYmxlcywgZmxvd2VycywgbW9vblJvY2tzLCBwcmVSb2xscywgcHJvZmlsZSwgdXNlciwgd2F4ZXMgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBsaW5rczogTGlua3NGdW5jdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIFt7IHJlbDogXCJzdHlsZXNoZWV0XCIsIGhyZWY6IHN0eWxlcyB9XTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4b3RpY3MoKSB7XG4gIGNvbnN0IHsgY2FydHMsIGVkaWJsZXMsIGZsb3dlcnMsIG1vb25Sb2NrcywgcHJlUm9sbHMsIHByb2ZpbGUsIHVzZXIsIHdheGVzIH0gPVxuICAgIHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJib2R5IGZvb3Rlci1wYWRkaW5nXCI+XG4gICAgICAgIDxoMj5GbG93ZXI8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICB7Zmxvd2Vycy5jdXJyZW50Lm1hcCgoZmxvd2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIHF1YW50aXR5QWJicmV2aWF0aW9uPVwiKGcpXCJcbiAgICAgICAgICAgICAga2V5PXtgZmxvd2VyLSR7Zmxvd2VyLm5hbWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgey4uLmZsb3dlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMj5QcmUtUm9sbDwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgIHtwcmVSb2xscy5jdXJyZW50Lm1hcCgocHJlUm9sbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxQcm9kdWN0Q2FyZFxuICAgICAgICAgICAgICBhbW91bnRBYmJyZXZpYXRpb249XCJncmFtc1wiXG4gICAgICAgICAgICAgIGtleT17YHByZS1yb2xsLSR7cHJlUm9sbC5uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIHsuLi5wcmVSb2xsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPkNhcnRzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAge2NhcnRzLmN1cnJlbnQubWFwKChjYXJ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkIGtleT17YGNhcnQtJHtjYXJ0Lm5hbWV9LSR7aW5kZXh9YH0gey4uLmNhcnR9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMj5XYXhlczwvaDI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJjYXJkc1wiPlxuICAgICAgICAgIHt3YXhlcy5jdXJyZW50Lm1hcCgod2F4LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIGtleT17YHdheC0ke3dheC5uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIHF1YW50aXR5QWJicmV2aWF0aW9uPVwiKGcpXCJcbiAgICAgICAgICAgICAgey4uLndheH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxoMj5Nb29uIFJvY2tzPC9oMj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cImNhcmRzXCI+XG4gICAgICAgICAge21vb25Sb2Nrcy5jdXJyZW50Lm1hcCgobW9vblJvY2ssIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8UHJvZHVjdENhcmRcbiAgICAgICAgICAgICAga2V5PXtgbW9vbnJvY2stJHttb29uUm9jay5uYW1lfS0ke2luZGV4fWB9XG4gICAgICAgICAgICAgIHF1YW50aXR5QWJicmV2aWF0aW9uPVwiKGcpXCJcbiAgICAgICAgICAgICAgey4uLm1vb25Sb2NrfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC91bD5cbiAgICAgICAgPGgyPkVkaWJsZXM8L2gyPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY2FyZHNcIj5cbiAgICAgICAgICB7ZWRpYmxlcy5jdXJyZW50Lm1hcCgoZWRpYmxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPFByb2R1Y3RDYXJkXG4gICAgICAgICAgICAgIGFtb3VudEFiYnJldmlhdGlvbj1cIm1nXCJcbiAgICAgICAgICAgICAga2V5PXtgZWRpYmxlLSR7ZWRpYmxlLm5hbWV9LSR7aW5kZXh9YH1cbiAgICAgICAgICAgICAgey4uLmVkaWJsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgIDwvbWFpbj5cbiAgICAgIDxGb290ZXIgey4uLnByb2ZpbGV9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCAiaW1wb3J0IHsgaXNQYXN0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgeyBGQywgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSBcIn4vcHJvZmlsZVwiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIn4vdXRpbHMvZm9ybWF0RGF0ZVwiO1xuXG5pbXBvcnQgSW5zdGFncmFtQnV0dG9uIGZyb20gXCIuLi9JbnN0YWdyYW1CdXR0b25cIjtcblxuY29uc3QgRm9vdGVyOiBGQzxQcm9maWxlPiA9ICh7IGhvdXJPcGVuLCBpbnN0YWdyYW1VcmwsIGRhdGVzQ2xvc2VkIH0pID0+IHtcbiAgY29uc3QgdXBkYXRlZERhdGVzQ2xvc2VkID0gdXNlTWVtbygoKSA9PiB7XG4gICAgcmV0dXJuIGRhdGVzQ2xvc2VkLmZpbHRlcigoWywgZGF0ZTJdKSA9PiAhaXNQYXN0KG5ldyBEYXRlKGRhdGUyKSkpO1xuICB9LCBbZGF0ZXNDbG9zZWRdKTtcblxuICByZXR1cm4gKFxuICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyIHJvdyBzcGFjZUJldHdlZW4gYWxpZ25DZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uIHNwYWNlXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1yLTQgcm93IHdyYXBcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+SG91cnM6PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPntob3VyT3Blbn06MDAgQU0gLSBUQkQ8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAge3VwZGF0ZWREYXRlc0Nsb3NlZC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgPGgyPlJlbWluZGVyPC9oMj5cbiAgICAgICAgICAgIHt1cGRhdGVkRGF0ZXNDbG9zZWQubWFwKChbY2xvc2UsIG9wZW5dLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICBrZXk9e2BjbG9zZS1kYXRlLSR7Y2xvc2V9LSR7b3Blbn0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHJvdyB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+Q2xvc2U6PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e2Zvcm1hdERhdGUobmV3IERhdGUoY2xvc2UpKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHJvdyB3cmFwXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci00XCI+UmVvcGVuOjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPntmb3JtYXREYXRlKG5ldyBEYXRlKG9wZW4pKX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW4gc3BhY2VcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2VudGVyLXRleHQgZGVza3RvcC1vbmx5XCI+XG4gICAgICAgICAgRm9sbG93IHVzIGZvciBtb3JlIHVwZGF0ZXNcbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8SW5zdGFncmFtQnV0dG9uIGluc3RhZ3JhbVVybD17aW5zdGFncmFtVXJsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9mb290ZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGdldFByb2ZpbGUgfSBmcm9tIFwifi9wcm9maWxlXCI7XG5cbmltcG9ydCBpbnN0YUxvZ28gZnJvbSBcIi4uLy4uLy4uL3B1YmxpYy9pbnN0YWdyYW1faWNvbi5wbmdcIjtcblxuaW50ZXJmYWNlIEluc3RhZ3JhbUJ1dHRvblByb3BzIHtcbiAgaW5zdGFncmFtVXJsOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkZXI6IExvYWRlckZ1bmN0aW9uID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB7IGluc3RhZ3JhbVVybCB9ID0gYXdhaXQgZ2V0UHJvZmlsZSgpO1xuXG4gIHJldHVybiB7IGluc3RhZ3JhbVVybCB9O1xufTtcblxuY29uc3QgSW5zdGFncmFtQnV0dG9uOiBGQzxJbnN0YWdyYW1CdXR0b25Qcm9wcz4gPSAoeyBpbnN0YWdyYW1VcmwgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiIGhyZWY9e2luc3RhZ3JhbVVybH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgYWxpZ25DZW50ZXIgc3BhY2VcIj5cbiAgICAgICAgPGltZyBzcmM9e2luc3RhTG9nb30gYWx0PVwiaW5zdGFncmFtIGxvZ29cIiBjbGFzc05hbWU9XCJpbnN0YS1sb2dvXCIgLz57XCIgXCJ9XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICByb2xlPVwiaW1hZ2VcIlxuICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxuICAgICAgICAgIHdpZHRoPVwiMTAwXCJcbiAgICAgICAgICB2aWV3Qm94PVwiLTI0IC0yNCA4NjAgMzAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBmaWxsPVwiIzI2MjYyNlwiXG4gICAgICAgICAgICBkPVwibSA2NC43NjAyMzksNDkuMTA3OTQ4IGMgLTE2LjIxMDMsNi43ODU0IC0zNC4wMzA4MDEsMjUuOTU1IC0zOS42NTkxMDEsNTAuMDE2OTk2IC03LjEyNzgsMzAuNDg3NDk2IDIyLjUzNDMwMSw0My4zNzk2OTYgMjQuOTY3MjAxLDM5LjE1MjQ5NiAyLjg2MzUsLTQuOTY3IC01LjMxNTEsLTYuNjQ2NyAtNi45OTg2LC0yMi40NjUgLTIuMTc1OCwtMjAuNDMwNjkyIDcuMzIyNCwtNDMuMjU5NjkyIDE5LjI3NjIsLTUzLjI3NjM5MiAyLjIyMiwtMS44NjEgMi4xMTYzLDAuNzI5MiAyLjExNjMsNS41MjAzIDAsOC41Njc2IC0wLjQ3MzQsODUuNDc5NTAyIC0wLjQ3MzQsMTAxLjUzMTEwMiAwLDIxLjcxOTggLTAuODk3MSwyOC41Nzg1IC0yLjUwODMsMzUuMzU1OCAtMS42MzI1LDYuODY4MSAtNC4yNTcsMTEuNTA4OCAtMi4yNjgzLDEzLjI5NjQgMi4yMjE5LDEuOTk5NiAxMS43MDg2LC0yLjc1NjcgMTcuMjAwNiwtMTAuNDIxOCA2LjU4NTcsLTkuMTkzMSA4Ljg5MSwtMjAuMjMzNSA5LjMwNDksLTMyLjIyMzIgMC40OTk5LC0xNC40NTMyIDAuNDc4NiwtMzcuMzg3NDEgMC40OTk5LC01MC40Njg5MSAwLjAyLC0xMS45OTc3IDAuMjAyMSwtNDcuMTI5NTkyIC0wLjIxMDMsLTY4LjI0OTU5MiAtMC4xMDExLC01LjE4MDMgLTE0LjQ2NzksLTEwLjYxNTIgLTIxLjI0NzksLTcuNzc0NSBNIDY0MC4zODY3MiwxNTAuNzU1MDUgYyAtMC41MjI2LDExLjI5MTYgLTMuMDIyMSwyMC4xMTc1IC02LjEyNDIsMjYuMzQyOSAtNi4wMDU1LDEyLjA1MiAtMTguNDY3MSwxNS43OTQzIC0yMy43NTgxLC0xLjUzMDkgLTIuODgzNCwtOS40NDQgLTMuMDE4MSwtMjUuMjE2NCAtMC45NDUxLC0zOC4zOTUyMSAyLjExMDIsLTEzLjQyNTUgOC4wMDI0LC0yMy41NjQ4IDE3Ljc1OTIsLTIyLjY1MDQgOS42MjM1LDAuOTAzOSAxNC4xMjgsMTMuMzA0MiAxMy4wNjgyLDM2LjIzMzExIHogbSAtMTYyLjIzNTQ4LDcwLjA1NTkgYyAtMC4xMzA2LDE4Ljc2MTcgLTMuMDgzNCwzNS4yMTE4IC05LjQxNTUsMzkuOTg5NiAtOC45ODA5LDYuNzc0NyAtMjEuMDUxOSwxLjY5MjkgLTE4LjU1MjQsLTExLjk5NzcgMi4yMTE2LC0xMi4xMTQ5IDEyLjY3MDksLTI0LjQ4NzMgMjcuOTkzMywtMzkuNjA0NCAwLDAgMC4wMzIsMy40NDc0IC0wLjAyNSwxMS42MTI1IHogbSAtMi40NTI4LC03MC4xNjUyIGMgLTAuNTQ5MiwxMC4yODQ0IC0zLjIxNTQsMjAuNjE2IC02LjEyNDIsMjYuNDUzNiAtNi4wMDQyLDEyLjA1MTkgLTE4LjU1NjQsMTUuODE5NiAtMjMuNzU4MSwtMS41MzA5IC0zLjU1NjYsLTExLjg1NDYgLTIuNzA0OCwtMjcuMTk3NSAtMC45NDUxLC0zNi44NjQ5MSAyLjI4MzUsLTEyLjU0MyA3LjgxODUsLTI0LjE3OTQgMTcuNzU5MiwtMjQuMTc5NCA5LjY2NDgsMCAxNC40MzA2LDEwLjYwMzMgMTMuMDY4MiwzNi4xMjI0MSB6IG0gLTkzLjk4MzMsLTAuMTU3MyBjIC0wLjU4OTIsMTAuODkyMiAtMi43MTQxLDE5Ljk5NzUgLTYuMTI0MSwyNi42MTA5IC02LjE2OTUsMTEuOTY5IC0xOC4zNzUxLDE1Ljc2NDkgLTIzLjc1ODEsLTEuNTMwOSAtMy44ODA2LC0xMi40NzE2IC0yLjU1OTUsLTI5LjQ3NzAxIC0wLjk0NTIsLTM4LjY2MzMxIDIuMzk1NiwtMTMuNjMyIDguMzk0NCwtMjMuMjk2OCAxNy43NTkzLC0yMi4zODEgOS42MTk1LDAuOTM5OCAxNC4yOTU5LDEzLjMwMjggMTMuMDY4MSwzNS45NjUxMSB6IG0gNDMwLjcwMzc4LDEyLjcyMjYgYyAtMi4zNTE2LDAgLTMuNDI0NywyLjQyMzkgLTQuMzEyNSw2LjUwNCAtMy4wNzk0LDE0LjE4NjYgLTYuMzE2MSwxNy4zODk5IC0xMC40OSwxNy4zODk5IC00LjY2MzEsMCAtOC44NTMsLTcuMDI0NiAtOS45MzAxLC0yMS4wODY2IC0wLjg0NjUsLTExLjA1NzIgLTAuNzEwNSwtMzEuNDEzOTEgMC4zNzIsLTUxLjY2MzQxIDAuMjIxMiwtNC4xNjA1IC0wLjkyNjUsLTguMjc3IC0xMi4wODU3LC0xMi4zMzA5IC00LjgwMTgsLTEuNzQzNyAtMTEuNzgxOCwtNC4zMTExOTYgLTE1LjI1NzEsNC4wNzc5IC05LjgxOTQsMjMuNzAwNyAtMTMuNjYxNCw0Mi41MTcxMSAtMTQuNTY1Miw1MC4xNjEwMSAtMC4wNDcsMC4zOTU2IC0wLjUzMTksMC40NzY0IC0wLjYxNzIsLTAuNDQ3OSAtMC41NzU5LC02LjEyMjIgLTEuODYzNiwtMTcuMjQ3NDEgLTIuMDIzNiwtNDAuNjIxNTEgLTAuMDMxLC00LjU2MDUgLTAuOTk3MSwtOC40NDI0IC02LjAzMDgsLTExLjYyMDUgLTMuMjY2MSwtMi4wNjIyIC0xMy4xODQyLC01LjcwOTQ5NiAtMTYuNzU1NSwtMS4zNzA0IC0zLjA5NDEsMy41NDg3IC02LjY3NzQsMTMuMDk4OCAtMTAuNDAwNywyNC40MTkzIC0zLjAyNiw5LjIwMDkgLTUuMTMzNiwxNS40MjUxIC01LjEzMzYsMTUuNDI1MSAwLDAgMC4wNCwtMjQuODI1OSAwLjA3NiwtMzQuMjQyOCAwLjAxNiwtMy41NTI2IC0yLjQyMDksLTQuNzM2NCAtMy4xNTU0LC00Ljk1MSAtMy4zMDc0LC0wLjk1OTkgLTkuODIzNSwtMi41NjM1IC0xMi41ODk2LC0yLjU2MzUgLTMuNDEyNywwIC00LjI0ODUsMS45MDc2IC00LjI0ODUsNC42ODcxIDAsMC4zNjM5IC0wLjUzODYsMzIuNjg1NyAtMC41Mzg2LDU1LjI4NjYxIDAsMC45ODE3IDAsMi4wNTI4IDAuMDEsMy4xOTA2IC0xLjg4NzYsMTAuMzg3NiAtOC4wMDkxLDI0LjQ4ODYgLTE0LjY2NjUsMjQuNDg4NiAtNi42NjU0LDAgLTkuODEwMSwtNS44OTUyIC05LjgxMDEsLTMyLjgzOSAwLC0xNS43MTgzMSAwLjQ3MTksLTIyLjU1MzAxIDAuNzAzOSwtMzMuOTIxNDEgMC4xMzQ2LC02LjU0ODEgMC4zOTQ2LC0xMS41NzY1IDAuMzc5OSwtMTIuNzE3NiAtMC4wNDksLTMuNDk5MyAtNi4xMDAxLC01LjI2MyAtOC45MTU2LC01LjkxNDggLTIuODI4OCwtMC42NTczIC01LjI4NywtMC45MTE5IC03LjIwNjYsLTAuODAyNiAtMi43MTY4LDAuMTUzMyAtNC42MzkxLDEuOTM1NyAtNC42MzkxLDQuMzg3MiAwLDEuMzE0NCAwLjAxNSwzLjgxMzkgMC4wMTUsMy44MTM5IC0zLjQ5OTMsLTUuNDk4OSAtOS4xMjc1LC05LjMyNjIgLTEyLjg3MjIsLTEwLjQzNTI5NiAtMTAuMDg2LC0yLjk5NTM5NiAtMjAuNjEwNywtMC4zNDEzIC0yOC41NDkxLDEwLjc2NzI5NiAtNi4zMDk1LDguODI2MyAtMTAuMTEyNjgsMTguODIzIC0xMS42MDk3OCwzMy4xODU2IC0xLjA5NDQsMTAuNTAwMTEgLTAuNzM3MiwyMS4xNDc5MSAxLjIwNzgsMzAuMTUyODEgLTIuMzUwMiwxMC4xNjEgLTYuNzEzNCwxNC4zMjM5IC0xMS40OTExLDE0LjMyMzkgLTYuOTM2LDAgLTExLjk2NDQsLTExLjMyMTIgLTExLjM4MDUsLTMwLjkwMDcgMC4zODUyLC0xMi44NzgyMSAyLjk2MjEsLTIxLjkxNTgxIDUuNzc4OSwtMzQuOTkwNjEgMS4yMDExLC01LjU3MzYgMC4yMjUzLC04LjQ5MTcgLTIuMjIyMywtMTEuMjg4NSAtMi4yNDQ5LC0yLjU2NDggLTcuMDI3OSwtMy44NzUyIC0xMy45MDQsLTIuMjYzNSAtNC44OTc3LDEuMTQ5MSAtMTEuOTAwMywyLjM4NDggLTE4LjMwNzEsMy4zMzQgMCwwIDAuMzg2NiwtMS41NDI0IDAuNzAzOSwtNC4yNjE4IDEuNjY2MywtMTQuMjYxMjkyIC0xMy44MzA3LC0xMy4xMDQxOTIgLTE4Ljc3NTEsLTguNTQ5MDk2IC0yLjk1MTQsMi43MTk0OTYgLTQuOTYwNCw1LjkyNjg5NiAtNS43MjI5LDExLjY5Mzc5NiAtMS4yMDkxLDkuMTUxNiA2LjI1NDgsMTMuNDY4MSA2LjI1NDgsMTMuNDY4MSAtMi40NDg5LDExLjIwOTggLTguNDUxNywyNS44NTM2MSAtMTQuNjQ5MiwzNi40NDA5MSAtMy4zMTkzLDUuNjcyNCAtNS44NTg4LDkuODc1NyAtOS4xMzY5LDE0LjM0MzkgLTAuMDEyLC0xLjY2MzggLTAuMDIxLC0zLjMyNzQgLTAuMDI3LC00Ljk4MzQgLTAuMDc1LC0yMy41Njc1MSAwLjIzODYsLTQyLjExNTkxIDAuMzc3MiwtNDguODAxMzEgMC4xMzQ3LC02LjU0OCAwLjM5NzMsLTExLjQ0MzEgMC4zODI2LC0xMi41ODQyIC0wLjAzNywtMi41NTk1IC0xLjUzMTcsLTMuNTI2IC00LjY0MDQsLTQuNzQ5OCAtMi43NDg4LC0xLjA4MjQgLTUuOTk4OSwtMS44MzE2IC05LjM3MDIsLTIuMDkyOSAtNC4yNTUyLC0wLjMzMTkgLTYuODE4NywxLjkyNSAtNi43NTIxLDQuNTkzOCAwLjAxMywwLjUwMzkgMC4wMTMsMy41OTggMC4wMTMsMy41OTggLTMuNDk5NCwtNS40OTkgLTkuMTI3NiwtOS4zMjYyIC0xMi44NzIyLC0xMC40MzUzOTYgLTEwLjA4NjEsLTIuOTk0MDk2IC0yMC42MTA3LC0wLjMzOTkgLTI4LjU0OTIsMTAuNzY3Mjk2IC02LjMwODEsOC44MjYzIC0xMC40MzkzLDIxLjIxMTkgLTExLjYwOTgsMzMuMDc2MyAtMS4wOTA0LDExLjA1NzcxIC0wLjg4OTEsMjAuNDU0NzEgMC41OTczLDI4LjM3MDUxIC0xLjYwMzcsNy45MjY2IC02LjIxNDgsMTYuMjE1NiAtMTEuNDI4NSwxNi4yMTU2IC02LjY2NTQsMCAtMTAuNDU4LC01Ljg5NTMgLTEwLjQ1OCwtMzIuODM5IDAsLTE1LjcxODMxIDAuNDcxOSwtMjIuNTUzMDEgMC43MDM5LC0zMy45MjAyMSAwLjEzNDYsLTYuNTQ4IDAuMzk0NiwtMTEuNTc3NyAwLjM3OTksLTEyLjcxNzUgLTAuMDQ5LC0zLjQ5OTMgLTYuMTAwMiwtNS4yNjMgLTguOTE1NiwtNS45MTYyIC0yLjk0NjEsLTAuNjgxMiAtNS40ODk2LC0wLjkzMTggLTcuNDQyNiwtMC43ODc5IC0yLjU3NjgsMC4xOTIgLTQuMzg4NSwyLjQ5OTYgLTQuMzg4NSw0LjIyMDYgbCAwLDMuOTY1OSBjIC0zLjQ5OTMsLTUuNDk5IC05LjEyNzUsLTkuMzI2MiAtMTIuODcyMiwtMTAuNDM1Mzk2IC0xMC4wODYsLTIuOTk0MDk2IC0yMC41NTIsLTAuMjk3MiAtMjguNTQ5MSwxMC43NjcyOTYgLTUuMjE1LDcuMjE0NiAtOS40MzY5LDE1LjIxMzEgLTExLjYwOTgsMzIuOTE5IC0wLjYyNzksNS4xMTY3MSAtMC45MDUyLDkuOTA4MTEgLTAuODY5MiwxNC4zODY2MSAtMi4wNzk2LDEyLjcxNzkgLTExLjI2NDUsMjcuMzc2IC0xOC43Nzc3LDI3LjM3NiAtNC4zOTY1LDAgLTguNTgzNywtOC41Mjc1IC04LjU4MzcsLTI2LjcwMTUgMCwtMjQuMjA4NzEgMS40OTg0LC01OC42NzY3MDYgMS43NTE3LC02MS45OTg3MDIgMCwwIDkuNDkyOCwtMC4xNjEzIDExLjMzMTIsLTAuMTgyNyA0LjczNSwtMC4wNTIgOS4wMjM2LDAuMDYgMTUuMzMwMywtMC4yNjI2IDMuMTYzNCwtMC4xNjEzIDYuMjEwOCwtMTEuNTEzOCAyLjk0NjEsLTEyLjkxODggLTEuNDc5NywtMC42MzU5IC0xMS45Mzc3LC0xLjE5MzEgLTE2LjA4MzUsLTEuMjgxMSAtMy40ODYsLTAuMDc5IC0xMy4xOTA4LC0wLjc5NzIgLTEzLjE5MDgsLTAuNzk3MiAwLDAgMC44NzA1LC0yMi44NzgzIDEuMDczMSwtMjUuMjk1MSAwLjE3MiwtMi4wMTQzIC0yLjQzNDIsLTMuMDUxNCAtMy45Mjg2LC0zLjY4MDcgLTMuNjMzOSwtMS41MzcgLTYuODg1MywtMi4yNzI5IC0xMC43MzkyLC0zLjA2NzQgLTUuMzI0NCwtMS4wOTg0IC03LjczOTksLTAuMDI0IC04LjIxMTgsNC40Njk4IC0wLjcxMDUsNi44MjAxIC0xLjA3ODUsMjYuNzk2MiAtMS4wNzg1LDI2Ljc5NjIgLTMuOTA3MiwwIC0xNy4yNTQsLTAuNzYzOCAtMjEuMTYyNSwtMC43NjM4IC0zLjYzMTMsMCAtNy41NTA2LDE1LjYxNyAtMi41MzAyLDE1LjgwODkgNS43NzYyLDAuMjI0IDE1Ljg0MjMsMC40MTczIDIyLjUxNTYsMC42MTg2IDAsMCAtMC4yOTcyLDM1LjAzNTg5MiAtMC4yOTcyLDQ1Ljg1MjQ5MiAwLDEuMTUwOCAwLjAxLDIuMjU5IDAuMDEyLDMuMzM0MyAtMy42NzI3LDE5LjE0MzAxIC0xNi42MDg4LDI5LjQ4MzYxIC0xNi42MDg4LDI5LjQ4MzYxIDIuNzc4MSwtMTIuNjY0MiAtMi44OTY4LC0yMi4xNzQ0IC0xMy4xMTg4LC0zMC4yMjQ4MSAtMy43NjYsLTIuOTY2NiAtMTEuMjAwNiwtOC41ODI4IC0xOS41MTksLTE0LjczNzIgMCwwIDQuODE3OCwtNC43NDg0IDkuMDkwMywtMTQuMzAxMiAzLjAyNzQsLTYuNzY2NyAzLjE1ODEsLTE0LjUxMDYgLTQuMjcyNSwtMTYuMjE4MTk2IC0xMi4yNzc3LC0yLjgyMzQ5NiAtMjIuNDAxLDYuMTkzMzk2IC0yNS40MjA1LDE1LjgxOTU5NiAtMi4zMzk1LDcuNDU3MiAtMS4wOTE3LDEyLjk5MDggMy40OTE0LDE4LjczOSAwLjMzNDYsMC40MiAwLjY5NzIsMC44NDkyIDEuMDcxOCwxLjI4MTEgLTIuNzcxNSw1LjM0MTkgLTYuNTc4OCwxMi41MzM5IC05LjgwMzUsMTguMTExMjEgLTguOTUwMywxNS40ODUgLTE1LjcxMTYsMjcuNzMzMyAtMjAuODIxMywyNy43MzMzIC00LjA4NDYsMCAtNC4wMjk5LC0xMi40MzUyIC00LjAyOTksLTI0LjA3OCAwLC0xMC4wMzcxMSAwLjc0MTIsLTI1LjEyNzIxIDEuMzMzMSwtNDAuNzUwODEgMC4xOTU5LC01LjE2NyAtMi4zODc2LC04LjExMDUgLTYuNzE4NywtMTAuNzc2NiAtMi42MzE1LC0xLjYxOTcgLTguMjQ3OCwtNC44MDQ0IC0xMS41MDA1LC00LjgwNDQgLTQuODY4NiwwIC0xOC45MTUsMC42NjI1IC0zMi4xODcxLDM5LjA1MzggLTEuNjcyNiw0LjgzODkgLTQuOTU4NSwxMy42NTYwMSAtNC45NTg1LDEzLjY1NjAxIGwgMC4yODI4LC00Ni4xNjcxMSBjIDAsLTEuMDgyNCAtMC41NzY1LC0yLjEyODkgLTEuODk2NSwtMi44NDQ4IC0yLjIzNjUsLTEuMjE0NCAtOC4yMDk5LC0zLjY5NzkgLTEzLjUyMTQsLTMuNjk3OSAtMi41MzA3LDAgLTMuNzkzNiwxLjE3NzEgLTMuNzkzNiwzLjUyMzMgbCAtMC40NjMzLDcyLjIyODgxIGMgMCw1LjQ4OCAwLjE0MzEsMTEuODkwMyAwLjY4NTcsMTQuNjkwNSAwLjU0MDYsMi44MDM3IDEuNDE2NCw1LjA4NDUgMi41MDExLDYuNDQxNSAxLjA4MzEsMS4zNTQ0IDIuMzM2LDIuMzg3NiA0LjQwMTcsMi44MTQgMS45MjI2LDAuMzk1OCAxMi40NTAzLDEuNzQ3NyAxMi45OTc1LC0yLjI3NTUgMC42NTU2LC00LjgyMTUgMC42ODA3LC0xMC4wMzY2IDYuMjA4OCwtMjkuNDg2NCA4LjYwNjEsLTMwLjI4MDgxIDE5LjgyNjksLTQ1LjA1NTMxIDI1LjEwMTgsLTUwLjMwMjMxIDAuOTIyMywtMC45MTcxIDEuOTc1NCwtMC45NzE4IDEuOTI0NywwLjUyOTIgLTAuMjI1Miw2LjYzODggLTEuMDE3MSwyMy4yMjc2IC0xLjU1MDIsMzcuMzIwOTEgLTEuNDI4OSwzNy43MTU0IDUuNDMyMiw0NC43MDYgMTUuMjM3MSw0NC43MDYgNy41MDEyLDAgMTguMDc1MiwtNy40NTMzIDI5LjQxMDMsLTI2LjMyMDIgNy4wNjY3LC0xMS43NTc2IDEzLjkyOCwtMjMuMjg2MiAxOC44NTc3LC0zMS41OTUzMSAzLjQzNTQsMy4xODAyIDcuMjkwNiw2LjYwMzAxIDExLjE0MzIsMTAuMjU5NTEgOC45NTI5LDguNDk3MyAxMS44OTI0LDE2LjU3MTUgOS45NDIxLDI0LjIzMTMgLTEuNDkxNyw1Ljg1NTcgLTcuMTA5MywxMS44OTA0IC0xNy4xMDc0LDYuMDI0OSAtMi45MTQxLC0xLjcxMTIgLTQuMTU3OSwtMy4wMzMzIC03LjA4OCwtNC45NjI1IC0xLjU3NDMsLTEuMDM2NCAtMy45Nzc5LC0xLjM0NjIgLTUuNDE4OSwtMC4yNjA1IC0zLjc0MzMsMi44MjI0IC01Ljg4NDIsNi40MTIzIC03LjEwNjYsMTAuODU2OCAtMS4xODkxLDQuMzI0NyAzLjE0Miw2LjYxMDggNy42MzE4LDguNjEwNCAzLjg2NTksMS43MjEgMTIuMTc1LDMuMjgwNSAxNy40NzQsMy40NTgxIDIwLjY0NjcsMC42OTA1IDM3LjE4NjIsLTkuOTY4OSA0OC42OTk5LC0zNy40NjQ4IDIuMDYxLDIzLjc0NjEgMTAuODMyNiwzNy4xODM1IDI2LjA3MjQsMzcuMTgzNSAxMC4xODg3LDAgMjAuNDA0LC0xMy4xNjk4IDI0Ljg3MTIsLTI2LjEyNTYgMS4yODI0LDUuMjgxMiAzLjE4MDcsOS44NzM3IDUuNjMyMiwxMy43NTczIDExLjc0MzEsMTguNjA1OCAzNC41MjQsMTQuNjAxMiA0NS45NjcyLC0xLjE5ODEgMy41MzgsLTQuODgxOSA0LjA3NjUsLTYuNjM2MiA0LjA3NjUsLTYuNjM2MiAxLjY2OSwxNC45MTg0IDEzLjY4MjcsMjAuMTMwOCAyMC41NjE0LDIwLjEzMDggNy43MDM5LDAgMTUuNjU4MywtMy42NDIgMjEuMjMzMiwtMTYuMTkyOSAwLjY1MzMsMS4zNjIxIDEuMzY2NCwyLjY2MjkgMi4xNDUsMy44OTYgMTEuNzQzLDE4LjYwNTggMzQuNTI0LDE0LjYwMTIgNDUuOTY3MSwtMS4xOTgxIDAuNTM5OSwtMC43NDExIDEuMDA3OCwtMS40MTM0IDEuNDE3MSwtMi4wMTY4IGwgMC4zMzU5LDkuNzk5MSBjIDAsMCAtNi41MjgxLDUuOTg4NSAtMTAuNTM1Myw5LjY2MjIgLTE3LjYzNjYsMTYuMTgwOSAtMzEuMDQ3MywyOC40NTcyIC0zMi4wMzM4LDQyLjc1MzEgLTEuMjY2NCwxOC4yMjg1IDEzLjUxNzQsMjUuMDAzMiAyNC43MDE5LDI1Ljg5MSAxMS44Nzc3LDAuOTQyNiAyMi4wNDkxLC01LjYxODcgMjguMzAxMiwtMTQuODAxMiA1LjQ5ODksLTguMDgyMyA5LjA5ODMsLTI1LjQ3NzcgOC44MzQzLC00Mi42NTg0IC0wLjEwNTMsLTYuODc5OSAtMC4yNzg2LC0xNS42Mjc3IC0wLjQxNDYsLTI1LjAwNDUgNi4xOTg4LC03LjE5ODYgMTMuMTgyOCwtMTYuMjk2OSAxOS42MTM2LC0yNi45NDY4IDcuMDA4LC0xMS42MDYxIDE0LjUxODUsLTI3LjE5MjExIDE4LjM2NDQsLTM5LjMyMTgxIDAsMCA2LjUyNTUsMC4wNTYgMTMuNDg5NCwtMC4zOTk5IDIuMjI3NiwtMC4xNDUzIDIuODY3NSwwLjMwOTIgMi40NTU2LDEuOTQyMyAtMC40OTczLDEuOTcyOSAtOC43OTgzLDMzLjk5MDgxIC0xLjIyMjUsNTUuMzIwMDEgNS4xODU3LDE0LjYwMTIgMTYuODc1NSwxOS4yOTg5IDIzLjgwNjEsMTkuMjk4OSA4LjExMzEsMCAxNS44NzQzLC02LjEyNjkgMjAuMDMzNDgsLTE1LjIyNSAwLjUwMTIsMS4wMTQzIDEuMDI1MSwxLjk5NTggMS41OTcsMi45MDE5IDExLjc0MzEsMTguNjA1OCAzNC40NDQxLDE0LjU3NzIgNDUuOTY3MiwtMS4xOTgxIDIuNjAwOCwtMy41NTkyIDQuMDc2NSwtNi42MzYyIDQuMDc2NSwtNi42MzYyIDIuNDcyOSwxNS40Mzk3IDE0LjQ3OTksMjAuMjA5NCAyMS4zNTcyLDIwLjIwOTQgNy4xNjQsMCAxMy45NjI3LC0yLjkzNjkgMTkuNDc5LC0xNS45ODg5IDAuMjMwNiw1Ljc0NjggMC41OTMyLDEwLjQ0NTkgMS4xNjY0LDExLjkyNzQgMC4zNDkzLDAuOTA2IDIuMzg0OSwyLjA0MzQgMy44NjU5LDIuNTkyNyA2LjU1MzQsMi40MzAyIDEzLjIzNzUsMS4yODEgMTUuNzEwMywwLjc4MTEgMS43MTMsLTAuMzQ2NyAzLjA0ODgsLTEuNzIxIDMuMjMxNCwtNS4yNjk4IDAuNDc5OSwtOS4zMTgxIDAuMTg1MywtMjQuOTczOSAzLjAxMDEsLTM2LjYwOSA0Ljc0MTgsLTE5LjUyNjkxIDkuMTY0OSwtMjcuMTAxNDEgMTEuMjYzMiwtMzAuODUxMzEgMS4xNzQ0LC0yLjEwMSAyLjQ5OTUsLTIuNDQ3NiAyLjU0NzUsLTAuMjI0IDAuMDk5LDQuNDk5MSAwLjMyMjYsMTcuNzExMyAyLjE1OTYsMzUuNDYyNTEgMS4zNDksMTMuMDU1NCAzLjE1MTQsMjAuNzcyIDQuNTM2NCwyMy4yMTQyIDMuOTUyNiw2Ljk4NCA4LjgzNDMsNy4zMTQ3IDEyLjgwOTYsNy4zMTQ3IDIuNTI4OCwwIDcuODE3MSwtMC42OTg4IDcuMzQzOSwtNS4xNDMyIC0wLjIzMDYsLTIuMTY2MyAwLjE3MzMsLTE1LjU1NDQgNC44NDg0LC0zNC43OTIgMy4wNTI3LC0xMi41NjI4MSA4LjE0MjQsLTIzLjkxNDExIDkuOTc4MSwtMjguMDYzOTEgMC42NzcyLC0xLjUzMDQgMC45OTE4LC0wLjMyNCAwLjk4MTEsLTAuMDg5IC0wLjM4NjYsOC42NTE3IC0xLjI1NDQsMzYuOTUwMzEgMi4yNzAyLDUyLjQyNzMxIDQuNzc3OCwyMC45NjY2IDE4LjU5OTEsMjMuMzEyOCAyMy40MTU1LDIzLjMxMjggMTAuMjgyLDAgMTguNjkxMSwtNy44MjE0IDIxLjUyMzksLTI4LjQwMTIgMC42ODI1LC00Ljk1MjYgLTAuMzI4LC04Ljc3NjggLTMuMzU1NCwtOC43NzY4XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L2E+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnN0YWdyYW1CdXR0b247XG4iLCAiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgUHJpY2UgfSBmcm9tIFwifi9leG90aWNzXCI7XG5pbXBvcnQgZ2V0QXNzZXRVcmwgZnJvbSBcIn4vdXRpbHMvZ2V0QXNzZXRVcmxcIjtcblxuaW1wb3J0IEZsYXZvcnMgZnJvbSBcIi4vRmxhdm9yc1wiO1xuaW1wb3J0IFByZVJvbGxEZXNjcmlwdGlvbiBmcm9tIFwiLi9QcmVSb2xsRGVzY3JpcHRpb25cIjtcbmltcG9ydCBQcmljZXMgZnJvbSBcIi4vUHJpY2VzXCI7XG5cbmludGVyZmFjZSBQcm9kdWN0Q2FyZFByb3BzIHtcbiAgYW1vdW50QWJicmV2aWF0aW9uPzogc3RyaW5nO1xuICBhbW91bnQ/OiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICBkaXNwb3NhYmxlPzogYm9vbGVhbjtcbiAgZmxhdm9ycz86IHN0cmluZ1tdO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlOiBQcmljZTtcbiAgcXVhbnRpdHlBYmJyZXZpYXRpb24/OiBzdHJpbmc7XG4gIHNyYz86IHN0cmluZztcbiAgc3VwcGxpZXI/OiBzdHJpbmc7XG4gIHN1cHBsaWVyVXJsPzogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG4gIHdyYXA/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFByb2R1Y3RDYXJkOiBGQzxQcm9kdWN0Q2FyZFByb3BzPiA9ICh7XG4gIGFtb3VudEFiYnJldmlhdGlvbixcbiAgYW1vdW50LFxuICBkZXNjcmlwdGlvbixcbiAgZGlzcG9zYWJsZSxcbiAgZmxhdm9ycyA9IFtdLFxuICBuYW1lLFxuICBwcmljZSxcbiAgcXVhbnRpdHlBYmJyZXZpYXRpb24sXG4gIHNyYyxcbiAgc3VwcGxpZXIsXG4gIHN1cHBsaWVyVXJsLFxuICB0eXBlLFxuICB3cmFwLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNvbHVtbiBjYXJkIHRvcFBhZFwiIGRhdGEtbGlnaHQ9XCJcIj5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwic2lkZU1hcmdpblwiPlxuICAgICAgICA8aDM+e25hbWV9PC9oMz5cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm93IGNvbHVtbiBzaWRlTWFyZ2luIGJvdHRvbVBhZFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyb3cgc3BhY2VCZXR3ZWVuIGFsaWduQ2VudGVyXCI+XG4gICAgICAgICAgPHNwYW4+e3R5cGV9PC9zcGFuPlxuICAgICAgICAgIHtkaXNwb3NhYmxlICE9PSB1bmRlZmluZWQgPyAoXG4gICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAge2Rpc3Bvc2FibGUgPyA8c3Bhbj4mIzk5ODk7PC9zcGFuPiA6IDxzcGFuPiYjMTAwNjA7PC9zcGFuPn17XCIgXCJ9XG4gICAgICAgICAgICAgIERpc3Bvc2FibGVcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICB7c3JjID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZEltYWdlV3JhcFwiPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkSW1hZ2VcIlxuICAgICAgICAgICAgICBhbHQ9e2Ake25hbWV9LWltYWdlYH1cbiAgICAgICAgICAgICAgc3JjPXtnZXRBc3NldFVybChzcmMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdyBjb2x1bW4gZW5kXCI+XG4gICAgICAgICAgPFByZVJvbGxEZXNjcmlwdGlvblxuICAgICAgICAgICAgYW1vdW50PXthbW91bnR9XG4gICAgICAgICAgICBhbW91bnRBYmJyZXZpYXRpb249e2Ftb3VudEFiYnJldmlhdGlvbn1cbiAgICAgICAgICAgIHdyYXA9e3dyYXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rmxhdm9ycyBmbGF2b3JzPXtmbGF2b3JzfSAvPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbiA/IDxwPntkZXNjcmlwdGlvbn08L3A+IDogbnVsbH1cbiAgICAgICAgICA8UHJpY2VzXG4gICAgICAgICAgICBxdWFudGl0eUFiYnJldmlhdGlvbj17cXVhbnRpdHlBYmJyZXZpYXRpb259XG4gICAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgICAgcHJpY2VzPXtwcmljZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJkYXJrIHNpZGVQYWQgdmVydFBhZFwiPlxuICAgICAgICB7c3VwcGxpZXJVcmwgPyAoXG4gICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17c3VwcGxpZXJVcmx9PlxuICAgICAgICAgICAge3N1cHBsaWVyfVxuICAgICAgICAgIDwvYT5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0Q2FyZDtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgRmxhdm9yc1Byb3BzIHtcbiAgZmxhdm9ycz86IHN0cmluZ1tdO1xufVxuXG50eXBlIExpc3RGb3JtYXRPcHRpb25zID0ge1xuICB0eXBlPzogXCJjb25qdW5jdGlvblwiIHwgXCJkaXNqdW5jdGlvblwiIHwgXCJ1bml0XCI7XG4gIHN0eWxlPzogXCJsb25nXCIgfCBcInNob3J0XCIgfCBcIm5hcnJvd1wiO1xuICBsb2NhbGVNYXRjaGVyPzogXCJsb29rdXBcIiB8IFwiYmVzdCBmaXRcIjtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tbmFtZXNwYWNlXG5kZWNsYXJlIG5hbWVzcGFjZSBJbnRsIHtcbiAgY2xhc3MgTGlzdEZvcm1hdCB7XG4gICAgY29uc3RydWN0b3IobG9jYWxlOiBzdHJpbmcsIG9wdGlvbnM6IExpc3RGb3JtYXRPcHRpb25zKTtcbiAgICBwdWJsaWMgZm9ybWF0OiAoaXRlbXM6IEFycmF5PHN0cmluZz4pID0+IHN0cmluZztcbiAgfVxufVxuXG5jb25zdCBsaXN0Rm9ybWF0dGVyID0gbmV3IEludGwuTGlzdEZvcm1hdChcImVuXCIsIHt9KTtcblxuY29uc3QgRmxhdm9yczogRkM8Rmxhdm9yc1Byb3BzPiA9ICh7IGZsYXZvcnMgPSBbXSB9KSA9PiB7XG4gIGNvbnN0IHRyYW5zZm9ybWVkRmxhdm9ycyA9IGxpc3RGb3JtYXR0ZXIuZm9ybWF0KGZsYXZvcnMpO1xuXG4gIHJldHVybiB0cmFuc2Zvcm1lZEZsYXZvcnMgPyAoXG4gICAgPHAgY2xhc3NOYW1lPVwiY2FwXCI+e3RyYW5zZm9ybWVkRmxhdm9yc308L3A+XG4gICkgOiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxhdm9ycztcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJlUm9sbERlc2NyaXB0aW9uUHJvcHMge1xuICBhbW91bnRBYmJyZXZpYXRpb24/OiBzdHJpbmc7XG4gIGFtb3VudD86IHN0cmluZztcbiAgd3JhcD86IHN0cmluZztcbn1cblxuY29uc3QgUHJlUm9sbERlc2NyaXB0aW9uOiBGQzxQcmVSb2xsRGVzY3JpcHRpb25Qcm9wcz4gPSAoe1xuICBhbW91bnRBYmJyZXZpYXRpb24sXG4gIGFtb3VudCxcbiAgd3JhcCxcbn0pID0+IHtcbiAgcmV0dXJuIGFtb3VudCB8fCB3cmFwID8gKFxuICAgIDxwIGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAge3dyYXAgPyA8c3BhbiBjbGFzc05hbWU9XCJjYXBcIj57d3JhcH08L3NwYW4+IDogbnVsbH1cbiAgICAgIHt3cmFwICYmIGFtb3VudCA/IFwiICAgLSAgIFwiIDogbnVsbH1cbiAgICAgIHthbW91bnQgPyA8c3Bhbj57YCR7YW1vdW50fSAke2Ftb3VudEFiYnJldmlhdGlvbiA/PyBcIlwifWB9PC9zcGFuPiA6IG51bGx9XG4gICAgPC9wPlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByZVJvbGxEZXNjcmlwdGlvbjtcbiIsICJpbXBvcnQgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgUHJpY2VzUHJvcHMge1xuICBuYW1lOiBzdHJpbmc7XG4gIHByaWNlczogUmVjb3JkPHN0cmluZywgbnVtYmVyPjtcbiAgcXVhbnRpdHlBYmJyZXZpYXRpb24/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFByaWNlczogRkM8UHJpY2VzUHJvcHM+ID0gKHsgcXVhbnRpdHlBYmJyZXZpYXRpb24sIG5hbWUsIHByaWNlcyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS13cmFwXCI+XG4gICAgICA8dGFibGU+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgUXVhbnRpdHkge3F1YW50aXR5QWJicmV2aWF0aW9uICYmIHF1YW50aXR5QWJicmV2aWF0aW9ufVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPlByaWNlPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge0FycmF5LmZyb20oT2JqZWN0LmtleXMocHJpY2VzKSlcbiAgICAgICAgICAgIC5zb3J0KChhLCBiKSA9PiAoK2EgPCArYiA/IC0xIDogMCkpXG4gICAgICAgICAgICAubWFwKChxdWFudGl0eSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtgJHtuYW1lfS0ke2luZGV4fS0ke3F1YW50aXR5fWB9PlxuICAgICAgICAgICAgICAgICAgPHRkPntxdWFudGl0eX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZCBkYXRhLXR5cGU9XCJwcmljZVwiPiR7cHJpY2VzW3F1YW50aXR5XSA/PyBcIk5BXCJ9PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJpY2VzO1xuIiwgImltcG9ydCB0eXBlIHsgQWN0aW9uRnVuY3Rpb24sIExvYWRlckZ1bmN0aW9uIH0gZnJvbSBcInJlbWl4XCI7XG5cbmltcG9ydCB7IGxvZ291dCB9IGZyb20gXCJ+L3V0aWxzL3Nlc3Npb24uc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBhY3Rpb246IEFjdGlvbkZ1bmN0aW9uID0gYXN5bmMgKHsgcmVxdWVzdCB9KSA9PiB7XG4gIHJldHVybiBsb2dvdXQocmVxdWVzdCk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICByZXR1cm4gbG9nb3V0KHJlcXVlc3QpO1xufTtcbiIsICJleHBvcnQgdHlwZSBUcmFuc2Zvcm1lZE1hcmtkb3duID0geyBodG1sOiBzdHJpbmcgfTtcbiIsICJpbXBvcnQgeyBMaW5rc0Z1bmN0aW9uLCBMb2FkZXJGdW5jdGlvbiwgdXNlTG9hZGVyRGF0YSB9IGZyb20gXCJyZW1peFwiO1xuXG5pbXBvcnQgRm9vdGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCJ+L2NvbXBvbmVudHMvSGVhZGVyXCI7XG5pbXBvcnQgeyBnZXRQcm9maWxlLCBQcm9maWxlIH0gZnJvbSBcIn4vcHJvZmlsZVwiO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCJ+L3VzZXJzXCI7XG5pbXBvcnQgeyBnZXRVc2VyQnlTZXNzaW9uIH0gZnJvbSBcIn4vdXRpbHMvc2Vzc2lvbi5zZXJ2ZXJcIjtcblxuaW1wb3J0IGNzc1VybCBmcm9tIFwiLi4vc3R5bGVzL2luZGV4LmNzc1wiO1xuXG5leHBvcnQgY29uc3QgbGlua3M6IExpbmtzRnVuY3Rpb24gPSAoKSA9PiB7XG4gIHJldHVybiBbeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiBjc3NVcmwgfV07XG59O1xuXG5pbnRlcmZhY2UgTG9hZGVyRGF0YSB7XG4gIHByb2ZpbGU6IFByb2ZpbGU7XG4gIHVzZXI6IFVzZXIgfCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgbG9hZGVyOiBMb2FkZXJGdW5jdGlvbiA9IGFzeW5jICh7IHJlcXVlc3QgfSkgPT4ge1xuICBjb25zdCBbdXNlciwgcHJvZmlsZV0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgZ2V0VXNlckJ5U2Vzc2lvbihyZXF1ZXN0KSxcbiAgICBnZXRQcm9maWxlKCksXG4gIF0pO1xuXG4gIHJldHVybiB7IHByb2ZpbGUsIHVzZXIgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICBjb25zdCB7IHByb2ZpbGUsIHVzZXIgfSA9IHVzZUxvYWRlckRhdGE8TG9hZGVyRGF0YT4oKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICA8Rm9vdGVyIHsuLi5wcm9maWxlfSAvPlxuICAgIDwvPlxuICApO1xufVxuIiwgImV4cG9ydCBkZWZhdWx0IHsndmVyc2lvbic6JzVmYjUxZTU2JywnZW50cnknOnsnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvZW50cnkuY2xpZW50LTJGSTQ2TTRaLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUhaU1FVRE9KLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay02Qk83NEZXTy5qcyddfSwncm91dGVzJzp7J3Jvb3QnOnsnaWQnOidyb290JywncGFyZW50SWQnOnVuZGVmaW5lZCwncGF0aCc6JycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm9vdC1ZNkNUWEVRUy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZSc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonZXhlY3V0aXZlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlLVlQR1ZGR0xGLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTUyVk9LSE9ZLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HSzU2Q1pKRy5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstUE5PTDYyV1ouanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL2V4b3RpY3MnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL2V4b3RpY3MnLCdwYXJlbnRJZCc6J3JvdXRlcy9leGVjdXRpdmUnLCdwYXRoJzonZXhvdGljcycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9leG90aWNzLVlYTTRYSEtLLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9pbmRleCc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvaW5kZXgnLCdwYXJlbnRJZCc6J3JvdXRlcy9leGVjdXRpdmUnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvaW5kZXgtQVNYT1dLVUsuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNTNXT1ZCM0YuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRVVUJJUzdILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL21lZGlhJzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9tZWRpYScsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZScsJ3BhdGgnOidtZWRpYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9tZWRpYS1BWUZZUzNXTC5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1HM0ZON0dGUy5qcyddLCdoYXNBY3Rpb24nOnRydWUsJ2hhc0xvYWRlcic6dHJ1ZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZScsJ3BhdGgnOiduZXcnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3LUVDMkVLMjJPLmpzJywnaW1wb3J0cyc6dW5kZWZpbmVkLCdoYXNBY3Rpb24nOmZhbHNlLCdoYXNMb2FkZXInOmZhbHNlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL25ldy9jYXJ0Jzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2FydCcsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcnLCdwYXRoJzonY2FydCcsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvY2FydC1RM1dQWFhVSi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leGVjdXRpdmUvbmV3L2Nsb3NlLWRhdGUnOnsnaWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidjbG9zZS1kYXRlJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9jbG9zZS1kYXRlLTNSNVBORVZXLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTRVVUJJUzdILmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlJzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvZWRpYmxlJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidlZGlibGUnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3L2VkaWJsZS1RSTRVRlBBUi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlcic6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvbmV3L2Zsb3dlcicsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcnLCdwYXRoJzonZmxvd2VyJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9mbG93ZXItM01USlNCWFQuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhlY3V0aXZlL25ldy9tZWRpYSc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvbmV3L21lZGlhJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidtZWRpYScsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL2V4ZWN1dGl2ZS9uZXcvbWVkaWEtWjJONUlXTFAuanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfSwncm91dGVzL2V4ZWN1dGl2ZS9uZXcvbW9vbi1yb2NrJzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvbW9vbi1yb2NrJywncGFyZW50SWQnOidyb3V0ZXMvZXhlY3V0aXZlL25ldycsJ3BhdGgnOidtb29uLXJvY2snLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leGVjdXRpdmUvbmV3L21vb24tcm9jay1TNVBFWkhLMy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leGVjdXRpdmUvbmV3L3ByZS1yb2xsJzp7J2lkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcvcHJlLXJvbGwnLCdwYXJlbnRJZCc6J3JvdXRlcy9leGVjdXRpdmUvbmV3JywncGF0aCc6J3ByZS1yb2xsJywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlL25ldy9wcmUtcm9sbC1ZQVZJRUFHVi5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9leGVjdXRpdmUvbmV3L3dheCc6eydpZCc6J3JvdXRlcy9leGVjdXRpdmUvbmV3L3dheCcsJ3BhcmVudElkJzoncm91dGVzL2V4ZWN1dGl2ZS9uZXcnLCdwYXRoJzond2F4JywnaW5kZXgnOnVuZGVmaW5lZCwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvZXhlY3V0aXZlL25ldy93YXgtQ0NKTTNKWFouanMnLCdpbXBvcnRzJzp1bmRlZmluZWQsJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvZXhvdGljcyc6eydpZCc6J3JvdXRlcy9leG90aWNzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J2V4b3RpY3MnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9leG90aWNzLVpBR0hQSjRSLmpzJywnaW1wb3J0cyc6WycvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLVlVUEZKUFZMLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay01MlZPS0hPWS5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstR0s1NkNaSkcuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLTUzV09WQjNGLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay00VVVCSVM3SC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstRzNGTjdHRlMuanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvaW5kZXgnOnsnaWQnOidyb3V0ZXMvaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzp1bmRlZmluZWQsJ2luZGV4Jzp0cnVlLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9pbmRleC1KT0lPM1JIVi5qcycsJ2ltcG9ydHMnOlsnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay1ZVVBGSlBWTC5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNTJWT0tIT1kuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUdLNTZDWkpHLmpzJywnL19zdGF0aWMvYnVpbGQvX3NoYXJlZC9jaHVuay01M1dPVkIzRi5qcycsJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNFVVQklTN0guanMnXSwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9naW4vaW5kZXgnOnsnaWQnOidyb3V0ZXMvbG9naW4vaW5kZXgnLCdwYXJlbnRJZCc6J3Jvb3QnLCdwYXRoJzonbG9naW4nLCdpbmRleCc6dHJ1ZSwnY2FzZVNlbnNpdGl2ZSc6dW5kZWZpbmVkLCdtb2R1bGUnOicvX3N0YXRpYy9idWlsZC9yb3V0ZXMvbG9naW4vaW5kZXgtUjRPTjVSQVouanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstNTJWT0tIT1kuanMnLCcvX3N0YXRpYy9idWlsZC9fc2hhcmVkL2NodW5rLUdLNTZDWkpHLmpzJ10sJ2hhc0FjdGlvbic6dHJ1ZSwnaGFzTG9hZGVyJzp0cnVlLCdoYXNDYXRjaEJvdW5kYXJ5JzpmYWxzZSwnaGFzRXJyb3JCb3VuZGFyeSc6ZmFsc2V9LCdyb3V0ZXMvbG9nb3V0Jzp7J2lkJzoncm91dGVzL2xvZ291dCcsJ3BhcmVudElkJzoncm9vdCcsJ3BhdGgnOidsb2dvdXQnLCdpbmRleCc6dW5kZWZpbmVkLCdjYXNlU2Vuc2l0aXZlJzp1bmRlZmluZWQsJ21vZHVsZSc6Jy9fc3RhdGljL2J1aWxkL3JvdXRlcy9sb2dvdXQtNkpZQkVIVUkuanMnLCdpbXBvcnRzJzpbJy9fc3RhdGljL2J1aWxkL19zaGFyZWQvY2h1bmstR0s1NkNaSkcuanMnXSwnaGFzQWN0aW9uJzp0cnVlLCdoYXNMb2FkZXInOnRydWUsJ2hhc0NhdGNoQm91bmRhcnknOmZhbHNlLCdoYXNFcnJvckJvdW5kYXJ5JzpmYWxzZX0sJ3JvdXRlcy9tb2RlbHMnOnsnaWQnOidyb3V0ZXMvbW9kZWxzJywncGFyZW50SWQnOidyb290JywncGF0aCc6J21vZGVscycsJ2luZGV4Jzp1bmRlZmluZWQsJ2Nhc2VTZW5zaXRpdmUnOnVuZGVmaW5lZCwnbW9kdWxlJzonL19zdGF0aWMvYnVpbGQvcm91dGVzL21vZGVscy1SS0dUVlA0Uy5qcycsJ2ltcG9ydHMnOnVuZGVmaW5lZCwnaGFzQWN0aW9uJzpmYWxzZSwnaGFzTG9hZGVyJzpmYWxzZSwnaGFzQ2F0Y2hCb3VuZGFyeSc6ZmFsc2UsJ2hhc0Vycm9yQm91bmRhcnknOmZhbHNlfX0sJ3VybCc6Jy9fc3RhdGljL2J1aWxkL21hbmlm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O0FBQUE7QUFBQSxFQUVaLCtCQUErQjtBQUFBLElBQzNCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosK0JBQStCO0FBQUEsSUFDM0IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWiw4QkFBOEI7QUFBQSxJQUMxQixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLDZCQUE2QjtBQUFBLElBQ3pCLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosNEJBQTRCO0FBQUEsSUFDeEIsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixrQkFBa0I7QUFBQSxJQUNkLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBLEVBRVosaUJBQWlCO0FBQUEsSUFDYixJQUFJO0FBQUEsSUFDSixVQUFVO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixRQUFRO0FBQUE7QUFBQSxFQUVaLGlCQUFpQjtBQUFBLElBQ2IsSUFBSTtBQUFBLElBQ0osVUFBVTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLElBQ1AsZUFBZTtBQUFBLElBQ2YsUUFBUTtBQUFBO0FBQUEsRUFFWixnQkFBZ0I7QUFBQSxJQUNaLElBQUk7QUFBQSxJQUNKLFVBQVU7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQSxJQUNQLGVBQWU7QUFBQSxJQUNmLFFBQVE7QUFBQTtBQUFBOzs7QUQzS1AsSUFBTSxVQUFVLDJDQUFxQjtBQUFBLEVBQzFDO0FBQUEsRUFDQSxNQUFNO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
