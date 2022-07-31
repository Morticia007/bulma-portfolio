import {  Routes, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import WIF from './WIF';
import ERE from './ERE';

import Contact from './Contact';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='wif' element={<WIF />} />
        <Route path='ere' element={<ERE />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
