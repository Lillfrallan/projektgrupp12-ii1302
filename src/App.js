import Body from './presenters/BodyPresenter';
import React from 'react';
import Header from './presenters/HeaderPresenter';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {

    return (
      <div className="App">
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Body/>}></Route> 
          </Routes>
        </Router>
      </div >
    );
}

export default App