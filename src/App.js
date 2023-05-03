import React from 'react'

import { Routes, BrowserRouter as Router, Route} from 'react-router-dom'
import CarList from './components/CarList';
import ListPage from './components/ListPage';

function App() {
  return (

    <Router>
      <Routes>
        <Route path='/list' element={<ListPage/>} />
        <Route path='/*' element={<CarList/>} />
      </Routes>
    </Router>
  );
}

export default App;
