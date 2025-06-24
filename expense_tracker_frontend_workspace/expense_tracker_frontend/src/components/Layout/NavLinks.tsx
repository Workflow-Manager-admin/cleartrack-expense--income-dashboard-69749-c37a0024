import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Settings,
} from "lucide-react";
import React from "react";

const navLinks = [
  { icon: LayoutDashboard, text: "Dashboard" },
  { icon: Wallet, text: "Income" },
  { icon: ArrowLeftRight, text: "Expenses" },
  { icon: Settings, text: "Settings" },
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
        <a href="#" key={link.text} style={navLinkStyles}>
          <link.icon size={20} style={{ marginRight: 15 }} />
          {link.text}
        </a>
      ))}
    </nav>
  );
};
