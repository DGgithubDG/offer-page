import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//import { MDBIcon } from 'mdb-react-ui-kit';
//import { BG } from 'country-flag-icons/react/3x2'


//import { Link } from "react-router-dom";

import Footer from "./footer";
import Navbar from "./navbar"
import casino from "../../img/casino.9.jpg";

//import ResponsiveImage from "./img";
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
        <div className="">
    <Navbar />
    <img class="img-fluid" src={casino}></img> 
    <div class="card text-center">
  <div class="card-body">
    <h5 class="card-title"><h1>PEGASINO</h1></h5>
    {/* <BG title="Bulgaria" className="falg"/> */}
    <p class="card-text text-start"><strong>Always the best odds with Casino</strong></p>
    <p class="card-text text-start"><strong>Quick and easy deposits & withdrawals</strong></p>
    <p class="card-text text-start"><strong>Transparency, responsibility and security</strong></p>
    <button type="button" class="btn btn-success">REGISTER</button>
  </div>
</div>
<Footer/>

</div>
    
    
	);
};

export default Home;
