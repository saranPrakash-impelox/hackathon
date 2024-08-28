
import './App.css';
import PagePreview from './Pages/PagePreview';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route exact path='' element={<PagePreview />} />
        </Routes>

      </Router>

    </div>
  );
}

export default App;
