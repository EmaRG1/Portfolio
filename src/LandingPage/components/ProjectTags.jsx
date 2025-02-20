import { technologies } from "../../data/technologies";
import { Chip } from "@mui/material";

const ProjectTags = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => {
        const tech = technologies.find((t) => t.stack === tag);
        const Icon = tech?.icon;

        return (
          <Chip
            key={index}
            label={tag}
            icon={Icon ? <Icon/> : null}
            sx={{
              display: "flex",
              gap:'1px',
              border: "1.5px solid rgb(212 212 212)",
              alignContent: "center",
              backgroundColor:'rgb(229 229 229)',
              margin: "2px",
              height: "20", 
              fontWeight: "600",
              fontSize: '1.8rem',
              pl: '0.5rem',
              pr: '0.2rem',
              borderRadius: '6px',
              pointerEvents: 'none'
            }}
          />
        );
      })}
    </>
  );
};

export default ProjectTags;