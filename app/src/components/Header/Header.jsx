import pfp from "../../assets/images/portfolioPicture.jpg";
import List from "@mui/material/List";
import { ListItem, ListItemButton, ListItemText } from "@mui/material";

let Header = () => {
  return (
    <header>
      <img id="header-logo" src={pfp} alt="Logo" />
      <List>
        <ListItemButton component="a" href="#about">
          <ListItemText primary="About" />
        </ListItemButton>
        <ListItemButton component="a" href="#portfolio">
          <ListItemText primary="Portfolio" />
        </ListItemButton>
        <ListItemButton component="a" href="#contact">
          <ListItemText primary="Contact" />
        </ListItemButton>
        <ListItemButton component="a" href="#resume">
          <ListItemText primary="Resume" />
        </ListItemButton>
      </List>
    </header>
  );
};
export default Header;
