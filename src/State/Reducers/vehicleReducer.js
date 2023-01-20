let initialState = {
  vehicalData: [],
};
export const vehicleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "vehicle_data":
      const { id, data } = action.payload;
      return {
        ...state,
        vehicalData: [...state.vehicalData, { id, data }],
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
      const updatedData = state.vehicalData
        .map((item) => {
          if (item.id === action.payload.id) {
            return { ...item.data, ...action.payload.update };
          }
          return item;
        })
        .reduce((acc, curr) => {
          acc[curr.id] = curr;
          return acc;
        }, {});
      return {
        ...state,
        vehicalData: [
          ...state.vehicalData,
          { id: action.payload.id, data: updatedData.undefined },
        ],
      };
    default:
      return state;
  }
};

//{vehicleInfo:null,vehicleGrace:0,vehicTime:null,vehicleAmount:0,vehicTimetwo:null}
