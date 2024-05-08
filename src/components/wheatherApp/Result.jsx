import React from "react";
import './wheatherapp.scss';

function Result({data}){
    console.log(data);
    return(
        <div className="container_result">
        <h1 className="city-name">{data.name}</h1>
        <h1 className="city-temp">{data.main.temp} C</h1>
        </div>
    )
}
export default Result;