import pfp from "../../assets/images/portfolioPicture.jpg";
import * as React from "react";
import {
  IconButton,
  Button,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from "@mui/material";
import AppsIcon from "@mui/icons-material/Apps";
import anime from "animejs";
import { useNavigate } from "react-router-dom";

let Header = () => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const changeLocation = (link) => {
    navigate(link);
  };

  const fromTransition = () => {
    let animeDiv = document.getElementById("animation-div");
    animeDiv.style.zIndex = 100;
    animeDiv.style.opacity = 1;
    let imageElements = document.querySelectorAll(".header-anim-img");
    anime({
      targets: imageElements,
      rotate: '2turn',
      easing: 'linear',
      delay: 400,
      margin: '20px',
      duration: 800,
      update: function (anim) {
        let progress = Math.round(anim.progress);
        if (progress === 100) {
          loadingAnim();
        }
      },
    });
  };
  const loadingAnim = () => {
    let animeDiv = document.getElementById("animation-div");
    let imageElements = document.querySelectorAll(".header-anim-img");
    const imageSize = 3024;
    const gridSize = imageSize / 3;
    anime({
      targets: [animeDiv, imageElements],
      opacity: 0,
      delay:200,
      duration: 600,
      easing: "linear",
      update: function (anim) {
        let progress = Math.round(anim.progress);
        if (progress === 100) {
          animeDiv.style.zIndex = -100;
        }
      },
    });
  };
  const goTransition = (link) => {
    let imageElements = document.querySelectorAll(".header-anim-img");

    anime({
      targets: imageElements,
      opacity: 1,
      margin: '2px'
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
      <div id="animation-div">
        <div>
          <div className="header-anim-img" id="anim-img-tl"></div>
          <div className="header-anim-img" id="anim-img-tm"></div>
          <div className="header-anim-img" id="anim-img-tr"></div>
        </div>
        <div>
          <div className="header-anim-img" id="anim-img-ml"></div>
          <div className="header-anim-img" id="anim-img-mm"></div>
          <div className="header-anim-img" id="anim-img-mr"></div>
        </div>
        <div>
          <div className="header-anim-img" id="anim-img-bl"></div>
          <div className="header-anim-img" id="anim-img-bm"></div>
          <div className="header-anim-img" id="anim-img-br"></div>
        </div>
      </div>
      <header onLoad={() => fromTransition()}>
        <img id="header-logo" src={pfp} alt="Logo" />
        <IconButton onClick={toggleDrawer(true)}>
          <AppsIcon
            fontSize="large"
            style={{ color: "black", fontSize: "2em" }}
          />
        </IconButton>
        <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
          {
            <Box
              sx={{ width: 250 }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <List>
                <ListItemButton
                  component="a"
                  onClick={() => goTransition("/about")}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  onClick={() => goTransition("/portfolio")}
                >
                  <ListItemText primary="Portfolio" />
                </ListItemButton>
                <ListItemButton
                  component="a"
                  onClick={() => goTransition("/contact")}
                >
                  <ListItemText primary="Contact" />
                </ListItemButton>
                <ListItemButton component="a" href="./resume">
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </List>
            </Box>
          }
        </Drawer>
      </header>
    </>
  );
};
export default Header;
