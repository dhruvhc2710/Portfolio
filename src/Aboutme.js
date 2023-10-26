import Typewriter from "./typewriter";
import myphoto from "./myphoto.jpg";
import InputFileUpload from "./github";
import * as React from 'react';
import Button from '@mui/material/Button';
import { BiLogoGmail } from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs'
//import {resume} from "/Users/dhruvhasmukhbhaichaudhary/Documents/100xdevsPractice/myporfolio/src/Dhruv_hc_Resume.pdf"

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};



const Script = () => {
  return (
    <div>
        <div class="type">
            <h1>
                About Me
            </h1>     
        </div>
        <div class="about">
        <div class="pic">
            <img src={myphoto}></img>
        </div>
        <div>
            <div class="details">
                <h3>
                    <Typewriter text="I’m a Full Stack Software Development student with 2+ years of professional IT experience, actively seeking a January 2024 co-op. I excel in dynamic environments, quickly adapting to new skills and projects." delay={50} />
                </h3>
            </div>
            <div>
                <InputFileUpload/>
            </div>
        </div>
            
        </div>
        <div class="coffee">
            <h1>
            Let's do a Coffee Chat
            </h1>
            <div class="contact">
            <div class="mail">
            <Button component="label" variant="contained" startIcon={<BiLogoGmail />} role="link" onClick={() => openInNewTab("mailto:dhruvhc2710@gmail.com")}>
                Mail
            </Button>
            </div>
            <div class="linkeidn">
            <Button component="label" variant="contained" startIcon={<BsLinkedin />} role="link" onClick={() => openInNewTab("https://www.linkedin.com/in/dhruv-chaudhary-045270141/")}>
                Linkeidn
            </Button>
            </div>
            </div>
            
        </div>
    </div>

  );
};

export default Script;