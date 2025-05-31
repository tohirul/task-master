import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={"/sign-up"}>Sign up</Link>
          </li>
          <li>
            <Link to={`/dashboard`}>Dashboard</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </React.Fragment>
  );
}
export default RootComponent;
