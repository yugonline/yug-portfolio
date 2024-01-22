// ProjectList.js
import React from 'react';
import { Card, CardActionArea, CardContent, CardActions, Typography, Chip, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

function ProjectList({ projects }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {projects.map((project, index) => (
                <Card key={index} style={{ maxWidth: 345, margin: '20px' }}>
                    {/* Wrap CardActionArea in Link for click action */}
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {project.name}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                {project.tags.map((tag, tagIndex) => (
                                    <Chip key={tagIndex} label={tag} variant="outlined" style={{ margin: '2px' }} />
                                ))}
                            </CardActions>
                        </CardActionArea>
                    </Link>
                    {/*/!* GitHub Icon to indicate the link's purpose *!/*/}
                    {/*<Link href={project.githubLink} target="_blank" rel="noopener noreferrer" style={{ position: 'absolute', top: '4px', right: '4px' }}>*/}
                    {/*    <GitHubIcon color="action" />*/}
                    {/*</Link>*/}
                </Card>
            ))}
        </div>
    );
}

export default ProjectList;
