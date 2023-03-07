/* eslint-disable no-lone-blocks */
import React from "react";
import "./Navbar.css";
const Navbar = () => {
  {
     //colors :  yello - #FCF951 blue - #422057
  }

  return (
    <>
     

         <div className="container container-one">
         <div className="row p-1">
             <div class=" home rounded m-1 d-flex justify-content-center col-2">
                Home
             </div>
             <div class="d-flex rounded justify-content-center input p-0 col-5">
                 <input placeholder=" search cities" className="input rounded bg-light" />
             </div>
             <div class="d-flex justify-content-center m-1 rounded  search col-2">
                 search
             </div>
             <div class="d-flex justify-content-center m-1 rounded cities col-2 ">
                 cities
             </div>
         </div>
       </div>
    </>
  );
};

export default Navbar;
