import Body from './presenters/BodyPresenter';
import React, { createContext } from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Summary from './presenters/SummaryPresenter';
import Header from './presenters/HeaderPresenter';
import '../src/views/css/Body.css'


export const ThemeContext = createContext(null);

function useStickyState(defaultValue, key) {
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
                <Route path="/summary/:blobs" element={<Summary/>}></Route>
                <Route path="*" element={<Body/>}></Route> 
              </Routes>
            </Router>
        </div >
      </ThemeContext.Provider>
    );
}

// /:blobType/:etag
//               /:accessTier/:accessTierInferred/:contentType/:leaseStatus
//               /:serverEncrypted/:datesAndTime

export default App