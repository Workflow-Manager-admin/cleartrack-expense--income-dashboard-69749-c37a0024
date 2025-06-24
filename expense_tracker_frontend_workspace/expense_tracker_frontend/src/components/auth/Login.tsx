import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const loginStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "#1a1a1a",
  color: "white",
};

const formStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  width: "300px",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "#222",
  border: "1px solid #333",
};

const inputStyles: React.CSSProperties = {
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #444",
  backgroundColor: "#333",
  color: "white",
  fontSize: "16px",
};

const buttonStyles: React.CSSProperties = {
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#1976d2",
  color: "white",
  fontSize: "16px",
  cursor: "pointer",
};

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <div style={loginStyles}>
      <form style={formStyles} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyles}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyles}
          required
        />
        <button type="submit" style={buttonStyles}>
          Login
        </button>
      </form>
    </div>
  );
};
