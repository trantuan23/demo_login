import React, { useState } from "react";
import "../login/login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errorMessages, setErrorMessages] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: val,
    }));
    setErrorMessages((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errors = {};

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form data is valid:", formData);
    } else {
      setErrorMessages(errors);
    }
  };

  return (
    <div className="login-container">
      <div className="background-image"></div>
      <div className="form-section">
        <div className="form-container">
          <h2 className="heading">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <div>
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="input"
                  placeholder="youremail.@domain.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errorMessages.email && (
                  <p className="error-message">{errorMessages.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="password" className="label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="*******"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errorMessages.password && (
                  <p className="error-message">{errorMessages.password}</p>
                )}
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  name="remember"
                  id="remember"
                  className="checkbox"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <label htmlFor="remember" className="cursor-pointer">
                  Remember me
                </label>
              </div>
              <div className="link">Forgot password</div>
            </div>
            <div className="mt-4">
              <button type="submit" className="button">
                Login
              </button>
            </div>
          </form>
          <div className="separator">
            <div className="separator-line"></div>
          </div>
          <div className="mt-4 flex gap-4">
            <div className="social-button facebook">facebook</div>
            <div className="social-button google">google</div>
          </div>
          <div className="register">
            Don't have an account?{" "}
            <div className="link">Register now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
