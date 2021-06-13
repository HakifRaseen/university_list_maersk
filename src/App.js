import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { create } from "./redux/universityReducer";
import { makeStyles } from "@material-ui/core/styles";
import { useEffect, useState } from "react";
import { CircularProgress, Paper } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  loadingAlign: {
    marginLeft: "50%",
    marginTop: "20%",
  },
}));

export default function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const list = useSelector((state) => state.universityList);
  useEffect(() => {
    async function getList() {
      await axios
        .get("http://universities.hipolabs.com/search?country=india")
        .then((response) => {
          const formattedData = response.data.map((item, index) => {
            item.id = index + 1;
            return item;
          });
          dispatch(create(formattedData));
        });
      setLoading(false);
    }
    if (loading) getList();
  }, []);
  const columns = [
    { field: "id", headerName: "ID", flex: 0.25, sortable: false },
    {
      field: "name",
      headerName: "University Name",
      flex: 1,
      sortable: true,
      renderCell: (params) => (
        <Link
          to={{
            pathname: `/details/${params.value}`,
            details: params,
          }}
        >
          {params.value}
        </Link>
      ),
    },
  ];
  return (
    <div style={{ paddingTop: "1rem" }}>
      <h1 style={{ textAlign: "center" }}>Indian University List</h1>
      {loading && <CircularProgress className={classes.loadingAlign} />}
      {list[0] && !loading && list[0].universityList.length > 0 && (
        <Paper elevation={3} style={{ margin: "10px" }}>
          <div style={{ height: 650, width: "100%" }}>
            <DataGrid
              rows={list[0].universityList}
              columns={columns}
              pageSize={10}
              disableSelectionOnClick={true}
            />
          </div>
        </Paper>
      )}
    </div>
  );
}
