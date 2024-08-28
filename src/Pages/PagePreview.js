import React, { useState, useEffect ,lazy} from 'react';
import './PagePreview.css';


import NavBar from '../Components/Navbar'
import Home from './Home'
import About from './About';
import Product from './Product';



const PreviewPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoaded(true);
    }, 550);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`transition-container ${isLoaded ? 'loaded' : 'hidden'}`}>
      <NavBar />
      <Home />
      <Product/>
      <About/>
     
     {/* <contact/> */}
    </div>
  );
};

export default PreviewPage;