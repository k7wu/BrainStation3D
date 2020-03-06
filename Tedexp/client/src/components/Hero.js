import React from "react";
import Topics from "./Topics";

export default function Hero(props) {
  return (
    <div className="hero">
      <div className="hero__image">
        <div className="hero__text-container">
          <div className="hero__main-text">
            <h1 className="hero__title">TED Student Experience</h1>
            <h2 className="hero__subtitle">Connecting you to speakers</h2>
          </div>
          <h2 className="hero__subtitle-one">What interests you?</h2>
          <Topics />
        </div>
      </div>
    </div>
  );
}
