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
          ? { position: "relative", top: `${elevation}rem` }
          : {}
      }
      className={className}
    >
      {char}
    </span>
  );
}

export default Character;
