import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "../src/pages/login/Login.jsx";
import Register from "../src/pages/register/Register.jsx";
import Flight from "../src/pages/flight/Flight_booking.jsx";
import Train from "../src/pages/train/Train_booking.jsx";
import Car from "../src/pages/car_rental/Car_rental.jsx";
import Airport from "../src/pages/airport_taxis/Airport_taxis.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/flight" element={<Flight/>}/>
        <Route path="/train" element={<Train/>}/>
        <Route path="/car_rental" element={<Car/>}/>
        <Route path="/airport_taxis" element={<Airport/>}/>        
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
