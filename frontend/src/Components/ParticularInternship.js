import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import axios from "axios";
import moment from "moment";

import { Link, useParams } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import StartDate from "@mui/icons-material/SlowMotionVideo";
import Duration from "@mui/icons-material/AvTimer";
import Stipend from "@mui/icons-material/Paid";
import ApplyBy from "@mui/icons-material/AccessTimeFilled";
import Applicants from "@mui/icons-material/PeopleOutline";
import { useDispatch, useSelector } from "react-redux";
import {
  oneInternshipDetails,
  allUserInternshipActions,
} from "../actions/internshipActions";

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const ParticularInternship = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [item, setItem] = useState([]);
  // const [isEnrolled, setIsEnrolled] = useState(false);
  //   const isEnrolledInCourse = useSelector((state) => state.isEnrolledInCourse);
  //   const { loading: isEnrolledLoading, isEnrolled } = isEnrolledInCourse;
  const theInternship = useSelector((state) => state.oneInternshipDetails);
  const { loading, error, internshipDetails } = theInternship;
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  // const allUserInternships = useSelector((state) => state.allUserInternships);
  const { data } = internshipDetails;
  const [internshipDetail, setInternshipDetail] = useState({});
  const [loadings, setLoadings] = useState(false);
  // const bearerToken = localStorage.getItem("token");
  // const internship = internshipDetails.data

  const fetchInternshipDetails = async () => {
    const { data } = await axios.get(`/internship/oneInternship/${id}`);
    setInternshipDetail(data.data);
  };

  useEffect(() => {
    dispatch(oneInternshipDetails(id));
    // // console.log(internshipDetails)
    // console.log(theInternship);
    // setItem(data);
    // // console.log("item", item)
    // console.log("match", props.match);
    // // console.log("history", history);
    // console.log("userInfo : ", userInfo);
    fetchInternshipDetails();
  }, []);
  // const logInternship = () => {
  //     console.log("Log karta hu to bhi aata hai , ", internship._id);
  // }
  return (
    <>
      <Grid ml={25} mr={25} mt={8}>
        <Typography display="flex">
          <Typography>
            <ArrowBackIosIcon />
          </Typography>
          <Link to="/allInternships" sx={{ textDecoration: "none" }}>
            Browse more internships
          </Link>
        </Typography>
        <Typography
          mt={8}
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h5"
        >
          {/* <Button variant="contained" onClick={() => {
        // console.log("allUserInternships", allUserInternships);
        // console.log("internshipDetails: ", data)
        // console.log(internship._id)

        // console.log("id from useParams", id);
        dispatch(oneInternshipDetails(id));
        console.log(internshipDetails)
        // console.log(theInternship)
        setItem(data)
        // console.log("item", item)
        console.log("match", props.match);
        // console.log("history", history);
        console.log("userInfo : ", userInfo);
    }, [dispatch]);
    // const logInternship = () => {
    //     console.log("Log karta hu to bhi aata hai , ", internship._id);
    // }
    return (
        <>
            <Grid ml={25} mr={25} mt={8}>
                <Typography display="flex">
                    <Typography>
                        <ArrowBackIosIcon />
                    </Typography>
                    <Link to="#" sx={{ textDecoration: "none" }}>
                        Browse more internships
                    </Link>
                </Typography>
                <Typography
                    mt={8}
                    sx={{ display: "flex", justifyContent: "center" }}
                    variant="h5"
                >
                    {/* <Button variant="contained" onClick={() => {
                        console.log("Log karta hu to bhi aata hai , ", internship._id);
                    }}>Vidhish</Button> */}
          {/* {`aaa${internshipDetails.data._id}`} */}
          {/* <p>{internshipDetails.data._id}</p> */}
          {/* {data} */}
          {internshipDetail.title} {internshipDetail.location} internship at{" "}
          <br /> {internshipDetail.companyName}
          {/* {userInfo.profilePicture}
           */}
          {internshipDetail.companyLogo !== "" ? (
            <img
              src={internshipDetail.companyLogo}
              style={{
                width: "200px",
                borderRadius: "100%",
                marginLeft: "200px"
              }}
              alt=""
            />
          ) : (
            ""
          )}
          {/* <img src={userInfo.profilePicture} alt="company-logo" /> */}
        </Typography>

        {new Date(internshipDetail.lastDate) < new Date() ? (
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
              to="/allInternships"
              sx={{
                textDecoration: "none",
                marginLeft: "3px",
                marginRight: "5px",
              }}
            >
              Click here
            </Link>
            to browse more internships
          </Typography>
        ) : (
          <div></div>
        )}

        <Grid Container spacing={3} mt={6}>
          <Paper elevation={4}>
            <Grid>
              <Grid ml={5} mt={3} mr={3} pb={5} mb={5}>
                <Typography sx={{ paddingTop: "15px" }}>
                  {item.title}
                </Typography>
                <Box sx={{ display: "flex", marginTop: "8px" }}>
                  <Typography>{item.companyName}</Typography>
                  {/* <Typography
                                        ml={2}
                                        sx={{ color: "green", backgroundColor: "#BAFFB4" }}
                                    >
                                        NGO
                                    </Typography> */}
                </Box>
                <Box sx={{ display: "flex", marginTop: "14px" }}>
                  <Typography>
                    <HomeWorkIcon />
                  </Typography>
                  <Typography ml={2}>{item.location}</Typography>
                </Box>
                <Grid mt={5} display="flex" justifyContent="space-between">
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <StartDate />
                      </Typography>
                      <Typography ml={1}>Start Date</Typography>
                    </Box>
                    <Typography ml={3}>{internshipDetail.startsAt}</Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <Duration />
                      </Typography>
                      <Typography ml={1}>Duration</Typography>
                    </Box>
                    <Typography ml={3}>
                      {internshipDetail.duration} Months
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <Stipend />
                      </Typography>
                      <Typography ml={1}>Stipend</Typography>
                    </Box>
                    <Typography ml={3}>
                      {internshipDetail.stipend === ("Unpaid" || "unpaid") ? (
                        "Unpaid"
                      ) : (
                        <>{`Rs.${internshipDetail.stipend} /month`}</>
                      )}
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box sx={{ display: "flex" }}>
                      <Typography>
                        <ApplyBy />
                      </Typography>
                      <Typography ml={1}>Apply By</Typography>
                    </Box>
                    <Typography ml={3}>
                      {moment(internshipDetail.lastDateToApply).date()}{" "}
                      {
                        monthNames[
                        moment(internshipDetail.lastDateToApply).month()
                        ]
                      }
                      , {moment(internshipDetail.lastDateToApply).year()}
                    </Typography>
                  </Box>
                </Grid>
                <Typography ml={3} p={2}>
                  <Button disabled>Internship</Button>
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Typography>
                    <Applicants />
                  </Typography>
                  <Typography ml={1}>
                    {internshipDetail.noOfApplicants} Applicants
                  </Typography>
                </Box>
                <Divider />
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    About {internshipDetail.companyName}
                  </Typography>

                  {internshipDetail.website ? (
                    <Typography variant="h7">
                      Website
                      <a href={internshipDetail.website}>
                        {internshipDetail.website}
                      </a>
                    </Typography>
                  ) : (
                    ""
                  )}
                  {internshipDetail.aboutCompany}
                </Grid>
                <Grid mt={3} m={3}>
                  <Paper elevation={6}>
                    <Grid pt={3} ml={2} mr={2} pb={2}>
                      <Typography sx={{ fontWeight: "bold" }}>
                        Activity on {internshipDetail.companyName}
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
                    About the {internshipDetail.location} internship
                  </Typography>
                  <Typography variant="h7">
                    Selected intern's day-to-day responsibilities include:
                  </Typography>
                  <Grid mt={2}>
                    {internshipDetail.aboutInternship}
                    {/* <Typography>
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
                                        </Typography> */}
                  </Grid>
                </Grid>
                <Box mt={3}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Skill(s) required
                  </Typography>
                  <Typography mt={1} ml={2}>
                    {/* {item.skillsRequired} */}
                  </Typography>
                </Box>
                <Grid mt={3}>
                  <Typography>
                    Learn these skills on XcitEducation Trainings
                  </Typography>
                  <Box
                    mt={2}
                    sx={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <Typography>
                      <Link sx={{ textDecoration: "none" }} to="#">
                        Learn Web Development
                      </Link>
                    </Typography>
                    <Typography>
                      <Link sx={{ textDecoration: "none" }} to="#">
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
                    1. are available for the {item.location} internship
                  </Typography>
                  <Typography>
                    2. can start the {item.location} job/internship in a period
                    of 7 days starting from {item.startsAt}
                  </Typography>
                  <Typography>
                    3. are available for duration of {item.duration} months
                  </Typography>
                  <Typography>4. have relevant skills and interests</Typography>
                </Grid>
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>Perks</Typography>
                  <Box mt={2} display="flex" justifyContent="space-around">
                    {internshipDetail.perks &&
                      internshipDetail.perks.map((perk, index) => (
                        <Typography key={index}>{perk.perk}</Typography>
                        // console.log(perk.perk);
                      ))}

                    {/* <Typography>Certificate</Typography>
                    <Typography>
                      Letter of recommendation(Performance Based)
                    </Typography>
                    <Typography>Flexible work hours</Typography>
                    <Typography>5 days a week</Typography> */}
                  </Box>
                </Grid>
                <Grid mt={2}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Number of openings
                  </Typography>
                  <Typography>{internshipDetail.noOfOpenings}</Typography>
                </Grid>
                {/* <Link to="/questions">
                                    <Grid display="flex" justifyContent="center">
                                        <Button variant="contained">Apply</Button>
                                    </Grid>
                                </Link> */}
                {userInfo ? (
                  <Link
                    to={`/questions/${internshipDetail._id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Grid display="flex" justifyContent="center">
                      <Button variant="contained">Apply</Button>
                    </Grid>
                  </Link>
                ) : (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Grid display="flex" justifyContent="center">
                      <Button
                        style={{ backgroundColor: "orange" }}
                        variant="contained"
                      >
                        Login to Apply
                      </Button>
                    </Grid>
                  </Link>
                )}
                {/* <Button variant="contained">Apply</Button>
                                <Button disabled variant="contained" color="danger">Login to Apply</Button> */}
                {/* {isLoggedIn == true ? (
                                    <Link to="/questions">
                                        <Grid display="flex" justifyContent="center">
                                            <Button variant="contained">Apply</Button>
                                        </Grid>
                                    </Link>
                                ) : (
                                    <Grid display="flex" justifyContent="center">
                                        <Button disabled variant="contained" color="danger">Login to Apply</Button>
                                    </Grid>
                                )} */}

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
                    <Typography>
                      if an employer asks you to pay any security deposit,
                      registration fee, laptop fee, etc., do not pay and notify
                      us immediately. Remember, XcitEducation doesn't charge a
                      fee from the students to apply to a job or an internship &
                      we don't allow other companies to do so either.
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

export default ParticularInternship;
