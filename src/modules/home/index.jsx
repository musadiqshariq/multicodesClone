import React from "react";
import { NavBar } from "../../components";
import HomeCss from "./home.module.css";
import pic1 from "../../assits/images/Picture-1.png";
import pic2 from "../../assits/images/pic2.png";
import pic3 from "../../assits/images/pic3.jpg";
import pic4 from "../../assits/images/pic4.jpg";
import pic5 from "../../assits/images/pic5.jpg";
import pic6 from "../../assits/images/pic6.jpg";
import pic7 from "../../assits/images/pic7.jpg";
import pic8 from "../../assits/images/pic8.jpg";
import pic9 from "../../assits/images/pic9.jpg";
import pic10 from "../../assits/images/pic10.jpg";
import pic11 from "../../assits/images/pic11.jpeg";
import pic12 from "../../assits/images/pic12.jpg";
import pic13 from "../../assits/images/pic13.jpg";
import pic14 from "../../assits/images/cropped-logo.png";


export const Home = () => {
  window.onscroll = function(){
    scrollRotate();
  }
  function scrollRotate() {
    let rotateLogo = document.getElementById("rotateLogo");
    rotateLogo.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
}
  return <div>
    
    <NavBar />
    <div class = {HomeCss.div2}>
        <h3 class = {HomeCss.div2H3}>
            WE ARE HERE TO KEEP YOU ALWAYS AT THE TOP
        </h3>
        <img class = {HomeCss.div2Img} src = {pic1} />
    </div>
    <div class = {HomeCss.div3}>
      <div class = {HomeCss.div3TextDiv}>
        <h3>WHAT WE DO !</h3>
        <div>
          <p>
          Multikodes understands the day-to-day challenges of 
          an ordinary businessman, and thus, it works with the 
          core dictum of providing a unique identity to your business. 
          Having a team of IT connoisseurs, we deliver modern business 
          solutions under one roof. With unmatched ideas, passion, and 
          commitment towards perfection, we strive to bring a commendable 
          change to your business.
          </p>
          <p>
          In this competitive era, the demands of potential customers 
          have increased dramatically. No matter which business it is, 
          there is a dire need for a remarkable 
          online presence. If done strategically, 
          it can bring a real boost in sales and help in gaining a competitive edge.
          </p>
          <p>
          Be it a newly established firm or a multinational organization 
          earning hefty bucks every year, and we are ready to handle every 
          business. By keeping our promise towards betterment, 
          we provide remarkable graphic designing services,
           corporate websites, 2D/ 3D Animations ,explainer video to 
           illustrate your product or services and highly engaging mobile apps.
          </p>
          <p>
          We truly believe in long term business relationships. 
          If you were to kickstart your 
          project, our team of artists and animators will work 
          with you every step of the way to ensure that your goals are met.
          </p>
        </div>
      </div>
      <div class = {HomeCss.div3BtnDiv}>
        <div class = {HomeCss.div3LongBtn}>
          <p>
            WEB DESIGN & WEB APP DEVELOPMENT
          </p>
        </div>
        <div style = {{marginTop: "20px"}} class = {HomeCss.div3ShortBtnDiv}>
          <div class = {HomeCss.div3ShortBtn}>
            <p>
              2D/3D ANIMATION
            </p>
          </div>
          <div class = {HomeCss.div3ShortBtn}>
          <p>
              VIDEO EDITING
            </p>
          </div>
        </div>
        <div class = {HomeCss.div3imgDiv}>

        <img id = "rotateLogo" src = {pic2} width = "360px" height = "360px" />
        </div>
        <div class = {HomeCss.div3ShortBtnDiv}>
          <div class = {HomeCss.div3ShortBtn}>
            <p>
              GRAPHIC DESINGING
            </p>
          </div>
          <div class = {HomeCss.div3ShortBtn}>
          <p>
              MARKETING
            </p>
          </div>
        </div>
        <div  style = {{marginTop: "20px"}} class = {HomeCss.div3LongBtn}>
          <p>
            SOFTWARE DEVELOPMENT
          </p>
        </div>
      </div>
    </div>
    <div class = {HomeCss.div4}>
      <img src = {pic3} />
      <div style = {{backgroundColor: "#37456f"}}>
        <div class = {HomeCss.div4firstDiv}>
          <h3>
          2D/3D ANIMATION
          </h3>
          <p>
          Multikodes offers 2d/3d Animation Services
           that help businesses differentiate their 
           content and take their marketing, business 
           and social media presence to the next level.
          </p>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Storyboard
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Character Animation
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Whiteboard
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Stop Motion
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Expainer video
        </p>
          </div>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Cooperate video
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
Business Video
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        T.V Commercials
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Health Care Videos
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        T.V Series
        </p>
          </div>
        </div>
      </div>
    </div>
    <div class = {HomeCss.div4}>
      <img src = {pic7} />
      <div style = {{backgroundColor: "#879e00"}}>
        <div class = {HomeCss.div4firstDiv}>
          <h3>
          VIDEO EDITING
          </h3>
          <p>
          Anybody can edit a video, but the challenge is 
          to do it the right way. Let our editors work their 
          magic on your footage and make your story sparkle. 
          If you want videos quickly and professionally edited, 
          to reach a wider audience, engage more people, and 
          create lasting memories, then we are here to oblige 
          and fulfill the task.
          </p>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Co Operate
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Film Editting
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Interview
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Sports
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        360 Videos
        </p>
          </div>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Wedding
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Social Media
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Ads
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Product
        </p>
          </div>
        </div>
      </div>
    </div>
    <div class = {HomeCss.div4}>
      <img src = {pic8} />
      <div style = {{backgroundColor: "#18d2c2"}}>
        <div class = {HomeCss.div4firstDiv}>
          <h3>
          GRAPHIC DESIGNING
          </h3>
          <p>
          Whether you want the brutalist look or 
          the minimal feel, a flat design, or a 
          skeuomorphic experience, our ingenious 
          designers can create design it all.
          </p>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Logo Design
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        illustration
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Vectors
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Mockups
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Brochere
        </p>
          </div>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Templates
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Web Design
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        App Design
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Infographic Design
        </p>
          </div>
        </div>
      </div>
    </div>
    <div class = {HomeCss.div4}>
      <img src = {pic6} />
      <div style = {{backgroundColor: "#c10a7e"}}>
        <div class = {HomeCss.div4firstDiv}>
          <h3>
          WEB DESIGN & DEVELOPMENT
          </h3>
          <p>
          We create stunning dynamic websites 
          and web apps with modish designs to 
          keep you on top of the software-driven 
          revolution
          </p>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        PHP Web Development
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        WordPress
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          Angular
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Laravel
        </p>
          </div>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Yii2
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        UI/UX Design
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Codeingator
        </p>
          </div>
        </div>
      </div>
    </div>
    <div class = {HomeCss.div4}>
      <img src = {pic4} />
      <div style = {{backgroundColor: "#dac000"}}>
        <div class = {HomeCss.div4firstDiv}>
          <h3>
          SOFTWARE DEVELOPMENT
          </h3>
          <p>
          when it comes to tackling every type of 
          technological scenario, we are at the 
          forefront of innovation. We work on end-to-end 
          web development projects to deliver dynamic and 
          advanced HTML5, .NET, C#, and C++ applications.
          </p>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Microsoft Technologies
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Mobile App Development
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Desktop Application
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        JAVa App Application
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          C#
        </p>
          </div>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
       .Net
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
          IOS
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Android
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Iconic
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Xamarin
        </p>
          </div>
        </div>
      </div>
    </div>
    <div class = {HomeCss.div4}>
      <img src = {pic5} />
      <div style = {{backgroundColor: "#8f274c"}}>
        <div class = {HomeCss.div4firstDiv}>
          <h3>
          MARKETING
          </h3>
          <p>
          Our team of professionals will always keep
           at the top of your competators.
          </p>
        </div>
        <div class = {HomeCss.div4secondDiv}>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Link Building Services
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Content Writing Services
        </p>
          </div>
          <div>
        <span class="fas fa-check-double"></span>
        <p>
        Best SEO Services
        </p>
          </div>
        </div>
        <div class = {HomeCss.div4secondDiv}>
        </div>
      </div>
    </div>
    <h3 class = {HomeCss.portfolioHeading}>
      OUR PORTFOLIO
    </h3>
    <div class = {HomeCss.div5}>
      <div>
        <img src={pic10} />
        <img src={pic9} />
        <img src={pic11} />
      </div>
      <div>
        <img src={pic12} />
        <img src={pic13} />
        <img src={pic14} />
      </div>
    </div>
    <div class = {HomeCss.portfolioBtnDiv}>

    <button class = {HomeCss.portfolioBtn}>
      CHECK OUR ENTIRE PORTFOILIO
    </button>
    </div>
  </div>;
};