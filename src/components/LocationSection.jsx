import { useState } from "react";
import Button from "./Button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./locationsection.css";

const Location = () => {
	const [email, setEmail] = useState("");
	const position = [12.9279, 100.8771]; // Updated to Pattaya, Thailand

	return (
		<>
			<div className="md:container md:mx-auto mt-40 max-md:mt-16">
				<h2 className="leading-[50px] text-[24px] font-semibold max-md:mx-10 max-md:mb-4 md:hidden">
					Location of our Hotels
				</h2>
				<div className="location-map relative w-full h-[600px] rounded-2xl overflow-hidden max-md:rounded-none max-md:h-[400px]">
					<MapContainer
						center={position}
						zoom={10}
						scrollWheelZoom={false}
						className="w-full h-[600px] absolute"
					>
						<TileLayer
							attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
							url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						/>
						<Marker position={position}>
							<Popup>
								Welcome to our world-class hotel in Pattaya! Enjoy luxury and comfort in the heart of Thailand.
							</Popup>
						</Marker>
					</MapContainer>
				</div>
				<div className="location-box relative z-[401] max-md:hidden ">
					<div className="absolute bg-white mx-11 rounded-2xl gap-28 flex p-11 bottom-[30px]">
						<div className="location-box-left w-1/2">
							<h2 className="leading-[50px] text-[40px] font-semibold">
								Location of our Hotels
							</h2>
							<p className="mt-5 text-[16px] text-[#555555] leading-7">
								Explore our best world-class hotels offering unparalleled luxury, comfort, and hospitality.
							</p>
						</div>
						<div className="location-box-right w-1/2 flex items-end max-lg:flex-col ">
							<div className="flex justify-between w-full bg-maincolorhover rounded-[50px]">
								<div className="px-8 text-[16px] text-[#555555] leading-7 w-full">
									<input
										className="w-full outline-none bg-maincolorhover"
										type="text"
										placeholder="Enter your email"
										name="email"
										value={email}
										onChange={(e) =>
											setEmail(e.target.value)
										}
									/>
								</div>
								<Button
									addClass={
										"rounded-[50px] px-12 max-lg:hidden md:hidden"
									}
								>
									Contact
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Location;
