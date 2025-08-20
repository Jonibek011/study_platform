import React, { memo } from "react";
import { cn } from "../util/cn";
const Loading = memo(function Loading({
  variant = "spinner",
  size = "md",
  className = "",
  containerClass = "",
  ...rest
}) {
  const classes = [
    "loading",
    `loading-${variant}`,
    `loading-${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cn(
        "w-full h-full flex justify-center items-center",
        containerClass
      )}
      {...rest}
    >
      <span className={classes}></span>
    </div>
  );
});

export default Loading;
