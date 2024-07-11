import { ListItem, ListItemButton, ListItemText, Drawer } from "@mui/material";

let Navigation = () => {
  return (
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
  );
};

export default Navigation;
