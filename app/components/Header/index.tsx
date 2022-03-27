import { FC } from "react";
import { NavLink } from "remix";

import { User } from "~/users";

const routes = new Set(["exotics"]);

interface HeaderProps {
  canLogOut?: boolean;
  showAdminLink?: boolean;
  user: User | null;
}

const Header: FC<HeaderProps> = ({
  canLogOut = false,
  showAdminLink = true,
  user,
}) => {
  return (
    <header className="nav row spaceBetween alignCenter">
      <NavLink to="/">
        <img
          className="logo"
          src="https://s3-us-east-2.amazonaws.com/bayou-exotics/assets/bayou-logo.png"
          alt="website-logo"
        />
      </NavLink>
      <nav className="row space alignCenter sideMargin">
        {user && showAdminLink && (
          <NavLink className="button" to="/executive">
            Executive
          </NavLink>
        )}
        {[...routes].map((route) => (
          <NavLink
            className="button cap"
            prefetch="intent"
            key={route}
            to={`/${route}`}
          >
            {route}
          </NavLink>
        ))}
        {canLogOut && user ? (
          <NavLink className="button" to="/logout">
            Log Out
          </NavLink>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
