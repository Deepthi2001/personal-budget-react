import logo from './logo.svg';
import './App.scss';
import AboutPage from './AboutPage/AboutPage';
import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";
import LoginPage from './LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Hero />
      <div className='mainContainer'>
        <Routes>
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
