import { Card, Fab } from "@mui/material";
import React from "react";
import {FaLocationArrow} from 'react-icons/fa';
import {BiTimeFive} from 'react-icons/bi';
import {BsFillCalendarDateFill} from 'react-icons/bs';
import useTime from '../hooks/useTime'

import "./Today.css";

export default function Today() {

  const {time,date} = useTime();


  return (
    <Card sx={{margin:'1rem',boxSizing:'border-box',borderRadius:'2rem',backgroundColor:'#19C3FB',color:'#E3F4FE'}}>
      <div style={{ display: "flex" }}>
        <img
          src="http://openweathermap.org/img/wn/10d@4x.png"
          alt=""
          className="today-img"
        />
        <div className="today-temperature">
          12 <sup>&#x2103;</sup>{" "}
        </div>
      </div>
      <div className="today-main">Clouds</div>
      <div className="today-description">scattered clouds</div>
      <div className="today-location"><FaLocationArrow/> AKURESSA, SRILANKA</div>
      <div className="today-time"><BiTimeFive/> {`${time.hours} : ${time.minutes} ${time.amPm}`}</div>
      <div className="today-date"><BsFillCalendarDateFill/> {`${date.day} ${date.month} ${date.year} `}</div>
    </Card>
  );
}
