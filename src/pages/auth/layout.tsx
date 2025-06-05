import { Outlet } from "@tanstack/react-router";
import React from "react";

function AuthLayout(): React.JSX.Element {
  return (
    <div>
      <h2>This is auth layout</h2>
      <Outlet />
    </div>
  );
}

export default AuthLayout;
