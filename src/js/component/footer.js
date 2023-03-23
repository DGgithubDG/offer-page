import React from "react";



//create your first component
const Footer = () => {
	return (
        <div className="Footer">
        <footer className="bg-dark text-center text-white">
          <div className="container p-4">
            <section className="mb-4">
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-facebook-f"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-twitter"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-google"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-instagram"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-linkedin-in"></i
              ></a>
        
              <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                ><i className="fab fa-github"></i
              ></a>
            </section>
        
            <section className="">
              <form action="">
                <div className="row d-flex justify-content-center">
                  <div className="col-auto">
                    <p className="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>
        
                  <div className="col-md-5 col-12">
                    <div className="form-outline form-white mb-4">
                      <input type="email" id="form5Example21" className="form-control" />
                      <label className="form-label" for="form5Example21">Email address</label>
                    </div>
                  </div>
        
                  <div className="col-auto">
                    <button type="submit" className="btn btn-outline-light mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
        
            <section className="mb-4">
                <div><h4>RESPONSIBLE GAMING</h4> <p>
              Attention! Gambling can be addictive and is not suitable for solving financial problems. Please read terms and conditions and stay cool and bet responsibly. "COOLBET" is a registered trademark. Coolbet is offering independent sports book services and is not affiliated with sports teams, event organisers or players displayed in its websites.
              </p></div>
             
         
            </section>
        
            <section className="">
              <div className="row">
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">SPORTS</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">ALL SPORTS</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">LIVE BET</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">COOLBET LEAGUE</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">VIRTUAL SPORTS</a>
                    </li>
                  </ul>
                </div>
        
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">CASINO</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">CASINO LOBBY</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">LIVE CASINO</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">CASINO RACE</a>
                    </li>
                    
                  </ul>
                </div>
        
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">POKER</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">POKER</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">DOWNLOAD</a>
                    </li>
                
                  </ul>
                </div>
        
                <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">PROMOTIONS</h5>
        
                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">COOLBET PROMOTIONS</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">REFER A FRIEND</a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">BONUS</a>
                    </li>
                  
                  </ul>
                </div>
                
              </div>
            </section>
          </div>
        
          <div className="text-center p-3">
            © 2023 Copyright:
            <a className="text-white" href="https://www.pegasino.com/">www.pegasino.com</a>
          </div>
        </footer>
        </div>
	);
};

export default Footer;
