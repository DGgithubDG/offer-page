import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//import { MDBIcon } from 'mdb-react-ui-kit';
//import { BG } from 'country-flag-icons/react/3x2'


//import { Link } from "react-router-dom";
import Register from "./register";

import Footer from "./footer";
import Navbar from "./navbar"
import casino from "../../img/casino.9.jpg";

//import ResponsiveImage from "./img";
import logo from "../../img/casino.9.jpg";

//create your first component
const Home = () => {
	return (
        <div className="">
    <Navbar />
<Register />
<Footer/>

</div>
    
    
	);
};

export default Home;
