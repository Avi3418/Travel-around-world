

import adv1 from "../About/images/adv1.webp"
import adv2 from "../About/images/adv2.jpg"
import adv3 from "../About/images/adv3.jpeg"
import adv4 from "../About/images/scuba-diving.jpg"
import"./About.css"



function About()
{
    return(
        <>
        <section>
        <div className="text-center mb-4 text-secondary" id="about"><h1>About</h1></div>
        <div className="row mt-5 text-center">
        <div className="col-3 ">
       
        <img src={adv4} className=" rounded-circle w-75 h-75" />
        <h3>Swimming</h3>
       
        </div>
        <div className="col-3">
       
            <img src={adv1} className=" rounded-circle w-75 h-75"/>
            <h3>Boating</h3>
      
        </div>
        
        <div className="col-3 ">
        <img src={adv2} className=" rounded-circle w-75 h-75 text-center" /> 
        <h3>ROPEING</h3></div>
        <div className="col-3"> <img src={adv3} className=" rounded-circle w-75 h-75"/>
        <h3>CYCLING</h3> </div>
        </div>
       

            
        
        </section>
        </>
           
    )
}
export default About;