import { Link, LinksFunction } from "remix";
import headerCss from "./header.css";

const routes = new Set(["posts", "exotics", "extras"]);

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: headerCss }];
};

export default function Header() {
  return (
    <nav className="row spaceBetween header">
      <h1>Bayou Boy Exotics</h1>
      <ul>
        {[...routes].map((route) => (
          <Link className="button" key={route} to={route}>
            {route}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
