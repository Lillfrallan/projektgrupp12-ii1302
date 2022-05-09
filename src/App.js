import Body from './presenters/BodyPresenter';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SummaryPage from './presenters/SummaryPagePresenter';
import Header from './presenters/HeaderPresenter';
import '../src/views/css/App.css'
import CameraPage from './presenters/CameraPagePresenter';
import CreatorPage from './presenters/CreatorPagePresenter';


export const ThemeContext = createContext(null);

/**
 * Helps to keep the state of the light/dark modes even after refreshes.
 * 
 * @param {*} defaultValue of the theme
 * @param {*} key 
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

    /**
     * Toggles between dark and light mode
     */
    const toggleTheme = () => {
      setTheme((curr) => (curr === "light" ? "dark": "light"))
    }

    return (
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        <div className="App" id={theme}>
            <Router>
              <Header toggleTheme={toggleTheme} theme={theme}/>
              <Routes>
                <Route path="/" element={<Body/>}></Route> 
                <Route path="/summary/:blobs" element={<SummaryPage/>}></Route>
                <Route path="/cameraPage" element={<CameraPage/>}></Route>
                <Route path="/creatorPage" element={<CreatorPage/>}></Route>
                <Route path="*" element={<Body/>}></Route> 
              </Routes>
            </Router>
        </div >
      </ThemeContext.Provider>
    );
}

export default App