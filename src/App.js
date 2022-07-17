import Home from './Home';

import {  Routes, Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </>
  );
}

export default App;
