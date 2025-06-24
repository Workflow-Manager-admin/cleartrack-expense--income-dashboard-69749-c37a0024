import React from "react";
import { Dashboard } from "../Dashboard";

const contentStyles: React.CSSProperties = {
  padding: 20,
  color: "white",
};

export const Content: React.FC = () => {
  return (
    <main style={contentStyles}>
      <Dashboard />
    </main>
  );
};
