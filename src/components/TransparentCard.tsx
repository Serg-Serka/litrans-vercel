import React from "react";

interface TransparentCardProps {
  title: string;
  subtitle: string;
  style?: React.CSSProperties;
}

const TransparentCard: React.FC<TransparentCardProps> = ({ title, subtitle, style }) => {
  return (
    <div
      style={{
        border: "2px solid white",
        borderRadius: 18,
        padding: "16px",
        textAlign: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "250px",
        height: "150px",
        ...style,
      }}
    >
      <h2 style={{ fontSize: "32px", fontWeight: "bold", margin: 0 }}>{title}</h2>
      <p style={{ fontSize: "16px", fontWeight: "normal", margin: 0 }}>{subtitle}</p>
    </div>
  );
};

export default TransparentCard;
