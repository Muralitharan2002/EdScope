import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import ScrollTop from './Components/Body/ScrollTop';

function App() {
  return (
    <>
      <Header />
      <div id='Home-section'><Home /></div>
      <Body />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default App;
