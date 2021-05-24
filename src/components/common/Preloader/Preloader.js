import React from "react";
import preloader from "../../../assets/images/preloader.svg";

const Preloader = () => (
  <img
    alt="preloader"
    src={preloader}
    style={{ position: "fixed", top: `50%`, left: `50%` }}
  />
);

export default Preloader;
