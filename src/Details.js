import { useLocation, useHistory } from "react-router-dom";
import {
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import "./styles.css";

export default function Details() {
  const location = useLocation();
  const history = useHistory();
  const details = location.details;
  if (!details) {
    history.push("/");
  }
  return (
    <div>
      <Breadcrumbs
        aria-label="breadcrumb"
        style={{ backgroundColor: "aliceblue" }}
      >
        <Link color="inherit" href="/">
          Indian University List
        </Link>
        <Typography color="textPrimary">University Details</Typography>
      </Breadcrumbs>
      <h1 style={{ textAlign: "center" }}>University Details</h1>
      {details && (
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow key={1}>
                <TableCell component="th" scope="row" align="right">
                  Name
                </TableCell>
                <TableCell>{details.row.name}</TableCell>
              </TableRow>
              <TableRow key={2}>
                <TableCell component="th" scope="row" align="right">
                  State
                </TableCell>
                <TableCell>{details.row["state-province"]}</TableCell>
              </TableRow>
              <TableRow key={3}>
                <TableCell component="th" scope="row" align="right">
                  Country
                </TableCell>
                <TableCell>{details.row.country}</TableCell>
              </TableRow>
              <TableRow key={4}>
                <TableCell component="th" scope="row" align="right">
                  Domain
                </TableCell>
                <TableCell>{details.row.domains}</TableCell>
              </TableRow>
              <TableRow key={5}>
                <TableCell component="th" scope="row" align="right">
                  Website
                </TableCell>
                <TableCell>
                  <a href={details.row["web_pages"]} target="_blank">
                    {details.row["web_pages"]}
                  </a>
                </TableCell>
              </TableRow>
              <TableRow key={6}>
                <TableCell component="th" scope="row" align="right">
                  Country Code
                </TableCell>
                <TableCell>{details.row["alpha_two_code"]}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
