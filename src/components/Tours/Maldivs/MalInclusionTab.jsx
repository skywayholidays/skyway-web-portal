import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const inclusions = [
    " 03 Nights Accommodation",
    " Welcome drink on arrival is included",
    " Speed Boat Transfer",
    " 03 Breakfast",
    " 03 Lunch",
    " 03 Dinner",
    " Includes return airport transfers from Male' international airport by SPEED BOAT",
    "The above rate is valid for stay",
    " The minimum length of stay is 3 nights",
    " All local transfers (Airport – Hotel – Airport)"
];

const exclusions = [
    "Airfare",
    "Visa On-arrival",
    "Travel Insurance",
    " Goods & Service Tax",
    " Anything not mentioned in package Inclusions",
    " Applicable Peak Season, Christmas, New year surcharge."
];

const MalInclusionsTab = () => {
    return (
        <div>
            {/* Inclusions Section */}
            <div className="bg-gray-800 text-white py-2 px-4 rounded-t-md mb-2">
                <h3 className="text-lg font-semibold">Inclusions</h3>
            </div>
            <ul className="bg-gray-100 p-4 rounded-b-md space-y-2">
                {inclusions.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-800">
                        <CheckCircleIcon className="text-green_1 mr-2" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>

            {/* Exclusions Section */}
            <div className="bg-gray-800 text-white py-2 px-4 rounded-t-md mt-6 mb-2">
                <h3 className="text-lg font-semibold">Exclusions</h3>
            </div>
            <ul className="bg-gray-100 p-4 rounded-b-md space-y-2">
                {exclusions.map((item, index) => (
                    <li key={index} className="flex items-center text-gray-800">
                        <CheckCircleIcon className="text-green_1 mr-2" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>


            {/* Important Section */}
            <div className="bg-gray-800 text-white py-2 px-4 rounded-t-md mt-6 mb-2">
                <h3 className="text-lg font-semibold">Important Information</h3>
            </div>
            <ul className="bg-gray-100 p-4 rounded-b-md space-y-2">
                    <li className="flex items-center text-gray-800">
                        <CheckCircleIcon className="text-green_1 mr-2" />
                        <span> Rates are not valid during peak periods, Christmas, New Year and Festival periods.</span>
                    </li>
               
            </ul>

        </div>
    );
};

export default MalInclusionsTab;
