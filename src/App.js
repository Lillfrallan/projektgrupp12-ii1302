import Body from './presenters/BodyPresenter';
import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SummaryPage from './presenters/SummaryPagePresenter';
import Header from './presenters/HeaderPresenter';
import '../src/views/css/App.css'
import CameraPage from './presenters/CameraPagePresenter';
import CreatorPage from './presenters/CreatorPagePresenter';
import SignInPresenter from './presenters/SignInPresenter';
import SignUpPresenter from './presenters/SignUpPresenter'
import ProtectedRoutes from './components/ProtectedRoutes';
import { useStickyState } from './components/ThemeContext';

function App() {

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [theme, setTheme] = useStickyState("light", "count");
  const Context = createContext(null);

  /**
   * Toggles between dark and light mode
   */
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"))
  }

    return (
      <Context.Provider value={{theme, toggleTheme, setIsLoggedIn, isLoggedIn}}>
        <div className="App" id={theme}>
            <Router>
              <Header toggleTheme={toggleTheme} theme={theme}/>
              <Routes>
                  <Route path="/signInUser" element={<SignInPresenter/>}></Route>
                  <Route path="/signUpUser" element={<SignUpPresenter/>}></Route> 
                  <Route path="*" element={<SignInPresenter/>}></Route> 
                  <Route path="/home" element={<Body/>}></Route> 
                  <Route path="/summary/:blobs" element={<SummaryPage/>}></Route>
                  <Route path="/cameraPage" element={<CameraPage/>}></Route>
                  <Route path="/creatorPage" element={<CreatorPage/>}></Route>
              </Routes>
            </Router>
        </div >
      </Context.Provider>
    );
}

export default App