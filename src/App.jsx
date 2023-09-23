import React from 'react';
import Home from './componet/Home';
import About from './componet/About';
import Developer from './componet/Developer';
import Contact from './componet/Contact';
import Footer from './componet/Footer';


const App = () => {
  return (
    <div className=' overflow-hidden'>
      <Home/>
      <About/>
      <Developer/>
      <Contact/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
 