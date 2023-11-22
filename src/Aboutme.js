import Typewriter from "./typewriter";
import myphoto from "./myphoto.jpg";
import InputFileUpload from "./github";
import * as React from 'react';
import Button from '@mui/material/Button';
import { BiLogoGmail } from 'react-icons/bi';
import {BsLinkedin} from 'react-icons/bs'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import portfolio from './portfolio.png';
import todo from './todo.png'
import farmville from './farmville.png'
import bookland from './bookland.png'
import imgsmart from './imgsmart.png'

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
            <img src={myphoto} alt="myimg"></img>
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
        
        <div class= "projects">
        <h1> Projects</h1>
        </div>
        <div class="cards">
          
        <Card sx={{ maxWidth: 345 }} onClick={() => openInNewTab("https://github.com/dhruvhc2710/Portfolio")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={portfolio}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            My Portfolio
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tech Stack Used : React, MUI, HTML, CSS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} onClick={() => openInNewTab("https://github.com/dhruvhc2710/mytodo")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={todo}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Todo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tech Stack Used : React, HTML, CSS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} onClick={() => openInNewTab("https://github.com/dhruvhc2710/Agricultural-Analysis-Based-on-Environmental-Factors")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={farmville}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Crop Prediction based on environmental conditions
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tech Stack Used : Python, HTML, CSS, PHP, tkinter
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} onClick={() => openInNewTab("https://github.com/dhruvhc2710/CoursePaymentContract")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imgsmart}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Course Payment Contract
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tech Stack Used : solidity
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card sx={{ maxWidth: 345 }} onClick={() => openInNewTab("https://github.com/dhruvhc2710/Bookland/tree/main")}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={bookland}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            BookLand
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tech Stack Used : Django, Python, HTML, CSS
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
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
