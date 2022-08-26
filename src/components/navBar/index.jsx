import React from "react";
import navBarCss from "./navBar.module.css";
import logo from "../../assits/images/logo.png";

export const NavBar = () => {
    return(
        <div style = {{width: "90%", margin: "0px auto", marginTop: 20}}>

        <nav className="navbar navbar-expand-lg navbar-light">
  <a className="navbar-brand" href="#">
    <img src = {logo} width = "150px" height = "90px" />
    </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className={`collapse navbar-collapse ${navBarCss.pages}`} id="navbarNav">
    <ul className="navbar-nav">
      <li className={`nav-item ${navBarCss.pageLi}`}>
        <a className={`nav-link text-dark h6 ${navBarCss.pageA}`}>HOME</a>
      </li>
      <li className={`nav-item ${navBarCss.pageLi}`}>
        <a className={`nav-link text-dark h6 ${navBarCss.pageA}`}>ABOUT US</a>
      </li>
      <li className={`nav-item ${navBarCss.pageLi}`}>
        <a className={`nav-link text-dark h6 ${navBarCss.pageA}`}>OUR PORTFOLIO</a>
      </li>
      <li className={`nav-item  ${navBarCss.pageLi}`}>
        <button class = {`${navBarCss.qoutebtn} h6`}>
            GET A QOUTE
        </button>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}