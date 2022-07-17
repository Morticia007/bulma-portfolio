import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';

import {  Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
