import { Link, LinksFunction } from "remix";
import Header from "~/components/Header";
import cssUrl from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: cssUrl }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <Header />
    </div>
  );
}
