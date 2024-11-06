import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Hero, FooterSection, HistorySection} from './components';
import ReservationForm from './components/ReservationForm';
import Internationals from './components/Internationals';
import IndiaImage from './components/IndiaImage';
import Tagline from './components/Tagline';
import Incrementor from './components/Incrementor';
import ContactUs from './components/Contact';
import Location from './components/LocationSection';
import Quote from './components/Quote';
import Thailand from './components/Tours/Thailand/Thailand';
import Bali from './components/Tours/Bali/Bali';
import Dubai from './components/Tours/Dubai/Dubai';
import India from './components/Tours/India/India';
import Malaysia from './components/Tours/Malaysia/Malaysia';
import Maldivs from './components/Tours/Maldivs/Maldivs';
import ContactInfoBar from './components/ContactInfoBar';

const MainApp = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      <ContactInfoBar/>
      <Navbar isAuthRoute={isAuthRoute} />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Internationals/>
            <IndiaImage/>
            <Tagline/>
            <Incrementor/>
            <Quote/>
           <Location/>
          </>
        } />

        <Route path="/about" element={<HistorySection />} />

        <Route path="/thailand" element={
          <>
            <Thailand/>
          </>
        } />
        <Route path="/bali" element={
          <>
            <Bali/>
          </>
        } />
        <Route path="/dubai" element={
          <>
            <Dubai/>
          </>
        } />
        <Route path="/india" element={
          <>
            <India/>
          </>
        } />
        <Route path="/malaysia" element={
          <>
            <Malaysia/>
          </>
        } />
        <Route path="/maldivs" element={
          <>
            <Maldivs/>
          </>
        } />
        <Route path="/contact" element=
        {<>
        <ContactUs/>
        <Location/>
        </>
        } />
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
