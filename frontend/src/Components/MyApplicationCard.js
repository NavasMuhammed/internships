import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Typography from "@mui/material/Typography";

import React from "react";
import { useTheme, Paper, Container } from "@mui/material";

const MyApplicationCard = () => {
  const theme = useTheme();
  // const classes = useStyles();
  return (
    <>
      <Box pt={3} textAlign="center">
        <Typography variant="h6">My Application</Typography>
      </Box>
      <Container sx={{ display: "block" }}>
        <Card
          variant="outlined"
          component={Paper}
          sx={{ display: "flex", m: 4 }}
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
                <Box sx={{ display: "flex" }}>
                  <Typography sx={{ display: "flex" }} variant="subtitle1">
                    In-Touch
                    <HelpOutlineOutlinedIcon
                      fontSize="small"
                      color="primary"
                      sx={{ mt: "3px", ml: 1 }}
                    />
                    <Typography
                      sx={{ display: "flex", mx: 4 }}
                      variant="subtitle1"
                    >
                      <PeopleOutlineIcon fontSize="small" sx={{ m: "3px" }} />
                      107 Applicants
                    </Typography>
                    <Typography sx={{ display: "flex" }} variant="subtitle1">
                      <CalendarTodayIcon sx={{ fontSize: 15, m: "5px" }} />
                      Applied on 27 Dec'21
                    </Typography>
                  </Typography>
                </Box>
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography variant="subtitle1" color="primary">
                Review Application
              </Typography>
            </Box>
          </Box>
        </Card>
        {/* 2nd Card starts from here */}
        <Card
          variant="outlined"
          component={Paper}
          sx={{ display: "flex", m: 4 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{ fontWeight: "Bold" }}
              >
                Maxxed
                <Typography variant="subtitle1">
                  Web Development Internship
                </Typography>
                <Typography sx={{ display: "inline-flex" }} variant="subtitle1">
                  Applied
                  <HelpOutlineOutlinedIcon
                    fontSize="small"
                    color="primary"
                    sx={{ mt: "3px", ml: 1 }}
                  />
                  <Typography
                    sx={{ display: "inline-flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    <PeopleOutlineIcon fontSize="small" sx={{ m: "3px" }} />
                    17 Applicants
                  </Typography>
                  <Typography
                    sx={{ display: "inline-flex" }}
                    variant="subtitle1"
                  >
                    <CalendarTodayIcon sx={{ fontSize: 15, m: "5px" }} />
                    Applied on 27 Dec'21
                  </Typography>
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
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography variant="subtitle1" color="primary">
                Review Application
              </Typography>
            </Box>
          </Box>
        </Card>
        {/* 3nd Card starts from here */}
        <Card
          variant="outlined"
          component={Paper}
          sx={{ display: "flex", m: 4 }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography
                component="div"
                variant="h6"
                sx={{ fontWeight: "Bold" }}
              >
                Across The Globe(ATG)
                <Typography variant="subtitle1">
                  MERN Stack Development Internship
                </Typography>
                <Typography sx={{ display: "inline-flex" }} variant="subtitle1">
                  In-Touch
                  <HelpOutlineOutlinedIcon
                    fontSize="small"
                    color="primary"
                    sx={{ mt: "3px", ml: 1 }}
                  />
                  <Typography
                    sx={{ display: "inline-flex", mx: 4 }}
                    variant="subtitle1"
                  >
                    <PeopleOutlineIcon fontSize="small" sx={{ m: "3px" }} />
                    58 Applicants
                  </Typography>
                  <Typography
                    sx={{ display: "inline-flex" }}
                    variant="subtitle1"
                  >
                    <CalendarTodayIcon sx={{ fontSize: 15, m: "5px" }} />
                    Applied on 27 Dec'21
                  </Typography>
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
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <Typography variant="subtitle1" color="primary">
                Review Application
              </Typography>
            </Box>
          </Box>
        </Card>
      </Container>
    </>
  );
};

export default MyApplicationCard;
