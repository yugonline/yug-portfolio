import React, { useContext } from 'react';
import ThemeContext from "../ThemeContext";

function PhotoFrame() {
    const { dark } = useContext(ThemeContext);

    const photoFrameStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: dark ? '#000' : '#FFF', // Dark or light background for the photo frame
        color: dark ? '#FFF' : '#333', // Text color
    };

    const imageStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        // Include any other image-specific styles here
    };

    const textStyle = {
        margin: '20px auto',
        // Include any other text-specific styles here
    };

    return (
        <div style={photoFrameStyle}>
            <img
                src="myphoto.jpg" // Replace with your photo path
                alt="Your Name"
                style={imageStyle}
            />
            <p style={textStyle}>
                Hello! Welcome to my Project portfolio. My name is Yug Shende and I am currently a Software Developer at <a href={"https://velocityglobal.com"} target={"_blank"}>Velocity Global LLC </a>
            At my time at Velocity GLobal I am responsible for the IAM infrastructure of the org. Thus maintaining authorization and authentication is my job. We are currently building the CIAM and EIAM for the org
            </p>
            <p style={textStyle}>
                Before my time at Velocity, I was at Nordstrom for 5 years where I was the Tech Lead for the Inventory Deployment team.
                There, I maintained a healthy growth profile and led a team of 5 engineers and 12 contractors for Tech modernization as well as modern Inventory management greenfield projects.
            </p>
            <p style={textStyle}>
                In my free time I like to build stuff, write (Currently writing a book; read on to find out!), I also like to soothe my anxiety by coloring or listening to music!
                Eventually I plan to put my favorite playlist on here but I haven't made it yet!
            </p>
        </div>
    );
}

export default PhotoFrame;
