import Home from './Home';

import {  Routes, Route } from 'react-router-dom';
import About from './About';
import Work from './Work';
import Contact from './Contact';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='work' element={<Work />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
