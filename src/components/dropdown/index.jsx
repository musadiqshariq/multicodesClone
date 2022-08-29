import React, {useState} from "react";
import dropdownCss from "./dropdown.module.css"

export const Dropdown = ({name, description}) => {
    const [cond, setCond] = useState(false);
    return(
        <div className = {dropdownCss.main}>
            <div className = {dropdownCss.iconDiv} onClick = {() => setCond(!cond)}>
            {cond ? <span className={`fas fa-chevron-up ${dropdownCss.icon}`}></span> : <span className={`fas fa-chevron-down ${dropdownCss.icon}`}></span> }
            <p>
                {name}
            </p>
            </div>
            {cond ? 
            <p>
            {description}
            </p> : null}
        </div>
    )
}