import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import AboutMe from './routes/about-me/about-me.component';
import Portfolio from './routes/portfolio/portfolio.component';
import ContactMe from './routes/contact-me/contact-me.component';
import NavBar from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact-me' element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
