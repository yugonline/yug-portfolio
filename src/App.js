// App.js
import React, {useContext, useRef} from 'react';
import Header from './components/Header';
import SlidingMenu from './components/SlidingMenu';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import './App.css';
import PhotoFrame from "./components/PhotoFrame";
import {aiMlProjects, softwareProjects, ResearchMLProjects} from './projectData'
import ThemeContext from "./ThemeContext";
function App() {
    const { dark } = useContext(ThemeContext); // Use the context
    const aiMlRef = useRef(null);
    const softwareEngRef = useRef(null);
    const researchMlRef = useRef(null);
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


    return (
        <div className="App" style={appStyle}>
            <Header />
            <PhotoFrame />
            <div ref={aiMlRef} >
                <h2 >AI/ML Projects</h2>
                <ProjectList projects={aiMlProjects} />

            </div>
            <div  ref={researchMlRef}>
                <h2 >Research ML Projects</h2>
                <ProjectList projects={ResearchMLProjects} />
            </div>
            <div ref={softwareEngRef} >
                <h2 >Software Engineering Projects</h2>
                <ProjectList projects={softwareProjects} />
            </div>
            <Footer  />
        </div>
    );
}

export default App;