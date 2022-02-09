import React from "react";
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
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const MyApplication = () => {
  return (
    <>
      <Box py={5} textAlign="center">
        <Typography variant="h6">My Application</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>COMPANY</TableCell>
              <TableCell>PROFILE</TableCell>
              <TableCell>APPLIED ON</TableCell>
              <TableCell>NUMBER OF APPLICANTS</TableCell>
              <TableCell>APPLICATION STATUS</TableCell>
              <TableCell>REVIEW APPLICATION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
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
            </TableRow>
            <TableRow>
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
            </TableRow>
            <TableRow>
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
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default MyApplication;
