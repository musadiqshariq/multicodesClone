import React from "react";
import { Footer, Input, NavBar } from "../../components";
import qouteCss from "./qoute.module.css";

export const Qoute = () => {
  return (
    <div>
      <NavBar />
      <div className={qouteCss.div1}>
        <div>
          <h3>Get a Quote</h3>
          <p>READY TO START A VIDEO PRODUCTION PROJECT?</p>
        </div>
      </div>
      <div className={qouteCss.div2}>
        <div>
          <div className={qouteCss.div2FirstDiv}>
            <div>
              <span className="far fa-envelope"></span>
              <h4>hello@multikodes.com</h4>
            </div>
            <div>
              <span className="fas fa-phone-alt"></span>
              <h4>+1806-570-2722</h4>
            </div>
            <div>
              <span className="fas fa-map-marker-alt"></span>
              <h4>6308 Lauren Ashleigh Dr, Amarillo tx, 79119</h4>
            </div>
          </div>
          <div className={qouteCss.div2SecondDiv}>
            <h3>LET'S TALK!</h3>
            <p>Please fill out the form below and we’ll get in touch.</p>
            <div className={qouteCss.inputDiv}>
              <div>
                <Input color="#0189d8" placeholder="Name" />
              </div>
              <div>
                <Input color="#0189d8" placeholder="Your Email (Official)" />
              </div>
            </div>
            <div className={qouteCss.inputDiv}>
              <div>
                <Input color="#0189d8" placeholder="Phone Number" />
              </div>
              <div>
                <select>
                  <option selected value="" disabled>
                    Select a Service
                  </option>
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
      </div>
      <Footer />
    </div>
  );
};
