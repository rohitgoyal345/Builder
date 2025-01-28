
import './App.css';

// bootstrap import link
import 'bootstrap-icons/font/bootstrap-icons.css';


// aos link

import 'aos/dist/aos.css';

// Components
import Navbar from "./components/Navbar.js";

// pages
import Banner from "./Pages/Banner.js";
import Quality from './Pages/Quality.js';
import About from './Pages/About.js';
import Countdown from './Pages/Countdown.js';

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='App'>
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route excat path="/" element={<Banner />} />
            <Route path="/" element={<Quality />} />
            <Route path="/" element={<About />} />
            <Route path="/" element={<Countdown />} />
          </Routes>
        </main>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
