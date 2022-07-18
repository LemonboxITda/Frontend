import React, {useEffect, useState} from "react";
import moment from "moment";
import Calendar from "./calendar/index"
import axios from "axios";

export default function Pages() {
    const [value, setValue] = useState(moment());
    return <Calendar value={value} onChange={setValue}/>;
}
