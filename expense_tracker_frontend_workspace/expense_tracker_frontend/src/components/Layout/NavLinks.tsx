import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Settings,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { icon: LayoutDashboard, text: "Dashboard", path: "/" },
  { icon: Wallet, text: "Income", path: "/income" },
  { icon: ArrowLeftRight, text: "Expenses", path: "/expenses" },
  { icon: Settings, text: "Settings", path: "/settings" },
];

const navLinkStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "10px 0",
  color: "white",
  textDecoration: "none",
  fontSize: 16,
};

const navContainerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

export const NavLinks: React.FC = () => {
  return (
    <nav style={navContainerStyles}>
      {navLinks.map((link) => (
        <Link to={link.path} key={link.text} style={navLinkStyles}>
          <link.icon size={20} style={{ marginRight: 15 }} />
          {link.text}
        </Link>
      ))}
    </nav>
  );
};
