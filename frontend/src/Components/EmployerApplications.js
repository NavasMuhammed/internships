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

import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";
// Use your own styles to override the default styles
// import "./styles.css";

// function UncontrolledBoard() {
//   return (
//     <Board
//       allowRemoveLane
//       allowRenameColumn
//       allowRemoveCard
//       onLaneRemove={console.log}
//       onCardRemove={console.log}
//       onLaneRename={console.log}
//       initialBoard={board}
//       allowAddCard={{ on: "top" }}
//       onNewCardConfirm={draftCard => ({
//         id: new Date().getTime(),
//         ...draftCard
//       })}
//       onCardNew={console.log}
//     />
//   );
// }
const EmployerApplications = () => {
  const [value, setvalue] = useState(0);
  const [applicationData, setApplicationData] = useState([]);
  const handleTabs = (e, val) => {
    console.warn(val);
    setvalue(val);
  };
  const { id } = useParams();

  const getAllApplicationsOfInternship = async () => {
    const res = await fetch(
      `http://localhost:8080/application/getAllApplicationsOfInternship/${id}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    console.log(data);
    setApplicationData(data);
    console.log("application data", applicationData);
  };

  const board = {
    columns: [
      {
        id: 1,
        title: "Pending Decision",
        cards: [
          {
            id: 1,
            title: "card title 1",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
          {
            id: 2,
            title: "Card title 2",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
          {
            id: 3,
            title: "Card title 3",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
        ],
      },
      {
        id: 2,
        title: "Shortlisted",
        cards: [
          {
            id: 4,
            title: "Card title 4",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
          {
            id: 5,
            title: "Card title 5",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
          {
            id: 6,
            title: "Card title 6",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
        ],
      },
      {
        id: 3,
        title: "Hired",
        cards: [
          {
            id: 7,
            title: "Card title 7",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
          {
            id: 8,
            title: "Card title 8",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
        ],
      },
      {
        id: 4,
        title: "Rejected",
        cards: [
          {
            id: 9,
            title: "Card title 9",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
          {
            id: 10,
            title: "Card title 10",
            description: (
              <Button variant="contained" size="small">
                View Application
              </Button>
            ),
          },
        ],
      },
    ],
  };

  function ControlledBoard() {
    // You need to control the state yourself.
    const [controlledBoard, setBoard] = useState(board);

    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
      console.log(controlledBoard);
    }

    return (
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
    );
  }
  const [controlledBoard, setBoard] = useState(board);
  useEffect(() => {
    getAllApplicationsOfInternship();
  }, [controlledBoard]);

  return (
    <>
      <h1 style={{ textAlign: "center", margin: "15px" }}>
        All UI/UX Designing Applications
      </h1>
      <ControlledBoard />
      <Button
        style={{ position: "absolute", right: "30%" }}
        variant="contained"
      >
        Submit Changes
      </Button>
    </>
  );
};
{
  /* <Container>
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
                  <Button variant="contained" color="error" sx={{ mr: 2 }}>
                    Reject
                  </Button>
                  <Button variant="contained" color="primary" sx={{ mr: 2 }}>
                    Open Chart
                  </Button>
                  <Button
                    variant="contained"
                    component={Link}
                    to={`/application/${2039930220303202}`}
                    color="primary"
                    sx={{ mr: 2 }}
                  >
                    View Full Application
                  </Button>
                </CardActions>
              </Box>
            </Card>
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
};*/
}

// function TabPanel(props) {
//   const { children, value, index } = props;
//   return <>{value === index && <Box>{children}</Box>}</>;
// }

export default EmployerApplications;
