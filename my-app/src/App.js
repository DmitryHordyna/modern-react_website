import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { HomePage } from '../src/containers/HomePage/index.jsx';
import { CustomerAccesPage } from '../src/containers/custumerAccessPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route
            exact
            path="/custumer/access"
            element={<CustomerAccesPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
