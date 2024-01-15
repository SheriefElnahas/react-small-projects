import { Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
// Pages

import Home from './pages/Home';
import Signup from './pages/Signup';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
 
    </div>
  );
}

export default App;
