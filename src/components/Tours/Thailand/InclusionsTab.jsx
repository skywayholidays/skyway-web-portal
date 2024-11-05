// InclusionsTab.jsx
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const inclusions = [
    "02 nights in Bangkok",
    "02 nights in Pattaya",
    "Breakfast",
    "Alcazar Show with transfer",
    "Coral Island tour with lunch",
    "Bangkok city tour",
    "BKK Airport - PTY Hotel - BKK Hotel - BKK Airport transfer",
    "All tour & Transfer on SIC Basis"
];

const exclusions = [
    "Airfare",
    "Thailand Visa On-arrival",
    "Travel Insurance",
    " Goods & Service Tax",
    " Anything not mentioned in package Inclusions"
];

const InclusionsTab = () => {
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

export default InclusionsTab;
