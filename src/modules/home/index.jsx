import React from "react";
import { NavBar } from "../../components";
import HomeCss from "./home.module.css";
import pic1 from "../../assits/images/Picture-1.png"

export const Home = () => {
  return <div>
    
    <NavBar />
    <div class = {HomeCss.div2}>
        <h3 class = {HomeCss.div2H3}>
            WE ARE HERE TO KEEP YOU ALWAYS AT THE TOP
        </h3>
        <img class = {HomeCss.div2Img} src = {pic1} />
    </div>
  </div>;
};