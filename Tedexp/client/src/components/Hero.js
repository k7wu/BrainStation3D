import React from "react";
import video from "../assets/Video/BrainStation Sample Video.mp4";

export default function Hero(props) {
  return (
    <div className="hero">
      <video className="hero__video" poster={props.hero} controls>
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
}
