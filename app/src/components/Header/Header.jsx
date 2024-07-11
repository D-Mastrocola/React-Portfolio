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

let Header = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <header>
      <img id="header-logo" src={pfp} alt="Logo" />
      <IconButton onClick={toggleDrawer(true)}>
        <AppsIcon fontSize='large' style={{ color: 'black', fontSize: '2em', }} />
      </IconButton>
      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <List>
              <ListItemButton component="a" href="./about">
                <ListItemText primary="About" />
              </ListItemButton>
              <ListItemButton component="a" href="./portfolio">
                <ListItemText primary="Portfolio" />
              </ListItemButton>
              <ListItemButton component="a" href="./contact">
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
  );
};
export default Header;
