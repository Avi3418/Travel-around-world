
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact us/Contact';



import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Gallery from './Components/Gallery/Gallery';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';




function App()
{
  return (
    <>
    <Navbar/>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      
      
    </Routes>
    </BrowserRouter>
   
   
    
   
   
    </>
   );
}
export default App;
