import React from "react";

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
      <a className="navbar-brand" href="#"><h1><strong>PEGASINO</strong></h1></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
            <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" className="btn btn-dark"><div className="pad"></div><i>SPORTS</i></button></div></a>
            </li>
            <li className="nav-item">
            <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" className="btn btn-dark"><div className="pad"></div><i>CASINO</i></button></div></a>
            </li>
            <li className="nav-item dropdown">
        <li className="nav-item">
            <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" className="btn btn-dark"><div className="pad"></div><i>LIVE CASINO</i></button></div></a>
            </li>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          <li className="nav-item">
            <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" className="btn btn-dark"><div className="pad"></div><i>POKER</i></button></div></a>
            </li>
               </ul>
            </li>
            <li className="nav-item">
            <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" className="btn btn-dark"><div className="pad"></div><i>VIRTUAL GAMES</i></button></div></a>
            </li>
        
        
        <li className="nav-item">
            <a className=" sportsicon nav-link active" aria-current="page" href="https://www.pegasino.com/"><div className="navnav"><button type="button" className="btn btn-dark"><div className="pad"></div><i>BLOG</i></button></div></a>
            </li>
          </ul>
          <form className="d-flex">
        <div className="Login"><button type="button" className="btn btn-success">REGISTER</button></div>
        <div className="Register"><button type="button" className="btn btn-success">LOGIN</button></div>
          </form>
        </div>
      </div>
    </nav>
    )
}

export default Navbar