import "./App.css";
import GalleryItem from "./GalleryItem";
import Piesek from "../public/Piesek.jpg";
import { Component2 } from "./Components2";
import { Component3 } from "./Component3";
function App() {
  return (
    <>
      <h1></h1>
      <GalleryItem src={Piesek} />;
      <Component2>
        <p>Test</p>
      </Component2>
      <Component3 num={21} isTrue={true} />
    </>
  );
}

export default App;
