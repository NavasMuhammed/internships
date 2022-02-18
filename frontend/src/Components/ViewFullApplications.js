import React from "react";
import {
  Typography,
  Box,
  Grid,
  Container,
  Paper,
  Divider,
  Rating,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ViewFullApplications = () => {
  return (
    <>
      <Container sx={{ display: "flex" }}>
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid xs={6} md={8}>
            <Box p={2} sx={{ display: "flex" }}>
              <Typography variant="subtitle2" color="initial">
                Dashboard
              </Typography>
              <NavigateNextIcon />
              <Typography variant="subtitle2" color="initial">
                Application Recevied
              </Typography>
              <NavigateNextIcon />
              <Typography variant="subtitle2" color="initial">
                Nandini Chavda
              </Typography>
            </Box>
            <Box sx={{ my: 2 }}>
              <Typography variant="h4">
                Applications for Fundraising internship
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container component={Paper} sx={{ display: "flex" }}>
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid xs={6} md={10}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h4" color="initial">
                Nandini Chavda
              </Typography>
              <Typography variant="subtitle2" color="initial">
                News Open to relocate
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle2" color="initial">
                Applied 17 Days ago
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        <Divider variant="middle" />
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid item xs={12} md={2}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle1" color="initial">
                Skills
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={10}>
            <Box sx={{ m: 3, display: "flex" }}>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
              <Typography
                variant="body1"
                color="initial"
                sx={{ mx: 1, mt: "4px" }}
              >
                MS Excel
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={1.5}
                precision={0.5}
                readOnly
              />
              <Typography
                variant="body1"
                color="initial"
                sx={{ mx: 1, mt: "4px" }}
              >
                Search Engine Optimization
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={4}
                precision={0.5}
                readOnly
              />
              <Typography
                variant="body1"
                color="initial"
                sx={{ mx: 1, mt: "4px" }}
              >
                MS Word
              </Typography>
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={0.5}
                readOnly
              />
              <Typography
                variant="body1"
                color="initial"
                sx={{ mx: 1, mt: "4px" }}
              >
                MS Powerpoint
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container
        component={Paper}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        {/* Left Element of Container */}
        <Divider variant="middle" />
        <Grid item xs={12} md={12}>
          <Box sx={{ m: 3 }}>
            <Typography variant="h6" color="initial" mb={1}>
              Cover letter & availability
            </Typography>
            <Typography variant="body1">Cover letter</Typography>
            <Typography variant="body1">
              Why should you be hired for this role?
            </Typography>
            <Typography variant="body1">I Want to gain expriences</Typography>
          </Box>
          <Box sx={{ m: 3 }}>
            <Typography variant="h6" color="initial" mb={1}>
              Availability
            </Typography>
            <Typography variant="body1">
              Are you available for 2 months,starting immediately,for a full
              time work form home intership? If not ,what is thie time period
              you are available for and the earliest date you can start this
              internship on?
            </Typography>
            <Typography variant="h6" color="initial" mb={1}>
              Yes
            </Typography>
          </Box>
        </Grid>
      </Container>

      <Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        <Divider variant="middle" />
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle1" color="initial">
                Education
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                Master of Science(M.S),Information Technology
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ color: "#666" }}
              >
                Ramnarain Ruia College
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ color: "#666" }}
              >
                2020-2022
              </Typography>

              <Typography
                variant="h6"
                color="initial"
                sx={{ display: "flex", mt: 2 }}
              >
                Bachelor of Science(B.S),Information Technology
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ color: "#666" }}
              >
                Bhavna Trust Junior and Degree College
              </Typography>
              <Typography
                variant="subtitle2"
                color="initial"
                sx={{ color: "#666" }}
              >
                2016-2019
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        <Divider variant="middle" />
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle1" color="initial">
                Position of Responsibility
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle1" color="initial">
                Organizer of arts fest in our college, coordinated and
                supervised over 200 students
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        <Divider variant="middle" />
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid item xs={12} md={3}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle1" color="initial">
                Contact
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Typography variant="subtitle1" color="initial">
                Internshala Chat:Send a message and share assignment
              </Typography>
              <Typography variant="subtitle1" color="initial">
                Phone:+91 8293*****
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ViewFullApplications;
