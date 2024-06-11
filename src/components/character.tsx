import React from "react";

function Character({
  className,
  elevation,
  char,
}: {
  className?: string;
  elevation?: number;
  char: string;
}) {
  return (
    <span
      style={
        elevation !== undefined
          ? {
              position: "relative",
              top: `${elevation}rem`,
              letterSpacing: "0.2em",
            }
          : { letterSpacing: "0.1em" }
      }
      className={className}
    >
      {char}
    </span>
  );
}

export default Character;
