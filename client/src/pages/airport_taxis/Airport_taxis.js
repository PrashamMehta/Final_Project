import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./airport_taxis.css";


const Airport = () => {
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

export default Airport;