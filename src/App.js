import Body from './presenters/BodyPresenter';
import React, {useState, createContext} from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Summary from './presenters/SummaryPresenter';
import Header from './presenters/HeaderPresenter';

export const ThemeContext = createContext(null);

function App() {

  const[theme, setTheme] = useState("light");

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
              <Route path="/summary/:index" element={<Summary/>}></Route>
              <Route path="*" element={<Body/>}></Route> 
            </Routes>
          </Router>
        </div >
      </ThemeContext.Provider>
    );
}

export default App