
import pic1 from "../Home/images/pic.jpg"
import pic2 from "../Home/images/pic3.jpg"
import pic3 from "../Home/images/pic8.jpg"
import About from '../About/About'
import Gallery from '../Gallery/Gallery'
import Register from '../Register/Register'
import Login from '../Login/Login'
import Contact from '../Contact us/Contact'


import "./Home.css"



function Home()
{
    return(
      <>
      
<div id="demo" className="carousel slide" data-bs-ride="carousel">
<div className="carousel-inner">
  <div className="carousel-item active">
    <img src={pic1} alt="Los Angeles" className="d-block w-100 immg"  />
    <div className="carousel-caption">
     
    </div>
  </div>
  <div className="carousel-item">
    <img src={pic2} alt="Chicago" className="d-block w-100 immg"  />
    <div className="carousel-caption">
      
    </div> 
  </div>
  <div className="carousel-item">
    <img src={pic3} alt="New York" className="d-block w-100 immg "  />
    <div className="carousel-caption">
    
    </div>  
    
    
  </div>
  
</div>


<button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
  <span className="carousel-control-prev-icon"></span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
  <span className="carousel-control-next-icon"></span>
</button>
</div>

<About/>
<Gallery/>
<Register/>
<Login/>
<Contact/>
</>
    )

}
export default Home;