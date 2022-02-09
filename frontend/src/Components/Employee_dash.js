import {
  CardContent,
  Box,
  Card,
  Typography,
  Paper,
  Container,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Employee_dash = () => {
  return (
    <>
      <Box pt={3} textAlign="center">
        <Typography variant="h6">Dashboard</Typography>
      </Box>
      <Container sx={{ display: "block" }}>
        <Card
          variant="outlined"
          component={Paper}
          sx={{ display: "flex", m: 4 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">Web Development Internship</Typography>
              <Box sx={{ display: "flex", mx: 4, my: 2 }}>
                <Typography sx={{ display: "flex" }} variant="subtitle1">
                  Date
                  <Typography
                    sx={{ display: "flex", mx: 6 }}
                    variant="subtitle1"
                  >
                    Status
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 5 }}
                    variant="subtitle1"
                  >
                    Application
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mr: 6 }}
                    variant="subtitle1"
                  >
                    Application Deadline
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mr: 1 }}
                    variant="subtitle1"
                  >
                    Access Application Fill
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 2 }}
                    variant="subtitle1"
                  >
                    Re-post Intership
                  </Typography>
                  <Typography
                    sx={{ display: "flex", ml: 2 }}
                    variant="subtitle1"
                  >
                    Share links
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mx: 1, fontSize: 14 }}>
                <Typography sx={{ display: "flex" }} variant="subtitle1">
                  13 Dec 22
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    Active
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    57(
                    {/* <CardActions> */}
                    <Typography
                      sx={{
                        mt: "2px",
                        textDecoration: "none",
                        color: "#0879B5",
                      }}
                      component={Link}
                      to="/Employee/Internship"
                    >
                      View Applicants
                    </Typography>
                    {/* </CardActions> */})
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    1 JAN 22
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    13 Dec 22
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 12 }}
                    variant="subtitle1"
                    component={Link}
                    to=""
                  >
                    Re-post
                  </Typography>
                  <Typography sx={{ display: "flex" }} variant="subtitle1">
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                  </Typography>
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button component={Link} to="/Employee/Internship">
                View Application
              </Button>
            </CardActions>
          </Box>
        </Card>
        {/* 2nd Card starts from here */}
        <Card
          variant="outlined"
          component={Paper}
          sx={{ display: "flex", m: 4 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">MERN Stack Internship</Typography>
              <Box sx={{ display: "flex", mx: 4, my: 2 }}>
                <Typography sx={{ display: "flex" }} variant="subtitle1">
                  Date
                  <Typography
                    sx={{ display: "flex", mx: 6 }}
                    variant="subtitle1"
                  >
                    Status
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 5 }}
                    variant="subtitle1"
                  >
                    Application
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mr: 6 }}
                    variant="subtitle1"
                  >
                    Application Deadline
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mr: 1 }}
                    variant="subtitle1"
                  >
                    Access Application Fill
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 2 }}
                    variant="subtitle1"
                  >
                    Re-post Intership
                  </Typography>
                  <Typography
                    sx={{ display: "flex", ml: 2 }}
                    variant="subtitle1"
                  >
                    Share links
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mx: 1, fontSize: 14 }}>
                <Typography sx={{ display: "flex" }} variant="subtitle1">
                  11 Feb 22
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    Closed
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    110(
                    <Typography
                      sx={{ mt: "2px" }}
                      component={Link}
                      to="/employeer/Intership"
                    >
                      View Applicants
                    </Typography>
                    )
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    1 MAR 22
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    29 Feb 22
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 12 }}
                    variant="subtitle1"
                    component={Link}
                    to=""
                  >
                    Re-post
                  </Typography>
                  <Typography sx={{ display: "flex" }} variant="subtitle1">
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                  </Typography>
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </Card>

        {/* 3nd Card starts from here */}
        <Card
          variant="outlined"
          component={Paper}
          sx={{ display: "flex", m: 4 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography variant="h6">Blockchain Internship</Typography>
              <Box sx={{ display: "flex", mx: 4, my: 2 }}>
                <Typography sx={{ display: "flex" }} variant="subtitle1">
                  Date
                  <Typography
                    sx={{ display: "flex", mx: 6 }}
                    variant="subtitle1"
                  >
                    Status
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 5 }}
                    variant="subtitle1"
                  >
                    Application
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mr: 6 }}
                    variant="subtitle1"
                  >
                    Application Deadline
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mr: 1 }}
                    variant="subtitle1"
                  >
                    Access Application Fill
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 2 }}
                    variant="subtitle1"
                  >
                    Re-post Intership
                  </Typography>
                  <Typography
                    sx={{ display: "flex", ml: 2 }}
                    variant="subtitle1"
                  >
                    Share links
                  </Typography>
                </Typography>
              </Box>
              <Box sx={{ display: "flex", mx: 1, fontSize: 14 }}>
                <Typography sx={{ display: "flex" }} variant="subtitle1">
                  11 Feb 22
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    Active
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    10(
                    <Typography
                      sx={{ mt: "2px" }}
                      component={Link}
                      to="/employeer/Intership"
                    >
                      View Applicants
                    </Typography>
                    )
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    1 MAR 22
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    29 Feb 22
                  </Typography>
                  <Typography
                    sx={{ display: "flex", mx: 12 }}
                    variant="subtitle1"
                    component={Link}
                    to=""
                  >
                    Re-post
                  </Typography>
                  <Typography sx={{ display: "flex" }} variant="subtitle1">
                    <FacebookIcon />
                    <LinkedInIcon />
                    <TwitterIcon />
                  </Typography>
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button size="small" component={Link} to="/Employee/Internship">
                View Application
              </Button>
            </CardActions>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default Employee_dash;
