import React from "react";

function Social() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12 p-1 text-center Home">Home</div>
        <p className="text-center mt-1 join">
          JOIN US AND LET'S EXPLORE TOGETHER
        </p>
      </div>
      <div className="row text-center p-2">
        <div className="socials d-flex justify-content-center">
          <div className="p-1">
            <a
              href="https://github.com/GCET-CSE2022"
              target="_black"
              className="icon-link"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <span>|</span>
          </div>
          <div className="p-1">
            <a
              href="https://chat.whatsapp.com/L5vYSCtHPNF5Pg2y9CWVL0"
              target="_black"
              className="icon-link"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <span>|</span>
          </div>
          <div className="p-1">
            <a
              href="https://discord.gg/y44tDqVYdH"
              target="_black"
              className="icon-link"
            >
              <i className="fa-brands fa-discord"></i>
            </a>
            <span>|</span>
          </div>
          <div className="p-1">
            <a
              href="https://t.me/codeclubio"
              target="_black"
              className="icon-link"
            >
              <i className="fa-brands fa-telegram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Social;
