import React from "react";
import { Footer, NavBar } from "../../components";
import portfolioCss from "./portfolio.module.css";
import coroselpic1 from "../../assits/images/coroselpic1.jpg";
import coroselpic2 from "../../assits/images/coroselpic2.jpg";
import coroselpic3 from "../../assits/images/coroselpic3.jpg";
import coroselpic4 from "../../assits/images/coroselpic4.jpg";
import coroselpic5 from "../../assits/images/coroselpic5.jpg";
import coroselpic6 from "../../assits/images/coroselpic6.jpg";
import coroselpic7 from "../../assits/images/coroselpic7.jpg";
import coroselpic8 from "../../assits/images/coroselpic8.jpg";
import coroselpic9 from "../../assits/images/coroselpic9.jpg";
import coroselpic10 from "../../assits/images/coroselpic10.jpg";
import coroselpic11 from "../../assits/images/coroselpic11.jpeg";
import coroselpic12 from "../../assits/images/coroselpic12.jpeg";
import coroselpic13 from "../../assits/images/coroselpic13.png";

export const Portfolio = () => {
  return (
    <div>
      <NavBar />
      <div className={portfolioCss.div1}>
        <div>
          <h3>Our Portfolio</h3>
          <p>
            FROM EXPLAINER VIDEOS TO CORPORATE COMMERCIALS AND ANYTHING IN
            BETWEEN.
          </p>
        </div>
      </div>
      <div className={portfolioCss.div2}>
        <h3>OUR PORTFOLIO</h3>
        <p>3D/2D Animation</p>
      </div>
      <hr style={{ marginTop: "40px", marginBottom: "20px" }} />
      <div className={portfolioCss.div3}>
        <p>
          {`1) We provide the most economical pricing with highest quality of animation. A combination which is rare`}
        </p>
        <p>
          {`2) Animation is a lengthy process our team of professional artists will help and guide you all the way through the process.`}
        </p>
        <p>
          {`3) Both 2d and 3d animation process is usually the same involving the following: Concept> Script writing> Illustrations> Storyboard creation> Model design & rigging> Animation> Lightning/Rendering > Audio & Background music.`}
        </p>
        <p>
          {`4) The more you provide us the each of the above content the less work we will have which will in turn reduce both time and money.`}
        </p>
        <p>
          {`5) Our team of professional artists can work on any animation you can think of.`}
        </p>
      </div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className={`d-block w-100 ${portfolioCss.coroselImg}`}
              src={coroselpic1}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${portfolioCss.coroselImg}`}
              src={coroselpic2}
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${portfolioCss.coroselImg}`}
              src={coroselpic3}
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${portfolioCss.coroselImg}`}
              src={coroselpic4}
              alt="Forth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${portfolioCss.coroselImg}`}
              src={coroselpic5}
              alt="Fifth slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className={`d-block w-100 ${portfolioCss.coroselImg}`}
              src={coroselpic6}
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <hr style={{ marginTop: "40px", marginBottom: "20px" }} />
      <div className={portfolioCss.div4}>
        <div className={portfolioCss.div4TextDiv}>
          <h3>Web Developement</h3>
          <p>
            Multikodes specializes in any type of Web development work you
            except from us.
          </p>
        </div>
        <div className={portfolioCss.div4BtnDiv}>
          <div>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
          </div>
          <div>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
          </div>
          <div>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
            <button>Startbuy.com</button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "40px", marginBottom: "20px" }} />
      <Footer />
    </div>
  );
};
