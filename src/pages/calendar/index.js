import React, { useState, useEffect } from "react";
import "./styles.css";
import buildCalendar from "./build";
import dayStyles from "./Style";
import Header from "./header"
import { FaRegLemon } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";
import moment from "moment";
import { Checkbox} from '@mui/material';
import LemonCheck from "./LemonCheck";
import axios from "axios";




export default function Calendar({ value, onChange}) {
    const [calendar, setCalendar] = useState([]);

    console.log(moment(value).format("YYYY-MM-DD"));

    useEffect(() => {
    setCalendar(buildCalendar(value));
    }, [value]);

    
    return (<div className="calendar">
       <Header value={value} setValue={onChange}/>
       <div className="body">
        <div className="day-names">
            {
                ["S", "M", "T", "W", "T", "F", "S" ].map((d) => (<div className="week">{d}</div>))}
        </div>
        
        {calendar.map(week => <div> 
                {week.map(day => (<div className="day" onClick={() => onChange(day)}>
                        <div className={dayStyles(day, value)}>
                        <Checkbox icon={<FaRegLemon size="20px"/>} checkedIcon={<FaLemon color="#D3D3D3" size="20px"/>}/><br/>
                        {day.format("D").toString()}
                        </div>
                    </div>))
                    
                }
            </div>)} 
            <div><br/>
        <TbCheckbox size="30px"/> {moment(value).format("YYYY년 MM월 DD일 복용한 영양제 기록")} 
        {LemonCheck()}
        </div>
       </div>
    </div>)
}


axios({
    method: 'get',
    url: `${process.env.REACT_APP_BACK_BASE_URL}/pill?startedAt=2022-07-01&endedAt=2022-07-07`,
    responseType: 'json'
  })
    .then(function (response) {
      console.log(response.data);
    });

axios({
        method: 'get',
        url: `${process.env.REACT_APP_BACK_BASE_URL}/pill/date/2022-07-12`,
        responseType: 'json'
      })
        .then(function (response) {
          console.log(response.data);
        });


