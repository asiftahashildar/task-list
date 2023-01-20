import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router";
import Alert from "@mui/material/Alert";
import "./vehicleadd.css";

export const VehicleAddPage = () => {
  const [vehicleData, setVehicledata] = useState({});
  const [alert, setAlert] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const handleSave = () => {
    setAlert(true);
    dispatch({
      type: "vehicle_data",
      payload: { id: new Date().getTime().toString(), data: vehicleData },
    });
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };
  const handleUpdate = (data) => {
    setAlert(true);
    setVehicledata({ ...data.data });
    dispatch({
      type: "vehicle_data_update",
      payload: { id: data.id, update: vehicleData },
    });
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="main-container">
      {state === null ? (
        <>
          <div className="event-heading">
            <label>Add Event</label>
          </div>
          <div className="container">
            <div className="child-container">
              <label htmlFor="">Vehicle Type</label>
              <select
                name={VehicleNames[0]}
                className="vehicle-select"
                onChange={(e) =>
                  setVehicledata({
                    ...vehicleData,
                    vehicleInfo: e.target.value,
                  })
                }
              >
                {VehicleNames.map((item) => (
                  <option>
                    <h2>{item}</h2>
                  </option>
                ))}
              </select>
            </div>
            <div className="child-container">
              <label htmlFor="">Grace</label>
              <TextField
                inputProps={{ style: { fontSize: 25, fontWeight: 500 } }}
                sx={{ m: 1, width: "48ch", fontWeight: "400" }}
                variant="standard"
                onChange={(e) =>
                  setVehicledata({
                    ...vehicleData,
                    vehicleGrace: e.target.value,
                  })
                }
              />
            </div>
            <div className="child-container">
              <label htmlFor="">UOM</label>
              <select
                name={VechileTime[0]}
                className="time-select"
                onChange={(e) =>
                  setVehicledata({ ...vehicleData, vehicTime: e.target.value })
                }
              >
                {VechileTime.map((item) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
            <div className="sub-child-container">
              <div className="child-container">
                <label htmlFor="">Amount</label>
                <TextField
                  inputProps={{ style: { fontSize: 25, fontWeight: 500 } }}
                  sx={{ m: 1, width: "48ch" }}
                  variant="standard"
                  type="number"
                  onChange={(e) =>
                    setVehicledata({
                      ...vehicleData,
                      vehicleAmount: e.target.value,
                    })
                  }
                />
              </div>
              <div className="child-container-three">
                <label htmlFor="">UOM</label>
                <select
                  name={VechileTime[0]}
                  className="time-select"
                  onChange={(e) =>
                    setVehicledata({
                      ...vehicleData,
                      vehicTimetwo: e.target.value,
                    })
                  }
                >
                  {VechileTime.map((item) => (
                    <option className="options">{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="button-alert-container">
            <div className="button-container">
              <Button
                variant="outlined"
                sx={{
                  width: "20vh",
                  height: "8vh",
                  mr: "7rem",
                  textTransform: "none",
                }}
                style={{ borderRadius: "10rem", fontSize: "20px" }}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="outlined"
                sx={{ width: "20vh", height: "8vh", textTransform: "none" }}
                style={{ borderRadius: "10rem", fontSize: "20px" }}
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
            <div className="alert-container">
              {alert !== true ? null : (
                <Alert severity="success">Event Added Successfully</Alert>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="event-heading">
            <label>Add Event</label>
          </div>
          <div className="container">
            <div className="child-container">
              <label htmlFor="">Vehicle Type</label>
              <select
                name={VehicleNames[0]}
                defaultValue={state.data.data.vehicleInfo}
                className="vehicle-select"
                onChange={(e) =>
                  setVehicledata({
                    ...vehicleData,
                    vehicleInfo: e.target.value,
                  })
                }
              >
                {VehicleNames.map((item) => (
                  <option>
                    <h2>{item}</h2>
                  </option>
                ))}
              </select>
            </div>
            <div className="child-container">
              <label htmlFor="">Grace</label>
              <TextField
                defaultValue={state.data.data.vehicleGrace}
                inputProps={{ style: { fontSize: 25, fontWeight: 500 } }}
                sx={{ m: 1, width: "48ch", fontWeight: "400" }}
                variant="standard"
                onChange={(e) =>
                  setVehicledata({
                    ...vehicleData,
                    vehicleGrace: e.target.value,
                  })
                }
              />
            </div>
            <div className="child-container">
              <label htmlFor="">UOM</label>
              <select
                name={VechileTime[0]}
                defaultValue={state.data.data.VechicTime}
                className="time-select"
                onChange={(e) =>
                  setVehicledata({ ...vehicleData, vehicTime: e.target.value })
                }
              >
                {VechileTime.map((item) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
            <div className="sub-child-container">
              <div className="child-container">
                <label htmlFor="">Amount</label>
                <TextField
                  defaultValue={state.data.data.vehicleAmount}
                  inputProps={{ style: { fontSize: 25, fontWeight: 500 } }}
                  sx={{ m: 1, width: "48ch" }}
                  variant="standard"
                  type="number"
                  onChange={(e) =>
                    setVehicledata({
                      ...vehicleData,
                      vehicleAmount: e.target.value,
                    })
                  }
                />
              </div>
              <div className="child-container-three">
                <label htmlFor="">UOM</label>
                <select
                  name={VechileTime[0]}
                  defaultValue={state.data.data.vehicTimetwo}
                  className="time-select"
                  onChange={(e) =>
                    setVehicledata({
                      ...vehicleData,
                      vehicTimetwo: e.target.value,
                    })
                  }
                >
                  {VechileTime.map((item) => (
                    <option className="options">{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="button-alert-container">
            <div className="button-container">
              <Button
                variant="outlined"
                sx={{
                  width: "20vh",
                  height: "8vh",
                  mr: "7rem",
                  textTransform: "none",
                }}
                style={{ borderRadius: "10rem", fontSize: "20px" }}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="outlined"
                sx={{ width: "20vh", height: "8vh", textTransform: "none" }}
                style={{ borderRadius: "10rem", fontSize: "20px" }}
                onClick={() => handleUpdate(state.data)}
              >
                Update
              </Button>
            </div>
            <div className="alert-container">
              {alert !== true ? null : (
                <Alert severity="success">Event Updated Successfully</Alert>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

const VehicleNames = [
  "3 Wheeler 550kgs - 4ft 8 inch",
  "4 Wheeler 850kgs - 5ft 9 inch",
  "2 Wheeler 250kgs - 2ft 4 inch",
  "3 Wheeler 450kgs - 4ft 2 inch",
  "4 Wheeler 950kgs - 5ft 8 inch",
];

const VechileTime = ["hours", "minutes", "days"];
