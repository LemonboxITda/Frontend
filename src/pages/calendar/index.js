import React, { useState, useEffect, Component } from "react";
import "./styles.css";
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import buildCalendar from "./Build";
import dayStyles, {beforeToday} from "./Style";
import Header from "./Header"
import LemonCheck from "./LemonCheck";
import { FaRegLemon } from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";
import { Button } from "bootstrap";
import { Icon } from "@mui/material";
import moment from "moment";
import { Checkbox } from '@mui/material';
import { propTypes } from "react-bootstrap/esm/Image";


export default function Calendar({props, value, onChange}) {
    const [calendar, setCalendar] = useState([]);
  
        
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
                {week.map(day => (<div className="day" onClick={() => !beforeToday(day) && onChange(day)}>
                        <div className={dayStyles(day, value)}>
                            <FaRegLemon/><br/>
                        {day.format("D").toString()}
                        </div>
                    </div>))
                }
            </div>)
        }
        <div className="lemonClick"><br/>
        <TbCheckbox size="30px"/> {moment(value).format("YYYY년 MM월 DD일 복용한 영양제 기록")} 
        {LemonCheck(value)}
        </div>

       </div>
    </div>)
}