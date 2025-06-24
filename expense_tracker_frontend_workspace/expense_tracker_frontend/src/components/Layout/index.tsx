import React from "react";
import { AbsoluteFill } from "remotion";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Navbar } from "./Navbar";

export const Layout: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#1a1a1a" }}>
      <Sidebar />
      <main style={{ marginLeft: 240 }}>
        <Navbar />
        <div style={{ padding: 20 }}>
          <Outlet />
        </div>
      </main>
    </AbsoluteFill>
  );
};
