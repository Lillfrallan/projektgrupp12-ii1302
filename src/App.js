import './App.css';
import * as api_client from './services/api_client'
import React, {useState, useEffect, inputRef} from 'react';




function App() {

  // let imgs = [
  //   'https://ktodb.blob.core.windows.net/images/koi.jpg',
  // ];
  
  // const solveOnlineImg = () => (
  //   <div>
  //     <img src={imgs[0]}/>
  //     <img src={imgs[1]}/>
  //   </div>
  // )


  const [images, setImages] = useState([api_client.get_images]);

  
  return (
    <div className="App">
        <iframe title="hey" src="https://giphy.com/embed/NXp9HM6YeuS0U" width="480" height="319" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/computer-dancing-happy-NXp9HM6YeuS0U">via GIPHY</a></p>
          WEBSITE IS UP AND RUNNING
          {/* <img src={imgs[0]}/>
          <img src={imgs[1]}/> */}
          <img
          images={images}
          />
    </div >
  );
}

export default App;
