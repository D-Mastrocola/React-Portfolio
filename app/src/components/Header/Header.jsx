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

  const fromTransition = () => {
    let animeDiv = document.getElementById("animation-div");
    animeDiv.style.zIndex = 100;
    animeDiv.style.opacity = 1;


    anime({
      targets: animeDiv,
      opacity: 0,
      duration: 400,
      easing: 'linear',
      update: function (anim) {
        let progress = Math.round(anim.progress);
        if (progress === 100) {
          animeDiv.style.zIndex = -100;
        }
      },
    });
  };
  const goTransition = (link) => {
    let location = window.location.pathname;
    if (link === location) {
      return false;
    }
    let animeDiv = document.getElementById("animation-div");
    animeDiv.style.opacity = 0;
    animeDiv.style.zIndex = 100;

    anime({
      targets: animeDiv,
      opacity: 1,
      duration: 800,
      update: function (anim) {
        let progress = Math.round(anim.progress);
        if (progress === 100) {
          navigate(link);
        }
      },
    });
  };

  return (
    <>
      <div id="animation-div"></div>
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
