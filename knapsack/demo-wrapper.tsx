import * as React from "react";
import { SaltProvider } from "@salt-ds/core";

import "@salt-ds/theme/index.css";

const mode = document.body.getAttribute("mode");
const density = document.body.getAttribute("density");

const DemoWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SaltProvider mode={mode} density={density}>
      <div className="demo-wrapper">{children}</div>
    </SaltProvider>
  );
};

export default DemoWrapper;
