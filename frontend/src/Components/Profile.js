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
  const [openAddGraduation, setOpenAddGraduation] = useState(false);

  const [profile, setProfile] = useState({
    email: "",
    password: "",
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
  const handleClickOpenAddGraduation = () => {
    setOpenEducation(false);
    setOpenAddGraduation(true);
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
  const handleCloseAddGraduation = () => {
    setOpenAddGraduation(false);
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
                  Education
                </DialogTitle>
                <DialogContent>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      flexDirection: "column",
                    }}
                  >
                    <Button
                      startIcon={<AddIcon />}
                      onClick={handleClickOpenAddGraduation}
                    >
                      Add graduation
                    </Button>
                    <Dialog
                      fullWidth
                      open={openAddGraduation}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={handleCloseAddGraduation}
                    >
                      <DialogTitle sx={{ textAlign: "center" }}>
                        Add Graduation
                      </DialogTitle>
                      <DialogContent>
                        <Box>
                          <DialogContentText>
                            Graduation Status
                          </DialogContentText>
                          <FormGroup
                            sx={{ display: "flex", flexDirection: "row" }}
                          >
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Pursing"
                            />
                            <FormControlLabel
                              control={<Checkbox />}
                              label="Completed"
                            />
                          </FormGroup>
                          <DialogContentText>College</DialogContentText>
                          <TextField
                            fullWidth
                            label="e.g College Name"
                            variant="standard"
                          />
                          <Box sx={{ display: "flex" }}>
                            <Box sx={{ mr: 3 }}>
                              <DialogContentText>Start year</DialogContentText>
                              <TextField
                                sx={{ width: 200 }}
                                variant="standard"
                                id="select"
                                label="Start year"
                                select
                              >
                                <MenuItem value="1997">1997</MenuItem>
                                <MenuItem value="1998">1998</MenuItem>
                                <MenuItem value="1999">1999</MenuItem>
                                <MenuItem value="2000">2000</MenuItem>
                                <MenuItem value="2001">2001</MenuItem>
                                <MenuItem value="2002">2002</MenuItem>
                                <MenuItem value="2003">2003</MenuItem>
                                <MenuItem value="2004">2004</MenuItem>
                                <MenuItem value="2005">2005</MenuItem>
                              </TextField>
                            </Box>
                            <Box>
                              <DialogContentText>End year</DialogContentText>
                              <TextField
                                sx={{ width: 200 }}
                                variant="standard"
                                id="select"
                                label="Start year"
                                select
                              >
                                <MenuItem value="1997">1997</MenuItem>
                                <MenuItem value="1998">1998</MenuItem>
                                <MenuItem value="1999">1999</MenuItem>
                                <MenuItem value="2000">2000</MenuItem>
                                <MenuItem value="2001">2001</MenuItem>
                                <MenuItem value="2002">2002</MenuItem>
                                <MenuItem value="2003">2003</MenuItem>
                                <MenuItem value="2004">2004</MenuItem>
                                <MenuItem value="2005">2005</MenuItem>
                              </TextField>
                            </Box>
                          </Box>
                          <Box sx={{ display: "flex", flexDirection: "row" }}>
                            <Box sx={{ mr: 2 }}>
                              <DialogContentText>Degree</DialogContentText>
                              <TextField
                                fullWidth
                                label="e.g Computer Science"
                                variant="standard"
                              />
                            </Box>
                            <Box>
                              <DialogContentText>Stream</DialogContentText>
                              <TextField
                                fullWidth
                                label="e.g B.Sc(Honours)"
                                variant="standard"
                              />
                            </Box>
                          </Box>
                          <Box
                            sx={{
                              flexDirection: "column",
                              m: 2,
                              backgroundColor: "#F8F8F8",
                              border: "solid #DDD 1px",
                              p: 2,
                            }}
                          >
                            <DialogContentText
                              sx={{
                                mb: 1,
                              }}
                            >
                              Example: If your degree is B.Sc in Chemistry, then
                              select Bachelor of Science (B.Sc) in degree and
                              Chemistry in streams.
                            </DialogContentText>
                            <DialogContentText>
                              If you can't find your degree, check for typos or
                              different ways of writing your degree or choose
                              from the closest available. Write to
                              support@internshala.com if you are pursuing a
                              degree not available in the list.
                            </DialogContentText>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Box sx={{ mr: 3 }}>
                              <DialogContentText>
                                Performances
                              </DialogContentText>
                              <TextField
                                sx={{ width: 200 }}
                                variant="standard"
                                id="select"
                                label="Percentage(Optional)"
                                select
                              >
                                <MenuItem value="CGPA(Grade of 10)">
                                  CGPA(Grade of 10)
                                </MenuItem>
                                <MenuItem value="CGPA(Grade of 9)">
                                  CGPA(Grade of 9)
                                </MenuItem>
                                <MenuItem value="CGPA(Grade of 8)">
                                  CGPA(Grade of 8)
                                </MenuItem>
                                <MenuItem value="CGPA(Grade of 7)">
                                  CGPA(Grade of 7)
                                </MenuItem>
                                <MenuItem value="CGPA(Grade of 6)">
                                  CGPA(Grade of 6)
                                </MenuItem>
                              </TextField>
                            </Box>
                            <Box>
                              <DialogContentText>Percentage</DialogContentText>
                              <TextField
                                sx={{ width: 200 }}
                                variant="standard"
                                label="Percentage(Optional)"
                              ></TextField>
                            </Box>
                          </Box>
                        </Box>
                      </DialogContent>
                      <DialogActions>
                        <Button
                          onClick={handleCloseAddGraduation}
                          variant="outlined"
                        >
                          Save
                        </Button>
                        <Button onClick={handleCloseAddGraduation}>
                          Close
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <Button
                      startIcon={<AddIcon />}
                      // onClick={handleClickOpen}
                    >
                      Add senior secondary(XII)
                    </Button>
                    <Button
                      startIcon={<AddIcon />}
                      // onClick={handleClickOpen}
                    >
                      Add secondary(X)
                    </Button>
                    <Button
                      startIcon={<AddIcon />}
                      // onClick={handleClickOpen}
                    >
                      Add post Graduation
                    </Button>
                    <Button
                      startIcon={<AddIcon />}
                      // onClick={handleClickOpen}
                    >
                      Add diploma
                    </Button>
                    <Button
                      startIcon={<AddIcon />}
                      // onClick={handleClickOpen}
                    >
                      Add PhD
                    </Button>
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
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
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
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
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
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
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
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
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
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
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="e.g Web Development"
                      variant="standard"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
                      fullWidth
                      label="http://myblog.com"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      GitHub profile
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="http://github.com/my_profile"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Play store developer A/c(public link)
                    </DialogContentText>
                    <TextField
                      fullWidth
                      label="http://play.google.com/store/apps/developer?id=myapps"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Behance portfolio link
                    </DialogContentText>
                    <TextField
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
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
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
