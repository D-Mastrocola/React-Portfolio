import { Typography, Button, IconButton } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
let ProjectCard = (props) => {
  return (
    <div
      className="project-card"
      id={props.index == 0 ? "first-project" : null}
    >
      {props.index % 2 == 0 ? (
        <>
          <img src={"./assets/images/" + props.imagePath} />
          <div className="project-desc" style={{ textAlign: "left" }}>
            <Typography variant="h4" component={"h3"}>
              {props.name}
            </Typography>
            <Typography variant="body2" component={"p"}>
              {props.desc}
            </Typography>
            <IconButton href={props.live}>
              <ComputerIcon />
            </IconButton>
            <IconButton href={props.code}>
              <CodeIcon />
            </IconButton>
          </div>
        </>
      ) : (
        <>
          <div className="project-desc" style={{ textAlign: "right" }}>
            <Typography variant="h4" component={"h3"}>
              {props.name}
            </Typography>
            <Typography variant="body2" component={"p"}>
              {props.desc}
            </Typography>
            <IconButton href={props.live}>
              <ComputerIcon />
            </IconButton>
            <IconButton href={props.code}>
              <CodeIcon />
            </IconButton>
          </div>
          <img src={"./assets/images/" + props.imagePath} />
        </>
      )}
    </div>
  );
};

export default ProjectCard;
