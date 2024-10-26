import { ImageHotel } from "../assets/images";
import {
	IconSearch,
	IconCheckinout,
	IconLocation,
	IconPerson,
	IconWatchVideo,
} from "../assets/icons";
// import "./herosection.css";
import Button from "./Button";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
	Container,
	Grid,
	TextField,
	Select,
	MenuItem,
	Typography,
	InputLabel,
	FormControl,
	TextareaAutosize,
	Box,
} from "@mui/material";

const HeroSection = () => {
	const [location, setLocation] = useState(null);
	const [checkInDate, setCheckInDate] = useState(new Date());
	const [checkOutDate, setCheckOutDate] = useState(new Date());
	const [roomFor, setRoomFor] = useState(null);

	const countryOptions = [
		{ value: "no-selected", label: "Select...", isFixed: true },
		{ value: "losangles", label: "Los Angles" },
		{ value: "bali", label: "Bali" },
		{ value: "sydney", label: "Sydney" },
		{ value: "lombok", label: "Lombok" },
		{ value: "yogya", label: "Yogyakarta" },
		{ value: "singapore", label: "Singapore" },
		{ value: "maldiv", label: "Maldiv" },
		{ value: "tokyo", label: "Tokyo" },
		{ value: "thailand", label: "Thailand" },
		{ value: "tokyo", label: "Tokyo" },
	];

	const roomOptions = [
		{ value: "no-selected", label: "Select...", isFixed: true },
		{ value: "1room1guest", label: "1 room, 1 guest" },
		{ value: "1room2guests", label: "1 room, 2 guests" },
		{ value: "1room3guests", label: "1 room, 3 guest" },
		{ value: "2room1guest", label: "2 room, 1 guest" },
		{ value: "2room2guests", label: "2 room, 2 guests" },
		{ value: "2room3guests", label: "2 room, 3 guests" },
	];

	function onSearchButtonClick(event) {
		const result = {
			location: location,
			checkInDate: checkInDate,
			checkOutDate: checkOutDate,
			roomFor: roomFor,
		};

		alert(JSON.stringify(result));
	}

	return (
		<>
			<div className="hero-section2">
				<div className="columns-2 max-md:columns-1">
					<div className="hero-right h-[100vh] py-14 ">
						<h1 className="hero-title md:text-4xl md:leading-[48px] lg:leading-[80px] lg:text-6xl font-semibold mt-3 text-3xl leading-[48px]">
							Find your perfect place to stay
						</h1>
						<p className="hero-description text-xl text-white leading-8 mt-8 max-md:text-lg max-md:leading-6">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Quod iusto illum aliquid delectus accusantium
							facilis culpa{" "}
						</p>
						{/* <div className="flex justify-start items-center mt-12">
							<button className="hero-cta h-10 w-10 bg-white rounded-[50%] mr-4">
								<img
									src={IconWatchVideo}
									alt="Watch Video Icon"
								/>
							</button>
							<div className="text-xl font-semibold">
								Watch video
							</div>
						</div> */}
					</div>
					<div className="hero-left myBlur">
						<div>
							<Box
								component="form"
								sx={{
									p: 5,
									border: "1px solid #e0e0e0",
									borderRadius: 2,
									boxShadow: 1,
									
								}}
							>
								<Grid container spacing={2}>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label="Full Name"
											variant="outlined"
											required
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label="Mobile No"
											variant="outlined"
											required
										/>
									</Grid>
								</Grid>

								<Grid item xs={12} sx={{ mt: 2 }}>
									<TextField
										fullWidth
										label="Email"
										type="email"
										variant="outlined"
										required
									/>
								</Grid>

								<Grid container spacing={2} sx={{ mt: 2 }}>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label="Check In Date"
											type="date"
											variant="outlined"
											InputLabelProps={{ shrink: true }}
											required
										/>
									</Grid>
									<Grid item xs={12} sm={6}>
										<TextField
											fullWidth
											label="Check Out Date"
											type="date"
											variant="outlined"
											InputLabelProps={{ shrink: true }}
											required
										/>
									</Grid>
								</Grid>

								<Grid item xs={12} sx={{ mt: 2 }}>
									<FormControl
										fullWidth
										variant="outlined"
										required
									>
										<InputLabel id="adults-label">
											Adults
										</InputLabel>
										<Select
											labelId="adults-label"
											label="Adults"
										>
											<MenuItem value={1}>1</MenuItem>
											<MenuItem value={2}>2</MenuItem>
											<MenuItem value={3}>3</MenuItem>
											<MenuItem value={4}>4+</MenuItem>
										</Select>
									</FormControl>
								</Grid>

								<Grid item xs={12} sx={{ mt: 2 }}>
									<TextField
										label="Message"
										multiline
										rows={4}
										fullWidth
										variant="outlined"
										required
									/>
								</Grid>

								<Grid item xs={4} sx={{ mt: 3 }}>
									<Button
										variant="contained"
										size="large"
										fullWidth
									>
										Reserve Now
									</Button>
								</Grid>
							</Box>
						</div>
					</div>
				</div>
				{/*<div className="absolute right-0 left-0 mx-auto max-md:bottom-11 xl:bottom-11 xl:w-4/5 ">
					 <div className="hero-option relative bg-red-500 rounded-[280px] flex justify-between max-md:flex-col max-md:rounded-3xl max-md:pt-6">
						<div className="flex justify-between p-6 w-4/5 pl-8 z-1 max-md:flex-col max-md:w-full max-md:gap-2">
							<div className="hero-location flex justify-start w-1/5 max-md:w-full">
								<div>
									<img
										src={IconLocation}
										className="mt-1 mr-2"
										alt="Location Icon"
									/>
								</div>
								<div className="max-md:w-full">
									<div className="lg:text-xl ">Location</div>
									<div className="text-sm text-[#555555]">
										<Select
											id="location-selector"
											inputId="location-selector"
											className="basic-single"
											classNamePrefix="select"
											defaultValue={countryOptions[0]}
											isDisabled={false}
											isLoading={false}
											isClearable={true}
											isSearchable={true}
											name="color"
											options={countryOptions}
											onChange={(choice) =>
												setLocation(choice)
											}
										/>
									</div>
								</div>
							</div>
							<div className="vertical-line"></div>
							<div className="hero-checkin flex justify-start w-1/5 max-md:w-full">
								<div>
									<img
										src={IconCheckinout}
										className="mt-1 mr-5 max-md:mr-2"
										alt="CheckIn Icon"
									/>
								</div>
								<div className="max-md:w-full">
									<div className="lg:text-xl">Check In</div>
									<div className="text-sm mt-[6px] text-[#555555]">
										<DatePicker
											selected={checkInDate}
											onChange={(date) =>
												setCheckInDate(date)
											}
										/>
									</div>
								</div>
							</div>
							<div className="vertical-line"></div>
							<div className="hero-checkout flex justify-start w-1/5 max-md:w-full">
								<div>
									<img
										src={IconCheckinout}
										className="mt-1 mr-5 max-md:mr-2"
										alt="CheckOut Icon"
									/>
								</div>
								<div className="max-md:w-full">
									<div className="lg:text-xl ">Check Out</div>
									<div className="text-sm mt-[6px] text-[#555555]">
										<DatePicker
											selected={checkOutDate}
											onChange={(date) =>
												setCheckOutDate(date)
											}
										/>
									</div>
								</div>
							</div>
							<div className="vertical-line"></div>
							<div className="hero-roomsfor flex justify-start w-1/5 max-md:w-full">
								<div>
									<img
										src={IconPerson}
										className="mt-1 mr-2"
										alt="Rooms For Icon"
									/>
								</div>
								<div className="max-md:w-full">
									<div className="lg:text-xl">Rooms for</div>
									<div className="text-sm text-[#555555]">
										<Select
											id="room-selector"
											inputId="room-selector"
											className="basic-single"
											classNamePrefix="select"
											defaultValue={roomOptions[0]}
											isDisabled={false}
											isLoading={false}
											isClearable={true}
											isSearchable={true}
											name="color"
											options={roomOptions}
											onChange={(choice) =>
												setRoomFor(choice)
											}
										/>
									</div>
								</div>
							</div>
						</div>
						<div
							className="hero-search flex justify-start relative z-3 max-md:justify-center max-md:mb-6"
							onClick={onSearchButtonClick}
						>
							<Button addClass={"searchBtn"}>
								<img
									src={IconSearch}
									className="mr-2"
									alt="Search Icon"
								/>
								Search
							</Button>
						</div>
					</div> 
				</div>*/}
			</div>
		</>
	);
};

export default HeroSection;
