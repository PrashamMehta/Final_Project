import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Register from "../src/pages/register/Register"
import Review_Booking from "../src/pages/review_booking/Review_booking"
import Login1 from "./pages/login/Login1";
import List1 from "./pages/trainlist/TrainList";
import Header1 from "./components/header/HeaderTrain";
import Train from "./pages/train/Train";
import Flight from "./pages/flight/Flight";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/hotels" element={<List/>}/>
        <Route path="/hotels/:id" element={<Hotel/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/login1" element={<Login1/>}/>
        <Route path="/trainlist" element={<List1/>}/>
        <Route path="/flightlist" element={<List1/>}/>
        <Route path="/flight" element={<Flight/>}/>
        <Route path="/train" element={<Train/>}/>
        <Route path="/review_booking" element={<Review_Booking/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
