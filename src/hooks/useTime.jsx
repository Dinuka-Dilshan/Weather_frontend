import { useEffect, useState } from "react";

import {getMonth} from '../Utill/Utill';

const Time = () => {
  const [time, setTime] = useState({hours:'',seconds:'',minutes:'',amPm:''});
  const [date, setDate] = useState("");

  useEffect(() => {
    const day = new Date().getDate();
    const month = getMonth(new Date().getMonth());
    const year = new Date().getFullYear();

    setDate({day,month,year});
    
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      let hours = new Date().getHours();

      const amPm = hours<12?'AM':'PM';
      hours = hours > 12 ? `${hours - 12}` : hours;
      hours = hours < 10 ? `0${hours}` : hours;

      let minutes = new Date().getMinutes();
      minutes = minutes < 10 ? `0${minutes}` : minutes;

      let seconds = new Date().getSeconds();
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      setTime({hours,seconds,minutes,amPm});
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return {
    time,
    date
  }
};

export default Time;
