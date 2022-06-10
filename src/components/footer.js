import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import MailIcon from "@mui/icons-material/Mail";
//color #103037
function Footer() {
  return (
    <footer>
      <Box
        bgcolor={"#103037"}
        color="white"
        m={{ sm: 1, md: 3 }}
        p={{ sm: 3, md: 8 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={10} justify="center">
            <Grid item md={3}>
              <Box mb={{ sm: 3 }} justify="center">
                <Typography variant="h6">
                  <strong>Help & Contact</strong>
                </Typography>{" "}
              </Box>
              <Typography variant="body2">
                <Box mb={{ sm: 1 }}>
                  <Link href="/" color="inherit">
                    Book mall #432, Addis Ababa
                  </Link>
                </Box>
                <Box mb={{ sm: 1 }}>
                  <Link href="/" color="inherit">
                    +2519-000-000-00
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    bookhelp@gmail.com
                  </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item md={2}>
              <Box mb={{ sm: 3 }}>
                <Typography variant="h6">
                  <strong>About us</strong>
                </Typography>{" "}
              </Box>
              <Typography variant="body2">
                <Box mb={{ sm: 1 }}>
                  <Link href="/" color="inherit">
                    Company info
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    News
                  </Link>
                </Box>
              </Typography>
            </Grid>

            <Grid item md={3} sm={1}>
              <Box mb={{ sm: 3 }}>
                <Typography variant="h6">
                  <strong>Other Pages</strong>
                </Typography>{" "}
              </Box>
              <Typography variant="body2">
                <Box mb={{ sm: 1 }}>
                  <Link href="/" color="inherit">
                    Backup
                  </Link>
                </Box>
                <Box mb={{ sm: 1 }}>
                  <Link href="/" color="inherit">
                    Terms and Agreements
                  </Link>
                </Box>
                <Box>
                  <Link href="/" color="inherit">
                    Guides
                  </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item md={3} alignItems="center">
              <Box mb={{ sm: 3 }}>
                <Typography variant="h6">
                  <strong>Follow us on</strong>
                </Typography>{" "}
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  <Box marginRight={{ sm: 2 }} display="inline-block">
                    <FacebookIcon fontSize="large" />
                  </Box>
                  <Box marginRight={{ sm: 2 }} display="inline-block">
                    <InstagramIcon fontSize="large" />
                  </Box>
                  <Box marginRight={{ sm: 2 }} display="inline-block">
                    <TwitterIcon fontSize="large" />
                  </Box>
                  <Box marginRight={{ sm: 2 }} display="inline-block">
                    <LinkedInIcon fontSize="large" />
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;

