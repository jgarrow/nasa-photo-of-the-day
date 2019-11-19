import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

import Apod from "./components/apod";
import Pagination from "./components/pagination";

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [apodData, setApodData] = useState({});
  const [apodDate, setApodDate] = useState("");
  
  // get yesterday's date
  let yesterday = new Date();
  yesterday.setDate(currentDate.getDate() - 1);
  // console.log('Yesterday: ', yesterday);

  //  format date to YYYY-MM-DD
  function formatDate(dateObject) {
    let day = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();
    let formattedDate = "";

    if (day.length < 2) {
      day = "0".concat(day);
    }

    if (month.length < 2) {
      month = "0".concat(month);
    }

    formattedDate = `${year}-${month}-${day}`;

    return formattedDate;    
  }

  console.log('Yesterday\'s date: ', formatDate(yesterday));

  // string to add to end of API url --> &date=YYYY-MM-DD
  let apiDate = "&date=".concat(formatDate(yesterday));
  console.log('apiDate: ', apiDate);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=ITUHEmrHUbMkITyMyrkzMglZPFMp9b3c1vVX2LAJ${apodDate}`
      )
      .then(response => {
        setApodData(response.data);
        console.log(response.data);
      })
      .catch(error => console.log(`There was an error: ${error}`));
  }, [apodDate]);

  return (
    <div className="App">
      {apodData === {} ? <h3>Loading...</h3> : <Apod data={apodData} />}
      <div className="buttons">
        <button onClick={() => {
          setApodDate(apiDate);
          setCurrentDate(yesterday);
        }}>← Yesterday</button>
      </div>
    </div>
  );
}

export default App;
