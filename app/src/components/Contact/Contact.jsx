import {
  Card,
  CardContent,
  CardMedia,
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
    <main className="main-content" id="contact">
      <Card>
      <CardMedia
        sx={{ height: 360 }}
        image="/assets/images/portfolioPicture.jpg"
        title="green iguana"
      />
        <CardContent>
          <Typography variant="h4" component={"h3"}>
            Let's Get In Touch
          </Typography>
          <Typography variant="body2" component={"p"} color="text.secondary">
            Interested in working with, hiring or talking to me? Let's talk
            about it!
            <br />
            Feel free to message me.
          </Typography>
        </CardContent>
      </Card>
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
