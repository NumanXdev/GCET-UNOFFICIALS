import React from "react";
import Update from "./Update";

function UpdatePage() {
  return (
    <div className="container  mb-5">
      <Update
        msg={
          "Lorem tem ullam tenetur perspiciatis ipsam enim. Magnam dolori isnxnsnxnxxk tfssvcd ugsv xuhsvsabbvsabs sbbhhbbbbi"
        }
      />
      <Update msg={"A new unread messages!"} />
      <Update msg={"Projects!"} />

      <div className="">
        <h2 className="text-center mt-5 mb-5" style={{fontWeight:"bolder"}}>ALL CAUGHT UP!</h2>
      </div>
    </div>
  );
}

export default UpdatePage;
