import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  if (history.location.pathname !== "/404") history.push("/404");
  return <h1 style={{ textAlign: "center" }}>PAGE NOT FOUND</h1>;
};

export default NotFound;
