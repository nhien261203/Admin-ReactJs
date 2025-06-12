
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer'
import ListCard from './components/ListCard/ListCard';
import MainContent from './components/Main/MainContent';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <ListCard />
        <MainContent />
        <Footer />
      </div>
    </>
  )
}

export default App
