import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import buildCalendar from "./Build";
import dayStyles from "./Style";
import Header from "./header"
import { FaRegLemon, FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";
import moment from "moment";
import { Checkbox } from '@mui/material';
import LemonCheck from "./LemonCheck";
import { AuthContext } from "../../App";
import { getApi } from '../../api';


export default function Calendar({ value, onChange }) {
  const authContext = useContext(AuthContext);
  const [calendar, setCalendar] = useState([]);
  const [selectDay, setSelectDay] = useState(moment().format("YYYY-MM-DD"));
  const [resultList, setResultList] = useState([]);

  // console.log(moment(value).format("YYYY-MM-DD"));

  useEffect(() => {
    const getAllDayPill = async () => {
      await getApi(
        {},
        `/pill?startedAt=${value.startOf('month').format('YYYY-MM-DD')}&endedAt=${value.endOf('month').format('YYYY-MM-DD')}`,
        authContext.state.token
      )
        .then(({ status, data }) => {
          console.log('GET all day pill', status, data);
          if (status === 200 && data.statusCodeValue === undefined) {
            setResultList(data);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getAllDayPill();
  }, [authContext.state.token, value]);

  useEffect(() => {
    setCalendar(buildCalendar(value));
  }, [value]);

  const onClickDay = (day) => {
    onChange(day);
    setSelectDay(day.format("YYYY-MM-DD"));
  }

  function checkAllDay(day) {  // 칠해질 날인지 아닌지 t/f 반환
    const dayData = resultList.filter(rl => rl.date === day.format("YYYY-MM-DD"))[0];
    if (dayData === undefined) {
      return false;
    } else {
      return dayData.isChecked;
    }
  }

  return (
    <Wrapper>
      <div className="calendar">
        <Header value={value} setValue={onChange} />
        <div className="body">
          <div className="day-names">
            {
              ["S", "M", "T", "W", "T", "F", "S"].map((d) => (<div className="week">{d}</div>))}
          </div>

          {calendar.map(week => <div>
            {week.map(day => (<div className="day" onClick={() => onClickDay(day)}>
              <div>
                <Checkbox 
                  checked={checkAllDay(day)}
                  icon={<FaRegLemon size="20px" />} checkedIcon={<FaLemon color="#D3D3D3" size="20px" />} /><br />
                {day.format("D").toString()}
              </div>
            </div>))
            }
          </div>)}
          <div><br />
            <TbCheckbox size="30px" /> {moment(value).format("YYYY년 MM월 DD일 복용한 영양제 기록")}
            <LemonCheck date={selectDay} />
          </div>
        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
  .calendar .day{
    position: relative;
    width: calc(100% /14);
    height: 44px;
    display: inline-block;
    background-color: white;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    text-align: center;
    white-space: pre-wrap;
  }

  .calendar .week {
    position: relative;
    width: calc(100% / 14);
    height: 44px;
    display: inline-block;
    background-color: white;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    z-index: 1;
    text-align: center;
  }

  .lemonButton {
    background-color: transparent;
    border: transparent;
  }
`