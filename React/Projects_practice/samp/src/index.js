import React from "react";
import { render } from "react-dom";
import "./index.css";

const Go = () => {
  const T = " It is my practice of React ";
  return (
    <div className="Top">
      <p> Hi this punith</p>
      <p>{T}</p>
    </div>
  );
};

const S = () => {
  return (
    <div className="Details">
      <p> I graduated from Acharya Institute of Technology </p>
    </div>
  );
};

const Fo = () => {
  return (
    <div className="Dform">
      <dialog open>
        <form method="Dailog" action="close">
          <input type="text" name="name" placeholder="Enter your Name"></input>{" "}
          <button type="submit"> Submit </button>
          <br></br> <br></br>
          <img
            src="http://www.hdwallpaperspulse.com/wp-content/uploads/2016/05/28/cloudy-weather-beautiful-landscape-wallpaper.jpeg"
            alt="ad"
          ></img>
        </form>
      </dialog>
    </div>
  );
};

render(
  <div className="container">
    <Go />
    <Fo />
    <S />
    <h1> Hello I'm on </h1>
    <p> {6 + 6} </p>
  </div>,
  document.getElementById("root")
);
