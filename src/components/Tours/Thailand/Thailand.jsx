// Thailand.jsx
import React, { useState } from 'react';
import PhotosTab from './PhotosTab';
import ItineraryTab from './ItineraryTab';
import InclusionsTab from './InclusionsTab';
import CancellationTab from './CancellationTab';

const Thailand = () => {
    const [activeTab, setActiveTab] = useState("photos");

    return (
        <div className="flex flex-col justify-center w-full py-10 px-4 md:px-20 lg:px-32">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Best Of Thailand</h1>
                <p className="text-2xl font-semibold text-black_3">4 Nights / 5 Days</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-4 mb-4">
                <button onClick={() => setActiveTab("photos")} className={`py-2 px-4 ${activeTab === "photos" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"}`}>
                    PHOTOS
                </button>
                <button onClick={() => setActiveTab("itinerary")} className={`py-2 px-4 ${activeTab === "itinerary" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"}`}>
                    ITINERARY
                </button>
                <button onClick={() => setActiveTab("inclusions")} className={`py-2 px-4 ${activeTab === "inclusions" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"}`}>
                    INCLUSIONS & EXCLUSIONS
                </button>
                <button onClick={() => setActiveTab("cancellation")} className={`py-2 px-4 ${activeTab === "cancellation" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"}`}>
                    CANCELLATION
                </button>
            </div>

            {/* Tab Content */}
            <div>
                {activeTab === "photos" && <PhotosTab />}
                {activeTab === "itinerary" && <ItineraryTab />}
                {activeTab === "inclusions" && <InclusionsTab />}
                {activeTab === "cancellation" && <CancellationTab />}
            </div>
        </div>
    );
};

export default Thailand;
