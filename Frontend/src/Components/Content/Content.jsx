import React from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Content() {
  const Navigate = useNavigate();

  const getToastWidth = () => {
    return window.innerWidth > 768 ? "450px" : "90%";
  };

  toast.info("Designers are arguing about the colors.😆", {
    position: "top-center",
    autoClose: 3000,
    onClose: () => {
      Navigate("/home");
    },
    style: { marginTop: "1.5rem", width: getToastWidth() },
  });
  return (
    <>
      <div className="container">
        <div
          className="d-flex justify-content-center align-items-center fs-1 fw-bold "
          style={{
            height: "70vh",
            color: "rgba(0, 0, 0, 0.6)",
            borderRadius: "10px",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Coming Soon!
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default Content;
