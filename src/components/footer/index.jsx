import React from "react";
import footerCss from "./footer.module.css";


export const Footer = () => {
    return(
        <div className = {footerCss.main}>
            <div>
                <h4>
                    OUR SERVICES
                </h4>
                <div>
                <p>
                    2d/3d Animation
                </p>
                <p>
                    Web Design & development
                </p>
                <p>
                    Video Editing
                </p>
                <p>
                    Software Development
                </p>
                <p>
                    Graphic designing
                </p>
                <p>
                    Marketing
                </p>
                </div>
            </div>
            <div>
                <h4>
                    COMPANY
                </h4>
                <div>
                <p>
                    About us
                </p>
                <p>
                    Termsof use
                </p>
                <p>
                    Privacy policy
                </p>
                <p>
                    Contact
                </p>
                </div>
            </div>
            <div>
                <h4>
                    COUNTRIES
                </h4>
                <div>
                <p>
                    USA
                </p>
                <p>
                    PAKISTAN
                </p>
                </div>
            </div>
            <div>
                <h4>
                    GET IN TOUCH
                </h4>
                <div>
                <p>
                6308 Lauren Ashleigh Dr, Amarillo tx, 79119
                </p>
                <p>
                B146, Block 2 Gulshane iqbal, Karachi, 75300
                </p>
                <p>
                +1806-570-2722
                </p>
                <p>
                +92-314-2919181
                </p>
                <p>
                hello@multikodes.com
                </p>
                </div>
            </div>
        </div>
    )
}