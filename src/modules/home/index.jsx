import React from "react";
import { Dropdown, Footer, Input, NavBar } from "../../components";
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
import pic15 from "../../assits/images/pic14.png";
import pic16 from "../../assits/images/pic15.webp";
import pic17 from "../../assits/images/pic16.png";
import pic18 from "../../assits/images/pic17.png";
import pic19 from "../../assits/images/qmark.png";
import logo from "../../assits/images/logo.png";

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
    <div className = {HomeCss.div2}>
        <h3 className = {HomeCss.div2H3}>
            WE ARE HERE TO KEEP YOU ALWAYS AT THE TOP
        </h3>
        <img className = {HomeCss.div2Img} src = {pic1} />
    </div>
    <div className = {HomeCss.div3}>
      <div className = {HomeCss.div3TextDiv}>
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
      <div className = {HomeCss.div3BtnDiv}>
        <div className = {HomeCss.div3LongBtn}>
          <p>
            WEB DESIGN & WEB APP DEVELOPMENT
          </p>
        </div>
        <div style = {{marginTop: "20px"}} className = {HomeCss.div3ShortBtnDiv}>
          <div className = {HomeCss.div3ShortBtn}>
            <p>
              2D/3D ANIMATION
            </p>
          </div>
          <div className = {HomeCss.div3ShortBtn}>
          <p>
              VIDEO EDITING
            </p>
          </div>
        </div>
        <div className = {HomeCss.div3imgDiv}>

        <img id = "rotateLogo" src = {pic2} width = "360px" height = "360px" />
        </div>
        <div className = {HomeCss.div3ShortBtnDiv}>
          <div className = {HomeCss.div3ShortBtn}>
            <p>
              GRAPHIC DESINGING
            </p>
          </div>
          <div className = {HomeCss.div3ShortBtn}>
          <p>
              MARKETING
            </p>
          </div>
        </div>
        <div  style = {{marginTop: "20px"}} className = {HomeCss.div3LongBtn}>
          <p>
            SOFTWARE DEVELOPMENT
          </p>
        </div>
      </div>
    </div>
    <div className = {HomeCss.div4}>
      <img src = {pic3} />
      <div style = {{backgroundColor: "#37456f"}}>
        <div className = {HomeCss.div4firstDiv}>
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
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Storyboard
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Character Animation
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Whiteboard
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Stop Motion
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Expainer video
        </p>
          </div>
        </div>
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Cooperate video
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
Business Video
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        T.V Commercials
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Health Care Videos
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        T.V Series
        </p>
          </div>
        </div>
      </div>
    </div>
    <div className = {HomeCss.div4}>
      <img src = {pic7} />
      <div style = {{backgroundColor: "#879e00"}}>
        <div className = {HomeCss.div4firstDiv}>
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
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Co Operate
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Film Editting
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Interview
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Sports
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        360 Videos
        </p>
          </div>
        </div>
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Wedding
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Social Media
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Ads
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Product
        </p>
          </div>
        </div>
      </div>
    </div>
    <div className = {HomeCss.div4}>
      <img src = {pic8} />
      <div style = {{backgroundColor: "#18d2c2"}}>
        <div className = {HomeCss.div4firstDiv}>
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
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Logo Design
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        illustration
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Vectors
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Mockups
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Brochere
        </p>
          </div>
        </div>
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Templates
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Web Design
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        App Design
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Infographic Design
        </p>
          </div>
        </div>
      </div>
    </div>
    <div className = {HomeCss.div4}>
      <img src = {pic6} />
      <div style = {{backgroundColor: "#c10a7e"}}>
        <div className = {HomeCss.div4firstDiv}>
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
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        PHP Web Development
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        WordPress
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          Angular
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Laravel
        </p>
          </div>
        </div>
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Yii2
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        UI/UX Design
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Codeingator
        </p>
          </div>
        </div>
      </div>
    </div>
    <div className = {HomeCss.div4}>
      <img src = {pic4} />
      <div style = {{backgroundColor: "#dac000"}}>
        <div className = {HomeCss.div4firstDiv}>
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
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Microsoft Technologies
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Mobile App Development
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Desktop Application
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        JAVa App Application
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          C#
        </p>
          </div>
        </div>
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
       .Net
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
          IOS
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Android
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Iconic
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Xamarin
        </p>
          </div>
        </div>
      </div>
    </div>
    <div className = {HomeCss.div4}>
      <img src = {pic5} />
      <div style = {{backgroundColor: "#8f274c"}}>
        <div className = {HomeCss.div4firstDiv}>
          <h3>
          MARKETING
          </h3>
          <p>
          Our team of professionals will always keep
           at the top of your competators.
          </p>
        </div>
        <div className = {HomeCss.div4secondDiv}>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Link Building Services
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Content Writing Services
        </p>
          </div>
          <div>
        <span className="fas fa-check-double"></span>
        <p>
        Best SEO Services
        </p>
          </div>
        </div>
        <div className = {HomeCss.div4secondDiv}>
        </div>
      </div>
    </div>
    <h3 className = {HomeCss.portfolioHeading}>
      OUR PORTFOLIO
    </h3>
    <div className = {HomeCss.div5}>
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
    <div className = {HomeCss.portfolioBtnDiv}>

    <button className = {HomeCss.portfolioBtn}>
      CHECK OUR ENTIRE PORTFOILIO
    </button>
    </div>
    <div className = {HomeCss.div6}>
      <div className = {HomeCss.div6FirstDiv}>
        <div>
          <div>
          <h3>
            ANY LANGUAGE
          </h3>
          <img src={pic15} />
          <p>
          Do your target audience speak 
          another language? No problem, 
          videos can be produced in whatever 
          language you require.
          </p>
          <p>
          Our services also expand to script 
          translation, voice-over recordings 
          and subtitling. Some of the languages 
          we’ve worked with include Spanish, 
          Italian, German, Mandarin, Danish, French, 
          Japanese, Malaysian, Thai, Arabic and many more.
          </p>
          </div>
          <div>
          <h3>
            ANY TIME ZONE
          </h3>
          <img src={pic16} />
          <p>
          We work with companies from 
          all over the world so we 
          understand the importance of 
          being handy whenever you need us.
          </p>
          <p>
          We’re available around the clock 
          to attend to your needs, any time of day.
          </p>
          <p>
          Wherever you are, whenever you are, we are ready for you!
          </p>
          </div>
        </div>
        
      </div>
      <div className = {HomeCss.div6SecondDiv}>
      <div>
          <h3>
            WIN THE GAME
          </h3>
          <img src={pic17} />
          <p>
          In it to win it? Our aim is to 
          work together with you to make 
          sure that your business stands 
          out from the competition.
          </p>
          <p>
          It starts with a research about 
          you and your competition. We 
          consult with you to pick the best 
          video style that grabs your audience 
          attention & converts.
          </p>
          <p>
          A quality video can go a long way in a short period of time.
          </p>
          </div>
          <div>
          <h3>
            CUSTOMER ROCKS
          </h3>
          <img src={pic18} />
          <p>
          Making you feel valued and 
          looked after is a priority, 
          hence customer service is the 
          core of our business.
          </p>
          <p>
          You’ll be involved at every stage 
          of your project’s journey.
          </p>
          <p>
          Our commitment to customer care and 
          investment in long-term relationships
           is what keeps clients coming back for more
          </p>
          </div>
      </div>
    </div>
    <div className = {HomeCss.div7}>
      <div className = {HomeCss.div7FirstDiv}>
        <img src={logo} alt="" />
      </div>
      <div className = {HomeCss.div7SecondDiv}>
        <h3>
          LET'S TALK!
        </h3>
        <p>
        Please fill out the form below and we’ll get in touch.
        </p>
        <div className = {HomeCss.inputDiv}>
          <div>
        <Input placeholder="Name" />
          </div>
          <div>
        <Input placeholder="Your Email (Official)" />
          </div>
        </div>
        <div  className = {HomeCss.inputDiv}>
          <div>
        <Input placeholder="Phone Number" />
          </div>
          <div>
            <select>
            <option selected value="" disabled>Select a Service</option>
              <option value="Option1">Option1</option>
              <option value="Option2">Option2</option>
              <option value="Option3">Option3</option>
              <option value="Option4">Option4</option>
              <option value="Option5">Option5</option>
              <option value="Option6">Option6</option>
            </select>
        {/* <Input placeholder="Service" /> */}
          </div>
        </div>
        <textarea placeholder="Please explain about your project, what style of video you like, video length and required turnaround time."></textarea>
        <button>SEND</button>
      </div>
    </div>
    <div className = {HomeCss.div8}>
      <div  className = {HomeCss.div8FirstDiv}>
        <h3>
          QUESTIONS ?
        </h3>
        <Dropdown name = "Why should I choose your team?" description="We are committed to our customers, working in partnership with you to create high quality, bespoke content that fits your requirements precisely." />
        <Dropdown name = "What are the usual payment terms?" description="Our standard terms are as follows: 50% upfront , 25% half way through and 25% upon completion." />
        <Dropdown name = "What type of approach suits my business?" description="This depends on your tastes and requirements. Our creative team will work with you, listening to your needs and giving advice to find the best style for you and your business." />
        <Dropdown name = "Can you speed up the Development/production process?" description="Yes, we can! However, this requires us to prioritise our efforts towards your project, so a ‘rush fee’ may be incurred." />
        <Dropdown name = "Why custom videos  or websites are expensive?" description="To create custom video of a premium standard, it takes time, attention to detail and the expertise of an in-house team of talented artists. Unlike other industries, there is no shortcuts to cut down costs without affecting the quality. Same goes for Websites and other developments." />
      </div>
      <div  className = {HomeCss.div8SecondDiv}>
        <img src={pic19} />
      </div>
    </div>
    <div className = {HomeCss.map}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6997357.42580287!2d-104.5705391531451!3d31.090870684932927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864070360b823249%3A0x16eb1c8f1808de3c!2sTexas%2C%20USA!5e0!3m2!1sen!2s!4v1661784178397!5m2!1sen!2s" width="100%" height="350" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <Footer />
  </div>;
};