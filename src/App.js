import Body from './presenters/BodyPresenter';
import React from 'react';
import Header from './presenters/HeaderPresenter';
import './services/api_client';


function App() {

    return (
      <div className="App">
          <Header/>
          <Body/>
      </div >
    );
}

export default App;
