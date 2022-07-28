import React from "react";

export default function CalendarHeader({value, setValue}) {

    function currMonthName(){
        return value.format("MMMM");
    }

    function currYear(){
        return value.format("YYYY");
    }

    function prevMonth() {
        return value.clone().subtract(1, "month");
    }

    function nextMonth() {
        return value.clone().add(1, "month");
    }

    return (
        <div className="header" class="d-flex justify-content-between" 
            style={{ width: '200px', margin: '20px auto', fontWeight: '600' }}>
            <div className="previous" style={{ cursor: 'pointer' }} onClick={() => setValue(prevMonth())}>
                {String.fromCharCode(171)}</div>
            <div className="current">{currMonthName()} {currYear()}</div>
            <div className="next" style={{ cursor: 'pointer' }} onClick={() => setValue(nextMonth())}>
                {String.fromCharCode(187)}</div>
        </div>

    )
}