import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Header/Navigation.jsx';
import Home from './components/Pages/Home.jsx';
import Products from './components/Pages/Products.jsx';
import BackToTopButton from './components/BackToTopButton.jsx';
import Footer from './components/Footer/Footer.jsx';
import Login from './components/Pages/Login.jsx';
import Signup from './components/Pages/Signup.jsx';
import About from './components/Pages/About.jsx';
import './App.css'

function App() {

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <main>
        {/* <BackToTopButton /> */}
        <Footer />
      </main>
    </>
  )
}

export default App
