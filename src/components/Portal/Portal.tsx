import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";

const Portal: React.FC<PortalProps> = ({ children }) => {
  const container = document.getElementById("portal-root");
  const element = document.createElement("div");

  useEffect(() => {
    // Early termination if the root element is not mounted yet
    if (!container) return;

    container.appendChild(element);

    return () => {
      container?.removeChild(element);
    };
  }, [container, element]);

  return createPortal(children, element);
};

export interface PortalProps {
  children: ReactNode;
}
export default Portal;
