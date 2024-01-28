// App.js
import React, {useContext, useEffect, useRef, useState} from 'react';
import Header from './components/Header';
import SlidingMenu from './components/SlidingMenu';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import './App.css';
import PhotoFrame from "./components/PhotoFrame";
import {aiMlProjects, softwareProjects, ResearchMLProjects} from './projectData'
import ThemeContext from "./ThemeContext";
import { Button, Fab } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function App() {
    const { dark } = useContext(ThemeContext); // Use the context
    const aiMlRef = useRef(null);
    const softwareEngRef = useRef(null);
    const researchMlRef = useRef(null);
    const [showGoBack, setShowGoBack] = useState(false);
    // ... add refs for other sections if necessary

    const sectionRefs = [
        { label: 'AI/ML Projects', ref: aiMlRef },
        { label: 'Software Engineering Projects', ref: softwareEngRef },
        {label: 'Research ML Projects', ref: researchMlRef}
        // ... add other sections here
    ];



    // Define the style for the App based on the dark mode
    const appStyle = {
        backgroundColor: dark ? '#000' : '#FFF', // Dark or light background
        color: dark ? '#FFF' : '#000', // Dark or light text
        minHeight: '100vh', // Ensure full height
    };

    const buttonStyle = {
        padding: '10px 15px', // You can adjust the padding to your preference
        margin: '0', // Removing margin since it's handled by the container now
        backgroundColor: '#d3d3d3', // Dull-colored background
        color: '#333', // Dark text
        boxShadow: 'none', // Flat look
        textTransform: 'none', // Normal text transform
    };

    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: 'space-evenly',
        padding: '20px 0',
    };

    const headerStyle = {
        textAlign: 'center'
    };


    const scrollToSection = (ref) => {
        if(ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setShowGoBack(true);
            } else {
                setShowGoBack(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);


    return (
        <div className="App" style={appStyle}>
            <Header />
            <PhotoFrame />

            {/* Buttons for scrolling */}
            <div style={buttonContainerStyle}>
                <Button variant="contained" onClick={() => scrollToSection(aiMlRef)} style={buttonStyle}>
                    AI/ML Projects
                </Button>
                <Button variant="contained" onClick={() => scrollToSection(researchMlRef)} style={buttonStyle}>
                    Research ML Projects
                </Button>
                <Button variant="contained" onClick={() => scrollToSection(softwareEngRef)} style={buttonStyle}>
                    Software Engineering Projects
                </Button>
            </div>

            <div ref={aiMlRef}>
                <h2 style={headerStyle}>AI/ML Projects</h2>
                <ProjectList projects={aiMlProjects}/>

            </div>
            <div ref={researchMlRef}>
                <h2 style={headerStyle}>Research ML Projects</h2>
                <ProjectList projects={ResearchMLProjects}/>
            </div>
            <div ref={softwareEngRef}>
                <h2 style={headerStyle}>Software Engineering Projects</h2>
                <ProjectList projects={softwareProjects}/>
            </div>

            {/* Go Back Button */}
            {showGoBack && (
                <Fab color="secondary" style={{ position: 'fixed', bottom: 20, left: 20 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <ArrowUpwardIcon />
                </Fab> )}

            <Footer/>
        </div>
    );
}

export default App;