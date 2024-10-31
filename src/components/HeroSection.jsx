import React from "react";
import "../Style/Herosection.css"
import Button from "./Button"; // Import Button component
import ContactForm from "./ContactForm";


const HeroSection = () => {
	return (
		<section className="hero-section">
			<div className="hero-content">
				<div className="hero-text ">
					<h1 className="font-semibold text-4xl">
						Welcome to Our Websites
					</h1>
					<p>
						Your journey to excellence starts here. Let us help you
						achieve your dreams.
					</p>
					<Button>Get Started</Button>
				</div>
				
				<ContactForm />
			</div>
		</section>
	);
};

export default HeroSection;
