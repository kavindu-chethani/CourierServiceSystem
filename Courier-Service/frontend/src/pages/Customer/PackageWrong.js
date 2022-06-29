import React from "react";
import { useNavigate } from 'react-router-dom';
import Footer from '../Home-Page/Footer'
import Header from '../Home-Page/Header'

import "./PackageWrong.css"

const PackageWrong = () => {

  const nav = useNavigate();

  function handleClose() {
    nav("/");
  }

  return (
      <div className="wrong">

        <Header/>

        <div className="packageDetails">
          <div className="main">
            <div className="details-main">
              <div className="cus-detailsPD">
                
                <h2>Oops!</h2>
                <p>Something went wrong. Your tracking ID was not match<br/>with our system. Please check the ID and<br/>try again.</p>
                <button className="button-35" onClick={() => handleClose()}>Cancel</button>
              </div>
            </div>
          </div>
        </div>

        <Footer/>

      </div>
  )
}

export default PackageWrong