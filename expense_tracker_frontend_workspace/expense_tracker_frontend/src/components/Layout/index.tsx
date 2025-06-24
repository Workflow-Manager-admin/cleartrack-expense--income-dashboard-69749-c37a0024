import React from "react";
import { AbsoluteFill } from "remotion";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";
import { Content } from "./Content";

export const Layout: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a1a" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", marginLeft: 240 }}>
        <Navbar />
        <Content />
      </div>
    </AbsoluteFill>
  );
};
