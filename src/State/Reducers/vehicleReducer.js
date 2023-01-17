let initialState = {
  vehicalData: [],
};
export const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "vehicle_data":
      const { id, data } = action.payload;
      return {
        ...state,
        vehicalData: [...state.vehicalData, { id: id, data: data }],
      };
    case "delete_vehicle":
      const newvehicalData = state.vehicalData.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        vehicalData: newvehicalData,
      };
    case "vehicle_data_update":
      state.vehicalData.filter((item) => {
        if (item.id === action.id) {
          item.data = action.data;
        }
      });
      return state;
    default:
      return state;
  }
};

//{vehicleInfo:null,vehicleGrace:0,vehicTime:null,vehicleAmount:0,vehicTimetwo:null}
