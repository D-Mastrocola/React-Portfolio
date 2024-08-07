import { Typography, Divider, Button, Stack, Link } from "@mui/material";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Header from "../Header/Header";

import anime from "animejs";
import { useNavigate } from "react-router-dom";


import pfp from './pfp01.jpeg';

let About = () => {
  const navigate = useNavigate();

  const changeLocation = (link) => {
    navigate(link);
  };

  const goTransition = (link) => {
    let imageElements = document.querySelectorAll(".header-anim-img");

    anime({
      targets: imageElements,
      opacity: 1,
      margin: "2px",
    });

    let location = window.location.pathname;
    if (link === location) {
      return false;
    }
    let animeDiv = document.getElementById("animation-div");

    let random = Math.floor(Math.random() * 2);
    animeDiv.style.zIndex = 100;
    if (random == 0) {
      animeDiv.style.opacity = 0;

      anime({
        targets: animeDiv,
        opacity: 1,
        easing: "linear",
        duration: 800,
        update: function (anim) {
          let progress = Math.round(anim.progress);
          if (progress === 100) {
            changeLocation(link);
          }
        },
      });
    } else if (random == 1) {
      animeDiv.style.width = "100vw";
      animeDiv.style.height = "0vh";
      animeDiv.style.opacity = 1;
      anime({
        targets: animeDiv,
        height: "100vh",
        easing: "easeInOutElastic",
        duration: 600,
        update: function (anim) {
          let progress = Math.round(anim.progress);
          if (progress === 100) {
            changeLocation(link);
          }
        },
      });
    }
  };
  return (
    <>
      <Header />
      <main className="main-content">
        <div id="about-text">
          <Typography variant="h2" component="h2">
            About
          </Typography>
          <Divider fullWidth />
          <Typography variant="body1" component="p">
            I have been coding since I was 12 years old, making games and mods
            in Java. Then I found out that I could make a career out of my
            hobby, and ever since I have picked up web development I have been
            addicted. I attended the Full Stack Web Development bootcamp at Case
            Western Reserve University and have learned a lot working with other
            like minded people.
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button
              onClick={() => goTransition("/portfolio")}
              variant="contained"
              color="warning"
              startIcon={<ChevronRightIcon />}
            >
              View Work
            </Button>
            <Button
              component='a'
              href="https://docs.google.com/document/d/1N5bozh_b9TkdDWw3qjZfWmAaUyDPKeXE/edit?usp=sharing&ouid=117280491140216913901&rtpof=true&sd=true"
              variant="text"
              startIcon={<AttachFileIcon />}
            >
              <Link underline="none" href="https://docs.google.com/document/d/1N5bozh_b9TkdDWw3qjZfWmAaUyDPKeXE/edit?usp=sharing&ouid=117280491140216913901&rtpof=true&sd=true" target="_blank">
                Resume
              </Link>
              
            </Button>
          </Stack>
        </div>
        <img
          id="portfolio-pic"
          src={pfp}
          alt="portfolio-pic"
        />
      </main>
    </>
  );
};
export default About;
