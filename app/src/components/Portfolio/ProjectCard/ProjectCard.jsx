import { Typography, Button} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ComputerIcon from "@mui/icons-material/Computer";
import Divider from "@mui/material/Divider";
let ProjectCard = (props) => {
  return (
    <>
      <div
        className={
          props.index % 2 !== 0 ? "project-card project-right" : "project-card"
        }
        id={props.index === 0 ? "first-project" : null}
      >
        {props.index % 2 === 0 ? (
          <>
            <img src={"./assets/images/" + props.imagePath} />
            <div className="project-desc" style={{ textAlign: "left" }}>
              <Typography variant="h4" component={"h3"} m={1}>
                {props.name}
              </Typography>
              <Typography variant="body2" component={"p"} m={1}>
                {props.desc}
              </Typography>
              <div>
                <Button
                  className="project-btn"
                  variant="contained"
                  size='small'
                  color="warning"
                  startIcon={<ComputerIcon />}
                  href={props.live}
                >
                  Live
                </Button>
                <Button
                  className="project-btn"
                  variant="contained"
                  size='small'
                  color="primary"
                  startIcon={<CodeIcon />}
                  href={props.code}
                >
                  Code
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="project-desc" style={{ textAlign: "right" }}>
              <Typography variant="h4" component={"h3"} m={1}>
                {props.name}
              </Typography>
              <Typography variant="body2" component={"p"} m={1}>
                {props.desc}
              </Typography>
              <div class="project-btn" m={1}>
                <Button
                  className="project-btn"
                  variant="contained"
                  size='small'
                  color="warning"
                  startIcon={<ComputerIcon />}
                  href={props.live}
                >
                  Live
                </Button>
                <Button
                  className="project-btn"
                  variant="contained"
                  size='small'
                  color="primary"
                  startIcon={<CodeIcon />}
                  href={props.code}
                >
                  Code
                </Button>
              </div>
            </div>
            <img src={"./assets/images/" + props.imagePath} />
          </>
        )}
      </div>
      <Divider component="div" />
    </>
  );
};

export default ProjectCard;
