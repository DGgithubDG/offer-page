import React from "react";
//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//import { MDBIcon } from 'mdb-react-ui-kit';
//import { BG } from 'country-flag-icons/react/3x2'


//import { Link } from "react-router-dom";

import Footer from "./footer";
import Navbar from "./navbar"
import casino from "../../img/pegasino.png";

//import ResponsiveImage from "./img";
import logo from "../../img/casino.9.jpg";

//create your first component
const Register = () => {
	return (
<div className="card mb-3 text-center" style={{ maxWidth: 590 }}>

  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://img.freepik.com/free-vector/red-casino-roullete-background_1314-247.jpg?w=540" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">In order to become a customer, I agree to the following</h5>
        <div class="form-check text-center">
  <input class="form-check-input text-center" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">
    Agree to terms and conditions
  </label>
</div>
<div class="form-check text-center">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
Privacy policy & cookies
  </label>
</div>
<div class="form-check text-center">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
I am at least 18 years old  </label>
</div>

<button type="button" className="btn btn-success">Confirm</button>

      </div>
    </div>
  </div>
</div>
//     <section class="vh-100">
//   <div class="container h-100">
//     <div class="row d-flex justify-content-center align-items-center h-100">
//       <div class="col-lg-12 col-xl-11">
//         <div class="card text-black" >
//           <div class="card-body p-md-5">
//             <div class="row justify-content-center">
//               <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

//                 <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

//                 <form class="mx-1 mx-md-4">

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-user fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="text" id="form3Example1c" class="form-control" />
//                       <label class="form-label" for="form3Example1c">Your Name</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="email" id="form3Example3c" class="form-control" />
//                       <label class="form-label" for="form3Example3c">Your Email</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4c" class="form-control" />
//                       <label class="form-label" for="form3Example4c">Password</label>
//                     </div>
//                   </div>

//                   <div class="d-flex flex-row align-items-center mb-4">
//                     <i class="fas fa-key fa-lg me-3 fa-fw"></i>
//                     <div class="form-outline flex-fill mb-0">
//                       <input type="password" id="form3Example4cd" class="form-control" />
//                       <label class="form-label" for="form3Example4cd">Repeat your password</label>
//                     </div>
//                   </div>

//                   <div class="form-check d-flex justify-content-center mb-5">
//                     <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
//                     <label class="form-check-label" for="form2Example3">
//                       I agree all statements in <a href="#!">Terms of service</a>
//                     </label>
//                   </div>

//                   <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
//                     <button type="button" class="btn btn-primary btn-lg">Register</button>
//                   </div>

//                 </form>

//               </div>
//               <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

              
//               <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//     <img class="img-fluid" src={casino}></img> 
//     </div>
//     <div class="carousel-item">
//       <img src="https://venhoevencs.nl/wp-content/uploads/2022/07/proto-zoop-zeeburg-21-800x500.jpg" class="d-block w-100" alt="..."/>
//     </div>
   
//   </div>
// </div>

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
	);
};

export default Register;
