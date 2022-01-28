import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  
} from "@mui/material";
import {Link, useNavigate} from "react-router-dom"
import React, {useEffect, useState} from "react";
import "./Student.css";
import GoogleIcon from "@mui/icons-material/Google";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

function Student() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");

  // const [allEntry, setAllEntry] = useState([]);

  // const submitForm = (e) => {
  //   e.preventDefault();
  //   const newEntry = {
  //     email: email,
  //     password: password,
  //     fname: fname,
  //     lname: lname,
  //   };

  // setAllEntry([...allEntry, newEntry]);
  // console.log(allEntry);
  // };
  const userRegister = useSelector((state) => state.userRegister);
  const { userRegisterInfo } = userRegister;
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    if (userRegisterInfo) {
     navigate("/login");
    }
  }, [userRegisterInfo, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    // if (password !== confirmPassword) {
    //   setMessage("Passwords do not match");
    // } else {
    //   //dispatch
    //   dispatch(register(name, email, password));
    // }
    dispatch(register(user.name, user.email, user.password, user.linkedin, user.isEmployer, user.certificateOfIncorporation, user.pancard, user.gst, user.mobile, user.github, user.description, user.resume, user.companyLogo));
    
  };
  const [user, setUser] = useState({
    name:"",
    email: "",
    password: "",
    linkedin:"",
    isEmployer:false,
    certificateOfIncorporation:"",
    pancard:"",
    gst:"",
    mobile:'',
    github:"",
    resume:"",
    description:"",
    someData:"",
    company:""
  });
  const registerUser = ()=>{
    console.log(user);
    console.log("User register");
  }
  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const paperStyle = {
    padding: 20,
    height: "80%",
    width: "80%",
    margin: "20px auto",
  };
  const btstyle = { margin: "10px 0" };
  const Textstyle = { margin: "0 4px" };
  const font = { fontSize: 17 };
  return (
    <Grid>
      <Paper className="paper" elevation={10} style={paperStyle}>
      <h1 style={{textAlign:"center"}}>{user.isEmployer==false?"Student":"Employer"} Registration</h1>
      <br />
          <form noValidate onSubmit={submitHandler}>
                   <Grid container>
        <Grid item xs={12} md={12} lg={6} pr={4}>
          <TextField
            value={user.name}
            onChange={handleChange}
            label="Name"
            name="name"
            sx={{ mb: 2 }}
            placeholder="Name"
            fullWidth
            required
          ></TextField>
          <TextField
            value={user.email}
            onChange={handleChange}
            label="Email"
            name="email"
            placeholder="@example.com"
            fullWidth
            required
          ></TextField>
          <TextField
            value={user.password}
            onChange={handleChange}
            label="Password"
            sx={{ mt: 2 }}
            placeholder="Enter Password"
            type="password"
            name="password"
            fullWidth
            required
          ></TextField>
          <TextField
            value={user.linkedin}
            onChange={handleChange}
            label="Linkedin Profile"
            sx={{ mt: 2 }}
            placeholder="Linkedin Profile"
            type="text"
            name="linkedin"
            fullWidth
          >
        </TextField>
        <TextField
        value={user.mobile}
        onChange={handleChange}
        label="Mobile Number"
        sx={{ mt: 2 }}
        placeholder="Mobile Number"
        type="number"
        name="mobile"
        fullWidth
      >
    </TextField>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>

          <FormLabel component="legend">Role</FormLabel>
          <RadioGroup defaultValue="student" row aria-label="gender" name="row-radio-buttons-group">
            <FormControlLabel value="student" onClick={()=>{setUser({...user, isEmployer:false}); console.log(user);}} control={<Radio />} label="Student" />
            <FormControlLabel value="employer" onClick={()=>{setUser({...user, isEmployer:true}); console.log(user);}} control={<Radio />} label="Employer" />
          </RadioGroup>
          {user.isEmployer==false?(
            <>
           <TextField
            value={user.github}
            onChange={handleChange}
            label="GithubLink"
            sx={{ mt: 2 }}
            placeholder="Github Link"
            type="text"
            name="github"
            fullWidth
          ></TextField>
          <TextField
            value={user.resume}
            onChange={handleChange}
            label="Resume Drive Link"
            sx={{ mt: 2 }}
            placeholder="Resume Drive Link"
            type="text"
            name="resume"
            fullWidth
          ></TextField>
          {/* <TextField
          value={user.description}
          onChange={handleChange}
          label="Description"
          sx={{ mt: 2 }}
          placeholder="Description"
          type="text"
          name="description"
          fullWidth
        ></TextField> */}
          </>
          ):(<>
            <TextField
            value={user.companyLogo}
            onChange={handleChange}
            label="Company Logo"
            sx={{ mt: 2 }}
            placeholder="Company Logo"
            type="text"
            name="companyLogo"
            fullWidth
          ></TextField>
            <TextField
            value={user.certificateOfIncorporation}
            onChange={handleChange}
            label="Certificate Of Incorporation"
            sx={{ mt: 2 }}
            placeholder="Certificate of Incorporation"
            type="text"
            name="certificateOfIncorporation"
            fullWidth
          ></TextField>
           <TextField
            value={user.pancard}
            onChange={handleChange}
            label="Pan Card Number"
            sx={{ mt: 2 }}
            placeholder="Pan Card"
            type="text"
            name="pancard"
            fullWidth
          ></TextField>

           <TextField
            value={user.gst}
            onChange={handleChange}
            label="GST Number"
            sx={{ mt: 2 }}
            placeholder="GST Number of your Company"
            type="text"
            name="gst"
            fullWidth
          ></TextField>
           
           </>
          )}
          <TextField
          value={user.description}
          onChange={handleChange}
          label="Description"
          sx={{ mt: 2 }}
          placeholder="Description"
          type="text"
          name="description"
          fullWidth
        ></TextField>
        </Grid>
      </Grid>
       <Button
      type="submit"
      onClick={registerUser}
      color="primary"
      variant="contained"
      style={{marginLeft:"40%", marginTop:"20px"}}
      
      
    >
      Sign Up
    </Button>
          </form>

      </Paper >
    </Grid >
  );
}

