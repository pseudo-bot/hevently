import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Ratings from './Ratings';

function createData(
  name,
  type,
  venue,
  startDate,
  endDate,
  guests,
  address,
  city
) {
  return {
    name,
    type,
    startDate,
    endDate,
    guests,
    details: [
      {
        location: venue,
        address: address,
        city: city,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.type}</TableCell>
        <TableCell align="right">{row.startDate}</TableCell>
        <TableCell align="right">{row.endDate}</TableCell>
        <TableCell align="right">{row.guests}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box
              sx={{ margin: 1 }}
              className="md:flex items-center justify-between px-24"
            >
              <div>
                {" "}
                <Typography variant="h6" gutterBottom component="div">
                  {row.details[0].location}
                </Typography>
                <Typography variant="h7" gutterBottom component="div">
                  {row.details[0].address}
                </Typography>
                <Typography variant="h7" gutterBottom component="div">
                  {row.details[0].city}
                </Typography>
              </div>
              <div>
               <Ratings/>
              </div>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    type: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    details: PropTypes.arrayOf(
      PropTypes.shape({
        location: PropTypes.string.isRequired,
        address: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    guests: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData(
    "Sarang Wedding",
    "Wedding",
    "venue1",
    "26/12/2021",
    "29/12/2021",
    150,
    "Karamtoli Rd, Morabadi",
    "Ranchi"
  ),
  createData(
    "Sarang Birthday",
    "Birthday",
    "venue2",
    "30/12/2021",
    "30/12/2021",
    50,
    "St. Anne Lane, Tharpakhna",
    "Mumbai"
  ),
];

export default function CollapsibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Event Name</TableCell>
            <TableCell align="right">Event Type</TableCell>
            <TableCell align="right">Start Date</TableCell>
            <TableCell align="right">End Date</TableCell>
            <TableCell align="right">Number of Guests</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
