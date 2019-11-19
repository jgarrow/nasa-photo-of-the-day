import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Apod from "./components/apod";
import Pagination from "./components/pagination";

function App() {
  const [apodData, setApodData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=ITUHEmrHUbMkITyMyrkzMglZPFMp9b3c1vVX2LAJ")
      .then(response => {
        setApodData(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(`There was an error: ${error}`))
  }, []);

  return (
    <div className="App">
      <Apod data={apodData}/>
      {/* <Pagination /> */}
    </div>
  );
}

export default App;
