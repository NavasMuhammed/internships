import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import { React, useState } from "react";
import "../styles/employ.css";
import GoogleIcon from "@mui/icons-material/Google";
// import Login from "../../login/Login";

function Employ() {
  const [user, setUser] = useState({
    official_email: "",
    employ_password: "",
    employ_fname: "",
    employ_lname: "",
    phone_no: "",
  });

  let name, value;
  const handleChange = (e) => {
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const paperStyle = {
    padding: 20,
    height: "65vh",
    width: 450,
    margin: "20px auto",
  };
  const btstyle = { margin: "10px 0" };
  const Textstyle = { margin: "0 4px" };
  const font = { fontSize: 17 };
  return (
    <Grid>
      <Paper className="paper" elevation={10} style={paperStyle}>
        <Grid>
          <div className="container">
            <Grid>
              <TextField
                onChange={handleChange}
                label="Official Email id"
                placeholder="name@company_name.com"
                name="official_email"
                fullWidth
                required
              ></TextField>
              <TextField
                onChange={handleChange}
                label="Password"
                sx={{ mt: 2 }}
                placeholder="Enter Password"
                type="password"
                name="employ_password"
                fullWidth
                required
              ></TextField>
              <Typography display="flex" mt={3}>
                <TextField
                  onChange={handleChange}
                  style={Textstyle}
                  label="First Name"
                  placeholder="Joe"
                  name="employ_fname"
                ></TextField>
                <TextField
                  onChange={handleChange}
                  label="Last Name"
                  name="employ_lname"
                  placeholder="Doe"
                ></TextField>
              </Typography>
              <TextField
                onChange={handleChange}
                label="Mobile Number"
                sx={{ mt: 2 }}
                placeholder="+ 91"
                name="phone_no"
                type="number"
                fullWidth
                required
              ></TextField>
              <Typography style={btstyle}>
                By registering up, you agree to our
                <Link sx={{ ml: 1 }} href="#">
                  Term and condition
                </Link>
              </Typography>
            </Grid>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              style={btstyle}
              fullWidth
            >
              Register Now
            </Button>
            <Grid sx={{ justifyContent: "center" }}>
              <Typography sx={{ ml: 18 }} style={font}>
                <Link href="#">Have a Question?</Link>
              </Typography>
            </Grid>
          </div>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default Employ;
