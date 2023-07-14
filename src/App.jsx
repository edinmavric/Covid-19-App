import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/HomePage';
import CovidStats from './components/CovidStats';
import CountryStats from './components/CountryStats';
import About from './components/AboutUs';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/covid-stats" element={<CovidStats />} />
        <Route path="/coutries-stats" element={<CountryStats />} />
        <Route path="/about-us" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
