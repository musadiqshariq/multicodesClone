import React from "react";
import { Footer, NavBar } from "../../components";
import aboutCss from "./about.module.css"

export const About = () => {
    return(
        <div>
            <NavBar />
            <div className={aboutCss.div1}>
                <div>
                <h3>
                    About Us
                </h3>
                <p>
                    We know it's a boring page but every website needs one!
                </p>
                </div>
            </div>
            <div className={aboutCss.div2}>
                <div className={aboutCss.div2FirstDiv}>
                    <h3>
                    Creativity takes courage
                    </h3>
                    <p>
                    MultiKodes is a team of professional 
                    and dedicated designers, animators & 
                    developers hungry to learn about your 
                    business and what you do and then create 
                    something we will be proud of.
                    </p>
                </div>
                <div className={aboutCss.div2SecondDiv}>
                    <div>

                    </div>
                </div>
            </div>
            <div className={aboutCss.div2}>
                <div className={aboutCss.div2SecondDiv}>
                    <div className={aboutCss.div2SecondDiv2}>
                        
                    </div>
                </div>
                <div className={aboutCss.div2FirstDiv}>
                    <h3>
                    A complex topic? Bring it on!
                    </h3>
                    <p>
                        Our core strength lies in our ability to visualize complex topics and technical subjects. We bring our clients’ ideas to life with professional & easy-to-understand visuals.
                    </p>
                    <p>
                        Work quality is given utmost importance. Each work is carefully crafted and undergoes strict internal inspection to ensure results that go beyond expectations.
                    </p>
                    <p>
                         We are backed by a creative international team of script writers, storyboard artists, illustrators and animators, developers & marketers with one goal – creating a product that can boost your business sales in no time.
                    </p>
                </div>
            </div>
            <div className={aboutCss.div3}>
                <div className={aboutCss.div3FirstDiv}>
                    <h4>
                    Versatile approach
                    </h4>
                    <p>
                    We seek for new challenges that take us to the next level and help us improve so we can create customized content that truly delivers results for your business.
                    </p>
                </div>
                <div className={aboutCss.div3FirstDiv}>
                    <h4>
                    Creative storytelling
                    </h4>
                    <p>
                    We love storytelling. We do proper research of your brand before we brainstorm creative and unconventional ways to present your ideas using a simple, easy-to-understand Video, software or websites to connect with your customers in the best way possible.
                    </p>
                </div>
                <div className={aboutCss.div3FirstDiv}>
                    <h4>
                    Versatile approach
                    </h4>
                    <p>
                    We value our relationships with our customers. We work with you every step of the way to ensure that you’re satisfied with the outcome. Our goal is to forge a long term business partnerships. Nothing beats a happy returning customer.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}