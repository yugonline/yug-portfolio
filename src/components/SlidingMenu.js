// SlidingMenu.js
import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function SlidingMenu({ sectionRefs }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };

    const scrollToSection = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setIsOpen(false);
        }
    };

    return (
        <>
            <IconButton onClick={toggleDrawer(true)} color="inherit" aria-label="menu">
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
                <List>
                    {sectionRefs.map((sectionRef, index) => (
                        <ListItem button key={index} onClick={() => scrollToSection(sectionRef.ref)}>
                            <ListItemText primary={sectionRef.label} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
}

export default SlidingMenu;
