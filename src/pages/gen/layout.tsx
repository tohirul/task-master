import { Link, Outlet } from "@tanstack/react-router";
import React from "react";

function PublicLayout(): React.JSX.Element {
  return (
    <div>
      <nav>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/sign-in">Sign in</Link>
        </li>
      </nav>
      PublicLayout
      <Outlet />
    </div>
  );
}

export default PublicLayout;
