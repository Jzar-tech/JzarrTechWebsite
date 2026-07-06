import React, { useEffect, useMemo, useState } from "react";
import "./Login.css";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import {
  bootstrapAdminAccount,
  clearRememberedAuth,
  getRememberedAuth,
  getUsers,
  loginWithCredentials,
  saveRememberedAuth,
  saveSession,
} from "./adminStore";

const Login = () => {
  const navigate = useNavigate();

  const getDashboardPath = (role) =>
    role === "Manager"
      ? "/manager/dashboard"
      : role === "Agent"
        ? "/agent/dashboard"
        : "/admin/dashboard";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [setupName, setSetupName] = useState("Jzarr Admin");
  const [setupEmail, setSetupEmail] = useState("admin@jzarrtech.com");
  const [setupPassword, setSetupPassword] = useState("JzarrTech@2026");

  const hasUsers = useMemo(() => getUsers().length > 0, []);
  const isInitialSetup = !hasUsers;

  useEffect(() => {
    const rememberedAuth = getRememberedAuth();

    if (rememberedAuth) {
      setEmail(rememberedAuth.email || "");
      setPassword(rememberedAuth.password || "");
      setRemember(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    setTimeout(() => {
      try {
        if (isInitialSetup) {
          const user = bootstrapAdminAccount({
            name: setupName,
            email: setupEmail,
            password: setupPassword,
          });

          if (remember) {
            saveRememberedAuth({
              email: setupEmail,
              password: setupPassword,
            });
          } else {
            clearRememberedAuth();
          }

          saveSession({
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            remember,
            loggedInAt: new Date().toISOString(),
          });

          navigate(getDashboardPath(user.role));
          return;
        }

        const user = loginWithCredentials({ email, password });

        if (remember) {
          saveRememberedAuth({ email, password });
        } else {
          clearRememberedAuth();
        }

        saveSession({
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          remember,
          loggedInAt: new Date().toISOString(),
        });

        navigate(getDashboardPath(user.role));
      } catch (error) {
        alert(error.message || "Invalid Email or Password");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      <div className="login-card">
        <div className="login-brand">
          <img src={logo} alt="JzarrTech Logo" />
          <span>Admin Console</span>
        </div>

        <div className="login-header">
          <h2>{isInitialSetup ? "Create Admin" : "Admin & Manager Login"}</h2>

          <p>
            {isInitialSetup
              ? "Set up the first admin account before creating managers and agents."
              : "Use your credentials to open the correct dashboard."}
          </p>
        </div>

        {isInitialSetup ? (
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <FaEnvelope className="icon" />

              <input
                type="text"
                placeholder="Admin Name"
                value={setupName}
                onChange={(e) => setSetupName(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <FaEnvelope className="icon" />

              <input
                type="email"
                placeholder="Admin Email"
                value={setupEmail}
                onChange={(e) => setSetupEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Create Password"
                value={setupPassword}
                onChange={(e) => setSetupPassword(e.target.value)}
                required
              />

              <span
                className="eye"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />

                Keep me signed in
              </label>
            </div>

            <button className="login-btn" disabled={loading}>
              {loading ? "Creating..." : "Create Admin"}
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="input-box">
              <FaEnvelope className="icon" />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
              />

              <span className="eye" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />

                Remember Me
              </label>

              <span
                className="forgot"
                onClick={() =>
                  alert("Forgot Password will be connected later.")
                }
              >
                Forgot Password?
              </span>
            </div>

            <button className="login-btn" disabled={loading}>
              {loading ? "Signing In..." : "Login"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
