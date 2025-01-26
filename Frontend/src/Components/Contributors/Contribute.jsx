import React from "react";
function Contribute({ name, role,src }) {
  return (
    <>
 
    <div className="col-12 col-lg-4 col-md-6  col-sm-6 mt-3  mb-5 d-flex justify-content-center" >
      <div className="card " style={{
          borderRadius: "20px",
          overflow: "hidden",
          width: "18rem",
          position: "relative",
        }}
      >
        <img
          src={src}
          className="card-img-top text-center"
          alt="Contriutors image"
          style={{ height: "22rem", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            color: "white",
            width: "100%",
            padding: "10px",
            textAlign: "center",
          }}
        >
          <span style={{ fontWeight: "bold" }}>{name}</span> <br/>
          <span>{role}</span>
        </div>
      </div>
    </div>
    
    </>
  );
}

export default Contribute;
