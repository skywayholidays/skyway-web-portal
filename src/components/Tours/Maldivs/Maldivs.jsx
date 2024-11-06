
import React, { useState } from 'react';
import PhotosTab from './MalPhotoTab';
import ItineraryTab from './MalItineraryTab';
import InclusionsTab from './MalInclusionTab';
import CancellationTab from '../Thailand/CancellationTab';
import EnquireForm from '../EnquireForm';

const Maldivs = () => {
    const [activeTab, setActiveTab] = useState("photos");

    return (

        <div className=' w-full flex justify-center max-w-7xl'>
        <div className="flex flex-col justify-center w-full py-10 md:px-20">
            <div className="mb-6">
                <h1 className="text-3xl font-bold">Explore Beauty of Maldivs</h1>
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
        <EnquireForm/>
        </div>
    );
};

export default Maldivs;
