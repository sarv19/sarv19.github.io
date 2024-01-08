import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="main-body">
      <div className="aura" style={{ left: cursorPosition.x, top: cursorPosition.y }}>
      </div>
      <Router>
          <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
          </Routes>
      </Router>
    </div>
  )
}

export default App
