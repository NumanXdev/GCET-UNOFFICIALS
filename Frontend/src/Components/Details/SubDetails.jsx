import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SubDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [subject, setSubject] = useState({});
  const [Error, setError] = useState("");
  const getToastWidth = () => {
    return window.innerWidth > 768 ? "300px" : "90%";
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/subjects/${id}`, { withCredentials: true })
      .then((response) => {
        console.log(response);
        if (response.data.status === false) {
          toast.error(response.data.message, {
            position: "top-center",
            autoClose: 1500,
            onClose: () => navigate("/login"),
          });
          return;
        } else {
          setSubject(response.data);
        }
      })
      .catch((err) => {
        setError("Error fetching Subject details: " + err.message);
        toast.error("Unable to fetch, Login again.", {
          position: "top-center",
          autoClose: 1500,
          onClose: () => navigate("/login"),
          width: getToastWidth(),
        });
      });
  }, [id, navigate]);

  if (Error)
    return (
      <p className="text-danger text-center mt-5">
        {Error}
        <ToastContainer />
      </p>
    );

  if (!subject.Title)
    return (
      <p
        className="d-flex justify-content-center align-items-center mt-5"
        style={{ height: "80vh" }}
      >
        Loading...
        <ToastContainer />
      </p>
    );

  return (
    <div className="container mt-4 mb-5">
      <h2 className="text-center mb-4">Subject Information</h2>
      <div className="card shadow-lg rounded">
        <img
          src="/Assets/gcet.png"
          className="card-img-top"
          alt="Subject"
          style={{ height: "250px", objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5 className="card-title  text-primary fs-1 ">{subject.Title}</h5>
          <p className="card-text text-muted">{subject.Subject}</p>
          <p className="card-text text-muted">Semester: {subject.Semester}</p>
          <a
            href={subject.Pdf.Url}
            className="btn btn-primary btn-lg"
            target="_blank"
          >
            {/* Font awesome icon */}
            <i class="fa-solid fa-file-pdf"></i> View PDF
          </a>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SubDetails;
