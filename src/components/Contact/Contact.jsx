import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Link,
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
        <Card sx={{ display: "flex" }} id="contact-card">
          <CardMedia
            id="contact-card-img"
            sx={{ width: "20vw" }}
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
                <Button startIcon={<InstagramIcon />}>
                  <Link
                    underline="none"
                    target="_blank"
                    href="https://www.instagram.com/stoic.ginger/"
                  >
                    stoic.ginger
                  </Link>
                </Button>
              </ListItem>
              <ListItem>
                <Button startIcon={<LocalPhoneIcon />}>
                  <Link underline="none" target="_blank" href="tel:3302366774">
                    (330)-236-6774
                  </Link>
                </Button>
              </ListItem>
              <ListItem>
                <Button startIcon={<EmailIcon />}>
                  <Link
                    underline="none"
                    target="_blank"
                    href="mailto:mastrodomcola@gmail.com"
                  >
                    mastrodomcola@gmail.com
                  </Link>
                </Button>
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </main>
    </>
  );
};
export default Contact;
