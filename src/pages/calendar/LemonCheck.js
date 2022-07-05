import React from "react";
import { Checkbox } from '@mui/material';
import {FaRegLemon} from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";



const label = { inputProps: { 'aria-label': 'Checkbox demo' }};

export default function LemonCheck(props) {
    return (
        <div className="lemonbox">
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}
            checkedIcon={<FaLemon color="#FFCC00" size="20px"/>}/> 종합비타민&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}
            checkedIcon={<FaLemon color="#333366" size="20px"/>}/> 프로바이오틱스<br/>
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}
            checkedIcon={<FaLemon color="#336600" size="20px"/>}/> 루테인&오메가3
        </div>
    )
}