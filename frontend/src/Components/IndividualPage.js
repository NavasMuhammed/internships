import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Link,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import StartDate from "@mui/icons-material/SlowMotionVideo";
import Duration from "@mui/icons-material/AvTimer";
import Stipend from "@mui/icons-material/Paid";
import ApplyBy from "@mui/icons-material/AccessTimeFilled";
import Applicants from "@mui/icons-material/PeopleOutline";
const IndividualPage = () => {
  return (
    <>
      <Grid ml={25} mr={25} mt={8}>
        <Typography display="flex">
          <Typography>
            <ArrowBackIosIcon />
          </Typography>
          <Link href="#" sx={{ textDecoration: "none" }}>
            Browse more internship
          </Link>
        </Typography>
        <Typography
          mt={8}
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h5"
        >
          MERN Stack Development work from home job/internship at <br />{" "}
          XcitEducation Foundations
        </Typography>
        <Typography
          sx={{ border: "3px solid #FFAB76 ", color: "#B3541E" }}
          p={1}
          mt={5}
          display="flex"
        >
          <Typography>
            <ErrorOutlineIcon />
          </Typography>
          Applications are closed for this internship.
          <Link
            href="#"
            sx={{
              textDecoration: "none",
              marginLeft: "3px",
              marginRight: "5px",
            }}
          >
            Click here
          </Link>
          to brouse more internships
        </Typography>
        <Grid Container spacing={3} mt={6}>
          <Paper elevation={4}>
            <Grid>
              <Grid ml={5} mt={3} mr={3} pb={5} mb={5}>
                <Typography sx={{ paddingTop: "15px" }}>
                  MERN Stack Development
                </Typography>
                <Box sx={{ display: "flex", marginTop: "8px" }}>
                  <Typography>XcitEducation Foundations</Typography>
                  <Typography
                    ml={2}
                    sx={{ color: "green", backgroundColor: "#BAFFB4" }}
                  >
                    NGO
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", marginTop: "14px" }}>
                  <Typography>
                    <HomeWorkIcon />
                  </Typography>
                  <Typography ml={2}>Work from Home</Typography>
                </Box>
                <Grid mt={5} display="flex" justifyContent="space-between">
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <StartDate />
                      </Typography>
                      <Typography ml={1}>Start Date</Typography>
                    </Box>
                    <Typography ml={3}>Immediately</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <Duration />
                      </Typography>
                      <Typography ml={1}>Duration</Typography>
                    </Box>
                    <Typography ml={3}>3 Months</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <Stipend />
                      </Typography>
                      <Typography ml={1}>Stipend</Typography>
                    </Box>
                    <Typography ml={3}>Unpaid</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <ApplyBy />
                      </Typography>
                      <Typography ml={1}>Apply By</Typography>
                    </Box>
                    <Typography ml={3}>5 Jan 22</Typography>
                  </Box>
                </Grid>
                <Typography ml={3} p={2}>
                  <Button disabled>Internship</Button>
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <Applicants />
                  </Typography>
                  <Typography ml={1}>41 Applicants</Typography>
                </Box>
                <Divider />
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    About XcitEducation Foundations
                  </Typography>
                  <Typography variant="h7">
                    XcitEducation Foundations is an initiative to promote free
                    education for students coming from all sections of society.
                  </Typography>
                </Grid>
                <Grid mt={3} m={3}>
                  <Paper elevation={6}>
                    <Grid pt={3} ml={2} mr={2} pb={2}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Activity on Internshala
                      </Typography>
                      <Grid display="flex" justifyContent="space-between">
                        <Box sx={{ display: "flex" }}>
                          <Typography>
                            <Applicants />
                          </Typography>
                          <Typography ml={1}>Hiring since July 2021</Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography>
                            <Applicants />
                          </Typography>
                          <Typography ml={1}>
                            141 opportunities posted
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typography>
                            <Applicants />
                          </Typography>
                          <Typography ml={1}>1492 candidates hired</Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Paper>
                </Grid>
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    About the work from home job/internship
                  </Typography>
                  <Typography variant="h7">
                    Selected intern's day-to-day responsibilities include:
                  </Typography>
                  <Grid mt={2}>
                    <Typography>
                      1. Write well designed, testable, efficient code by using
                      best software development practices
                    </Typography>
                    <Typography>
                      2. Create website layout/user interface by using standard
                      HTML/CSS practices
                    </Typography>
                    <Typography>
                      3. Integrate data from various back-end services and
                      databases
                    </Typography>
                    <Typography>
                      4. Gather and refine specifications and requirements based
                      on technical needs
                    </Typography>
                    <Typography>
                      5. Create and maintain software documentation
                    </Typography>
                    <Typography>
                      6. Remain responsible for maintaining, expanding, and
                      scaling our site
                    </Typography>
                    <Typography>
                      7. Stay plugged into emerging technologies/industry trends
                      and apply them into operations and activities
                    </Typography>
                    <Typography>
                      8. Cooperate with web designers to match visual design
                      intent
                    </Typography>
                  </Grid>
                </Grid>
                <Box mt={3}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Skill(s) required
                  </Typography>
                  <Typography mt={1} ml={2}>
                    MERN/MEAN Stack
                  </Typography>
                </Box>
                <Grid mt={3}>
                  <Typography>
                    Learn these skills on Internshala Trainings
                  </Typography>
                  <Box
                    mt={2}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Typography>
                      <Link sx={{ textDecoration: "none" }} href="#">
                        Learn Web Development
                      </Link>
                    </Typography>
                    <Typography>
                      <Link sx={{ textDecoration: "none" }} href="#">
                        Learn Business Communication
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Who can apply
                  </Typography>
                  <Typography>Only those candidates can apply who:</Typography>
                  <Typography mt={1}>
                    1. are available for the work from home job/internship
                  </Typography>
                  <Typography>
                    2. can start the work from home job/internship between 24th
                    Dec'21 and 28th Jan'22
                  </Typography>
                  <Typography>
                    3. are available for duration of 3 months
                  </Typography>
                  <Typography>4. have relevant skills and interests</Typography>
                </Grid>
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>Perks</Typography>
                  <Box mt={2} display="flex" justifyContent="space-around">
                    <Typography>Certificate</Typography>
                    <Typography>Letter of recommendation</Typography>
                    <Typography>Flexible work hours</Typography>
                    <Typography>5 days a week</Typography>
                  </Box>
                </Grid>
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Number of openings
                  </Typography>
                  <Typography>20</Typography>
                </Grid>
                <Grid display="flex" justifyContent="center">
                  <Button disabled>Already Applied</Button>
                </Grid>
                <Typography
                  sx={{ border: "3px solid #FFAB76 ", color: "#B3541E" }}
                  p={1}
                  mt={5}
                  
                >
                  <Typography display="flex">
                    <ErrorOutlineIcon />
                    Save yourself from fraud!
                  </Typography>
                  
                  <Box pt={1}>
                  <Typography >
                    if an employer asks you to pay any security deposit,
                    registration fee, laptop fee, etc., do not pay and notify us
                    immediately. Remember, Internshala doesn't charge a fee from
                    the students to apply to a job or an internship & we don't
                    allow other companies to do so either.
                  </Typography>
                  </Box>
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default IndividualPage;
