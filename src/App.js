import logo from './logo.svg';
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import AboutMe from './routes/about-me/about-me.component.jsx';
import Portfolio from './routes/portfolio/portfolio.component.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about-me' element={<AboutMe />} />
      <Route path='/portfolio' element={<Portfolio />} />
    </Routes>
  );
}

export default App;
