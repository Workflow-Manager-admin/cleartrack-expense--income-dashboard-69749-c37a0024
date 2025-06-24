import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const registerStyles: React.CSSProperties = {
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

export const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, email, password);
    } catch (error) {
      console.error("Failed to register", error);
    }
  };

  return (
    <div style={registerStyles}>
      <form style={formStyles} onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyles}
          required
        />
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
          Register
        </button>
      </form>
    </div>
  );
};
