import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import NoMatch from './pages/NotMatch';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/" element={<TodoContainer />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </>
);

export default App;
