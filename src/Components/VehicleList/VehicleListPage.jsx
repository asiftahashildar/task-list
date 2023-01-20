import React from "react";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector, useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import "./vehiclelist.css";
import { useState } from "react";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";

export const VehicleListPage = () => {
  const [open, setOpen] = useState(false);
  const [openDrop, setOpenDrop] = useState(false);
  const [alert, setAlert] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const receiveddata = useSelector((state) => state.vehicleReducer.vehicalData);

  useEffect(() => {
    setVehicalRecievedData(receiveddata);
    setVehicalSearchData(receiveddata);
  }, [receiveddata]);
  const [vehicalRecievedData, setVehicalRecievedData] = useState([]);
  const [vehicalSearchData, setVehicalSearchData] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    navigate("/AddVehicle");
  };

  const handleDropDown = () => {
    setOpen(!open);
    setOpenDrop(false);
  };

  const handleEnableSearch = () => {
    setOpenDrop(!openDrop);
  };

  const handleEdit = (data) => {
    navigate("/AddVehicle", { state: { data } });
  };

  const handleSearch = (elem) => {
    const serchedData = vehicalSearchData.filter((item) =>
      item.data.vehicleAmount.includes(elem)
    );
    setVehicalRecievedData(serchedData);
  };

  const handleSort = () => {
    const sortedData = vehicalSearchData.sort((a, b) =>
      a.data.vehicleAmount > b.data.vehicleAmount ? 1 : -1
    );
    setVehicalRecievedData(sortedData);
  };

  const handleDelete = (item) => {
    dispatch({ type: "delete_vehicle", id: item.id });
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  return (
    <div className="list-container">
      <div className="list-sub-container">
        <h2 style={{ marginLeft: "1rem" }}>Late Delivery</h2>
        <ArrowDropDownIcon
          style={{ fontSize: "70px" }}
          onClick={handleDropDown}
        />
      </div>
      {open === true ? (
        <div className="sort-list">
          {!openDrop ? (
            <h3 onClick={handleEnableSearch}>Click here to Search</h3>
          ) : (
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={{ m: 1, width: "55ch" }}
              onChange={handleSearch}
            />
          )}

          <h3 onClick={handleSort}>Sort</h3>
        </div>
      ) : null}
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Vehicle Type</th>
              <th>Amount</th>
              <th>Grace</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {vehicalRecievedData.flat(1).map((item) => (
              <tr key={item.id}>
                <td>{item.data.vehicleInfo}</td>
                <td>{`${item.data.vehicleAmount} / ${item.data.vehicTimetwo}`}</td>
                <td>{`${item.data.vehicleGrace} ${item.data.vehicTime}`}</td>
                <td>
                  {
                    <>
                      <BorderColorIcon
                        color="primary"
                        sx={{ mr: "1rem" }}
                        onClick={() => handleEdit(item)}
                      />
                      <DeleteIcon
                        color="error"
                        onClick={() => handleDelete(item)}
                      />
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-alert-container">
        <div className="add-button">
          <Button
            variant="outlined"
            onClick={handleAdd}
            sx={{ width: "15vh", height: "6vh", textTransform: "none" }}
            style={{ borderRadius: "10rem", fontSize: "20px" }}
          >
            Add
          </Button>
        </div>
        <div className="alert-container">
          {alert !== true ? null : (
            <Alert severity="error">Event Deleted Successfully</Alert>
          )}
        </div>
      </div>
    </div>
  );
};
