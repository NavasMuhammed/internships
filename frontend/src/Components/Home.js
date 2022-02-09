import React, { useEffect } from "react";
import { Box, Typography, Grid, Button, Link, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import "../styles/home.css";
import work from "./image/work.jfif";
import job from "./image/jobs.png";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { allInternshipsListAction } from "../actions/internshipActions";

const useStyles = makeStyles((theme) => ({
  topographyStyle: {
    display: "flex",
  },
}));
const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allInternshipsListAction());
    // console.log("Dispatched");
  }, [dispatch]);

  return (
    <>
      <Grid m={10}>
        <div className="search">
          <input
            type="search"
            name="search"
            id="search"
            autoComplete="false"
            placeholder="What are you looking for?"
          />
          <Button variant="contained">
            <SearchIcon />
          </Button>
        </div>
        <Typography mb={2} variant="h5">
          Internships
        </Typography>
        <Typography display="flex" justifyContent="center">
          <span>Apply to 10,000+ internships for free</span>
          <Button
            style={{ width: "124px", marginLeft: "5px" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            view all
          </Button>
        </Typography>
        <Typography mt={5} mb={3} variant="h6">
          Popular Cities
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography mt={5} mb={3} variant="h6">
          Popular Categories
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography mt={3} mb={2} variant="h4">
          Internshala Trainings
        </Typography>
        <Typography display="flex" justifyContent="center" mb={4}>
          <div>Learn new-age skills on the gob</div>
          <Button
            style={{ width: "124px", marginLeft: "5px" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            view all
          </Button>
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={work} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Work from home
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Typography mt={3} mb={2} variant="h4">
          Fresher Jobs
        </Typography>
        <Typography display="flex" justifyContent="center" mb={4}>
          <div>Premium fresher jobs on your fingertips</div>
          <Button
            style={{ width: "124px", marginLeft: "5px" }}
            variant="contained"
            endIcon={<SendIcon />}
          >
            view all
          </Button>
        </Typography>
        <Grid container spacing={3}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={job} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Minimum CTC of 3LPA
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={job} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    Minimum CTC of 3LPA
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={job} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    100% verified jobs
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <Box>
              <Link className="u-line" href="#">
                <Paper elevation={3}>
                  <img className="img" src={job} alt="No_image" />
                  <Typography p={2} textAlign="center">
                    100% verified jobs
                  </Typography>
                </Paper>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
