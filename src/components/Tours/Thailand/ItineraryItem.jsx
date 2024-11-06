import React from 'react';

const ItineraryItem = ({ day, title, description }) => {
    return (
        <div className="flex items-center mb-4">
            <div className="bg-green_1 text-white py-2 px-4 rounded-l-md font-bold">
                Day {day}:
            </div>
            <div className="bg-gray-100 py-2 px-4 rounded-r-md flex-1">
                <p className="font-semibold">{title}</p>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default ItineraryItem;
