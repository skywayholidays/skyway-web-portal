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

const MainApp = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname === '/signup' || location.pathname === '/login';

  return (
    <>
      
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

        <Route path="/reservation" element={
          <>
            <ReservationForm />
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
