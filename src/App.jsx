import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, HeroSection, FacilitiesSection, TestimonialSection, LocationSection, FooterSection, PopularHotelSection, HistorySection, Signup } from './components';
import ReservationForm from './components/ReservationForm';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={
          <>
            <HeroSection />
            <PopularHotelSection />
            <FacilitiesSection />
            <HistorySection />
            <TestimonialSection />
            <LocationSection />
          </>
        } />

        {/* Rooms Route */}
        <Route path="/rooms" element={
          <>
            <HeroSection /> {/* Add or replace with the Rooms section if needed */}
            <PopularHotelSection />
          </>
        } />

        {/* About Route */}
        <Route path="/about" element={<HistorySection />} />

        {/* Events Route */}
        <Route path="/events" element={
          <>
            <TestimonialSection />
            <FacilitiesSection />
          </>
        } />

        {/* Reservation Route */}
        <Route path="/reservation" element={
          <>
        <FacilitiesSection />
        <ReservationForm/>
        </>
        } />
        <Route path="/signup" element={<Signup />} />
        {/* Contact Route */}
        <Route path="/contact" element={<LocationSection />} />
      </Routes>
      <FooterSection />
    </Router>
  );
}

export default App;
