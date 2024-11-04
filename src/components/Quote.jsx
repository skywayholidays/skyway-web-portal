import React from "react";

import indiaFlag from '../assets/images/indianflag.jpg';
import incrediblewhite from '../assets/images/incrediblewhite.jpg';

const Quote = () => {
    return (
        <div className="bg-green_1 flex flex-col w-full justify-center items-center my-4 px-2 md:px-0">
            <h1 className="text-white_1 font-semibold text-5xl pt-20">Get a Quote</h1>
            <p className="text-black_3 text-2xl pt-6 pb-16">For a journey that you have always dreamt of</p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-20 p-4 pb-20 w-full md:w-auto">
                <input
                    type="text"
                    placeholder="Contact Number or Email"
                    className="flex-1 bg-green_1 p-2 border border-green_2 rounded-md text-white placeholder-white w-full md:w-72"
                />
                <button className="px-4 py-2 bg-green_2 text-white font-semibold rounded-md">
                    SUBMIT
                </button>
            </div>

            <div className="flex flex-col md:flex-row w-full justify-between items-center px-2 md:px-10 gap-4">
                <div className="flex items-center gap-3 text-white font-bold">
                    #Made in India for the world
                    <img src={indiaFlag} alt="India Flag" className="w-8" />
                </div>
                <div>
                    <img src={incrediblewhite} alt="Incredible India" className="w-32 md:w-48" />
                </div>
            </div>
        </div>
    );
}

export default Quote;
