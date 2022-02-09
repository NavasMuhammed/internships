import {
  Box,
  Container,
  Typography,
  FormGroup,
  Card,
  CardContent,
  FormControlLabel,
  Checkbox,
  TextField,
  Switch,
  Slider,
  Paper,
  Autocomplete,
  CardMedia,
  Button,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { NavLink } from "react-router-dom";
// import MyApplicationCard from "./MyApplicationCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";
import LocalAtmOutlinedIcon from "@mui/icons-material/LocalAtmOutlined";
import HourglassTopIcon from "@mui/icons-material/HourglassTop";
// import { useDispatch, useSelector } from "react-redux";
import { allInternshipsListAction } from "../actions/internshipActions";
import { isUserEnrolledReset } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

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

const AllInternships = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const allInternshipsList = useSelector(
    (state) => state.allInternshipsList.allInternshipsList
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log(internshipArray)
  //   console.log(internships)
  //   console.log("000 :", internships[0].title)
  //   dispatch(allInternshipsListAction());
  //   // console.log("Sencond");
  // }, []);
  const internshipArray = [
    {
      id: 0,
      companyName: "Xciteducation",
      title: "Web Development",
      location: "Mumbai",
      startsAt: "Immediately",
      duration: "3",
      stipend: "Unpaid",
      lastDateToApply: "29/1/2022",
    },
    {
      id: 1,
      companyName: "Ideadunes",
      title: "Mern Development",
      location: "Mumbai",
      startsAt: "Immediately",
      duration: "6",
      stipend: "5000",
      lastDateToApply: "29/1/2022",
    },
    {
      id: 2,
      companyName: "Ideadunes",
      title: "Web Development",
      location: "Mumbai",
      startsAt: "Immediately",
      duration: "6",
      stipend: "5000",
      lastDateToApply: "29/1/2022",
    },
  ];
  useEffect(() => {
    console.log(allInternshipsList);
  }, []);

  const internships = internshipArray;
  // { title: "Frontend", data: [1, 2, 3] },

  // { title: "Backend Courses", data: backendCourseList },
  // { title: "Designing Courses", data: designingCourseList },
  // { title: "Database Courses", data: databaseCourseList },
  // { title: "Fullstack Courses", data: fullstackCourseList },
  // { title: "Other Courses", data: otherCourseList },
  const [search, setsearch] = useState("");
  const inputEvent = (event) => {
    const data = event.target.value;
    console.log(data);
    setsearch(data);
  };
  const internTypes = [
    { label: "Web development" },
    { label: "MERN Stack development" },
  ];
  const dataSearch = allInternshipsList.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(search.toString().toLowerCase())
    );
  });
  // const dataSearch = internshipArray.filter((item) => {
  //   return Object.keys(item).some((key) =>
  //     item[key]
  //       .toString()
  //       .toLowerCase()
  //       .includes(search.toString().toLowerCase())
  //   );
  // });
  return (
    <>
      <Box pt={3} textAlign="center">
        <Typography variant="h4">All Internships</Typography>
      </Box>
      <Container sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          className="filter"
          component={Paper}
          sx={{
            maxWidth: "20%",
            m: 3,
            height: "110vh",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            color="initial"
            textAlign="center"
            sx={{ m: 2 }}
          >
            Filter
          </Typography>
          <FormGroup sx={{ mx: 3 }} size="small">
            <FormControlLabel
              control={<Checkbox />}
              label="Show internships as per"
            />
          </FormGroup>
          {/* <NavLink>Perferences</NavLink> */}
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Categorie
          </Typography>
          {/* <Autocomplete
            disablePortal
            options={internTypes}
            sx={{ width: 198 }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                sx={{ mx: 2 }}
                label="e.g. Marketing"
              />
            )}
          /> */}
          <TextField
            id="outlined-basic"
            label="e.g. Marketing"
            variant="outlined"
            size="small"
            name="search"
            // value={search.search}
            // onChange={handleChange}
            value={search}
            onChange={inputEvent}
            sx={{ mx: 2 }}
          />
          {/* <TextField
            id="outlined-basic"
            label="e.g. Marketing"
            variant="outlined"
            size="small"
            sx={{ mx: 2 }}
          /> */}
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Location
          </Typography>
          <TextField
            id="outlined-basic"
            label="Location"
            variant="outlined"
            size="small"
            sx={{ mx: 2 }}
          />
          <FormControlLabel
            sx={{ mx: 2 }}
            control={<Switch color="primary" size="small" />}
            label="Include work from home also"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{ mx: 2, fontsize: "25px" }}
            control={<Switch color="primary" size="small" />}
            label="Part-time"
            labelPlacement="start"
          />
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Desired minimum monthly stipend (₹)
          </Typography>
          <Slider
            defaultValue={10}
            aria-label="Default"
            valueLabelDisplay="auto"
            sx={{ mx: 2 }}
          />
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Start from (or after)
          </Typography>
          <TextField
            sx={{ mx: 2 }}
            id="outlined-basic"
            label="e.g. Marketing"
            variant="outlined"
            size="small"
          />
          <Typography variant="subtitle2" color="initial" sx={{ mx: 2 }}>
            Max. duration (months)
          </Typography>
          <TextField
            sx={{ mx: 2 }}
            id="outlined-basic"
            label=""
            variant="outlined"
            size="small"
          />
          <FormControlLabel
            sx={{ m: 2 }}
            control={<Switch color="primary" size="small" />}
            label="Internships for women"
            labelPlacement="start"
          />
          <FormControlLabel
            sx={{ fontsize: "25px", mx: 2, mb: 2 }}
            control={<Switch color="primary" size="small" />}
            label="Internships with job offer"
            labelPlacement="start"
          />
        </Box>
        <Box className="Main" sx={{ flexGrow: 1, flexDirection: "column" }}>
          {/* sssssssssssss */}
          {dataSearch.map((item) => (
            <Card
              key={item._id}
              variant="outlined"
              component={Paper}
              sx={{ display: "flex", flexGrow: 1, m: 4, width: "800px" }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ fontWeight: "Bold" }}
                  >
                    {item.title}
                    {item.companyLogo !== "" ? (
                      <img
                        src={item.companyLogo}
                        style={{
                          width: "100px",
                          borderRadius: "100%",
                          position: "relative",
                          left: "400px",
                        }}
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                    {/* <CardMedia image={item.companyLogo || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} /> */}

                    <Typography variant="subtitle1">
                      {item.companyName}
                    </Typography>

                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ my: 2 }}
                    >
                      <LocationOnIcon
                        fontSize="small"
                        sx={{ mt: "3px", mr: 1 }}
                      />
                      {item.location}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <PlayCircleFilledWhiteOutlinedIcon
                          sx={{ mt: "3px", mr: 1 }}
                          fontSize="small"
                        />
                        START DATE
                        <Typography
                          sx={{ display: "flex", mx: 4 }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="small"
                        >
                          <CalendarTodayIcon
                            fontSize="small"
                            sx={{ mt: "3px", mr: 1 }}
                          />
                          DURATION
                        </Typography>
                        <Typography
                          sx={{ display: "flex", mx: 4 }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="small"
                        >
                          <LocalAtmOutlinedIcon
                            fontSize="small"
                            sx={{ mt: "3px", mr: 1 }}
                          />
                          STIPEND
                        </Typography>
                        <Typography
                          sx={{ display: "flex" }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="small"
                        >
                          <HourglassTopIcon
                            fontSize="small"
                            sx={{ mt: "3px", mr: 1 }}
                          />
                          APPLY BY
                        </Typography>
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.startsAt}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.duration} Months
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.stipend}/month
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {moment(item.lastDateToApply).date()}{" "}
                        {monthNames[moment(item.lastDateToApply).month()]},{" "}
                        {moment(item.lastDateToApply).year()}
                      </Typography>
                    </Box>
                  </Typography>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Internship
                    </Typography>
                    <Link
                      to={`/internship/${item._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      {/* <Typography
                      variant="subtitle1"
                      color="Primary"
                    // component={Link}
                    // to="/particularInternship"
                    > */}
                      <Button variant="contained" color="primary">
                        View Internship
                      </Button>
                      {/* </Typography> */}
                    </Link>
                  </Box>
                </CardContent>
              </Box>
            </Card>
          ))}
          {/*  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjkzIDc5MC43MSI+PGRlZnM+PHN0eWxlPi5jbHMtMSwuY2xzLTEze2ZpbGw6IzVkMjFkMTt9LmNscy0yLC5jbHMtOHtmaWxsOiNmZmY7fS5jbHMtM3tmaWxsOiNmZTc2MjQ7fS5jbHMtNCwuY2xzLTUsLmNscy03LC5jbHMtOXtmaWxsOm5vbmU7fS5jbHMtMTEsLmNscy0xMiwuY2xzLTEzLC5jbHMtNHtzdHJva2U6I2ZmZjt9LmNscy0xMiwuY2xzLTEzLC5jbHMtNCwuY2xzLTUsLmNscy03LC5jbHMtOCwuY2xzLTl7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7fS5jbHMtMTEsLmNscy0xMiwuY2xzLTEzLC5jbHMtNCwuY2xzLTUsLmNscy03LC5jbHMtOCwuY2xzLTl7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO30uY2xzLTExLC5jbHMtMTIsLmNscy0xMywuY2xzLTQsLmNscy01LC5jbHMtNywuY2xzLTh7c3Ryb2tlLXdpZHRoOjZweDt9LmNscy01e3N0cm9rZTojZmU3NjI0O30uY2xzLTExLC5jbHMtMTIsLmNscy02e2ZpbGw6IzJlMTg2YTt9LmNscy03LC5jbHMtOCwuY2xzLTl7c3Ryb2tlOiMyZTE4NmE7fS5jbHMtOXtzdHJva2Utd2lkdGg6OHB4O30uY2xzLTEwe2ZpbGw6Izk2OGJiNDt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9InNvbGlkX0lJSSIgZGF0YS1uYW1lPSJzb2xpZCBJSUkiPjxnIGlkPSJub3RfZm91bmQiIGRhdGEtbmFtZT0ibm90IGZvdW5kIj48ZyBpZD0iZm9sZGVyc19iZyIgZGF0YS1uYW1lPSJmb2xkZXJzIGJnIj48ZyBpZD0iZm9sZGVyX0lJSSIgZGF0YS1uYW1lPSJmb2xkZXIgSUlJIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjE1Ny45MiIgeT0iNjA1Ljg0IiB3aWR0aD0iMjg5Ljk3IiBoZWlnaHQ9IjcyLjU3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5NDUuMDMgMzM5LjIxKSByb3RhdGUoOTApIi8+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIyMzMuNDciIHk9IjU2OS44NSIgd2lkdGg9IjEzNS4wMiIgaGVpZ2h0PSIzOC45NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODkwLjMxIDI4OC4zNikgcm90YXRlKDkwKSIvPjxyZWN0IGNsYXNzPSJjbHMtMyIgeD0iMjk0LjY2IiB5PSI2NDkuMzQiIHdpZHRoPSIxMi42NCIgaGVpZ2h0PSIzOC45NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTY5Ljc5IDM2Ny44NCkgcm90YXRlKDkwKSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMzAwLjIzIiBjeT0iNzM3LjI5IiByPSIxMy42OCIvPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjMxNiIgeTE9IjU1My45NCIgeDI9IjI4Ny4wNSIgeTI9IjU1My45NCIvPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjMxNiIgeTE9IjU2OC44MSIgeDI9IjI4Ny4wNSIgeTI9IjU2OC44MSIvPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjMxNiIgeTE9IjU4My42OCIgeDI9IjI4Ny4wNSIgeTI9IjU4My42OCIvPjwvZz48ZyBpZD0iZm9sZGVyX0lJIiBkYXRhLW5hbWU9ImZvbGRlciBJSSI+PHJlY3QgY2xhc3M9ImNscy0xIiB4PSIyMzAuMTkiIHk9IjYwNi4xNCIgd2lkdGg9IjI4OS45NyIgaGVpZ2h0PSI3Mi41NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAxNy42IDI2Ny4yNCkgcm90YXRlKDkwKSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMzA1LjczIiB5PSI1NzAuMTUiIHdpZHRoPSIxMzUuMDIiIGhlaWdodD0iMzguOTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2Mi44OCAyMTYuMzkpIHJvdGF0ZSg5MCkiLz48cmVjdCBjbGFzcz0iY2xzLTYiIHg9IjM2Ni45MyIgeT0iNjQ5LjYzIiB3aWR0aD0iMTIuNjQiIGhlaWdodD0iMzguOTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDIuMzYgMjk1Ljg3KSByb3RhdGUoOTApIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSIzNzIuNSIgY3k9IjczNy41OSIgcj0iMTMuNjgiLz48bGluZSBjbGFzcz0iY2xzLTciIHgxPSIzODcuODIiIHkxPSI2MTYuMSIgeDI9IjM1OC44NyIgeTI9IjYxNi4xIi8+PGxpbmUgY2xhc3M9ImNscy03IiB4MT0iMzg3LjgyIiB5MT0iNTM5LjM3IiB4Mj0iMzU4Ljg3IiB5Mj0iNTM5LjM3Ii8+PGxpbmUgY2xhc3M9ImNscy03IiB4MT0iMzg3LjgyIiB5MT0iNjMwLjk3IiB4Mj0iMzU4Ljg3IiB5Mj0iNjMwLjk3Ii8+PGxpbmUgY2xhc3M9ImNscy03IiB4MT0iMzg3LjgyIiB5MT0iNjQ1Ljg0IiB4Mj0iMzU4Ljg3IiB5Mj0iNjQ1Ljg0Ii8+PC9nPjxnIGlkPSJmb2xkZXIiPjxyZWN0IGNsYXNzPSJjbHMtMSIgeD0iODYuMzciIHk9IjYwNi4xNCIgd2lkdGg9IjI4OS45NyIgaGVpZ2h0PSI3Mi41NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODczLjc4IDQxMS4wNikgcm90YXRlKDkwKSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMTYxLjkxIiB5PSI1NzAuMTUiIHdpZHRoPSIxMzUuMDIiIGhlaWdodD0iMzguOTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgxOS4wNiAzNjAuMjEpIHJvdGF0ZSg5MCkiLz48cmVjdCBjbGFzcz0iY2xzLTMiIHg9IjIyMy4xIiB5PSI2NDkuNjMiIHdpZHRoPSIxMi42NCIgaGVpZ2h0PSIzOC45NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoODk4LjU0IDQzOS42OSkgcm90YXRlKDkwKSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iMjI4LjY4IiBjeT0iNzM3LjU5IiByPSIxMy42OCIvPjxsaW5lIGNsYXNzPSJjbHMtNyIgeDE9IjI0NCIgeTE9IjYxNi4xIiB4Mj0iMjE1LjA1IiB5Mj0iNjE2LjEiLz48bGluZSBjbGFzcz0iY2xzLTciIHgxPSIyNDQiIHkxPSI1MzkuMzciIHgyPSIyMTUuMDUiIHkyPSI1MzkuMzciLz48bGluZSBjbGFzcz0iY2xzLTciIHgxPSIyNDQiIHkxPSI2MzAuOTciIHgyPSIyMTUuMDUiIHkyPSI2MzAuOTciLz48bGluZSBjbGFzcz0iY2xzLTciIHgxPSIyNDQiIHkxPSI2NDUuODQiIHgyPSIyMTUuMDUiIHkyPSI2NDUuODQiLz48L2c+PC9nPjxnIGlkPSJtYW4iPjxnIGlkPSJoYW5kcyI+PGcgaWQ9ImhhbmRfSUkiIGRhdGEtbmFtZT0iaGFuZCBJSSI+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNMzQ4LjI1LDQwNC4zMWE0Ny4zNyw0Ny4zNywwLDAsMC0xMC42OC0zMi4xNkMzMjUuMTUsMzU3LDMyNSwzNDcuMzksMzE4LDM0MC4xNHMtMTguMTEtMy45NC04LjExLDIwLjY1LDE0LjMyLDM0LjY5LDE0LjMyLDM0LjY5WiIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTI5MSwzNjkuNjJjMS4wOCwwLDY5LjE2LTMuNDcsNzcuMjcsNjQiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik0zMzcuMDYsNTA0LjM0cy04LjQ0LTQ5LjgxLTE5LjUtNjcuMS0zNS43Ni0xNi0zNS43Ni0xNlMyMTksMzY1LjU3LDIwOS45MSwzNTUuNTFzLTUuNjEtMTkuNjUsMTAuNjQtOC40Nyw2NS4wOSw0Ni42MSw2NS4wOSw0Ni42MSw4MS40Mi0yNy41Nyw5NC42Niw1MC42NGwxNSw0Ni40MloiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik0yODAuNzMsNDE4Ljc4cy0zMi4yNS03MS42NS0zNy4wOC04NS4xNSwxLjctMjAuNjIsMTIuNjctMi43MSwzNS45Myw1OS40MSwzNS45Myw1OS40MSIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTI3Ny42OCw0MTMuMDVzLTIuNTctNjEuNDYtMi41Ni03My4zN2MwLTE5LjYzLDExLjc5LTI1LjIxLDE0LjgzLDEuMjUsMiwxNy42Nyw0LjI3LDUwLjI0LDQuMjcsNTAuMjQiLz48L2c+PGcgaWQ9ImhhbmQiPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTEyMDQsNDA0LjMxYTQ3LjMzLDQ3LjMzLDAsMCwxLDEwLjY3LTMyLjE2YzEyLjQzLTE1LjE0LDEyLjU2LTI0Ljc2LDE5LjU5LTMyczE4LjEtMy45NCw4LjEsMjAuNjVTMTIyOCwzOTUuNDgsMTIyOCwzOTUuNDhaIi8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNMTI2MS4xOSwzNjkuNjJjLTEuMDgsMC02OS4xNy0zLjQ3LTc3LjI3LDY0Ii8+PHBhdGggY2xhc3M9ImNscy04IiBkPSJNMTIxNS4xNiw1MDQuMzRzOC40NC00OS44MSwxOS41LTY3LjEsMzUuNzYtMTYsMzUuNzYtMTYsNjIuNzgtNTUuNjgsNzEuODktNjUuNzQsNS42MS0xOS42NS0xMC42NC04LjQ3LTY1LjA5LDQ2LjYxLTY1LjA5LDQ2LjYxLTgxLjQyLTI3LjU3LTk0LjY2LDUwLjY0bC0xNSw0Ni40MloiLz48cGF0aCBjbGFzcz0iY2xzLTgiIGQ9Ik0xMjcxLjQ5LDQxOC43OHMzMi4yNS03MS42NSwzNy4wOC04NS4xNS0xLjctMjAuNjItMTIuNjYtMi43MVMxMjYwLDM5MC4zMywxMjYwLDM5MC4zMyIvPjxwYXRoIGNsYXNzPSJjbHMtOCIgZD0iTTEyNzQuNTQsNDEzLjA1czIuNTctNjEuNDYsMi41Ni03My4zN2MwLTE5LjYzLTExLjc5LTI1LjIxLTE0LjgzLDEuMjUtMiwxNy42Ny00LjI2LDUwLjI0LTQuMjYsNTAuMjQiLz48L2c+PC9nPjxnIGlkPSJob29kaWUiPjxwYXRoIGNsYXNzPSJjbHMtMyIgZD0iTTEyMzMuODYsNDc3LjU5YzEuMzMtMTUuMy0uNjctMjEuMzYtLjY3LTIxLjM2LTM1LjE4LDMuNzItNjMuMzktMjkuODgtNjMuMzktMjkuODhzLTMuMzYsMy44LTEyLjgzLDE2LTI3LjQ1LTEuNTgtMzguMDcsMTUuOTRjLTguNTgsMTQuMTYtMzksODguMzctNTAuMzcsMTE2LjMyQzEwMzQsNDcyLDk4OS42MSw0MTkuODYsOTE3LjE5LDQwNi43NCw5MDcuNzUsMzQ5LjU1LDg2NywyNzcsNzA0LjgsMjg5LjY2LDYwNCwzMDcuODMsNTczLjI0LDM1OS40Nyw1ODAuMjEsNDE0aC0uNDhzLTY1LjI2LS44Ny0xMDEuODIsMTA3Ljc0Yy0xMC43MS0yNS4yLTIxLjU4LTQ5Ljg2LTI2LjI1LTU3LjU4LTEwLjYzLTE3LjUyLTQ2LjkyLTkuNjUtNTYuNC0yMS44MnMtMTIuODQtMTYtMTIuODQtMTZTMzU0LjIyLDQ2MCwzMTksNDU2LjIzYzAsMC0yLDYuMDYtLjY2LDIxLjM2cy0xNy4yNywxNy4wNS0xMy4xMiwzNy4wNiw2OS42NywxOTkuNDYsNjkuNjcsMTk5LjQ2YzYuMTgsMTYuNjgsMTQuMzQsNjguODcsNDguMiw3MC43M2ExLjM1LDEuMzUsMCwwLDAsMS4xOC44N2M1My42OS0uMTUsNzEwLjIxLjQsNzEwLjIxLjRzLjA2LS43MS4xMy0yLjA1YzI5LjI1LTYuOSwzNi44My01NC4yMiw0Mi42Ni02OS45NSwwLDAsNjUuNTMtMTc5LjQ1LDY5LjY3LTE5OS40NlMxMjMyLjUzLDQ5Mi44OSwxMjMzLjg2LDQ3Ny41OVoiLz48cGF0aCBpZD0id2VsdCIgY2xhc3M9ImNscy02IiBkPSJNMTIzNC4xNiw0NzUuMTVjMi41MS0xNi0uNTktMjItLjU5LTIyLTMyLjE0LDYuOTUtNjEuODQtMjkuNTktNjEuODQtMjkuNTlzLTQsMy41NS0xMy41OCwxN2MtMy44Nyw1LjQzLTcuODEsNi0xMS44Miw3LjEyLDEzLjM1LDQzLjQyLDc1Ljg4LDQ5LjQyLDk3LjY3LDQ5Ljk1QzEyNDIuMzUsNDg4LjI0LDEyMzIuMjYsNDg3LjMsMTIzNC4xNiw0NzUuMTVaIi8+PHBhdGggaWQ9IndlbHQtMiIgZGF0YS1uYW1lPSJ3ZWx0IiBjbGFzcz0iY2xzLTYiIGQ9Ik0zMTcuOTQsNDc1LjI3Yy0yLjUxLTE2LC43MS0yMi4wOC43MS0yMi4wOCwzMi4xNSw2Ljk1LDYxLjg1LTI5LjU5LDYxLjg1LTI5LjU5czQuODQuNTQsMTQuNDUsMTRjMy44Nyw1LjQzLDEwLjUyLDEwLDE0LjUzLDExLjExLTEzLjM0LDQzLjQxLTgwLjE1LDQ5LjMtMTAxLjkzLDQ5LjgzQzMwOS4xOSw0ODkuMSwzMTkuODQsNDg3LjQzLDMxNy45NCw0NzUuMjdaIi8+PHBhdGggaWQ9InNoYXBlIiBjbGFzcz0iY2xzLTYiIGQ9Ik01NzkuODQsNDEwLjYxYy0xOS41NCw0LTM5Ljc5LDE0LjI2LTU3LjcsMzQuMTMsMTYuNjcsMjQuMTIsNzQuODgsMTA2LjE2LDE4Mi4yLDEyMy42YTEwLjg4LDEwLjg4LDAsMCwwLS40Ny0yLjE5QzY0NC4zOSw1NDEuNzQsNTg2LjEzLDQ3My44Myw1NzkuODQsNDEwLjYxWiIvPjxwYXRoIGlkPSJzaGFwZV9JSSIgZGF0YS1uYW1lPSJzaGFwZSBJSSIgY2xhc3M9ImNscy02IiBkPSJNOTE3LjEyLDQwNi4zYzMuNzIsMjIuMjIsMi43LDQyLjE3LDIuMiw1My45NS0xLjY1LDM4Ljk0LTE5LjEyLDY2LjExLTMwLjExLDg1LjQ5bC0uNzgsMTkuOTRjNDUuMzYtMTAuNjksODEtOTQuNjksODcuMS0xMzZDOTU5LjQzLDQyMC44NSw5NTYuNTUsNDE0LjI4LDkxNy4xMiw0MDYuM1oiLz48ZyBpZD0ibGluZXMiPjxwYXRoIGNsYXNzPSJjbHMtOSIgZD0iTTY5Ni43Miw1NDQuMThzNDMuMDgsNzQuMzcsNDcuNTcsMTIxLjM0Ii8+PHBhdGggY2xhc3M9ImNscy05IiBkPSJNODgyLjUyLDUzOS42MlM4NjIuMzUsNjEzLjA5LDg2Ny4yOCw2NjAiLz48cGF0aCBjbGFzcz0iY2xzLTciIGQ9Ik00NzUuMjQsNTI0LjM0Yy40NSwxLjM3LDQ4LjI1LDEwMi44Niw0OC4yNSwxMDIuODYiLz48bGluZSBjbGFzcz0iY2xzLTciIHgxPSIxMDcxLjAxIiB5MT0iNTc2LjgiIHgyPSIxMDM4LjI1IiB5Mj0iNjMzLjgxIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNNjE2LjU5LDcwN3MtNCw4MS40Mi00Ni41Niw3OS41MiIvPjwvZz48L2c+PHBhdGggaWQ9InNoaXJ0IiBjbGFzcz0iY2xzLTIiIGQ9Ik04NTguNDcsNzg2LjM3Qzg0OS42LDcxNy42NCw4NDAuMTYsNjE2LDg1NC42Niw1NzNjMjIuODktNjcuNzQsMTQtMTUyLjc2LTEuNDYtMTY1LjA3UzY2NywzOTgsNjY3LDM5OGwtMzAuNjksMTAuNTdTNzUzLjE2LDUxNy4xMyw3ODcuNzYsNzE1LjIyYzUuNDMsMzEuMDYsOS4xLDU1LjQ3LDExLjU0LDc0LjYyIi8+PHBhdGggaWQ9Im5lY2siIGNsYXNzPSJjbHMtOCIgZD0iTTY5My41NywzNDAuMzVsLTIuNDcsNDMuMzMtMjUuNSwxNy41OHM2Ni43OSw0Ni4yNSwxMjYuNTIsMTE1LjMzYzAsMCwzNi42NS0yNS45MSw0NS4yMi0xMDhsLTE5LjIyLTMtOTItNTQuNVoiLz48ZyBpZD0iaGVhZCI+PHBhdGggaWQ9ImVhciIgY2xhc3M9ImNscy04IiBkPSJNNjY0LjY3LDI2MS4yNnMtMzkuNDEsNS40NC0yOC4yMyw0MC41NFM2ODguODksMzExLDY4OC44OSwzMTFsLTExLjY4LTUwLjM5WiIvPjxwYXRoIGlkPSJmYWNlIiBjbGFzcz0iY2xzLTgiIGQ9Ik03NTguNDMsMTIxYzEwLjMxLTIuMSw4MS4xMy0xNS4wOSw5NS44NSw0NC40OHMxMy45MywxMjcuMzQsMTAuODIsMTU4LjYxLTE0MS4yOSwzMy4yOS0xNDkuMzMsMzEuNDgtMTguMy05LjkyLTE4LjMtOS45Mkw2NjguMTIsMjU1UzY0Ny42NiwxNDMuNjYsNzU4LjQzLDEyMVoiLz48cGF0aCBpZD0iYmVhcmQiIGNsYXNzPSJjbHMtMTAiIGQ9Ik02ODEsMjUyLjY1YzcuMzYsNS44OSwyOS40NSw0Mi4yMiwzNS44MSw1OS42MywwLDAsNDIuMDgtMjAuMjMsMTA0LjcyLTI4LjU2LDAsMCwzNC4yOS0zLjM0LDQ4LjQtLjgyLDAsMCw0LjMsNjMuOC0xOS42OCw5OS45MnMtODMuNjgsMzMuODYtMTEzLjQ0LDE3LjM2LTM1LjM5LTI1LjM5LTQ0LjE3LTQ1Ljc3LTM0LjYyLTk3LjE4LTM0LjYyLTk3LjE4WiIvPjxwYXRoIGlkPSJoYWlyIiBjbGFzcz0iY2xzLTYiIGQ9Ik02NjQuNjUsMjY4LjMxcy0yMS44NS0yNy4wNS0zMi40Mi01Ni41N2MtMTAtMjcuNzUtLjI2LTU5LjE4LDI0LjI5LTc1LDIwLjU0LTEzLjIzLDM3LjYyLTYuNzEsMzcuNjItNi43MXMtMjcuNTgtMzcuMjYsMy4wOS03Ni41N2E2My4xOCw2My4xOCwwLDAsMSw0NC4yNC0yNC4xNmM0Mi40My0zLjY1LDU5LjU5LDMxLjE3LDU5LjU5LDMxLjE3UzgzNi44My0yOS4zMiw5MzUuMjgsOS45M2M5LjkzLDQsMjIuMDUsMTYuOCwyOC4xNywyNS42OCwzNy4xMiw1My44Ni01Ni4yNywxMzMuNjItMTA4LjI2LDE0NS4xMi01Ny4xLDEyLjYyLTkyLDYuODItMTEyLjIyLTUuMzhDNzU3Ljc2LDE4Mi4xOSw3NTIuMDgsMjcxLjg0LDY2NC42NSwyNjguMzFaIi8+PHBvbHlsaW5lIGlkPSJub3NlIiBjbGFzcz0iY2xzLTkiIHBvaW50cz0iODE0LjUyIDI0My45NCA4MjcuMDggMjk4LjQ4IDgxMC45MyAzMDIuMTUiLz48ZWxsaXBzZSBpZD0iZXllX0lJIiBkYXRhLW5hbWU9ImV5ZSBJSSIgY2xhc3M9ImNscy02IiBjeD0iODM0Ljk2IiBjeT0iMjU3LjEiIHJ4PSI1LjYxIiByeT0iOC44MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIzLjM5IDk0LjM0KSByb3RhdGUoLTYuMzgpIi8+PGVsbGlwc2UgaWQ9ImV5ZSIgY2xhc3M9ImNscy02IiBjeD0iNzgxLjY1IiBjeT0iMjYwLjY1IiByeD0iNS42MSIgcnk9IjguODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yNC4xMiA4OC40NCkgcm90YXRlKC02LjM4KSIvPjxwYXRoIGlkPSJicm93X0lJIiBkYXRhLW5hbWU9ImJyb3cgSUkiIGNsYXNzPSJjbHMtOSIgZD0iTTc2MS44OCwyNDYuNDFzMjIuODEtMS4zNiwyMi41Mi0xNi42Ii8+PHBhdGggaWQ9ImJyb3ciIGNsYXNzPSJjbHMtOSIgZD0iTTgyNy41MywyMDhzMTUtNS45MSwyMC4zMiw2LjQ3Ii8+PHBhdGggaWQ9Im1vdXRoIiBjbGFzcz0iY2xzLTciIGQ9Ik04MDkuNTcsMzI2LjQ3YTEwNi4yNiwxMDYuMjYsMCwwLDEtMjQuMjksMS42MWMtNS0uMjEtOC43OSwyLjg4LTcuMzEsNiwyLjU5LDUuNDgsOC43OCwxMiwyMy40OCwxMC4yOSwxNC40OC0xLjcyLDE3LjM3LTguNDEsMTcuMzQtMTMuNTZDODE4Ljc3LDMyNy43MSw4MTQuMSwzMjUuNTgsODA5LjU3LDMyNi40N1oiLz48L2c+PC9nPjxnIGlkPSJmb2xkZXJzIj48ZyBpZD0iZm9sZGVyX0lJLTIiIGRhdGEtbmFtZT0iZm9sZGVyIElJIj48cmVjdCBjbGFzcz0iY2xzLTYiIHg9Ijg0MC4xNCIgeT0iNzEyLjMiIHdpZHRoPSIzMDcuMzUiIGhlaWdodD0iNzIuNTciIHRyYW5zZm9ybT0ibWF0cml4KC0xLCAwLCAwLCAtMSwgMTk5MS4xOCwgMTQ5Mi40NSkiLz48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjEwMDcuNzciIHk9IjcyNi45NyIgd2lkdGg9IjEzNS4wMiIgaGVpZ2h0PSIzOC45NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjE1NC4xIDE0ODcuNzgpIHJvdGF0ZSgxNzkuNzMpIi8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSI5ODkuNDgiIHk9IjcyNy4zNSIgd2lkdGg9IjEyLjY0IiBoZWlnaHQ9IjM4Ljk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOTk1LjE0IDE0ODguOTEpIHJvdGF0ZSgxNzkuNzMpIi8+PGNpcmNsZSBjbGFzcz0iY2xzLTQiIGN4PSI5MDguNjgiIGN5PSI3NDguMjgiIHI9IjEzLjY4Ii8+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTExMC43NSIgeTE9Ijc2MS4zIiB4Mj0iMTExMC42MSIgeTI9IjczMi4zNSIvPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjEwOTUuODgiIHkxPSI3NjEuMzciIHgyPSIxMDk1Ljc0IiB5Mj0iNzMyLjQyIi8+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTA4MS4wMSIgeTE9Ijc2MS40NCIgeDI9IjEwODAuODciIHkyPSI3MzIuNDkiLz48L2c+PGcgaWQ9ImZvbGRlci0yIiBkYXRhLW5hbWU9ImZvbGRlciI+PHJlY3QgY2xhc3M9ImNscy02IiB4PSI4OTMuMjUiIHk9IjYzOS41NCIgd2lkdGg9IjI4OS45NyIgaGVpZ2h0PSI3Ni4yNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA3Ni40OCAxMzU1LjM0KSByb3RhdGUoMTgwKSIvPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMTAyMy41MiIgeT0iNjU0LjQxIiB3aWR0aD0iMTM1LjAyIiBoZWlnaHQ9IjM4Ljk2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMTgyLjA2IDEzNDcuNzkpIHJvdGF0ZSgxODApIi8+PHJlY3QgY2xhc3M9ImNscy0zIiB4PSIxMDA1LjIzIiB5PSI2NTQuNDEiIHdpZHRoPSIxMi42NCIgaGVpZ2h0PSIzOC45NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjAyMy4wOSAxMzQ3Ljc5KSByb3RhdGUoMTgwKSIvPjxjaXJjbGUgY2xhc3M9ImNscy00IiBjeD0iOTQzLjA3IiBjeT0iNjczLjE1IiByPSIxMy42OCIvPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjEwNjQuNTYiIHkxPSI2ODguNDciIHgyPSIxMDY0LjU2IiB5Mj0iNjU5LjUyIi8+PGxpbmUgY2xhc3M9ImNscy01IiB4MT0iMTE0MS4yOSIgeTE9IjY4OC40NyIgeDI9IjExNDEuMjkiIHkyPSI2NTkuNTIiLz48bGluZSBjbGFzcz0iY2xzLTUiIHgxPSIxMDQ5LjY5IiB5MT0iNjg4LjQ3IiB4Mj0iMTA0OS42OSIgeTI9IjY1OS41MiIvPjxsaW5lIGNsYXNzPSJjbHMtNSIgeDE9IjEwMzQuODIiIHkxPSI2ODguNDciIHgyPSIxMDM0LjgyIiB5Mj0iNjU5LjUyIi8+PC9nPjwvZz48ZyBpZD0icGlsZV9vZl9maWxlcyIgZGF0YS1uYW1lPSJwaWxlIG9mIGZpbGVzIj48cmVjdCBjbGFzcz0iY2xzLTEiIHg9IjExMjguNCIgeT0iNTMzLjciIHdpZHRoPSIzNTkuMTUiIGhlaWdodD0iMjUzLjMyIi8+PHBhdGggY2xhc3M9ImNscy0xMSIgZD0iTTEzMjkuOTEsNTMxLjI5Vjc4OC40NyIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMjgxLjU2IiB5MT0iNTYxLjc2IiB4Mj0iMTQ0NC4wNyIgeTI9IjU2MS43NiIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMzc5Ljg4IiB5MT0iNjUyLjc3IiB4Mj0iMTQ4NC4yOSIgeTI9IjY1Mi43NyIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMjY1LjMxIiB5MT0iNzM3LjY4IiB4Mj0iMTQ2OC44NiIgeTI9IjczNy42OCIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMjkzLjc1IiB5MT0iNjMwLjAyIiB4Mj0iMTE4OC41MyIgeTI9IjYzMC4wMiIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMTI4LjgiIHkxPSI1OTAuMiIgeDI9IjExOTIuNTkiIHkyPSI1OTAuMiIvPjxsaW5lIGNsYXNzPSJjbHMtMTIiIHgxPSIxMTI4LjQiIHkxPSI3MDcuMjEiIHgyPSIxMjUzLjEyIiB5Mj0iNzA3LjIxIi8+PHBhdGggY2xhc3M9ImNscy0xMyIgZD0iTTExMjcuODYsNTkwLjZjLTI2LjgyLDEwLjU2LjgxLDI4LjIzLjgxLDI4LjIzczYuOTEtMjAsNDIuMjUtMjguMTVaIi8+PHBhdGggY2xhc3M9ImNscy0xMyIgZD0iTTE0ODguNiw2NTIuMzVjMjYuODEsMTAuNTYtLjgyLDI4LjI0LS44MiwyOC4yNHMtNi45LTIwLTQyLjI1LTI4LjE2WiIvPjxwYXRoIGNsYXNzPSJjbHMtMTMiIGQ9Ik0xMjIyLjY2LDcwNy4zOXMtNjIuMjMsMTEuNzQtNjAuNjksNDguMzVjMCwwLTQ5Ljg4LTE4LjMtMzMtNDguMzVaIi8+PC9nPjxsaW5lIGlkPSJsaW5lIiBjbGFzcz0iY2xzLTkiIHgxPSI0IiB5MT0iNzg2LjcxIiB4Mj0iMTY4OSIgeTI9Ijc4Ni43MSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==" />
           */}
          {/* INTERNSHIPARRAY */}
          {/* {internshipArray.map((item) => (
            <Card
              key={item.id}
              variant="outlined"
              component={Paper}
              sx={{ display: "flex", flexGrow: 1, m: 4 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography
                    component="div"
                    variant="h6"
                    sx={{ fontWeight: "Bold" }}
                  >
                    {item.companyName}
                    <Typography variant="subtitle1">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{ my: 2 }}
                    >
                      <LocationOnIcon
                        fontSize="small"
                        sx={{ mt: "3px", mr: 1 }}
                      />
                      {item.location}
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <PlayCircleFilledWhiteOutlinedIcon
                          sx={{ mt: "3px", mr: 1 }}
                          fontSize="small"
                        />
                        START DATE
                        <Typography
                          sx={{ display: "flex", mx: 4 }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="small"
                        >
                          <CalendarTodayIcon
                            fontSize="small"
                            sx={{ mt: "3px", mr: 1 }}
                          />
                          DURATION
                        </Typography>
                        <Typography
                          sx={{ display: "flex", mx: 4 }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="small"
                        >
                          <LocalAtmOutlinedIcon
                            fontSize="small"
                            sx={{ mt: "3px", mr: 1 }}
                          />
                          STIPEND
                        </Typography>
                        <Typography
                          sx={{ display: "flex" }}
                          variant="subtitle1"
                          color="text.secondary"
                          fontSize="small"
                        >
                          <HourglassTopIcon
                            fontSize="small"
                            sx={{ mt: "3px", mr: 1 }}
                          />
                          APPLY BY
                        </Typography>
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.startsAt}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.duration} Months
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.stipend}/month
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="initial"
                        fontSize="small"
                        sx={{ mx: 4 }}
                      >
                        {item.lastDateToApply}
                      </Typography>
                    </Box>
                  </Typography>
                  <Box sx={{ display: "flex", mt: 4 }}>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                      sx={{ flexGrow: 1 }}
                    >
                      Internship
                    </Typography>
                    <Link to="/particularInternship"><Typography
                      variant="subtitle1"
                      color="Primary"
                    // component={Link}
                    // to="/particularInternship"
                    >
                      View Offer
                    </Typography></Link>
                  </Box>
                </CardContent>
              </Box>
            </Card>

          ))} */}

          {/* <Recipe 
          key={recipe.recipe.label}
          ingredients={recipe.recipe.ingredients}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image} /> */}
          {/* <Card
            variant="outlined"
            component={Paper}
            sx={{ display: "flex", flexGrow: 1, m: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "Bold" }}
                >
                  Ideadunes
                  <Typography variant="subtitle1">
                    Web Development Internship
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mt: "3px", mr: 1 }}
                    />
                    Mumbai,Thane
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "flex" }}
                      variant="subtitle1"
                      color="text.secondary"
                      fontSize="small"
                    >
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ mt: "3px", mr: 1 }}
                        fontSize="small"
                      />
                      START DATE
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        DURATION
                      </Typography>
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <LocalAtmOutlinedIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        STIPEND
                      </Typography>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <HourglassTopIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        APPLY BY
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      Immediately
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      6 Months
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      3000-4000/month
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      29 JAN'22
                    </Typography>
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    Internship
                  </Typography>
                  <Link to="/particularInternship"><Typography
                    variant="subtitle1"
                    color="Primary"
                  // component={Link}
                  // to="/particularInternship"
                  >
                    View Offer
                  </Typography></Link>
                </Box>
              </CardContent>
            </Box>
          </Card> */}
          {/* <Card
            variant="outlined"
            component={Paper}
            sx={{ display: "flex", flexGrow: 1, m: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "Bold" }}
                >
                  Ideadunes
                  <Typography variant="subtitle1">
                    Web Development Internship
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mt: "3px", mr: 1 }}
                    />
                    Mumbai,Thane
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "flex" }}
                      variant="subtitle1"
                      color="text.secondary"
                      fontSize="small"
                    >
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ mt: "3px", mr: 1 }}
                        fontSize="small"
                      />
                      START DATE
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        DURATION
                      </Typography>
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <LocalAtmOutlinedIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        STIPEND
                      </Typography>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <HourglassTopIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        APPLY BY
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      Immediately
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      6 Months
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      3000-4000/month
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      29 JAN'22
                    </Typography>
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    Internship
                  </Typography>
                  <Link to="/particularInternship"><Typography
                    variant="subtitle1"
                    color="Primary"
                  // component={Link}
                  // to="/particularInternship"
                  >
                    View Offer
                  </Typography></Link>
                </Box>
              </CardContent>
            </Box>
          </Card> */}
          {/* <Card
            variant="outlined"
            component={Paper}
            sx={{ display: "flex", flexGrow: 1, m: 4 }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography
                  component="div"
                  variant="h6"
                  sx={{ fontWeight: "Bold" }}
                >
                  Ideadunes
                  <Typography variant="subtitle1">
                    Web Development Internship
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ my: 2 }}
                  >
                    <LocationOnIcon
                      fontSize="small"
                      sx={{ mt: "3px", mr: 1 }}
                    />
                    Mumbai,Thane
                  </Typography>
                  <Box sx={{ display: "flex" }}>
                    <Typography
                      sx={{ display: "flex" }}
                      variant="subtitle1"
                      color="text.secondary"
                      fontSize="small"
                    >
                      <PlayCircleFilledWhiteOutlinedIcon
                        sx={{ mt: "3px", mr: 1 }}
                        fontSize="small"
                      />
                      START DATE
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <CalendarTodayIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        DURATION
                      </Typography>
                      <Typography
                        sx={{ display: "flex", mx: 4 }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <LocalAtmOutlinedIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        STIPEND
                      </Typography>
                      <Typography
                        sx={{ display: "flex" }}
                        variant="subtitle1"
                        color="text.secondary"
                        fontSize="small"
                      >
                        <HourglassTopIcon
                          fontSize="small"
                          sx={{ mt: "3px", mr: 1 }}
                        />
                        APPLY BY
                      </Typography>
                    </Typography>
                  </Box>
                  <Box sx={{ display: "flex", flexGrow: 1, my: 2 }}>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      Immediately
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      6 Months
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      3000-4000/month
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      fontSize="small"
                      sx={{ mx: 4 }}
                    >
                      29 JAN'22
                    </Typography>
                  </Box>
                </Typography>
                <Box sx={{ display: "flex", mt: 4 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    Internship
                  </Typography>
                  <Link to="/particularInternship"><Typography
                    variant="subtitle1"
                    color="Primary"
                  // component={Link}
                  // to="/particularInternship"
                  >
                    View Offer
                  </Typography></Link>
                </Box>
              </CardContent>
            </Box>
          </Card> */}
        </Box>
      </Container>
    </>
  );
};

export default AllInternships;
