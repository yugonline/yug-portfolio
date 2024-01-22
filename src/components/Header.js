import React, { useContext } from 'react';
import {Fab} from '@mui/material';
import ThemeContext from "../ThemeContext";
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7';
import SlidingMenu from "./SlidingMenu"; // Sun icon

function Header() {
    const { dark, toggle } = useContext(ThemeContext);

    const headerStyle = {
        position: 'relative', // Set the header position to relative
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: dark ? '#000' : 'white',
        color: dark ? '#FFF' : '#000',
    };

    const headerTextStyle = {
        flexGrow: 1,
        textAlign: 'center',
        // Add your custom font styles here
    };

    const switchStyle = {
        position: 'absolute', // Correct position to absolute
        top: '20px',
        right: '20px',
    };

    const fabStyle = {
        position: 'fixed', // Fixed positioning for the FAB
        bottom: '20px',   // 20px from the bottom
        right: '20px',    // 20px from the right
        zIndex: 1000,     // Ensure it's above other items
    };

    return (
        <header style={headerStyle}>
            <h1 style={headerTextStyle}>Welcome To A Dreamer's Profile</h1>
            {/* Floating Action Button for Dark Mode Toggle */}
            <Fab
                style={fabStyle}
                color="primary"
                onClick={toggle}
                aria-label="dark mode toggle"
            >
                {dark ? <Brightness7Icon /> : <Brightness4Icon />}
            </Fab>
        </header>
    );
}

export default Header;
