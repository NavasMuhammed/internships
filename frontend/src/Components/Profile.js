import React, { useState, useEffect } from "react";

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
  Rating
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


  const [education, setEducation] = useState([])
  const [jobs, setJobs] = useState([])
  const [internships, setInternships] = useState([])
  const [positions, setPositions] = useState([])
  const [courses, setCourses] = useState([])
  const [projects, setProjects] = useState([])
  const [skills, setSkills] = useState([])
  const [links, setLinks] = useState([])
  const [additionalDetails, setadditionalDetails] = useState([])
  // SINGLE FORMS
  const [PORText, setPORText] = useState("")
  const [additionalDetailsText, setAdditionalDetailsText] = useState("")
  const [skillsInput, setSkillsInput] = useState({
    skill: "",
    rating: 0
  })
  const [educationInput, setEducationInput] = useState({
    title: "",
    institute: "",
    startYear: "",
    endYear: ""
  })
  const [jobsInput, setJobsInput] = useState({
    profile: "",
    organization: "",
    location: "",
    description: "",
    startDate: "",
    endDate: ""
  })
  const [internshipsInput, setInternshipsInput] = useState({
    profile: "",
    organization: "",
    location: "",
    description: "",
    startDate: "",
    endDate: ""
  })
  const [projectsInput, setProjectsInput] = useState({
    title: "",
    startMonth: "",
    endMonth: "",
    description: "",
    link: ""
  })
  const [courseInput, setCourseInput] = useState({
    title: "",
    organization: "",
    location: "",
    startMonth: "",
    endMonth: "",
    description: "",
  })
  const [linksInput, setlinksInput] = useState({
    blog: "",
    github: "",
    linkedin: "",
    behance: "",
    other: ""
  })
  // education: education------------------------------------------DONE,
  // jobs: jobs-----------------------------------------------------DONE,
  // internships: internships-----------------------------------------------DONE,
  // positions: positions,-----------------------------------------DONE
  // courses: courses-----------------------------------------------------DONE,
  // projects: projects----------------------------------------------DONE,
  // skills: skills,------------------------------------DONE
  // links: links,
  // additionalDetails: additionalDetails-------------------------------------------DONE
  const [profile2, setProfile2] = useState({
    education: education,
    jobs: jobs,
    internships: internships,
    positions: positions,
    courses: courses,
    projects: projects,
    skills: skills,
    links: links,
    additionalDetails: additionalDetails
  })

  useEffect(() => {
    if (profile2) {
      console.log(profile2);
    }
  }, [profile2])

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
    // console.log(profile);
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

      {/* =============================EDUCATION================================== */}
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
              {education.map((e) => (
                <>
                  <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                    {e.title}
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
                    {e.institute}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {e.startYear} to {e.endYear}
                  </Typography>
                </>
              ))}

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
                      // onChange={handleChange}
                      // name="Add_your_Education"
                      fullWidth
                      label="Title"
                      value={educationInput.title}
                      placeholder="Eg, B.Tech/ B.Sc"
                      variant="standard"
                      onChange={e => { setEducationInput({ ...educationInput, title: e.target.value }); console.log(educationInput) }}
                    />
                    <TextField
                      // onChange={handleChange}
                      // name="Add_your_College_Name"
                      fullWidth
                      label="Institute Name"
                      placeholder="Institute Name"
                      variant="standard"
                      value={educationInput.institute}
                      onChange={e => { setEducationInput({ ...educationInput, institute: e.target.value }); console.log(educationInput) }}
                    />
                    <br />
                    Start Year
                    <TextField
                      // onChange={handleChange}
                      // name="start_year"
                      fullWidth
                      value={educationInput.startYear}
                      variant="standard"
                      type="month"
                      onChange={e => { setEducationInput({ ...educationInput, startYear: e.target.value }); console.log(educationInput) }}
                    />
                    <br />
                    End Year
                    <TextField
                      // onChange={handleChange}
                      // name="end_year"
                      fullWidth
                      value={educationInput.endYear}
                      type="month"
                      variant="standard"
                      onChange={e => { setEducationInput({ ...educationInput, endYear: e.target.value }); console.log(educationInput) }}
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { education.push(educationInput); console.log(education); setProfile2({ ...profile2, education: education }); setOpenEducation(false); console.log(profile2); setEducationInput({ title: "", institute: "", startYear: "", endYear: "" }) }}>Add</Button>
                  <Button onClick={handleCloseEducation}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ===================================JOBS================================== */}
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
              {jobs.map((j) => (
                <>
                  <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                    {j.profile}
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
                    {j.organization}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {j.location}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {j.startDate} to {j.endDate}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {j.description}

                  </Typography>
                </>
              ))}
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
                      onChange={(e) => { setJobsInput({ ...jobsInput, profile: e.target.value }) }}
                      value={jobsInput.profile}
                      // onChange={handleChange}
                      // name="job_operation"
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_orgarnization"
                      onChange={(e) => { setJobsInput({ ...jobsInput, organization: e.target.value }) }}
                      value={jobsInput.organization}
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_location"
                      onChange={(e) => { setJobsInput({ ...jobsInput, location: e.target.value }) }}
                      value={jobsInput.location}
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    {/* <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup> */}
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_description"
                      onChange={(e) => { setJobsInput({ ...jobsInput, description: e.target.value }) }}
                      value={jobsInput.description}
                      fullWidth
                      multiline
                      rows={4}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                    <DialogContentText color="initial">
                      Start Date
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_description"
                      onChange={(e) => { setJobsInput({ ...jobsInput, startDate: e.target.value }) }}
                      value={jobsInput.startDate}
                      fullWidth
                      type="month"
                    />
                    <DialogContentText color="initial">
                      End Date
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_description"
                      onChange={(e) => { setJobsInput({ ...jobsInput, endDate: e.target.value }) }}
                      value={jobsInput.endDate}
                      fullWidth
                      type="month"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { jobs.push(jobsInput); console.log(jobs); setProfile2({ ...profile2, jobs: jobs }); setOpenJobs(false); console.log(profile2); setJobsInput({ profile: "", organization: "", location: "", description: "", startDate: "", endDate: "" }) }}>Add</Button>

                  <Button onClick={handleCloseJobs}>Close</Button>
                </DialogActions >
              </Dialog >
            </Box >
          </Grid >
        </Grid >
      </Container >

      {/* ============================================INTERNSHIPS=============================================== */}
      < Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        < Divider variant="middle" />
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
              {internships.map((i) => (
                <>
                  <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                    {i.profile}
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
                    {i.organization}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {i.location}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {i.startDate} to {i.endDate}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {i.description}

                  </Typography>
                </>
              ))}
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
                      onChange={(e) => { setInternshipsInput({ ...internshipsInput, profile: e.target.value }) }}
                      value={internshipsInput.profile}
                      // onChange={handleChange}
                      // name="job_operation"
                      fullWidth
                      label="e.g Web Developer"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_orgarnization"
                      onChange={(e) => { setInternshipsInput({ ...internshipsInput, organization: e.target.value }) }}
                      value={internshipsInput.organization}
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_location"
                      onChange={(e) => { setInternshipsInput({ ...internshipsInput, location: e.target.value }) }}
                      value={internshipsInput.location}
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    {/* <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Is work from home"
                      />
                    </FormGroup> */}
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_description"
                      onChange={(e) => { setInternshipsInput({ ...internshipsInput, description: e.target.value }) }}
                      value={internshipsInput.description}
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                    <DialogContentText color="initial">
                      Start Date
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_description"
                      onChange={(e) => { setInternshipsInput({ ...internshipsInput, startDate: e.target.value }) }}
                      value={internshipsInput.startDate}
                      fullWidth
                      type="month"
                      rows={8}
                    />
                    <DialogContentText color="initial">
                      End Date
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="job_description"
                      onChange={(e) => { setInternshipsInput({ ...internshipsInput, endDate: e.target.value }) }}
                      value={internshipsInput.endDate}
                      fullWidth
                      type="month"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { internships.push(internshipsInput); console.log(internships); setProfile2({ ...profile2, internships: internships }); setOpenInternships(false); console.log(profile2); setInternshipsInput({ profile: "", organization: "", location: "", description: "", startDate: "", endDate: "" }) }}>Add</Button>

                  <Button onClick={handleCloseInternships}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container >

      {/* ===========================POSITIONS============================ */}
      < Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        < Divider variant="middle" />
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
              {positions.map((d) => (
                <p key={positions.indexOf(d)}>
                  <p>{positions.indexOf(d) + 1}) {d}</p>
                  <br />
                </p>
              ))}
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
                      Add any Position of Responsibility that you have handled
                    </DialogContentText>
                    <TextField
                      fullWidth
                      multiline
                      rows={8}
                      value={PORText}
                      label="Short description of your Work"
                      variant="outlined"
                      onChange={(e) => { setPORText(e.target.value); console.log(PORText) }}

                    />
                  </Box>
                </DialogContent>


                <DialogActions>
                  <Button onClick={() => { setPositions([...positions, PORText]); console.log("POR", positions); setOpenPOR(false); setPORText(""); setProfile2({ ...profile2, positions: positions }) }}>Add</Button>
                  <Button onClick={handleClosePOR}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container >

      {/* =====================================COURSES=========================================== */}
      < Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        < Divider variant="middle" />
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
              {courses.map((c) => (
                <>
                  <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                    {c.title}
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
                    {c.organization}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {c.location}
                  </Typography>


                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {c.startMonth} to {c.endMonth}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {c.description}

                  </Typography>
                </>
              ))}
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
                      Title
                    </DialogContentText>
                    <TextField
                      onChange={e => { setCourseInput({ ...courseInput, title: e.target.value }) }}
                      value={courseInput.title}
                      fullWidth
                      label="e.g Machine Learning"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Orgarnization
                    </DialogContentText>
                    <TextField
                      onChange={e => { setCourseInput({ ...courseInput, organization: e.target.value }) }}
                      value={courseInput.organization}
                      fullWidth
                      label="e.g Internshala"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Location
                    </DialogContentText>
                    <TextField
                      onChange={e => { setCourseInput({ ...courseInput, location: e.target.value }) }}
                      value={courseInput.location}
                      fullWidth
                      label="e.g Mumbai"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Start Month
                    </DialogContentText>
                    <TextField
                      onChange={e => { setCourseInput({ ...courseInput, startMonth: e.target.value }) }}
                      value={courseInput.startMonth}
                      type="month"
                      fullWidth
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      End Month
                    </DialogContentText>
                    <TextField
                      onChange={e => { setCourseInput({ ...courseInput, endMonth: e.target.value }) }}
                      value={courseInput.endMonth}
                      type="month"
                      fullWidth
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={e => { setCourseInput({ ...courseInput, description: e.target.value }) }}
                      value={courseInput.description}
                      fullWidth
                      multiline
                      rows={8}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => {
                    courses.push(courseInput); console.log(courses); setProfile2({ ...profile2, courses: courses }); setOpenTrainCourse(false); console.log(profile2); setCourseInput({
                      title: "",
                      organization: "",
                      location: "",
                      startMonth: "",
                      endMonth: "",
                      description: "",
                    })
                  }}>Add</Button>

                  <Button onClick={handleCloseTrainCourse}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* ===============================PROJECTS============================================== */}
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
              {projects.map((p) => (
                <>
                  <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                    {p.title}
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
                    <a href={p.link}>{p.link}</a>
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {p.startMonth} to {p.endMonth}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="initial"
                    sx={{ color: "#666" }}
                  >
                    {p.description}

                  </Typography>
                </>
              ))}
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
                      Title
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      // name="projects_operations"
                      onChange={e => { setProjectsInput({ ...projectsInput, title: e.target.value }) }}
                      value={projectsInput.title}
                      fullWidth
                      label="e.g Operations"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Start Month
                    </DialogContentText>
                    <TextField
                      onChange={e => { setProjectsInput({ ...projectsInput, startMonth: e.target.value }) }}
                      value={projectsInput.startMonth}
                      type="month"
                      fullWidth
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      End Month
                    </DialogContentText>
                    <TextField
                      onChange={e => { setProjectsInput({ ...projectsInput, endMonth: e.target.value }) }}
                      value={projectsInput.endMonth}
                      type="month"
                      fullWidth
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Link
                    </DialogContentText>
                    <TextField
                      onChange={e => { setProjectsInput({ ...projectsInput, link: e.target.value }) }}
                      value={projectsInput.link}
                      fullWidth
                      variant="standard"
                    />

                    <DialogContentText color="initial">
                      Description
                    </DialogContentText>
                    <TextField
                      onChange={e => { setProjectsInput({ ...projectsInput, description: e.target.value }) }}
                      value={projectsInput.description}
                      fullWidth
                      multiline
                      rows={4}
                      label="Short description of your Work"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { setProjects([...projects, projectsInput]); console.log(projects); setOpenAcademics(false); setProjectsInput({ title: "", startMonth: "", endMonth: "", link: "", description: "" }); setProfile2({ ...profile2, projects: projects }) }}>Add</Button>

                  <Button onClick={handleCloseAcademics}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container >

      {/* ===============================SKILLS======================== */}
      < Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        < Divider variant="middle" />
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
              {skills.map((s) => (
                <div key={skills.indexOf(s)} style={{ display: "flex" }}>
                  {s.skill}
                  <Rating precision={0.5} name="size-medium" value={s.rating} size="large" readOnly />
                  <br />
                </div>
              ))}
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
                      // onChange={handleChange}
                      onChange={(e) => { setSkillsInput({ ...skillsInput, skill: e.target.value }); console.log(skillsInput) }}
                      fullWidth
                      value={skillsInput.skill}
                      label="e.g Web Development"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Add Rating to Skills(muliple of 0.5)
                    </DialogContentText>
                    <TextField
                      // onChange={handleChange}
                      type="number"
                      onChange={e => { setSkillsInput({ ...skillsInput, rating: e.target.value }); console.log(skillsInput) }}
                      value={skillsInput.rating}
                      fullWidth
                      label="e.g 2.5/5 OR 4/5 out of 5"
                      variant="standard"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { skills.push(skillsInput); console.log(skills); setOpenSkills(false); setProfile2({ ...profile2, skills: skills }); console.log(profile2); setSkillsInput({ skill: "", rating: 0 }) }}>Add</Button>
                  <Button onClick={handleCloseSkills}>Close</Button>
                </DialogActions >
              </Dialog >
            </Box >
          </Grid >
        </Grid >
      </Container >

      {/* =========================================LINKS====================================== */}
      < Container component={Paper} sx={{ display: "flex" }}>
        {/* Left Element of Container */}
        < Divider variant="middle" />
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

              {linksInput.blog !== "" ? <>
                Blog: <a href={linksInput.blog}>{linksInput.blog}</a>
              </> : null}<br />
              {linksInput.github !== "" ? <>
                Github Profile: <a href={linksInput.github}>{linksInput.github}</a>
              </> : null}<br />
              {linksInput.linkedin !== "" ? <>
                Linkedin Profile: <a href={linksInput.linkedin}>{linksInput.linkedin}</a>
              </> : null}<br />
              {linksInput.behance !== "" ? <>
                Behance Profile: <a href={linksInput.behance}>{linksInput.behance}</a>
              </> : null}<br />
              {linksInput.other !== "" ? <>
                Other Profile: <a href={linksInput.other}>{linksInput.other}</a>
              </> : null}<br />
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
                      onChange={e => { setlinksInput({ ...linksInput, blog: e.target.value }) }}
                      value={linksInput.blog}
                      fullWidth
                      label="http://myblog.com"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      GitHub profile
                    </DialogContentText>
                    <TextField
                      onChange={e => { setlinksInput({ ...linksInput, github: e.target.value }) }}
                      value={linksInput.github}
                      fullWidth
                      label="http://github.com/my_profile"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Linkedin Link
                    </DialogContentText>
                    <TextField
                      onChange={e => { setlinksInput({ ...linksInput, linkedin: e.target.value }) }}
                      value={linksInput.linkedin}
                      fullWidth
                      label="http://linkedin.com/my_profile"
                      variant="standard"
                    />
                    <DialogContentText color="initial">
                      Behance portfolio link
                    </DialogContentText>
                    <TextField
                      onChange={e => { setlinksInput({ ...linksInput, behance: e.target.value }) }}
                      value={linksInput.behance}
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
                      onChange={e => { setlinksInput({ ...linksInput, other: e.target.value }) }}
                      value={linksInput.other}
                      fullWidth
                      label="https://myworksample.com"
                      variant="outlined"
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { setLinks(linksInput); console.log(links); setProfile2({ ...profile2, links: links }); setOpenWorksamples(false); console.log(profile2); }}>Add</Button>

                  <Button onClick={handleCloseWorksamples}>Close</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Container >

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
              {additionalDetails.map((d) => (
                <p key={additionalDetails.indexOf(d)}>
                  <p>{additionalDetails.indexOf(d) + 1}) {d}</p>
                  <br />
                </p>
              ))}
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
                      value={additionalDetailsText}
                      onChange={(e) => { setAdditionalDetailsText(e.target.value); console.log(additionalDetailsText) }}
                    />
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => { setadditionalDetails([...additionalDetails, additionalDetailsText]); console.log("Additional Details", additionalDetails); setOpenAccomplishment(false); setAdditionalDetailsText(""); setProfile2({ ...profile2, additionalDetails: additionalDetails }) }}>Add</Button>
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
