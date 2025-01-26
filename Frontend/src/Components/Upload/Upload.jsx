import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ToastContainer, toast } from "react-toastify";

function Upload() {
  const Navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [inputValue, setIsInputValue] = useState({
    Title: "",
    Subject: "",
    Semester: "",
    Pdf: null,
  });
  const [isloading, setisLoading] = useState(false);

  const getToastWidth = () => {
    return window.innerWidth > 768 ? "300px" : "90%";
  };

  const { Title, Subject, Semester, Pdf } = inputValue;

  useEffect(() => {
    const verifyCookie = async () => {
      try {
        if (!cookies.token) {
          return Navigate("/login");
        }

        const { data } = await axios.post(
          "http://localhost:3000/verify",
          {},
          { withCredentials: true }
        );

        const { status, user, email } = data;

        if (!status || email !== import.meta.env.VITE_APP_EMAIL) {
          return Navigate("/home");
        }

        setUsername(user);
        toast.success(`Welcome, ${user}`, {
          position: "top-center",
          style: { marginTop: "1rem", width: getToastWidth() },
          autoClose: 1500,
        });
      } catch (err) {
        console.error(err);
        removeCookie("token");
        Navigate("/home");
      }
    };

    verifyCookie();
  }, [cookies, Navigate, removeCookie]);

  const handleOnChange = (evt) => {
    const { name, value, files } = evt.target;
    if (name === "Pdf") {
      console.log(evt);
      setIsInputValue({
        ...inputValue,
        [name]: files[0],
      });
    } else {
      setIsInputValue({
        ...inputValue,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setisLoading(true);

    if (!Title || !Subject || !Semester || !Pdf) {
      toast.error("All fields are required!", {
        position: "top-center",
        style: { marginTop: "1rem", width: getToastWidth() },
      });
      setisLoading(false);
      return;
    }
    //----------------> Upload file Validation <----------------
    if (Pdf.type !== "application/pdf") {
      toast.error("Please upload a valid PDF file!", {
        position: "top-center",
        style: { marginTop: "1rem", width: getToastWidth() },
      });
      setisLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("paper[Title]", Title);
    formData.append("paper[Subject]", Subject);
    formData.append("paper[Semester]", Semester);
    formData.append("Pdf", Pdf);

    try {
      const { data } = await axios.post(
        "http://localhost:3000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { success, message } = data;
      if (success) {
        toast.success(message, {
          position: "top-center",
          style: { marginTop: "1rem", width: getToastWidth() },
        });
        setTimeout(() => Navigate("/Upload"), 1000);
      } else {
        toast.error(message, {
          position: "top-center",
          style: { marginTop: "1rem", width: getToastWidth() },
        });
      }
      setIsInputValue({ Title: "", Subject: "", Semester: "", Pdf: null });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
        style: { marginTop: "1rem", width: getToastWidth() },
      });
    } finally {
      setisLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-1"></div>
        <div className="col mt-5">
          <h1 className="text-center">Upload Paper</h1>
          <form
            method="post"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                value={Title}
                onChange={handleOnChange}
                name="Title"
                id="title"
                className="form-control"
              />
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={Subject}
                    onChange={handleOnChange}
                    name="Subject"
                    id="subject"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="mb-3">
                  <label htmlFor="file" className="form-label">
                    Upload PDF
                  </label>
                  <input
                    type="file"
                    onChange={handleOnChange}
                    name="Pdf"
                    id="file"
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="sem" className="form-label">
                Semester
              </label>
              <input
                type="text"
                value={Semester}
                onChange={handleOnChange}
                name="Semester"
                id="sem"
                className="form-control"
              />
            </div>
            {isloading ? (
              <button className="btn btn-success mb-5" type="button" disabled>
                Uploading... &nbsp;
                <span className="spinner-border spinner-border-sm"></span>
              </button>
            ) : (
              <button type="submit" className="btn btn-success mb-5">
                Submit
              </button>
            )}
          </form>
        </div>
        <div className="col-1"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Upload;
