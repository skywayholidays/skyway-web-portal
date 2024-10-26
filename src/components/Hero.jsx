import React, { Component } from "react";
import "./Hero.css"; // Create and style this CSS file
import HeroSection from "./HeroSection";
import { image1, image2, image3, image4 } from "../assets/images";

const Hero = () => {
	return (
		<div className="hero-section">
			<div id="slider">
				<figure>
					<img src={image1} alt="Austin Fireworks" />
					<img src={image2} alt="Taj Mahal" />
					<img src={image3} alt="Ibiza" />
					<img src={image4} alt="Ankor Wat" />
					<img src={image1} alt="Austin Fireworks" />
				</figure>
			</div>
			<div className="hero-text">
				<HeroSection />
			</div>
		</div>
	);
};

export default Hero;
