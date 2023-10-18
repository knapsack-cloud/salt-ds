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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=PT+Mono&display=swap"
        rel="stylesheet"
      />
      <div className="demo-wrapper">{children}</div>
    </SaltProvider>
  );
};

export default DemoWrapper;
