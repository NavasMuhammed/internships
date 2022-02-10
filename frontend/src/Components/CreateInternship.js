import React, { useState } from "react";
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
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Stack from "@mui/material/Stack";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import axios from "axios";
import Modal from '@mui/material/Modal';
import { createInternship } from "../actions/internshipActions";
// import { logout } from "../actions/userActions";
import { allInternshipsListAction } from "../actions/internshipActions";

import { useNavigate } from "react-router-dom";

function CreateInternship() {
  const navigate = useNavigate();
  // const [age, setAge] = React.useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  const [isImmediately, setIsImmediately] = useState(true);
  // const [isPPO, setIsPPO] = useState(false);
  const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.userLogin);
  // const { userInfo } = userLogin;
  const top100Films = [
    { label: "Mumbai" },
    { label: "Delhi" },
    { label: "Kolkata" },
    { label: "Kerela" },
    { label: "Madhya Pradesh" },
    { label: "Rajasthan" },
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createInternship(
        form.employerId,
        form.title,
        form.type,
        form.companyLogo,
        form.companyName,
        form.location,
        form.startsAt,
        form.duration,
        form.stipend,
        form.lastDateToApply,
        form.aboutCompany,
        form.aboutInternship,
        form.noOfOpenings,
        form.skillsRequired,
        form.perks,
        form.questions,
        form.isPartTime,
        form.isPPO,
        form.website
      )
    )
      .then(() => {
        setOpen(true);
        setTimeout(() => {
          dispatch(allInternshipsListAction());
          navigate("/allInternships");
        }, 5000);
        // navigate("/allInternships")
      })
      .catch((err) => {
        console.log(err);
      });
    //   e.preventDefault();
    //   setTitleError(false);
    //   settypeError(false);
    //   settaglineError(false);
    //   setdescriptionError(false);
    //   setimgError(false);
    //   setassignmentError(false);

    // if (Title == "") setTitleError(true);
    // if (tagline == "") settaglineError(true);
    // if (image == "") setimgError(true);
    // if (type == "") settypeError(true);
    // if (description == "") setdescriptionError(true);
    // if (assignment == "") setassignmentError(true);
  };
  let name, value;
  const handleChange = (e) => {
    console.log(form);
    name = e.target.name;
    value = e.target.value;
    setForm({ ...form, [name]: value });
  };
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [otherTitle, setOtherTitle] = useState("");
  const [questionsArray, setQuestionsArray] = useState(["Why should you be hired for this internship?", "Are you available for the duration of internship?"])

  const [form, setForm] = useState({
    employerId: userInfo.data._id,
    title: "",
    type: "",
    companyLogo: userInfo.data.profilePicture,
    companyName: userInfo.data.name,
    location: "",
    startsAt: "Immediately",
    duration: "",
    stipend: "",
    lastDateToApply: "",
    aboutCompany: userInfo.data.description,
    aboutInternship:
      "1) You have to daily do all the tasks assigned to you \n 2) Keep a track of all the tasks that you have performed in a day. \n 3) Report all the  progress in tasks to your manager.",
    noOfOpenings: 0,
    skillsRequired: "",
    perks: [],
    questions: questionsArray,
    isPartTime: false,
    isPPO: false,
    website: userInfo.data.website,
  });
  const [question, setQuestion] = useState("")

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your Internship has been posted!
          </Alert>
        </Snackbar>
      </Stack>
      <Grid width="100%" spacing={4}>
        <form onSubmit={handleSubmit}>
          <Box mt={2}>
            <Typography textAlign="center">
              Need assistance? please visit{" "}
              <Link href="#" sx={{ textDecoration: "none" }}>
                Help Center
              </Link>
            </Typography>
            <Typography mt={3} variant="h4" textAlign="center">
              Post Internship{" "}
              <Link href="#" sx={{ textDecoration: "none" }}>
                (Important guidlines)
              </Link>
            </Typography>
          </Box>

          <Grid ml={10} mr={10}>
            <Paper elevation={3}>
              <Grid m={4} p={4}>
                <Typography variant="h4" textAlign="center">
                  About the internship
                </Typography>
                <Typography mt={2} sx={{ fontWeight: "bold" }}>
                  Select primary profile*
                </Typography>
                <Grid sx={{ display: { lg: "flex" } }}>
                  <Box>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <Grid container>
                        <Grid item xs={12} md={12} lg={6}>
                          <FormControlLabel
                            onClick={(e) => {
                              setForm({
                                ...form,
                                title: "Web Development",
                                type: "webdev",
                              });
                              console.log(form);
                            }}
                            value="webdev"
                            control={<Radio />}
                            label="Wev/App Development"
                          />
                          <FormControlLabel
                            onClick={(e) => {
                              setForm({
                                ...form,
                                title: "UI/UX Designing",
                                type: "designing",
                              });
                              console.log(form);
                            }}
                            value="designing"
                            control={<Radio />}
                            label="UI/UX Designing"
                          />
                          <FormControlLabel
                            onClick={(e) => {
                              setForm({
                                ...form,
                                title: "Digital Marketing",
                                type: "digitalmarketing",
                              });
                              console.log(form);
                            }}
                            value="digitalmarketing"
                            control={<Radio />}
                            label="Digital Marketing"
                          />
                        </Grid>
                        <Grid item xs={12} md={12} lg={6}>
                          <FormControlLabel
                            onClick={(e) => {
                              setForm({
                                ...form,
                                title: "Data Science",
                                type: "datascience",
                              });
                              console.log(form);
                            }}
                            value="datascience"
                            control={<Radio />}
                            label="Data Science"
                          />
                          <FormControlLabel
                            onClick={(e) => {
                              setForm({
                                ...form,
                                title: "Content Writing",
                                type: "contentwriting",
                              });
                              console.log(form);
                            }}
                            value="contentwriting"
                            control={<Radio />}
                            label="Content Writing"
                          />
                          <FormControlLabel
                            onClick={(e) => {
                              setForm({
                                ...form,
                                title: otherTitle,
                                type: "other",
                              });
                              console.log(form);
                            }}
                            value="other"
                            control={<Radio />}
                            label="Other"
                          />
                          {form.type == "other" ? (
                            <TextField
                              mt={2}
                              value={otherTitle}
                              onChange={(e) => {
                                setForm({ ...form, title: e.target.value });
                                console.log(form);
                              }}
                              label="Title"
                              name="othertitle"
                              placeholder="Title"
                              fullWidth
                            ></TextField>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </Box>
                </Grid>
                <Grid mt={2}>
                  <Typography mb={1}>Location of Internship *</Typography>
                  <FormControl sx={{ m: 1, minWidth: 80 }}>
                    {/* <InputLabel sx={{}} id="demo-simple-select-autowidth-label">
                                            Select Location
                                        </InputLabel> */}
                    {/* <Autocomplete
                                            disablePortal
                                            id="combo-box-demo"
                                            options={top100Films}
                                            sx={{ width: 300 }}
                                            renderInput={(params) => <TextField value={form.location}
                                                name="location"
                                                onChange={handleChange}
                                                {...params} label="Location" />}
                                        /> */}
                    <Select
                      labelId="demo-simple-select-autowidth-label"
                      id="demo-simple-select-autowidth"
                      // value={age}
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      style={{ width: "200px" }}
                      label="Location"
                    >
                      <MenuItem value="Work From Home">Work from Home</MenuItem>
                      <MenuItem value="Mumbai">Mumbai</MenuItem>
                      <MenuItem value="Delhi">Delhi</MenuItem>
                      <MenuItem value="Kolkata">Kolkata</MenuItem>
                      <MenuItem value="Banglore">Banglore</MenuItem>
                      <MenuItem value="Rajasthan">Rajasthan</MenuItem>
                      <MenuItem value="Madhya Pradesh">Madhya Pradesh</MenuItem>
                      <MenuItem value="Kerela">Kerela</MenuItem>
                      <MenuItem value="Tamil Nadu">Tamil Nadu</MenuItem>
                      <MenuItem value="Punjab">Punjab</MenuItem>
                      <MenuItem value="Himachal Pradesh">
                        Himachal Pradesh
                      </MenuItem>
                    </Select>
                  </FormControl>

                  {/* <FormGroup>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Allow application ONLY from the above or the neighbouring cities"
                    />
                  </FormGroup> */}
                  <br />
                  <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                    <FormLabel component="legend">
                      Is part time allowed? *
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="yes"
                        onClick={(e) => {
                          setForm({ ...form, isPartTime: true });
                          console.log(form);
                        }}
                        control={<Radio />}
                        label="Yes"
                      />
                      <FormControlLabel
                        onClick={(e) => {
                          setForm({ ...form, isPartTime: false });
                          console.log(form);
                        }}
                        value="no"
                        control={<Radio />}
                        label="No"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography sx={{ marginTop: "1rem" }}>
                    {" "}
                    Number of openings *
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& > :not(style)": { m: 1, width: "25ch" },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <TextField
                      value={form.noOfOpenings}
                      name="noOfOpenings"
                      onChange={handleChange}
                      id="standard-basic"
                      label="Enter only Number"
                      variant="standard"
                      placeholder="Enter no. of intern "
                    />
                  </Box>
                  <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                    <FormLabel component="legend">
                      Internship start date *
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-label="gender"
                      name="row-radio-buttons-group"
                      defaultValue="yes"
                    >
                      <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        onClick={() => setIsImmediately(true)}
                        label="Immediately (within 30 days)"
                      />
                      <FormControlLabel
                        value="no"
                        onClick={() => setIsImmediately(false)}
                        control={<Radio />}
                        label="Later"
                      />
                    </RadioGroup>

                    {isImmediately === false ? (
                      <input
                        type="date"
                        name="startsAt"
                        value={form.startsAt}
                        onChange={handleChange}
                      />
                    ) : (
                      ""
                    )}
                  </FormControl>
                  <Typography mt={2}>Last Date to Apply *</Typography>
                  <input
                    type="date"
                    name="lastDateToApply"
                    value={form.lastDateToApply}
                    onChange={handleChange}
                  />

                  <Typography mt={2}>
                    Internship duration(in months) *
                  </Typography>
                  <Box>
                    {/* <TextField
                                        label="Choose duration"
                                        variant="outlined"
                                        type="number"
                                    /> */}
                    <TextField
                      sx={{ marginLeft: "1rem" }}
                      value={form.duration}
                      name="duration"
                      onChange={handleChange}
                      label="Months"
                      variant="outlined"
                      type="number"
                    />
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid ml={10} mr={10} mt={3}>
            <Paper elevation={3}>
              <Grid m={4} p={4}>
                <Typography textAlign="center" variant="h4">
                  Intern's Responsibilities
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginTop: "1rem",
                    marginBottom: ".5rem",
                  }}
                >
                  Write a concise. Yet detailed description of the inter's
                  resposibilities. Consistent
                  <br /> well written JDs typically invite more applications
                  than incomplete ones.
                </Typography>
                <Link sx={{ textDecoration: "none" }} href="#">
                  Click here to learn how your JD can get you more application
                </Link>
                <Paper elevation={6}>
                  <Grid p="2rem" mt={1}>
                    <Typography textAlign="center" variant="h5">
                      Selected intern's day-to-day responsibilities
                    </Typography>
                    <Box>
                      <TextareaAutosize
                        value={form.aboutInternship}
                        onChange={handleChange}
                        // style={{ forntSize: "20px" }}
                        variant="h3"
                        name="aboutInternship"
                        aria-label="empty textarea"
                        placeholder="Enter Intern's Daily Responsibilities"
                        style={{ width: 1100 }}
                      />
                    </Box>
                  </Grid>
                </Paper>
              </Grid>
            </Paper>
          </Grid>
          <Grid ml={10} mr={10} mt={3}>
            <Paper elevation={3}>
              <Grid m={4} p={4}>
                <Typography textAlign="center" variant="h5">
                  Stipend & Perks
                </Typography>
                <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                  <FormLabel sx={{ fontWeight: "bold" }} component="legend">
                    Stipend per month(Rs.)
                  </FormLabel>
                  <TextField
                    value={form.stipend}
                    onChange={handleChange}
                    label="Stipend per month"
                    name="stipend"
                    sx={{ mb: 2 }}
                    placeholder="Enter Stipend"
                    fullWidth
                    required
                  ></TextField>
                  {/* <RadioGroup
                                    row
                                    aria-label="gender"
                                    name="row-radio-buttons-group"
                                >
                                    <FormControlLabel
                                        value="yes"
                                        control={<Radio />}
                                        label="Fixed"
                                    />
                                    <FormControlLabel
                                        value="negitiable"
                                        control={<Radio />}
                                        label="Negotiable"
                                    />
                                    <FormControlLabel
                                        value="performance"
                                        control={<Radio />}
                                        label="Performance Based"
                                    />
                                    <FormControlLabel
                                        value="unpaid"
                                        control={<Radio />}
                                        label="Unpaid"
                                    />
                                </RadioGroup> */}
                </FormControl>
                <Typography mt={2} sx={{ fontWeight: "bold" }}>
                  Perks
                </Typography>
                <Grid sx={{ display: { lg: "flex" } }}>
                  <Box>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        value="Certificate"
                        onChange={(e) => {
                          if (e.target.checked) {
                            form.perks.push({ perk: e.target.value });
                            console.log(form.perks);
                          } else {
                            form.perks = form.perks.filter(
                              (perk) => perk.perk !== e.target.value
                            );
                          }
                          setForm({ ...form });
                          console.log(form);
                        }}
                        label="Certificate"
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Flexible work hours"
                        value="Flexible Working Hours"
                        onChange={(e) => {
                          if (e.target.checked) {
                            form.perks.push({ perk: e.target.value });
                          } else {
                            form.perks = form.perks.filter(
                              (perk) => perk.perk !== e.target.value
                            );
                          }
                          setForm({ ...form });
                          console.log(form);
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="5 days a week"
                        value="5 days a week"
                        onChange={(e) => {
                          if (e.target.checked) {
                            form.perks.push({ perk: e.target.value });
                          } else {
                            form.perks = form.perks.filter(
                              (perk) => perk.perk !== e.target.value
                            );
                          }
                          setForm({ ...form });
                          console.log(form);
                        }}
                      />
                    </FormGroup>
                  </Box>
                  <Box>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Letter of recommendation"
                        value="Letter of recommendation"
                        onChange={(e) => {
                          if (e.target.checked) {
                            form.perks.push({ perk: e.target.value });
                          } else {
                            form.perks = form.perks.filter(
                              (perk) => perk.perk !== e.target.value
                            );
                          }
                          setForm({
                            ...form,
                          });
                          console.log(form);
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Informal dress code"
                        value="Informal Dress code"
                        onChange={(e) => {
                          if (e.target.checked) {
                            form.perks.push({ perk: e.target.value });
                          } else {
                            form.perks = form.perks.filter(
                              (perk) => perk.perk !== e.target.value
                            );
                          }
                          setForm({
                            ...form,
                          });
                          console.log(form);
                        }}
                      />
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Free snacks & beverages"
                        value="Free snacks & beverages"
                        onChange={(e) => {
                          if (e.target.checked) {
                            form.perks.push({ perk: e.target.value });
                          } else {
                            form.perks = form.perks.filter(
                              (perk) => perk.perk !== e.target.value
                            );
                          }
                          setForm({
                            ...form,
                          });
                          console.log(form);
                        }}
                      />
                    </FormGroup>
                  </Box>
                </Grid>
                <FormControl sx={{ marginTop: "1rem" }} component="fieldset">
                  <FormLabel sx={{ fontWeight: "bold" }} component="legend">
                    Does this internship came with a Pre-Placement Offer (PPO) *
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    name="row-radio-buttons-group"
                    defaultValue="no"
                    name="isPPO"
                  >
                    <FormControlLabel
                      onClick={() => {
                        setForm({ ...form, isPPO: true });
                        console.log(form);
                      }}
                      value="yes"
                      control={<Radio />}
                      label="Yes"
                    />
                    <FormControlLabel
                      onClick={() => {
                        setForm({ ...form, isPPO: false });
                        console.log(form);
                      }}
                      value="no"
                      control={<Radio />}
                      label="No"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Paper>
          </Grid>
          <Grid ml={10} mr={10} mt={3}>
            <Paper elevation={3}>
              <Grid m={4} p={4}>
                <Typography textAlign="center" variant="h5">
                  Who can apply
                </Typography>
                <Typography mt={1} sx={{ fontWeight: "bold" }}>
                  Skills that you are looking for :
                </Typography>
                <Typography>(Type one or more skills Recommended)</Typography>
                <TextField
                  fullWidth
                  sx={{ marginTop: "1rem" }}
                  type="text"
                  placeholder="MERN,Adobe,MS-Office etc.."
                  name="skillsRequired"
                  value={form.skillsRequired}
                  onChange={handleChange}
                ></TextField>
                {/* <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Allow application from women also who are willing to start/restart their career"
                  />
                  <Link
                    href="#"
                    sx={{
                      textDecoration: "none",
                      paddingLeft: "2rem",
                      paddingBottom: "1rem",
                    }}
                  >
                    know more.
                  </Link>
                </FormGroup> */}
                <br />
                <Typography sx={{ fontWeight: "bold" }}>Assessment</Typography>
                <Typography mt={1}>
                  Question 1&2 will be asked to every applicants by default. if
                  you wish, you may ask two or more customized questions.
                </Typography>
                {questionsArray.map((q) => (
                  <Typography mt={1}>
                    <span style={{ fontWeight: "bold" }}>Question {questionsArray.indexOf(q) + 1}:</span>
                    {q}
                  </Typography>
                ))}
                {/* <Typography mt={1}>
                  <span style={{ fontWeight: "bold" }}>Question 1:</span>
                  Why should you be hired for this internship?
                </Typography>
                <Typography mb={1} mt={1}>
                  <span style={{ fontWeight: "bold" }}>Question 2:</span>
                  Are you available for 6 months?
                </Typography> */}
                {/* <br /> */}
                <Button onClick={handleModalOpen}>Add a customized question</Button>

                <Modal
                  open={modalOpen}
                  onClose={handleModalClose}
                >
                  <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 800,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4
                  }}>
                    <Typography variant="h6" component="h2">
                      Add a customized question
                    </Typography>
                    <TextField fullWidth onChange={(e) => { setQuestion(e.target.value); console.log(question) }} id="standard-basic" label="Add a customized question" variant="standard" />
                    <br /><br />
                    <Button variant="contained" color="primary"
                      onClick={() => {
                        questionsArray.push(question)
                        // setQuestionsArray({ ...questionsArray, question }); 
                        console.log(questionsArray)
                        console.log(form)
                        setModalOpen(false)
                      }}
                    >Add Question</Button>
                    {/* <Typography sx={{ mt: 2 }}>
                      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography> */}
                  </Box>
                </Modal>

              </Grid>
            </Paper>
          </Grid>
          <Grid ml={10} mr={10} mt={3} display="flex" justifyContent="flex-end">
            <Button sx={{ marginRight: "1.5rem" }} variant="outlined">
              Save Draft
            </Button>
            <Button type="submit" variant="contained">
              Post Internship
            </Button>
          </Grid>
        </form>
      </Grid>
    </>
  );
}

export default CreateInternship;
