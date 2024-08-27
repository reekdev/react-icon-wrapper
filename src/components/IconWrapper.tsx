import React, { ComponentPropsWithoutRef } from "react";
import { SvgIcon, SvgIconProps } from "../icons/svg-icon";

type Props = {
  icon: SvgIcon;
  iconProps?: SvgIconProps;
  className?: ComponentPropsWithoutRef<"div">["className"];
  onClick?: ComponentPropsWithoutRef<"div">["onClick"];
};

const IconWrapper: React.FC<Props> = ({
  icon: Icon,
  iconProps,
  className,
  onClick,
}) => {
  const cn = className ? `icon_wrapper ${className}` : `icon_wrapper`;

  return (
    <>
      <div
        onClick={onClick}
        className={cn}
        style={{
          width: iconProps?.size ?? 24,
          height: iconProps?.size ?? 24,
          display: "inline-block",
        }}
      >
        <Icon {...iconProps} />
      </div>
    </>
  );
};

export default IconWrapper;
