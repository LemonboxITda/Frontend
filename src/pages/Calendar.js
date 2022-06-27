import React, {useState} from "react";
import moment from "moment";
import Calendar from "./calendar/index"

export default function Pages() {
    const [value, setValue] = useState(moment());
    return <Calendar value={value} onChange={setValue}/>;
}