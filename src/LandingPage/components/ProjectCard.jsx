import React from "react";
import { Card, CardContent, Typography, Chip, Box, Link } from "@mui/material";
import ProjectTags from "./ProjectTags";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoLogoGithub } from "react-icons/io";
import '../../index.css'


const ProjectCard = ({ title, description, tags, url, githubUrl }) => {
  return (
    <Card sx={{backgroundColor:'rgb(245 245 245)', borderRadius: 2, p: '1rem 0.75rem 1rem 0.75rem',border: "1px solid rgb(212 212 212)",transition: 'background-color 0.2s ease-in-out', '&:hover':{  backgroundColor:'rgb(229 229 229)'}}}>
      <CardContent sx={{ '&:last-child': { pb: 'inherit' } }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            {
              url ? (
                <Box sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  width: 'fit-content',
                  '&:hover': { textDecoration: 'underline dotted', textUnderlineOffset: '5px', textDecorationColor: '#737373' },
                }}>
    
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                      {title}
                    </Typography >
                    <HiOutlineExternalLink
                      style={{
                        marginLeft: "0.7rem",
                        marginBottom: "0.1rem",
                        fontSize: "1.6rem",
                        color:"#b0b0b0"
                      }}
                      className="external-link"
                    />
    
                </Box>
              
              ) : 
              <Box sx={{
                display: "flex",
                alignItems: "center",
                width: 'fit-content',
              }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1.5rem" }}>
                    {title}
                  </Typography >
              </Box>
            }
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' , color: 'inherit'}}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",

            }}>
              <IoLogoGithub
                title={`view ${title} repository on GitHub`}
                style={{
                  marginLeft: "0.7rem",
                  marginBottom: "0.1rem",
                  fontSize: "2rem",
                }
              }
                className="github-icon"

              />
            </Box>
          </a>
        </Box>


        <Box>

        </Box>
        <Typography variant="body2" sx={{  mt: 1, mb: 2, fontSize: "1.5rem"  }}>
          {description}
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap"}}>
          <ProjectTags tags={tags} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;