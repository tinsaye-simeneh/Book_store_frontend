import React from "react";
import { Container, Grid, Box, Typography,Link, Pagination } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useStyles from "./styles";
//color #103037

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
    <footer>
      <Box
        bgcolor={"#103037"}
        color="white"
        m={{ sm: 1, md: 3 }}
        p={{ sm: 3, md: 8 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={10} justify="center">
              <Box mb={{ sm: 3 }} justifyContent="center" alignItems="center" display={'flex'}>
                <Typography variant="h6" align="center">
                  <strong>Help & Contact</strong>
                </Typography>{" "}
              </Box>
              <Typography variant="body2" align="center">
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
            <Grid item md={2} sm={12} xs={12}>
              
              <Box mb={{ sm: 3 }} justifyContent="center" alignItems="center" display={'flex'}>
                <Typography variant="h6">
                  <strong>About us</strong>
                </Typography>{" "}
              </Box>
              <Typography variant="body2" align="center">
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

            <Grid item md={3} xs={12}>
              <Box mb={{ sm: 3 }}>
                <Typography variant="h6" align="center">
                  <strong>Other Pages</strong>
                </Typography>{" "}
              </Box>
              <Typography variant="body2" align="center">
                <Box mb={{ sm: 1 }}>
                  <Link href="/" color="inherit">
                    Backup
                  </Link>
                </Box>
                <Box mb={{ sm: 1 }} >
                  <Link href="/" color="inherit">
                    Terms and Agreements
                  </Link>
                </Box>
                <Box >
                  <Link href="/" color="inherit">
                    Guides
                  </Link>
                </Box>
              </Typography>
            </Grid>
            <Grid item md={3} xs={12} alignItems="center">
              <Box mb={{ sm: 3 }} justifyContent="center" alignItems="center" display={'flex'}>
                <Typography variant="h6">
                  <strong>Follow us on</strong>
                </Typography>{" "}
              </Box>
              <Box justifyContent="center" alignItems="center" display={'flex'}>
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
    </div>
  );
}

export default Footer;