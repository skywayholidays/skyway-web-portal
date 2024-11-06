// ItineraryTab.jsx
import React from 'react';
import ItineraryItem from '../Thailand/ItineraryItem';

const MalItineraryTab = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <ItineraryItem day="1" title="Arrival Maldives" description="Arrive at Male airport and proceed for your transfer to the hotel. Rest of the day free for leisure. Overnight in Maldives" />

            <ItineraryItem day="2" title="Maldives – Day at leisure" description="Today you have the entire day at leisure and explore and enjoy, the resort activities on your own. Overnight in Maldives." />

            <ItineraryItem day="3" title=" Maldives – Day at leisure" description="Today you have the entire day at leisure. Overnight at Maldives Optional: You can enjoy various water sports activities like Wind Surfing, Water Skiing, Kayaking, Parasailing etc. at an additional cost" />

            <ItineraryItem day="4" title=" Maldives – Departure" description="Holiday Concludes. Let’s stay in touch on Facebook / email and meet again on another memorable Holiday. See you soon!" />
            {/* Add more ItineraryItem components as needed */}
        </div>
    );
};

export default MalItineraryTab;
