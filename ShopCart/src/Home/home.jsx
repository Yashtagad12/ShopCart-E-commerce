import Aboutus from "./Aboutus";
import AppSection from "./AppSection";
import Banner from "./Banner";
import Categoryshowcase from "./Categoryshowcase";
import Homecategory from "./Homecategory";
import LocationSprade from "./LocationSprade";
import Register from "./Register";
import Sponser from "./Sponser";


const home = () => {
  return (
    <div>
      <Banner/>
      <Homecategory/>
      <Categoryshowcase/>
      <Register/>
      <LocationSprade/>
      <Aboutus/>
      <AppSection/>
      <Sponser/>
    </div>
  )
}

export default home;