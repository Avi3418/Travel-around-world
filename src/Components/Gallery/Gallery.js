import pic1 from "../Gallery/images/baliii.jpg"
import pic2 from "../Gallery/images/dubai.jpg"
import pic3 from "../Gallery/images/egypt.jpg"
import pic4 from "../Gallery/images/GOA.jpg"
import pic5 from "../Gallery/images/iceland.jpg"
import pic6 from "../Gallery/images/incredible-india.webp"
import pic7 from "../Gallery/images/itally.jpg"
import pic8 from "../Gallery/images/MALDIVES.jpg"
import pic9 from "../Gallery/images/miami1.jpg"
import pic10 from "../Gallery/images/new-york-city 1.jpg"
import pic11 from "../Gallery/images/switerzland.jpg"
import pic12 from "../Gallery/images/sydney.jpg"
import "./Gallery.css"





import React from 'react'


export default function () { 
  return (
    <>
    <div className="h">
    <h1 className="text-center  text-secondary p-4 " id="gallery">Gallery</h1>
    <div className="gallery">
    
    <div className='row text-center'>
        <div className=' iii col-4'>
          <img src={pic6} className="w-100 h-75"/>
          <p><b>INDIA</b></p>
        </div>
        <div className=' iii col-4'>
        <img src={pic2} className="w-100 h-75" />
        <p><b>DUBAI</b></p>
            </div>
            <div className=' iii col-4 '>
            <img src={pic3} className="w-100 h-75" /> 
            <p><b>EGYPT</b></p> 
            </div>
    </div>
    
    <div className='row text-center mt-1'>
        <div className=' iii col-4'>
        <img src={pic4}  className="w-100 h-75" />
        <p><b>GOA</b></p>
        </div>
        <div className=' iii col-4'>
        <img src={pic5}  className="w-100 h-75" /> 
        <p><b>ICELAND</b></p>
            </div>
            <div className=' iii col-4'>
            <img src={pic1}  className="w-100 h-75" />
            <p><b>BALI</b></p>
            </div>
    </div>
    
    <div className='row text-center mt-1'>
        <div className=' iii col-4'>
        <img src={pic7} className="w-100 h-75"/>
        <p><b>ITALY</b></p>
        </div>
        <div className=' iii col-4'>
        <img src={pic8} className="w-100 h-75" />
        <p><b>MALDIVES</b></p>
            </div>
            <div className='iii col-4'>
            <img src={pic9} className="w-100 h-75"/>
            <p><b>MIAMI</b></p>
            </div>
    </div>
    
    <div className='row text-center'>
        <div className='iii col-4'>
        <img src={pic10} className="w-100 h-75" />
        <p><b>NEW YORK CITY</b></p>
        </div>
        <div className='iii col-4'>
        <img src={pic11} className="w-100 h-75"/>
        <p><b>SWITZERLAND</b></p>
            </div>
            <div className='iii col-4 '>
            <img src={pic12} className="w-100 h-75" />
            <p><b>SYDNEY</b></p>
            </div>
    </div>
    </div>
    </div>
    </>
  )
}
