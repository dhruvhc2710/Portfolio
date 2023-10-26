import * as React from 'react';
import Button from '@mui/material/Button';
import { AiFillGithub } from 'react-icons/ai';
import {GrDocumentUser} from 'react-icons/gr'
//import {resume} from "/Users/dhruvhasmukhbhaichaudhary/Documents/100xdevsPractice/myporfolio/src/Dhruv_hc_Resume.pdf"

const openInNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

export default function InputFileUpload() {
  return (
    <div>
      <br></br>
      <br></br>
      <h3>
        Check out my work here : 
      </h3>
      <Button component="label" variant="contained" startIcon={<AiFillGithub />} role="link" onClick={() => openInNewTab("https://github.com/dhruvhc2710")}>
        Github
      </Button>
      <br></br>
      <br></br>
      <h3>
        Get to know me more : 
      </h3>
      <Button component="label" variant="contained" startIcon={<GrDocumentUser />} role="link" onClick={() => openInNewTab("https://drive.google.com/file/d/19uAyCah36Am2PafJAIMP-BSKvi4zHLa-/view?usp=sharing")}>
        Resume
      </Button>
      <br></br>
      <br></br>
      <h3>
        Ask me about : 
      </h3>
      <br></br>
      <h4>
        Frontend :
      </h4>
      ReactJS, HTML, CSS, Material UI <br></br>
      <h4>
        Backend :  
      </h4>
      NodeJS, ExpressJS, JavaScript, TypeScript<br></br>
      <h4>
        Tools :
      </h4>
      Docker, AWS, Salesforce Sales Cloud, Salesforce Marketing Cloud, MYSQL, PL/SQL, MongoDB, Git, Github, Bitbucket, Linux Shell
    </div>
  );
}