export default Student;
  // <Grid>
      //   <Grid container>
      //   <Grid item xs={12} md={12} lg={6}>
      //     <TextField
      //       value={user.name}
      //       onChange={handleChange}
      //       label="Name"
      //       name="name"
      //       sx={{ mb: 2 }}
      //       placeholder="Name"
      //       fullWidth
      //       required
      //     ></TextField>
      //     <TextField
      //       value={user.email}
      //       onChange={handleChange}
      //       label="Email"
      //       name="email"
      //       placeholder="@example.com"
      //       fullWidth
      //       required
      //     ></TextField>
      //     <TextField
      //       value={user.password}
      //       onChange={handleChange}
      //       label="Password"
      //       sx={{ mt: 2 }}
      //       placeholder="Enter Password"
      //       type="password"
      //       name="password"
      //       fullWidth
      //       required
      //     ></TextField>
      //     <TextField
      //       value={user.linkedlink}
      //       onChange={handleChange}
      //       label="Linkedin"
      //       sx={{ mt: 2 }}
      //       placeholder="Linkedin"
      //       type="text"
      //       name="linkedinlink"
      //       fullWidth
      //     >
      //   </TextField>
      //   </Grid>
      //   <Grid item xs={12} md={12} lg={6}>

      //     <FormLabel component="legend">Role</FormLabel>
      //     <RadioGroup row aria-label="gender" name="row-radio-buttons-group">
      //       <FormControlLabel value="female" control={<Radio />} label="Student" />
      //       <FormControlLabel value="male" control={<Radio />} label="Employer" />
      //     </RadioGroup>
      //   </Grid>
      // </Grid>

    //   </Grid>
    //   <Typography style={btstyle}>
    //     By signing up, you agree to our
    //     <Link sx={{ ml: 1 }} href="#">
    //       Term and condition
    //     </Link>
    //   </Typography>
   
    // <Button
    //   type="submit"
    //   // onSubmit={submitForm}
    //   color="primary"
    //   variant="contained"
    //   style={btstyle}
    //   fullWidth
    // >
    //   Sign Up
    // </Button>
    // <Grid sx={{ justifyContent: "center" }}>
    //   <Typography ml={5} style={font}>
    //     Already registered?
    //     <Link href="#">Login</Link>
    //   </Typography>
    // </Grid>
        // </Grid>