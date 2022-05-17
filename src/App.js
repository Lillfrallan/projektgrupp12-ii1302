import Body from './presenters/BodyPresenter';
import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SummaryPage from './presenters/SummaryPagePresenter';
import Header from './presenters/HeaderPresenter';
import '../src/views/css/App.css'
import CameraPage from './presenters/CameraPagePresenter';
import CreatorPage from './presenters/CreatorPagePresenter';
import SignInPresenter from './presenters/SignInPresenter';
import SignUpPresenter from './presenters/SignUpPresenter'



export const ThemeContext = createContext(null);

/**
 * Helps to keep the state of the light/dark modes even after refreshes.
 * 
 * @param {String} defaultValue of the theme
 * @param {Integer} key 
 * @returns 
 */
const useStickyState = (defaultValue, key) => {
  const [value, setValue] = React.useState(() => {
    const stickyValue = window.localStorage.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

function App() {

  const [theme, setTheme] = useStickyState("light", "count");
  const [isLoggedIn, setIsLoggedIn] = useState();


    /**
     * Toggles between dark and light mode
     */
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark": "light"))
    }

    return (
      <ThemeContext.Provider value={{theme, toggleTheme, setIsLoggedIn, isLoggedIn}}>
        <div className="App" id={theme}>
            <Router>
              <Header toggleTheme={toggleTheme} theme={theme}/>
              <Routes>
                <Route path="/signInUser" element={<SignInPresenter/>}></Route>
                  <Route path="/signUpUser" element={<SignUpPresenter/>}></Route> 
                  <Route path="/home" element={<Body/>}></Route> 
                  <Route path="/summary/:blobs" element={<SummaryPage/>}></Route>
                  <Route path="/cameraPage" element={<CameraPage/>}></Route>
                  <Route path="/creatorPage" element={<CreatorPage/>}></Route>
                  <Route path="*" element={<SignInPresenter/>}></Route> 
              </Routes>
            </Router>
        </div >
      </ThemeContext.Provider>
    );
}

export default App