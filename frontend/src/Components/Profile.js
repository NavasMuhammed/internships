import React, { useState } from "react";

import {
  Typography,
  Box,
  Grid,
  Container,
  Card,
  CardContent,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Slide,
  Divider,
  TextField,
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
  MenuItem,
} from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Resume = () => {
  const [openEducation, setOpenEducation] = useState(false);
  const [openJobs, setOpenJobs] = useState(false);
  const [openInternships, setOpenInternships] = useState(false);
  const [openPOR, setOpenPOR] = useState(false);
  const [openTrainCourse, setOpenTrainCourse] = useState(false);
  const [openAcademics, setOpenAcademics] = useState(false);
  const [openSkills, setOpenSkills] = useState(false);
  const [openWorksamples, setOpenWorksamples] = useState(false);
  const [openAccomplishment, setOpenAccomplishment] = useState(false);

  const [profile, setProfile] = useState({
    Add_your_Education: "",
    Add_your_College_Name: "",
    start_year: "",
    end_year: "",
    job_operations: "",
    job_organization: "",
    job_location: "",
    job_description: "",
    internship_operations: "",
    internship_organization: "",
    internship_location: "",
    internship_description: "",
    POR_operations: "",
    POR_organization: "",
    POR_location: "",
    POR_description: "",
    training_operations: "",
    training_organization: "",
    training_location: "",
    training_description: "",
    projects_operations: "",
    projects_organization: "",
    projects_location: "",
    projects_description: "",
    skills: "",
    Ratings: "",
    work_sample_blog_link: "",
    work_sample_github_profile: "",
    work_sample_play_store: "",
    work_sample_portfolio_link: "",
    other_work_sample_link: "",
    accomplishment_description: "",
  });

  let name, value;
  const handleChange = (e) => {
    console.log(profile);
    name = e.target.name;
    value = e.target.value;
    setProfile({ ...profile, [name]: value });
  };

  const handleClickOpenEducation = () => {
    setOpenEducation(true);
  };
  const handleClickOpenJobs = () => {
    setOpenJobs(true);
  };
  const handleClickOpenInternships = () => {
    setOpenInternships(true);
  };
  const handleClickOpenPOR = () => {
    setOpenPOR(true);
  };
  const handleClickOpenTrainCourse = () => {
    setOpenTrainCourse(true);
  };
  const handleClickOpenAcademics = () => {
    setOpenAcademics(true);
  };
  const handleClickOpenSkills = () => {
    setOpenSkills(true);
  };
  const handleClickOpenWorkSamples = () => {
    setOpenWorksamples(true);
  };
  const handleClickOpenAccomplishments = () => {
    setOpenAccomplishment(true);
  };

  const handleCloseEducation = () => {
    setOpenEducation(false);
  };
  const handleCloseJobs = () => {
    setOpenJobs(false);
  };
  const handleCloseInternships = () => {
    setOpenInternships(false);
  };
  const handleClosePOR = () => {
    setOpenPOR(false);
  };
  const handleCloseTrainCourse = () => {
    setOpenTrainCourse(false);
  };
  const handleCloseAcademics = () => {
    setOpenAcademics(false);
  };
  const handleCloseSkills = () => {
    setOpenSkills(false);
  };
  const handleCloseWorksamples = () => {
    setOpenWorksamples(false);
  };
  const handleCloseAccomplishments = () => {
    setOpenAccomplishment(false);
  };
  return (
    <>
      <Box pt={3} textAlign="center">
        <Typography variant="h4">Resume</Typography>
      </Box>
      <Container component={Paper} sx={{ display: "flex" }}>
        <Grid item xs={12} md={12} sx={{ display: "flex" }}>
          <Grid xs={6} md={8}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h4" color="initial">
                Brijesh Sundi
              </Typography>
              <Typography variant="subtitle2" color="initial">
                brijeshsundi@gmail.com
              </Typography>
              <Typography variant="subtitle2" color="initial">
                +91 8291305189
              </Typography>
              <Typography variant="subtitle2" color="initial">
                Mumbai
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={6} md={4}>
            <Box sx={{ m: 3 }}>
              <Button variant="outlined" endIcon={<FileDownloadOutlinedIcon />}>
                Download
              </Button>
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
                Education
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                Master of Science(M.S),Information Technology
                <Box sx={{ ml: 30 }}>
                  <EditIcon sx={{ mr: 2 }}></EditIcon>
                  <DeleteIcon></DeleteIcon>
                </Box>
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
                <Box sx={{ pl: 30 }}>
                  <EditIcon sx={{ mr: 2 }}></EditIcon>
                  <DeleteIcon></DeleteIcon>
                </Box>
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
              <Button
                startIcon={<AddIcon />}
                onClick={handleClickOpenEducation}
              >
                Add Education
              </Button>
              <Dialog
                fullWidth
                open={openEducation}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseEducation}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Add Education
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <TextField
                      onChange={handleChange}
                      name="Add_your_Education"
                      fullWidth
                      label="Add your Education"
                      variant="standard"
                    />
                    <TextField
                      onChange={handleChange}
                      name="Add_your_College_Name"
                      fullWidth
                      label="Add your College Name"
                      variant="standard"
                    />
                    <TextField
                      onChange={handleChange}
                      name="start_year"
                      fullWidth
                      label="Start year"
                      variant="standard"
                    />
                    <TextField
                      onChange={handleChange}
                      name="end_year"
                      fullWidth
                      label="End year"
                      variant="standard"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseEducation}>Close</Button>
                </DialogActions>
              </Dialog>
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
                Jobs
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button startIcon={<AddIcon />} onClick={handleClickOpenJobs}>
                Add Jobs
              </Button>
              <Dialog
                fullWidth
                open={openJobs}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseJobs}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Job details
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Profile
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="job_operation"
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="job_orgarnization"
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="job_location"
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup>
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="job_description"
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseJobs}>Close</Button>
                </DialogActions>
              </Dialog>
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
                Internships
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleClickOpenInternships}
              >
                Add Internships
              </Button>
              <Dialog
                fullWidth
                open={openInternships}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseInternships}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Internship details
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Profile
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="internship_operations"
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="internship_organization"
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="internship_location"
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup>
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="internship_description"
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseInternships}>Close</Button>
                </DialogActions>
              </Dialog>
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
              <Button startIcon={<AddIcon />} onClick={handleClickOpenPOR}>
                Add Position of Responsibility
              </Button>
              <Dialog
                fullWidth
                open={openPOR}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClosePOR}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Position of Resposibility details
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Profile
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="POR_operations"
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="POR_organization"
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="POR_location"
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup>
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="POR_description"
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleClosePOR}>Close</Button>
                </DialogActions>
              </Dialog>
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
                Training/courses
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleClickOpenTrainCourse}
              >
                Add Training/courses
              </Button>
              <Dialog
                fullWidth
                open={openTrainCourse}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseTrainCourse}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Training/Courses
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Profile
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="training_operations"
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="training_organization"
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="training_location"
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup>
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="training_description"
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseTrainCourse}>Close</Button>
                </DialogActions>
              </Dialog>
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
                Academics/personal projects
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleClickOpenAcademics}
              >
                Add Academics/personal projects
              </Button>
              <Dialog
                fullWidth
                open={openAcademics}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseAcademics}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Academics/personal projects
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Profile
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="projects_operations"
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="projects_organization"
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="projects_location"
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup>
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="projects_description"
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseAcademics}>Close</Button>
                </DialogActions>
              </Dialog>
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
                Skills
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button startIcon={<AddIcon />} onClick={handleClickOpenSkills}>
                Add Skills
              </Button>
              <Dialog
                fullWidth
                open={openSkills}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseSkills}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>Skills</DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Add Skill
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="skills"
                      fullWidth
                      label="e.g Web Development"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Add Rating to Skills
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="Ratings"
                      fullWidth
                      label="e.g 2.5/5 OR 4/5"
                      variant="standard"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseSkills}>Close</Button>
                </DialogActions>
              </Dialog>
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
                Porfolio/Work samples
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleClickOpenWorkSamples}
              >
                Add Porfolio/Work samples
              </Button>
              <Dialog
                fullWidth
                open={openWorksamples}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseWorksamples}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Work Samples
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Blog link
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="work_sample_blog_link"
                      fullWidth
                      label="http://myblog.com"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      GitHub profile
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="work_sample_github_profile"
                      fullWidth
                      label="http://github.com/my_profile"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Play store developer A/c(public link)
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="work_sample_play_store"
                      fullWidth
                      label="http://play.google.com/store/apps/developer?id=myapps"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Behance portfolio link
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="work_sample_portfolio_link"
                      fullWidth
                      label="http://behance.net/my_profile"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Other work sample link
                    </DialogContentText>
                    <DialogContentText>
                      Your work samples could be in the form of social media
                      posts, presentations, documents, website etc. If you have
                      multiple work samples, upload them to google drive and add
                      the link here.
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="other_work_sample_link"
                      fullWidth
                      label="https://myworksample.com"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Save</Button>
                  <Button onClick={handleCloseWorksamples}>Close</Button>
                </DialogActions>
              </Dialog>
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
              <Typography
                variant="subtitle1"
                sx={{ display: "flex" }}
                color="initial"
              >
                Accomplishments/additional Details
              </Typography>
            </Box>
          </Grid>
          {/* Right Element of Container */}
          <Grid item xs={12} md={9}>
            <Box sx={{ m: 3 }}>
              <Button
                startIcon={<AddIcon />}
                onClick={handleClickOpenAccomplishments}
              >
                Add Accomplishments/additional Details
              </Button>
              <Dialog
                fullWidth
                open={openAccomplishment}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleCloseAccomplishments}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle sx={{ textAlign: "center" }}>
                  Additional details
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <DialogContentText color="initial">
                      Add your accomplishments such as rewards, recognitions,
                      test scores, certifications, etc. here. You may also add
                      information such as seminars/workshops you have attended
                      or any interests/hobbies you have pursued.
                    </DialogContentText>
                    <TextField
                      onChange={handleChange}
                      name="accomplishment_description"
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button>Add</Button>
                  <Button onClick={handleCloseAccomplishments}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Resume;
