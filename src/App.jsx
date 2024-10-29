import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, HeroSection, FacilitiesSection, LocationSection, FooterSection, HistorySection} from './components';
import ReservationForm from './components/ReservationForm';
import Internationals from './components/Internationals';
import IndiaImage from './components/IndiaImage';
import Tagline from './components/Tagline';

const MainApp = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      
      <Navbar isAuthRoute={isAuthRoute} />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <Internationals/>
            <IndiaImage/>
            <Tagline/>
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
