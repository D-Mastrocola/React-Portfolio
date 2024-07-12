import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from '@mui/icons-material/Email';

let Contact = () => {
  return (
    <main className="main-content" id="contact">
      <Card sx={{ display: 'flex' }}>
        <CardMedia
          sx={{ width: 360 }}
          image="/assets/images/portfolioPicture.jpg"
          title="dominic mastrocola"
        />
        <CardContent>
          <Typography textAlign='left' variant="h4" component={"h3"}>
            Let's Get In Touch
          </Typography>
          <Typography textAlign='left' style={{fontSize: '1.1em'}} variant="body2" component={"p"} color="text.secondary">
            Interested in working with, hiring or talking to me? Let's talk
            about it!
            <br />
            Feel free to message me.
          </Typography>
          <List>
            <ListItem>
              <Button startIcon={<InstagramIcon />}>stoic.ginger</Button>
            </ListItem>
            <ListItem>
              <Button startIcon={<LocalPhoneIcon />}>(330)-236-6774</Button>
            </ListItem>
            <ListItem>
              <Button startIcon={<EmailIcon />}>mastrodomcola@gmail.com</Button>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </main>
  );
};
export default Contact;
