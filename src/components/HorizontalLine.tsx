import React from "react";

type HorizontalLineProps = {
  color: string,
  height: number,
};

const HorizontalLine: React.FC<HorizontalLineProps> = ({color, height}) => {
  return (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: height,
        width: '40vw',
        opacity: 1,
      }}
    />
  );
};

export default HorizontalLine;
