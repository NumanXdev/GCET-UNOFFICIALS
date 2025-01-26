import React from "react";
function Update({ msg }) {
  return (
    <div className="row m-2">
      <div className="col-12 mt-5 p-3 rounded" style={{color:"white",backgroundColor:"black"}}>{msg}</div>
    </div>
  );
}

export default Update;
