import './App.css';
import BackToTop from './common/BackToTop';
import Footer from './common/Footer';
import Faqs from './components/home/Faqs';
import Hero from './components/home/Hero';
import Testimonials from './components/home/Testimonials';

function App() {
  return (
    <>
    <BackToTop/>
    <Hero/>
    <Testimonials/>
      <Faqs/>
      <Footer/>
    </>
  );
}

export default App;
