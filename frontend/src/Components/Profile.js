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
            <Container sx={{ display: "flex", flexDirection: "row" }}>
                <Card
                    component={Paper}
                    sx={{ display: "flex", flexGrow: 1, m: 4, width: "800px" }}
                >
                    <CardContent sx={{ flex: "1 0 auto" }}>
                        <Typography variant="h4" color="initial" sx={{ display: "flex" }}>
                            Brijesh Sundi
                            <Button
                                variant="outlined"
                                sx={{ ml: "65%" }}
                                endIcon={<FileDownloadOutlinedIcon />}
                            >
                                Download
                            </Button>
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
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Education
                                <Box sx={{ ml: "20%" }}>
                                    <Typography
                                        variant="h6"
                                        color="initial"
                                        sx={{ display: "flex" }}
                                    >
                                        Master of Science(M.S),Information Technology
                                        <Box sx={{ ml: "150px", color: "#666" }}>
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
                                        sx={{ display: "flex" }}
                                    >
                                        Bachelor of Science(B.S),Information Technology
                                        <Box sx={{ ml: "150px", color: "#666" }}>
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
                                                // onClick={handleClickOpen}
                                                >
                                                    Add graduation
                                                </Button>
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
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Jobs
                                <Box sx={{ ml: "20%" }}>
                                    <Button startIcon={<AddIcon />} onClick={handleClickOpenJobs}>
                                        Add job
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
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Internships
                                <Box sx={{ ml: "20%" }}>
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
                                            <Button onClick={handleCloseInternships}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                position of Responsibility
                                <Box sx={{ ml: "20%" }}>
                                    <Button startIcon={<AddIcon />} onClick={handleClickOpenPOR}>
                                        Add position of Responsibility
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
                                            <Button onClick={handleClosePOR}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Training/courses
                                <Box sx={{ ml: "20%" }}>
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
                                            <Button onClick={handleCloseTrainCourse}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Academics/personal projects
                                <Box sx={{ ml: "20%" }}>
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
                                            <Button onClick={handleCloseAcademics}>Close</Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Skills
                                <Box sx={{ ml: "20%" }}>
                                    <Button
                                        startIcon={<AddIcon />}
                                        onClick={handleClickOpenSkills}
                                    >
                                        Add skills
                                    </Button>
                                    <Dialog
                                        fullWidth
                                        open={openSkills}
                                        TransitionComponent={Transition}
                                        keepMounted
                                        onClose={handleCloseSkills}
                                        aria-describedby="alert-dialog-slide-description"
                                    >
                                        <DialogTitle sx={{ textAlign: "center" }}>
                                            Skills
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
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Porfolio/Work samples
                                <Box sx={{ ml: "20%" }}>
                                    <Button
                                        startIcon={<AddIcon />}
                                        onClick={handleClickOpenWorkSamples}
                                    >
                                        Add Porfolio/work samples
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
                                                    posts, presentations, documents, website etc. If you
                                                    have multiple work samples, upload them to google
                                                    drive and add the link here.
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
                            </Typography>
                        </Box>
                        <Divider />
                        <Box sx={{ m: 3 }}>
                            <Typography variant="h6" color="initial" sx={{ display: "flex" }}>
                                Accomplishments/additional Details
                                <Box sx={{ ml: "20%" }}>
                                    <Button
                                        startIcon={<AddIcon />}
                                        onClick={handleClickOpenAccomplishments}
                                    >
                                        Add ACCOMPLISHMENTS/ ADDITIONAL DETAILS
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
                                                    Add your accomplishments such as rewards,
                                                    recognitions, test scores, certifications, etc. here.
                                                    You may also add information such as
                                                    seminars/workshops you have attended or any
                                                    interests/hobbies you have pursued.
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
                                            <Button onClick={handleCloseAccomplishments}>
                                                Close
                                            </Button>
                                        </DialogActions>
                                    </Dialog>
                                </Box>
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </Container>
        </>
    );
};

export default Resume;
