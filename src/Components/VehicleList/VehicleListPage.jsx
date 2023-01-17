import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useSelector, useDispatch } from "react-redux";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import "./vehiclelist.css";
import { useState } from "react";

export const VehicleListPage = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const receiveddata = useSelector((state) => state.vehicleReducer.vehicalData);
  console.log("vehcle", receiveddata);

  const handleAdd = () => {
    navigate("/AddVehicle");
  };

  const handleSort = () => {
    setOpen(!open);
  };

  const handleEdit = (data) => {
    navigate("/AddVehicle", { state: { data } });
    console.log("jiiii");
  };

  return (
    <div className="list-container">
      <div className="list-sub-container">
        <h2 style={{ marginLeft: "1rem" }}>Late Delivery</h2>
        <ArrowDropDownIcon style={{ fontSize: "70px" }} onClick={handleSort} />
      </div>
      {open === true ? (
        <div className="sort-list">
          <h3>Search</h3>
          <h3>Sort</h3>
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
            {receiveddata.flat(1).map((item) => (
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
                        onClick={() =>
                          dispatch({ type: "delete_vehicle", id: item.id })
                        }
                      />
                    </>
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    </div>
  );
};
