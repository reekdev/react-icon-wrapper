import React from "react";

export type SvgIconProps = {
  size?: React.SVGProps<SVGSVGElement>["width"];
  c?: React.SVGProps<SVGSVGElement>["stroke"];
} & React.SVGProps<SVGSVGElement>;

export type SvgIcon = React.FC<SvgIconProps>;
