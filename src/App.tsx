import React from "react";
import { AppProvider } from "./providers/AppProvider";

export default function App(): React.JSX.Element {
  return (
    <div>
      <AppProvider />
    </div>
  );
}
