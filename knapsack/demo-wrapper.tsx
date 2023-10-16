import * as React from "react";
import { SaltProvider, Mode, Density } from "@salt-ds/core";

import "@salt-ds/theme/index.css";

const mode = document.body.getAttribute("mode");
if (mode !== "light" && mode !== "dark") {
  throw new Error(`Invalid mode: ${mode}`);
}
const density = document.body.getAttribute("density");
if (
  density !== "medium" &&
  density !== "high" &&
  density !== "low" &&
  density !== "touch"
) {
  throw new Error(`Invalid density: ${density}`);
}

const DemoWrapper = ({ children }: { children: React.ReactElement }) => {
  return (
    <SaltProvider mode={mode} density={density}>
      <div className="demo-wrapper">{children}</div>
    </SaltProvider>
  );
};

export default DemoWrapper;
