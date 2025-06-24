import { Search, Bell, User } from "lucide-react";
import React from "react";

const navbarStyles: React.CSSProperties = {
  height: 60,
  backgroundColor: "#222",
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: "0 20px",
  borderBottom: "1px solid #333",
  justifyContent: "space-between",
};

const searchStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  backgroundColor: "#333",
  borderRadius: 5,
  padding: "5px 10px",
};

const inputStyles: React.CSSProperties = {
  backgroundColor: "transparent",
  border: "none",
  color: "white",
  marginLeft: 10,
  outline: "none",
};

const iconsStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "20px",
};

export const Navbar: React.FC = () => {
  return (
    <nav style={navbarStyles}>
      <div style={searchStyles}>
        <Search size={20} />
        <input type="text" placeholder="Search..." style={inputStyles} />
      </div>
      <div style={iconsStyles}>
        <Bell size={20} />
        <User size={20} />
      </div>
    </nav>
  );
};
