import './App.css';
import Footer from './common/Footer';
import Faqs from './components/home/Faqs';
import ResultsAi from './components/home/ResultsAi';
import Testimonials from './components/home/Testimonials';

function App() {
  return (
    <>
    <ResultsAi/>
    <Testimonials/>
      <Faqs/>
      <Footer/>
    </>
  );
}

export default App;
