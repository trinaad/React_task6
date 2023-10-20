import React from "react";

const Header = () => {
  return (
    <header>
      <img
        src={process.env.PUBLIC_URL + "/Profilepic.jpg"}
        alt="Trinaad"
        width="150"
        height="150"
      />
      <h1>Trinaad</h1>
      <p>Web Developer</p>
    </header>
  );
};

export default Header;
