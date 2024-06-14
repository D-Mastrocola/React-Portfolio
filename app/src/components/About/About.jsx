import { Typography, Divider, Button, Stack } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

let About = () => {
  return (
    <main className="main-content">
      <div id="about-text">
        <Typography variant="h2" component="h2">
          About
        </Typography>
        <Divider fullWidth />
        <Typography variant="body1" component="p">
          I have been coding since I was 12 years old, making games and mods in
          Java. Then I found out that I could make a career out of my hobby, and
          ever since I have picked up web development I have been addicted. I
          attended the Full Stack Web Development bootcamp at Case Western
          Reserve University and have learned a lot working with other like
          minded people.
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="warning" startIcon={<ChevronRightIcon/>}>
            View Work
          </Button>
          <Button variant="text" startIcon={<AttachFileIcon />}>
            Resume
          </Button>
        </Stack>
      </div>
      <img
        id="portfolio-pic"
        src="./assets/images/pfp01.jpeg"
        alt="portfolio-pic"
      />
    </main>
  );
};
export default About;
