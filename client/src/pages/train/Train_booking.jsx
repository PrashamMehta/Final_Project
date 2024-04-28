import Footer from "../../components/footer/Footer";
import Header from "../train/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./train_booking.css";

const Train = () => {
    return (
      <div>
        <Navbar />
        <Header/>
        <div className="homeContainer">
          <MailList/>
          <Footer/>
        </div>
      </div> 
    );
  };

export default Train;