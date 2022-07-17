import Home from './Home';

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
