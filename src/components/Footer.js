// Footer.js
import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Snackbar from '@mui/material/Snackbar';

function Footer() {
    const [openSnackbar, setOpenSnackbar] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('your-email@example.com'); // Replace with your email
        setOpenSnackbar(true);
        setTimeout(() => {
            setOpenSnackbar(false);
        }, 1000); // Alert disappears after 1 second
    };

    return (
        <footer>
            <Typography variant="body2" color="textSecondary" align="center">
                Made with ❤ in Seattle, Washington DC and Mumbai
            </Typography>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <IconButton href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                </IconButton>
                <IconButton href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon />
                </IconButton>
                <IconButton onClick={handleCopyEmail}>
                    <EmailIcon />
                </IconButton>
            </div>
            {/* Snackbar for alert */}
            <Snackbar
                open={openSnackbar}
                message="Email copied!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            />
        </footer>
    );
}

export default Footer;
