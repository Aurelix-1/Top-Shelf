import "./Home.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Banner from "../../components/banner/Banner.jsx";
import AboutUs from "../../components/aboutUs/AboutUs.jsx";
import CustomerTesti from "../../components/curtomerTesti/CustomerTesti.jsx";
import ChooseYour from "../../components/ChooseYour/ChooseYour.jsx";
import HowTo from "../../components/howTo/HowTo.jsx";
import WhatMakes from "../../components/whatMakes/WhatMakes.jsx";
import RecentlyAdded from "../../components/recentlyAdded/RecentlyAdded.jsx";
import WeedEducation from "../../components/WeedEducation/WeedEducation.jsx";
import Footer from '../../components/footer/Footer.jsx';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutUs />
      <CustomerTesti />
      <ChooseYour />
      <HowTo />
      <WhatMakes />
      <RecentlyAdded />
      <WeedEducation />
      <Footer />
    </div>
  );
};

export default Home;
