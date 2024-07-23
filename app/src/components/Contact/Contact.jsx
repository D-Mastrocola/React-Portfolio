import {
  Link,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import Header from "../Header/Header";

let Contact = () => {
  return (
    <>
      <Header />
      <main className="main-content" id="contact">
        <Card sx={{ display: "flex" }}>
          <CardMedia
            sx={{ width: 360 }}
            image="/assets/images/portfolioPicture.jpg"
            title="dominic mastrocola"
          />
          <CardContent>
            <Typography textAlign="left" variant="h4" component={"h3"}>
              Let's Get In Touch
            </Typography>
            <Typography
              textAlign="left"
              style={{ fontSize: "1.1em" }}
              variant="body2"
              component={"p"}
              color="text.secondary"
            >
              Interested in working with, hiring or talking to me? Let's talk
              about it!
              <br />
              Feel free to message me.
            </Typography>
            <List>
              <ListItem>
              <Link href="https://www.instagram.com/stoic.ginger/" target='_blank' underline="none">
                <Button startIcon={<InstagramIcon />}>stoic.ginger</Button>
                </Link>
              </ListItem>
             
              <ListItem>
              <Link  href="tel:330-236-6774" target='_blank' underline="none">
                <Button startIcon={<LocalPhoneIcon />}>(330)-236-6774</Button>
                </Link>
              </ListItem>
              <ListItem>
              <Link  href="mailto:mastrodomcola@gmail.com" target='_blank' underline="none">
                <Button startIcon={<EmailIcon />}>
                  mastrodomcola@gmail.com
                </Button>
                </Link>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </main>
    </>
  );
};
export default Contact;
