import React, { HTMLAttributes } from "react";

const Dialog: React.FC<DialogProps> = ({ children }) => {
  return (
    <div role='dialog' aria-modal tabIndex={-1}>
      {children}
    </div>
  );
};

export interface DialogProps extends HTMLAttributes<HTMLDialogElement> {}

export default Dialog;
