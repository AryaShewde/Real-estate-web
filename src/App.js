import React from 'react';
import {
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./pages/Home.js"
import PropertyDetails from "./pages/PropertyDetails.js"

const App = () => {
  return <>
    <div className='max-w-[1440px] mx-auto bg-white'>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route exact path="/property/:id" element={<PropertyDetails />} />
      </Routes>

    </div>
      <Footer />
  </>;
};

export default App;
