import { Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import WIF from './WIF';
import ERE from './ERE';
import Contact from './Contact';

import LinkedIn from './LinkedIn';
function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='wif' element={<WIF />} />
        <Route path='ere' element={<ERE />} />
        <Route path='linkedin' element={<LinkedIn />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
