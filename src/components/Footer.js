// Footer.js
import React, {useContext, useState} from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Snackbar from '@mui/material/Snackbar';
import ThemeContext from  "../ThemeContext";

function Footer() {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const dark = useContext(ThemeContext);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('your-email@example.com'); // Replace with your email
        setOpenSnackbar(true);
        setTimeout(() => {
            setOpenSnackbar(false);
        }, 1000); // Alert disappears after 1 second
    };

    const footerStyle = {
        color: dark ? '#FFF' : '#000', // Text color based on theme
        backgroundColor: dark ? '#000' : '#FFF'
    }

    const iconDivStyle = {
            display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px'
    }

    return (
        <footer>
            <Typography variant="body2" align="center">
                Made with ❤ in Seattle, Washington DC and Mumbai
            </Typography>
            <div style={iconDivStyle}>
                <IconButton href="https://www.linkedin.com/in/yugshende" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon style={{ color: dark ? '#333' : '#333' }}  />
                </IconButton>
                <IconButton href="https://github.com/yugonline" target="_blank" rel="noopener noreferrer">
                    <GitHubIcon style={{ color: dark ? '#333' : '#333' }}  />
                </IconButton>
                <IconButton onClick={handleCopyEmail}>
                    <EmailIcon style={{ color: dark ? '#333' : '#333' }} />
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
