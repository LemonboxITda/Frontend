import React, { useState, createContext, useReducer } from "react";
import moment from "moment";
import Calendar from "./calendar/index";
export const CalendarContext = createContext();

export default function Pages() {
    const [value, setValue] = useState(moment());

    const reducerCalendar = (state, action) => {
        switch (action.type) {
            case "checkAll1day":
                return {
                    check: true,
                };
            case "none":
                return {
                    check: false,
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducerCalendar, {
        check: false,
    })

    return (
        <CalendarContext.Provider value={{ state, dispatch }}>
            <Calendar value={value} onChange={setValue}/>
        </CalendarContext.Provider>
    )
}
