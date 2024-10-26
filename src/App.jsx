import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Hero, FacilitiesSection, TestimonialSection, LocationSection, FooterSection, PopularHotelSection, HistorySection, Signup } from './components';
import ReservationForm from './components/ReservationForm';
import Login from './components/Login/Login';

const MainApp = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      {/* Pass isAuthRoute to Navbar to control button visibility */}
      <Navbar isAuthRoute={isAuthRoute} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <PopularHotelSection />
            <FacilitiesSection />
            <HistorySection />
            <TestimonialSection />
            <LocationSection />
          </>
        } />

        <Route path="/rooms" element={
          <>
            <Hero />
            <PopularHotelSection />
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
