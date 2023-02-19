import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <div className="flex bg-[#183A1D] text-white px-10 py-4 justify-between items-center">
        <div className="flex items-center gap-x-10">
          <div>
            <img src="./images/logo1.png" alt="" className="w-[300px]" />
          </div>
          <div>
            <ul className="flex gap-x-10 font-medium text-xl">
              <li className="cursor-pointer hover-underline-animation">
                <a href="/">Buy</a>
              </li>
              <li className="cursor-pointer hover-underline-animation">
                <a href="/">Sell</a>
              </li>
              <li className="cursor-pointer hover-underline-animation">
                <a href="/">Rent</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button className="bg-[#FFFBF5] text-[#183A1D] px-4 py-2 mr-4 border-2 border-[#FFFBF5] transition-all ease-in-out hover:bg-transparent hover:text-white hover:border-[#FFFBF5]">
            Login
          </button>
          <button className="border-2 border-[#FFFBF5] px-4 py-2 transition-all ease-in-out hover:bg-[#FFFBF5] hover:text-[#183A1D] hover:border-[#183A1D]">
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
