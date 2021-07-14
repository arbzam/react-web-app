import React from "react";
import HeaderText from "../HeaderText/HeaderText";
import "./Header.css";
const Header = () => {
  return (
    <>
      <section className="main-header">
        <div className="container">
          <HeaderText />
        </div>
      </section>
    </>
  );
};
export default Header;
