import './App.css'
import {images} from './db/images'

function App() {

  const index = Math.floor(Math.random() * images.length)
  const bgImage = images[index].image;

  return (
    <div className="app" style={{backgroundImage : `url("${bgImage}")`}}>
      <h2>Browser Extension</h2>
    </div>
  );
}

export default App;
