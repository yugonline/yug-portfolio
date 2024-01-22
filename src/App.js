// App.js
import React, { useRef } from 'react';
import Header from './components/Header';
import SlidingMenu from './components/SlidingMenu';
import ProjectList from './components/ProjectList';
import Footer from './components/Footer';
import './App.css';
import PhotoFrame from "./components/PhotoFrame";
import {aiMlProjects, softwareProjects} from './projectData'
function App() {
    const aiMlRef = useRef(null);
    const softwareEngRef = useRef(null);
    // ... add refs for other sections if necessary

    const sectionRefs = [
        { label: 'AI/ML Projects', ref: aiMlRef },
        { label: 'Software Engineering Projects', ref: softwareEngRef },
        // ... add other sections here
    ];



    return (
        <div className="App">
            <Header />
            <PhotoFrame />
            <div ref={aiMlRef}>
                <h2>AI/ML Projects</h2>
                <ProjectList projects={aiMlProjects} />

            </div>
            <div ref={softwareEngRef}>
                <h2>Software Engineering Projects</h2>
                <ProjectList projects={softwareProjects} />
            </div>
            {/* ... add other sections here */}
            <Footer />
        </div>
    );
}

export default App;