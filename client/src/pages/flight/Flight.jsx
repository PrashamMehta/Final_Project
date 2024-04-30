import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Header2 from "../../components/header/HeaderFlight";
import Header1 from "../../components/header/HeaderTrain";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";


const Flight = () => {
  return (
    <div>
      <Navbar />
      <Header2 />

      <MailList />
      <Footer />
    </div>
  );
};

export default Flight;
