import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
function App() {
  return (
    <div >
      <Navbar />
      <Routes></Routes>
      <main>
        <h1>Finance Tracker</h1>
      </main>
    </div>
  );
}

export default App;
