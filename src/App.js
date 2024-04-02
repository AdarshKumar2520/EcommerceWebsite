
import { Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home/Home';
import { Products } from './Components/Products/Products';
import { Navbar } from './Components/Navbar/Navbar';
import { About } from './Components/About/About';
import { Contact } from './Components/ContactUs/Contact';
import { Footer } from './Components/Footer/Footer';

function App() {

  return (
    <div>

      < Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      <Footer />


    </div>
  );
}

export default App;
