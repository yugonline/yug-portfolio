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
        borderBottom: '1px solid #FFF'
    } : {
        backgroundColor: '#FFF',
        color: '#000',
        borderBottom: '1px solid #444'
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
                                <div style={{ marginTop: '10px' }}>
                                    {project.tags.map((tag, tagIndex) => (
                                        <Chip key={tagIndex} label={tag} variant="outlined" style={{ marginRight: '5px', marginBottom: '5px', borderColor: dark ? '#FFF' : '#000', color: dark ? '#FFF' : '#000' }} />
                                    ))}
                                </div>
                            </>
                        )}
                    />
                    <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="github" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <GitHubIcon style={{ color: dark ? '#FFF' : '#000' }} />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
}

export default ProjectList;
