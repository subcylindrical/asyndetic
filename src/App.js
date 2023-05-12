import './App.css';

import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import AboutMe from './routes/about-me/about-me.component.jsx';
import Portfolio from './routes/portfolio/portfolio.component.jsx';
import NavBar from './components/nav-bar/nav-bar.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route path='/' element={<Home />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Route>
    </Routes>
  );
}

export default App;
