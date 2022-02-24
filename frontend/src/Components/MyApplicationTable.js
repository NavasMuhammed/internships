import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
// import { Typography, Box } from "@mui/material";
import {
  TableContainer,
  TableCell,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Box,
  Paper,
  Button
} from "@mui/material";
import { Link } from "react-router-dom"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const MyApplication = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const allUserApplicationsList = useSelector(
    (state) => state.allUserApplications.userApplications
  );
  useEffect(() => {
    console.log("All user Applications", allUserApplicationsList)
    // dispatch(allEmployerInternshipsAction());

    // console.log("Dispatched");
  }, [dispatch]);
  return (
    <>
      <Box py={5} textAlign="center">
        <Typography variant="h6">My Applications</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Sr. No.</b></TableCell>
              <TableCell><b>COMPANY</b></TableCell>
              <TableCell><b>PROFILE</b></TableCell>
              <TableCell><b>APPLIED ON</b></TableCell>
              <TableCell><b>NUMBER OF APPLICANTS</b></TableCell>
              <TableCell><b>APPLICATION STATUS</b></TableCell>
              <TableCell><b>REVIEW APPLICATION</b></TableCell>
              <TableCell><b>CERTIFICATE</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUserApplicationsList.data.map((a) => (

              <TableRow key={a._id}>
                <TableCell>{allUserApplicationsList.data.indexOf(a) + 1}</TableCell>
                <TableCell>{a.internshipId.companyName}</TableCell>
                <TableCell>{a.internshipId.title}</TableCell>
                <TableCell> {a.createdAt.slice(0, 10)}</TableCell>
                <TableCell>{a.internshipId.noOfApplicants}</TableCell>
                <TableCell>
                  Applied
                  {/* <HelpOutlineOutlinedIcon fontSize="small" color="primary" /> */}
                </TableCell>
                <TableCell>
                  <Link to={`/application/${a._id}`} style={{ textDecoration: "none" }}><Button variant="contained" color="primary">View Application</Button></Link>
                </TableCell>
                {a.applicationStatus === "hired" ? (
                  <TableCell>
                    <Button variant="contained" color="primary">Get Certificate</Button>
                  </TableCell>
                ) : (
                  <TableCell>
                    <Button variant="contained" disabled color="primary">Get Certificate</Button>
                  </TableCell>
                )}

              </TableRow>
            ))}
            {/* <TableRow>
              <TableCell>Ideadunes</TableCell>
              <TableCell>Web Development Internship</TableCell>
              <TableCell> 27 Dec' 21</TableCell>
              <TableCell>107</TableCell>
              <TableCell>
                In-touch
                <HelpOutlineOutlinedIcon fontSize="small" color="primary" />
              </TableCell>
              <TableCell>
                <DescriptionOutlinedIcon color="primary" />
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell>Across The Globe(ATG)</TableCell>
              <TableCell>MERN Stack Development Internship</TableCell>
              <TableCell> 27 Dec' 21</TableCell>
              <TableCell>107</TableCell>
              <TableCell>
                In-touch
                <HelpOutlineOutlinedIcon fontSize="small" color="primary" />
              </TableCell>
              <TableCell>
                <DescriptionOutlinedIcon color="primary" />
              </TableCell>
            </TableRow> */}
            {/* <TableRow>
              <TableCell>Maxxed</TableCell>
              <TableCell>Web Development Internship</TableCell>
              <TableCell> 27 Dec' 21</TableCell>
              <TableCell>17</TableCell>
              <TableCell>
                Applied
                <HelpOutlineOutlinedIcon fontSize="small" color="primary" />
              </TableCell>
              <TableCell>
                <DescriptionOutlinedIcon color="primary" />
              </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyApplication;
