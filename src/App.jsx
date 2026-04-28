import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Design1 from './components/designs/Design1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Design1 />} />
      </Routes>
    </Router>
  );
}

export default App;