import React from "react";
import { useNavigate } from 'react-router-dom';

import Header from "../Home-Page/Header";
import Footer from "../Home-Page/Footer";

function Sign_In() {
  const initialvalues = {}

  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/forgetpw");
  }

    return (
        <div>

          <Header/>

            <div className="container">
      <div className="forms-container">

        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="username" placeholder="Username" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />
            <button type="submit" onClick={onSubmit} className="btn solid" id="forgetpw-btn">
              forget password 
              
            </button>



            <p className="social-text">Or Sign in with social platforms</p>

            <br />

            <a href="/SellerRqst">Admin Manager Dashboard (Pare)</a> <br />
            <a href="/CreateEmployee">Warehouse Manager Dashboard (Nova)</a> <br />
            <a href="/StoreView">Store Manager Dashboard (Che)</a> <br />
            <a href="#">Return Items Manager Dashboard (Osa)</a> <br />
            <a href="#">Delivery Manager Dashboard (Rash)</a> <br />

            <br />

            <a href="/addpackage">Add Package (Cham)</a> <br />

            <br />
            
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="Username" placeholder="Enter Your Full Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Enter Your Email Address" />
            </div>
            <div className="input-field">
            <i class="fad fa-building"></i>
              <input type="address" placeholder="Enter Your Address" />
            </div>
            <div className="input-field">
            <i className="fas fa-city"></i>
              <input type="cityname" placeholder="Enter Your City Name" />
            </div>
            <div className="input-field">
            <i className="fas fa-city"></i>
              <input type="districname" placeholder="Enter Your Distric Name" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btn" value="Sign up" />
            
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="https://www.facebook.com/Kleobeauty.lk" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3> Are You New To By The Minutes Currier Serveice </h3>
            <p>
            Join us right now to take advantage of our excellent service.
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="assets/img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Are You A Member Of By The Minutes Currier Serveice </h3>
            <p>
              We are very happy to work with you.  
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
           
          </div>
          <img src="assets/img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

    <Footer/>


        </div>
    );
}

export default Sign_In;