import React from "react";
import { Composition } from "remotion";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Layout } from "./components/Layout";

const App: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated ? <Layout /> : <Navigate to="/login" />}
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export const RemotionRoot: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Composition
          id="App"
          component={App}
          durationInFrames={Infinity}
          fps={30}
          width={1920}
          height={1080}
        />
      </Router>
    </AuthProvider>
  );
};
