import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {
  Originals,
  action,
  comedy,
  horror,
  romance,
  documentaries,
} from "./url";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Rowpost from "./Components/RowPost/Rowpost";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={Originals} title="Netflix Originals" />
      <Rowpost url={action} title="Action" isSmall />
      <Rowpost url={comedy} title="Comedy" isSmall />
      <Rowpost url={romance} title="Romance" isSmall />
      <Rowpost url={horror} title="Horror" isSmall />
      <Rowpost url={documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
