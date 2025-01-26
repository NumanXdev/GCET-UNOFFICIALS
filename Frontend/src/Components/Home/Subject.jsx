import React from "react";
import { useNavigate } from "react-router-dom";

function Subject({ sub, img, id }) {
  const Navigate = useNavigate();
  const handleOnClick = () => {
    Navigate(`/home/${id}`);
    // console.log(id);
  };

  return (
    <div className="col-12 col-md-4 mb-4">
      <div
        className="card"
        style={{
          borderRadius: "38px",
          overflow: "hidden",
          height: "auto",
          width: "auto",
        }}
        onClick={handleOnClick}
      >
        <img
          src={img}
          className="card-img-top"
          alt="card"
        />
        <div className="card-img-overlay d-flex justify-content-center align-items-center">
          <h5 className="text-center text-black fw-bold fs-4"style={{letterSpacing:"1px"}}>{sub}</h5>
        </div>
      </div>
    </div>
  );
}

export default Subject;
