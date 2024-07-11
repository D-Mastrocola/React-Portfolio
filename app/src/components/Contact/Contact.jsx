import {
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";

let Contact = () => {
  return (
    <main className="main-content" id='contact'>
      <div>
        <Typography variant="h4" component={"h3"}>
          Let's Get In Touch
        </Typography>
        <Typography variant="body1" component={"p"}>
          Interested in working with, hiring or talking to me? Let's talk about
          it!
          <br />
          Feel free to message me.
        </Typography>
      </div>
      <List>
        {
          <ListItem
            secondaryAction={
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Single-line item" />
          </ListItem>
        }
      </List>
    </main>
  );
};
export default Contact;
