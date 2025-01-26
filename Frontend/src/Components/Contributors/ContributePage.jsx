import React from "react";
import Contribute from "./Contribute";
function ContributePage() {
  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center text-center mt-5">
        <div className="row">
          <Contribute name={"Numan"} role={"Full-Stack developer"} src={"/Assets/numan.png"}/>
          <Contribute name={"Yaseen"} role={"Project_Manager"} src={"/Assets/yaseen.jpg"} />
          <Contribute name={"Mubashir"} role={"FrontEnd developer"} src={"/Assets/mubashir.jpg"}/>
          <Contribute name={"Faheem"} role={"UI/UX"} src={"/Assets/Faheem.jpg"} />
        </div>
      </div>
    </>
  );
}

export default ContributePage;
