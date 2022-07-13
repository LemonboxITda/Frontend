import React, { useState, useEffect } from "react";
import "./styles.css";
import buildCalendar from "./build";
import dayStyles from "./Style";
import Header from "./header"
import SelectAll from "./LemonCheck";
import { FaRegLemon } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";
import moment from "moment";
import { Checkbox, Select } from '@mui/material';




export default function Calendar({ value, onChange}) {
    const [calendar, setCalendar] = useState([]);

    this.selectAll = new SelectAll({
        info : this.data
    })


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
        <SelectAll/>
        </div>
       </div>
    </div>)
}