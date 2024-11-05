// ItineraryTab.jsx
import React from 'react';
import ItineraryItem from './ItineraryItem';

const ItineraryTab = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
            <ItineraryItem day="1" title="Bangkok – Pattaya" description="Arrive Bangkok and experience a warm welcome! After custom clearance, visa processing and baggage claim, our representative will meet you at the exit gate of the airport. Transfer to Pattaya by road (Enjoy outside views on your way to Pattaya). Check in at the hotel and relax (Standard check-in time 1400 - 1500 hours). Spend the evening at leisure. You may opt for Alcazar Show featuring a grand theatre with 1,200 seats and a state-of-the-art light and sound system. The Alcazar offers a unique blend of acting, stage design, costumes and glamour. Enjoy your sumptuous dinner at several Indian and local restaurants at your own cost. Overnight stay at hotel in Pattaya." />

            <ItineraryItem day="2" title="Pattaya (Coral Island Tour)" description="Arrive Bangkok and experience a warm welcome! After custom clearance, visa processing and baggage claim, our representative will meet you at the exit gate of the airport. Transfer to Pattaya by road (Enjoy outside views on your way to Pattaya). Check in at the hotel and relax (Standard check-in time 1400 - 1500 hours). Spend the evening at leisure. You may opt for Alcazar Show featuring a grand theatre with 1,200 seats and a state-of-the-art light and sound system. The Alcazar offers a unique blend of acting, stage design, costumes and glamour. Enjoy your sumptuous dinner at several Indian and local restaurants at your own cost. Overnight stay at hotel in Pattaya." />

            <ItineraryItem day="3" title="Pattaya – Bangkok" description="Enjoy a yummy breakfast. Pack your bags and check- out from the hotel. Today we return to Bangkok. Arrive and check-in at the hotel in Bangkok. Shopping at your own and may have the exciting visit to the local markets at your own cost. You can shop at Bangkok Shopping Malls , Chatuchak Market , Asiatique the Riverfront , Siam Square , After-Dark shopping , Pantip Plaza- Computer Shopping Mall , Pratunam and Chinatown Market. You may also opt for some optional evening sightseeing tour (on an extra cost) or go to explore the famous Bangkok nightlife. Later return to hotel and get some sleep. Stay overnight at the hotel in Bangkok." />

            <ItineraryItem day="4" title="Bangkok - Bangkok city tour" description="Today after breakfast proceed to the morning 03 hrs city and temple tour of Bangkok (A tour of historic and modern Krung Thep, or 'City of Angels' as Bangkok is known to the Thai people. The programme includes a visit to Wat Jetuphon (better known as Wat Pho), the oldest of the city temples situated opposite the Grand Palace. The temple is renowned as Thailand's oldest university and there are instructive murals illustrating the finer points of Thai massage which is still taught and practiced here. The highlight is the 46 metre long and 15 metre high statue of a reclining Buddha. Also included is a visit to Wat Traimitr, located near to Bangkok's main railway station. The temple houses a 5.5 ton gold Buddha, which was discovered when its plaster casing broke whilst being transported to its new home from the port area. The tour terminates via a visit to a jewelry retailer.) Afternoon comes back to the hotel and rest of the day is free for leisure. Stay overnight at hotel in Bangkok." />

            <ItineraryItem day="5" title=" Departure" description="Grab a good breakfast and check-out well in time to proceed to the airport and board the return flight. On your return, we would like to receive your feedback about the trip." />
            {/* Add more ItineraryItem components as needed */}
        </div>
    );
};

export default ItineraryTab;
