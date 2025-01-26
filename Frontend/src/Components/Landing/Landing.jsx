import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const Navigate = useNavigate();

  let home=()=>{
    Navigate("/home")
  }

  return (
    <>
      <div className="gcet img-fluid">
        <div className="container vh-100 d-flex justify-content-center align-items-center">
          <div className="text-center">
            <div className="mb-5">
              <h2 className="GCET title">GCET</h2>
              <h2 className="GCET">UNOFFICIAL</h2>
            </div>

            <div>
              <button className="btn btn-primary mt-5 px-5 py-2 " onClick={home}>
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
