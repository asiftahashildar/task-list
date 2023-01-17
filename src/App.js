import { VehicleListPage } from "./Components/VehicleList/VehicleListPage";
import { VehicleAddPage } from "./Components/VehicleAdd/VehicleAddPage";
import { Provider } from "react-redux";
import { Store } from "./State/store";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const localstore = Store;
  return (
    <div className="App">
      <Provider store={localstore}>
        {/* <VehicleListPage /> */}
        <Routes>
          <Route path="/" element={<VehicleListPage />} />
          <Route path="/AddVehicle" element={<VehicleAddPage />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
