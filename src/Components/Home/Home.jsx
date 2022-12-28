import React from "react";
import "../Home/Home.css";
import HomeSvg from "../../assets/Home.svg";

const Home = () => {
  return (
    <>
      <div className="home-section">
        <div id="home">
          <div className="home-content">
            <p> #1 The classic puzzle game, that everyone plays.</p>
            <h1>Be Patient, Just Like a Puzzle</h1>
            <h2>Get an amazing new play game experience</h2>
            <div className="content-buttons">
              <button className="content-btn1">
                <a href="">Enter the game</a>
              </button>
              <button className="content-btn2">
                <a href="">
                  <span className="btn-rule">Read Rules !</span>
                </a>
              </button>
            </div>
          </div>
          <div className="home-img">
            <div className="img-home">
              <img src={HomeSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
