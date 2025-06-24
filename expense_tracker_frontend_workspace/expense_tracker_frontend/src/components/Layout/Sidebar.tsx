import React from "react";
import { NavLinks } from "./NavLinks";

const sidebarStyles: React.CSSProperties = {
  width: 240,
  backgroundColor: "#222",
  color: "white",
  height: "100%",
  position: "fixed",
  top: 0,
  left: 0,
  padding: 20,
  borderRight: "1px solid #333",
  display: "flex",
  flexDirection: "column",
};

const titleStyles: React.CSSProperties = {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 40,
  textAlign: "center",
};

export const Sidebar: React.FC = () => {
  return (
    <aside style={sidebarStyles}>
      <h1 style={titleStyles}>ClearTrack</h1>
      <NavLinks />
    </aside>
  );
};
