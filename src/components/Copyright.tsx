import React from "react";

const Copyright = () => {
  const year = new Date().getFullYear();
  return <p className="text-lg">&#169; Will Keeble {year}</p>;
};

export default Copyright;
