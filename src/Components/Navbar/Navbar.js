import React from 'react'
import Pic from "../Navbar/11.png"
import './Navbar.css'
export default function Navbar() {
    return(
        <>
    
      
  <div className='row'id='navbar' > 
  <marquee id="font" ><h3><i>Welcome To Explore World</i></h3></marquee>
    <div className='col-12'>
    <nav className="navbar navbar-expand-lg nav " >
    <img className='img' src={Pic} alt="logo"/>
    <a href="" className=" navbar-brand font-weight-bold">
     <h3><i className='text-secondary'>E</i><span>xplore World</span><i/> </h3>
             </a>  
  <div className="container-fluid">

  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse ml-auto" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item ">
        <a  className="nav-link text-light Navtext " href="/"><h4>Home</h4></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link text-light Navtext" href="#about"><h4>About</h4></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link text-light Navtext" href="#gallery"><h4>Gallery</h4></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link text-light Navtext" href="#register"><h4>Resgister</h4></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link text-light Navtext" href="#login"><h4>Login</h4></a>
        </li>
        <li className="nav-item">
        <a  className="nav-link text-light Navtext" href="#contact"><h4>Contact</h4></a>
        </li>
       
      </ul>
      <ul className="socialIcons mt-3 ml-1">
  <li className="facebook"><a href="https://www.facebook.com/?stype=lo&jlou=AffAwkkkWWOc5ivuCTC6x39yyBd2IDXpdIQ8D720wYg4bqR5cvkDfXVg10wlMzz2kmTSSiueSxOBM-9aidzXLUoYEpE-rtu_fi2rNJK5_9xVzg&smuh=31880&lh=Ac-PYylSjgwCA08kLco"><i className="fa fa-fw fa-facebook"></i>Facebook</a></li>
  <li className="twitter"><a href="https://twitter.com/login" ><i class="fa fa-fw fa-twitter"></i>Twitter</a></li>
  <li className="instagram"><a href="https://instagram.com/callmelucifer41?igshid=OGQ2MjdiOTE="><i class="fa fa-fw fa-instagram"></i>Instagram</a></li>

 
</ul>


    </div>
  </div>
</nav>
    </div>
    </div>
   
    </>
  )
}
