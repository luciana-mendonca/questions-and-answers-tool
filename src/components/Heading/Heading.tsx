import React, { HTMLAttributes } from "react";

const Heading: React.FC<HeadingProps> = ({ children, headingLevel }) => {
  const NativeHeading = headingLevel;

  return <NativeHeading>{children}</NativeHeading>;
};

type HeadingLevels = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  headingLevel: HeadingLevels;
}

export default Heading;
