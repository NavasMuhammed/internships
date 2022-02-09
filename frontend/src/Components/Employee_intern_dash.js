import {
  Box,
  Container,
  Typography,
  Tabs,
  Tab,
  Card,
  Paper,
  CardContent,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  CardActions,
} from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";

import React, { useState } from "react";

const Employee_intern_dash = () => {
  const [value, setvalue] = useState(0);
  const handleTabs = (e, val) => {
    console.warn(val);
    setvalue(val);
  };
  return (
    <>
      <Container>
        <Box sx={{ flexGrow: 1, pt: 3 }}>
          <Typography variant="h6" color="initial">
            Filters
          </Typography>
          <Tabs value={value} onChange={handleTabs}>
            <Tab label="Invite Candidates(33)" />
            <Tab label="Pending Decision(0)" />
            <Tab label="Shortlisted(14)" />
            <Tab label="Hired(2)" />
            <Tab label="Rejected(13)" />
          </Tabs>
          <TabPanel value={value} index={0}>
            Item 1 Details
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Card
              variant="outlined"
              component={Paper}
              sx={{ display: "flex", m: 4 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <FormControl component="fieldset">
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value="Brijesh Sundi"
                        control={<Radio />}
                        label="Brijesh Sundi"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography variant="subtitle1" color="initial" sx={{ m: 2 }}>
                    Mumbai
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex", m: 2 }}
                  >
                    Education
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      sx={{ ml: 4 }}
                    >
                      B.Sc(Information Technology),Mumbai University
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex", m: 2 }}
                  >
                    Skills
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      sx={{ ml: 4, display: "flex" }}
                    >
                      <Box sx={{ display: "flex", mr: 2 }}>
                        <StarRoundedIcon color="yellow" />
                        <StarRoundedIcon color="yellow" />
                        <StarHalfRoundedIcon />
                        <StarBorderRoundedIcon />
                        <StarBorderRoundedIcon />
                      </Box>
                      SEO-Search Engine Optimization
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    sx={{ my: 2 }}
                  >
                    Work Samples
                    <ReceiptLongRoundedIcon sx={{ ml: 5 }} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex" }}
                  >
                    ANS1:
                    <HelpOutlineRoundedIcon fontSize="small" />
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      sx={{ mt: "4px", mx: 2 }}
                    >
                      I am here for your sucess of your company
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex" }}
                  >
                    ANS2:
                    <HelpOutlineRoundedIcon fontSize="small" />
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      sx={{ mt: "4px", mx: 2 }}
                    >
                      Yes,I am avaliable for 6 Months
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="error">
                    Reject
                  </Button>
                  <Button variant="contained" color="primary">
                    Open Chart
                  </Button>
                  <Button variant="contained" color="primary">
                    View Full Application
                  </Button>
                </CardActions>
              </Box>
            </Card>
            {/* 2nd Card */}
            <Card
              variant="outlined"
              component={Paper}
              sx={{ display: "flex", m: 4 }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <FormControl component="fieldset">
                    <RadioGroup row name="row-radio-buttons-group">
                      <FormControlLabel
                        value="Brijesh Sundi"
                        control={<Radio />}
                        label="Brijesh Sundi"
                      />
                    </RadioGroup>
                  </FormControl>
                  <Typography variant="subtitle1" color="initial" sx={{ m: 2 }}>
                    Mumbai
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex", m: 2 }}
                  >
                    Education
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      sx={{ ml: 4 }}
                    >
                      B.Sc(Information Technology),Mumbai University
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex", m: 2 }}
                  >
                    Skills
                    <Typography
                      variant="subtitle1"
                      color="initial"
                      sx={{ ml: 4, display: "flex" }}
                    >
                      <Box sx={{ display: "flex", mr: 2 }}>
                        <StarRoundedIcon color="yellow" />
                        <StarRoundedIcon color="yellow" />
                        <StarHalfRoundedIcon />
                        <StarBorderRoundedIcon />
                        <StarBorderRoundedIcon />
                      </Box>
                      SEO-Search Engine Optimization
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="inherit"
                    sx={{ my: 2 }}
                  >
                    Work Samples
                    <ReceiptLongRoundedIcon sx={{ ml: 5 }} />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex" }}
                  >
                    ANS1:
                    <HelpOutlineRoundedIcon fontSize="small" />
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      sx={{ mt: "4px", mx: 2 }}
                    >
                      I am here for your sucess of your company
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="initial"
                    sx={{ display: "flex" }}
                  >
                    ANS2:
                    <HelpOutlineRoundedIcon fontSize="small" />
                    <Typography
                      variant="subtitle2"
                      color="initial"
                      sx={{ mt: "4px", mx: 2 }}
                    >
                      Yes,I am avaliable for 6 Months
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Mac Miller
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="error">
                    Reject
                  </Button>
                  <Button variant="contained" color="primary">
                    Open Chart
                  </Button>
                  <Button variant="contained" color="primary">
                    View Full Application
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item 3 Detail
          </TabPanel>
          <TabPanel value={value} index={3}>
            Item 4 Detail
          </TabPanel>
          <TabPanel value={value} index={4}>
            Item 5 Detail
          </TabPanel>
        </Box>
      </Container>
    </>
  );
};

function TabPanel(props) {
  const { children, value, index } = props;
  return <>{value === index && <Box>{children}</Box>}</>;
}

export default Employee_intern_dash;
