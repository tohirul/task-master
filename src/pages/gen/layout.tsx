import { Outlet } from "@tanstack/react-router";
import React from "react";

function PublicLayout(): React.JSX.Element {
  return (
    <div>
      PublicLayout
      <Outlet />
    </div>
  );
}

export default PublicLayout;
