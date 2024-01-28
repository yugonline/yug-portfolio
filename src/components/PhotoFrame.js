import React, {useContext, useState} from 'react';
import ThemeContext from "../ThemeContext";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import Snackbar from "@mui/material/Snackbar";

function PhotoFrame() {
    const { dark } = useContext(ThemeContext);
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const photoFrameStyle = {
        textAlign: 'center',
        padding: '20px 9vw',
        margin: '20px auto',
        backgroundColor: dark ? '#000' : '#FFF', // Dark or light background for the photo frame
        color: dark ? '#FFF' : '#333', // Text color

    };

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('your-email@example.com'); // Replace with your email
        setOpenSnackbar(true);
        setTimeout(() => {
            setOpenSnackbar(false);
        }, 1000); // Alert disappears after 1 second
    };

    const imageStyle = {
        width: '250px',
        height: '250px',
        borderRadius: '50%',
        objectFit: 'cover',
        // Include any other image-specific styles here
    };

    const textStyle = {
        margin: '20px auto',
        // Include any other text-specific styles here
    };

    const textStyleItalics = {
        margin: '20px auto',
        fontStyle: 'italic'
        // Include any other text-specific styles here
    };

    const iconDivStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0'
    }

    return (
        <div style={photoFrameStyle}>
            <img
                src="myphoto.jpg" // Replace with your photo path
                alt="Your Name"
                style={imageStyle}
            />
            <p style={textStyleItalics}>Engineering the Future: Blending AI Innovation with Real-World Solutions.</p>
            <p style={textStyle}>
                Hello! My name is Yug Shende and I am currently a Software Developer at <a href={"https://velocityglobal.com"} target={"_blank"}>Velocity
                Global LLC. </a>
                At my time at Velocity Global I am responsible for the IAM infrastructure of the org. Thus maintaining
                authorization and authentication is my job. We are currently building the CIAM and EIAM for the org.
            </p>
            <p style={textStyle}>
                Before Velocity, I was at Nordstrom. There, I managed to get 3 promotions in 5 years and led a team of 5 engineers and 12 contractors for
                Tech modernization as well as modern Inventory management greenfield projects. I also co-producted an entire AI greenfield project from scratch with support from leadership.
            </p>
            <p style={textStyle}>
                Neurodiverse, Passionate about AI, Problem Solver, Loves long walks!
            </p>

            <div style={iconDivStyle}>
            <IconButton href="https://www.linkedin.com/in/yugshende" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon style={{color: dark ? '#333' : '#333'}}/>
            </IconButton>
            <IconButton href="https://github.com/yugonline" target="_blank" rel="noopener noreferrer">
                <GitHubIcon style={{color: dark ? '#333' : '#333'}}/>
            </IconButton>
            <IconButton onClick={handleCopyEmail}>
                <EmailIcon style={{color: dark ? '#333' : '#333'}}/>
            </IconButton>
        </div>
            <Snackbar
                open={openSnackbar}
                message="Email copied!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </div>
    );
}

export default PhotoFrame;
