import type { LinksFunction, MetaFunction } from "remix";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";

import globalStylesUrl from "./styles/global.css";
import globalLargeStylesUrl from "./styles/global-large.css";
import globalMediumStylesUrl from "./styles/global-medium.css";

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: globalStylesUrl },
    { rel: "stylesheet", href: globalMediumStylesUrl, media: "" },
    { rel: "stylesheet", href: globalLargeStylesUrl },
  ];
};

export const meta: MetaFunction = () => {
  return { title: "Bayou Exotics" };
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
