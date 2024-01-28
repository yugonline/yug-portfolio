// ProjectList.js
import React, {useContext} from 'react';
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import Typography from "@mui/material/Typography";
import ThemeContext from "../ThemeContext";

function ProjectList({ projects }) {
    const { dark } = useContext(ThemeContext); // Ensure this matches the context state

    const listItemStyle = dark ? {
        backgroundColor: '#000',
        color: '#FFF',
        padding: '10px 9vw', // 20px top and bottom padding, 9vw left and right
        margin: '10px auto', // 20px margin at the top and bottom, auto centers it horizontally
        borderBottom: '1px #FFF',
        boxSizing: 'border-box', // This makes sure the padding is included in the width
    } : {
        backgroundColor: '#FFF',
        color: '#000',
        padding: '10px 9vw', // Consistent padding
        margin: '10px auto', // Centering margin
        borderBottom: '1px #444',
        boxSizing: 'border-box',
    };

    return (
        <List style={{ width: '100%' }}>
            {projects.map((project, index) => (
                <ListItem key={index} style={listItemStyle}>
                    <ListItemText
                        primary={project.name}
                        secondary={(
                            <>
                                <Typography component="span" variant="body2" style={{ color: dark ? '#FFF' : '#000' }}>
                                    {project.description}
                                </Typography>
                                <IconButton aria-label="github" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                    <GitHubIcon style={{ color: dark ? '#FFF' : '#000' }} />
                                </IconButton>
                                <div style={{ marginTop: '10px' }}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <Chip key={tagIndex} label={tag} variant="outlined" style={{ marginRight: '5px', marginBottom: '5px', borderColor: dark ? '#FFF' : '#000', color: dark ? '#FFF' : '#000' }} />
                                    ))}
                                </div>


                            </>
                        )}
                    />
                </ListItem>
            ))}
        </List>
    );
}

export default ProjectList;
