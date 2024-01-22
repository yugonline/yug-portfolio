import React, { useContext } from 'react';
import ThemeContext from "../ThemeContext";

function PhotoFrame() {
    const { dark } = useContext(ThemeContext);

    const photoFrameStyle = {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: dark ? '#000' : '#FFF', // Dark or light background for the photo frame
        color: dark ? '#FFF' : '#333', // Text color
        transition: 'all 0.3s ease',
    };

    const imageStyle = {
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        objectFit: 'cover',
        // Include any other image-specific styles here
    };

    const textStyle = {
        maxWidth: '600px',
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
                Hello! Welcome to my portfolio. My name is Yug Shende and I am currently a Software Developer at <a href={"https://velocityglobal.com"} target={"_blank"}>Velocity Global LLC </a>
            </p>
        </div>
    );
}

export default PhotoFrame;
