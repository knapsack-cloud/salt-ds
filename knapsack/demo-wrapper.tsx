import * as React from "react";
import { SaltProvider } from "@salt-ds/core";

import "@salt-ds/theme/index.css";

const DemoWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <SaltProvider>
      <div className="demo-wrapper">{children}</div>
    </SaltProvider>
  );
};

export default DemoWrapper;
