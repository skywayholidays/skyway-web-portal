import React, { useState } from 'react';
import PhotosTab from './PhotosTab';
import ItineraryTab from './ItineraryTab';
import InclusionsTab from './InclusionsTab';
import CancellationTab from './CancellationTab';
import EnquireForm from '../EnquireForm';
import HelpSection from '../HelpSection';

const Thailand = () => {
    const [activeTab, setActiveTab] = useState("photos");

    return (
        <div className="w-full flex flex-col md:flex-row justify-center max-w-7xl px-4 md:px-8">
            {/* Left Section: Tabs and Content */}
            <div className="flex flex-col justify-center w-full md:w-2/3 py-6">
                {/* Heading */}
                <div className="mb-6">
                    <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">Best Of Thailand</h1>
                    <p className="text-xl md:text-2xl font-semibold text-black_3 text-center md:text-left">
                        4 Nights / 5 Days
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center md:justify-start space-x-2 md:space-x-4 mb-4">
                    <button
                        onClick={() => setActiveTab("photos")}
                        className={`py-2 px-4 ${activeTab === "photos" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"} rounded-md`}
                    >
                        PHOTOS
                    </button>
                    <button
                        onClick={() => setActiveTab("itinerary")}
                        className={`py-2 px-4 ${activeTab === "itinerary" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"} rounded-md`}
                    >
                        ITINERARY
                    </button>
                    <button
                        onClick={() => setActiveTab("inclusions")}
                        className={`py-2 px-4 ${activeTab === "inclusions" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"} rounded-md`}
                    >
                        INCLUSIONS & EXCLUSIONS
                    </button>
                    <button
                        onClick={() => setActiveTab("cancellation")}
                        className={`py-2 px-4 ${activeTab === "cancellation" ? "bg-green_1 text-white" : "bg-gray-200 text-gray-700"} rounded-md`}
                    >
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

            {/* Right Section: Enquire Form and Help Section */}
            <div className="flex flex-col w-full md:w-1/3 py-6">
                <EnquireForm />
                <HelpSection />
            </div>
        </div>
    );
};

export default Thailand;
