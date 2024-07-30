// src/App.jsx
import "./App.css";
// import {images} from "./assets";
import backgroundImage from "./assets/background-image.png";
import logo from "./assets/discord-logo.png";
import moreOptions from "./assets/more-options.png";

const images = [logo, moreOptions, backgroundImage];
function App() {
  return (
    <div className="Discord App">
      <div>
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div>
        <img className="more-options" src={moreOptions} alt="more-options" />
      </div>
      <div className="text">
        <h1>IMAGINE A PLACE...</h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a
          worldwide art community. Where just you and a handful of friends can
          spend time together. A place that makes it easy to talk every day and
          hang out more often.
        </p>
      </div>
      <div className="button1">
        <button className="button" type="button">
          Download for Mac
        </button>
      </div>
      <div className="button2">
        <button type="button">Open Discord on your browser</button>
      </div>
      <div>
        <img
          className="background-image"
          src={backgroundImage}
          alt="background-image"
        />
      </div>
    </div>
  );
}

export default App;
