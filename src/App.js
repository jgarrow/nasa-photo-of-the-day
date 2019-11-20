import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Apod from "./components/apod";
import Pagination from "./components/pagination";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [apodData, setApodData] = useState({});
  const [apodDate, setApodDate] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=ITUHEmrHUbMkITyMyrkzMglZPFMp9b3c1vVX2LAJ${apodDate}`
      )
      .then(response => {
        setApodData(response.data);
      })
      .catch(error => console.log(`There was an error: ${error}`));
  }, [apodDate]);

  return (
    <div className="App">
      {apodData === {} ? <h3>Loading...</h3> : <Apod data={apodData} />}
      <Pagination 
        currentDate={currentDate}
        setApodDate={setApodDate}
        setCurrentDate={setCurrentDate}
      />
    </div>
  );
}

export default App;
