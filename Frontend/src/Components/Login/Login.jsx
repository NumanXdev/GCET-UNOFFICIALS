import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const getToastWidth = () => {
    return window.innerWidth > 768 ? "300px" : "90%";
  };

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "top-center",
      style: { marginTop: "1rem", width: getToastWidth() },
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "top-center",
      style: { marginTop: "1rem", width: getToastWidth() },
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/home");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6">
          <div className="card shadow p-4">
            <h2 className="text-center fw-bold text-success">
              Login to Your Account
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 mt-4">
                <label htmlFor="email" className="form-label fw-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  id="email"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  id="password"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <p className="text-muted small">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-decoration-none text-success">
                    Signup here
                  </Link>
                </p>
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-success">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
