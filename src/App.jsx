import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, HeroSection, FacilitiesSection, TestimonialSection, LocationSection, FooterSection, PopularHotelSection, HistorySection, Signup, Slider } from './components';
import ReservationForm from './components/ReservationForm';
import Login from './components/Login/Login';


const MainApp = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      
      <Navbar isAuthRoute={isAuthRoute} />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <HeroSection />
            <PopularHotelSection />
            <FacilitiesSection />
            <LocationSection />
          </>
        } />

        <Route path="/about" element={<HistorySection />} />

        <Route path="/reservation" element={
          <>
            <FacilitiesSection />
            <ReservationForm />
          </>
        } />
        <Route path="/contact" element={<LocationSection />} />
      </Routes>
        <FooterSection/>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <MainApp />
    </Router>
  );
};

export default App;
