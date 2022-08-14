import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import buildCalendar from "./Make";
import Header from "./header"
import { FaRegLemon, FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";
import moment from "moment";
import { Checkbox } from '@mui/material';
import LemonCheck from "./LemonCheck";
import { AuthContext } from "../../App";
import { getApi } from '../../api';
import Alert from 'react-bootstrap/Alert'
import { CalendarContext } from "../Calendar";
import { ModalCalendar } from "../../components";

export default function Calendar({ value, onChange }) {
  const authContext = useContext(AuthContext);
  const calendarContext = useContext(CalendarContext);
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
          // console.log('GET all day pill', status, data);
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
    calendarContext.dispatch({
      type: "none",
      check: false,
  })
  }

  function checkAllDay(day) {  // 칠해질 날인지 아닌지 t/f 반환
    const dayData = resultList.filter(rl => rl.date === day.format("YYYY-MM-DD"))[0];
    if (dayData === undefined) {
      return false;
    } else {
      return dayData.isChecked;
    }
  }

  // 모달 창
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };
  const closeModal = () => {
      setModalOpen(false);
  };

  useEffect(() => {
    const modalCal = async () => {
      await getApi(
        {},
        `/supplement`,
        authContext.state.token
      )
        .then(({ status, data }) => {
          (data && 
            data.map((d, i) =>
              <div key={i}>
                {d.count < 10 && openModal()}
              </div>
          )) 
        })
        .catch((e) => {
          console.log(e);
        });
    }
    modalCal();
  }, [authContext.state.token]);


  // useEffect(() => {  // 특정 날짜의 영양제를 모두 복용했을 경우 다시 draw하여 바로 check 반영하기
  //   console.log('here', calendarContext.state.check)
  //   DrawCalendar();
  // }, [calendarContext.state.check])

  const DrawCalendar = () => {
    return (
      <>
        <div className="day-names">
          {
            ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (<div key={i} className="week">{d}</div>))}
        </div>
        {calendar.map((week, idx) =>
          <div key={idx}>
            {week.map((day, i) => (
              <div key={i} className="day" onClick={() => onClickDay(day)}>
                <div>
                  <Checkbox
                    checked={checkAllDay(day)}
                    icon={<FaRegLemon size="20px" />} checkedIcon={<FaLemon color="#D3D3D3" size="20px" />} /><br />
                  {day.format("D").toString()}
                </div>
              </div>))
            }
          </div>)}
      </>
    )
  }

  return (
    <Wrapper>
      <div className="calendar">
        <Header value={value} setValue={onChange} />
        <div className="body">
          <DrawCalendar />
          <div><br />
            <p>
              <TbCheckbox size="30px" />
              <span style={{ fontWeight: '600' }}>{selectDay}&nbsp;</span> 
              복용한 영양제 기록
            </p>
            <LemonCheck date={selectDay} />
          </div>
        </div>
      </div>
      <ModalCalendar open={modalOpen} close={closeModal} header={"영양제 재구매 알림"} />
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

  @media (max-width: 576px) {
    .calendar .day{
      width: calc(100% /8);
    }
    .calendar .week {
      width: calc(100% /8);
    }
  }

  .lemonButton {
    background-color: transparent;
    border: transparent;
  }
`