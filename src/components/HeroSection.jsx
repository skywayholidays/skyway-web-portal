import React from "react";
import "../Style/Herosection.css"
import Button from "./Button"; // Import Button component
import ContactForm from "./ContactForm";


const HeroSection = () => {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<div className="hero-text ">
					<h1 className="font-bold">
						Welcome to Skywayholidays
					</h1>
					<p>
					Planing Trip To Anywhere in The World?
					</p>
				</div>
				
				<ContactForm />
			</div>
		</section>
	);
};

export default HeroSection;
