import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import styled from "styled-components";

import Apod from "./components/apod";
import Pagination from "./components/pagination";

const AtmosphereContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: -10;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
`

const Atmosphere = styled.div`
    position: absolute;
    display: block;
    top: 0; 
    bottom: 0;
    left: 0; 
    right: 0;
    width: 100%; 
    height: 100%;
    background-repeat: repeat;
    background-origin: top;
    background-position: center;
    z-index: ${props => props.stars ? "-1" : "0"};
    background-color: ${props => props.stars === true ? "#000" : "transparent"};
    background-image: ${props => props.stars === true ? "url('https://image.ibb.co/mjnygo/stars.png')" : "url('https://image.ibb.co/ir1DE8/twinkling.png')"};
    animation: ${props => props.stars === true ? "null" : "move-twinkle-back 200s linear infinite"};
`

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
        <>
            <AtmosphereContainer>
                <Atmosphere />
                <Atmosphere stars={true} />
            </AtmosphereContainer>
            <div className="App">
                {apodData === {} ? (
                    <h3>Loading...</h3>
                ) : (
                    <Apod data={apodData} currentDate={currentDate.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})}/>
                )}
                <Pagination
                    currentDate={currentDate}
                    setApodDate={setApodDate}
                    setCurrentDate={setCurrentDate}
                />
            </div>
        </>
    );
}

export default App;
