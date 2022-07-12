import React from "react";
import { Checkbox } from '@mui/material';
import {FaRegLemon} from 'react-icons/fa';
import { FaLemon } from 'react-icons/fa';
import { TbCheckbox } from "react-icons/tb";


const label = { inputProps: { 'aria-label': 'Checkbox demo' }};

class SelectAll {
    data = null;
    info = null;
    constructor({ info }){
        const $afterDay = document.querySelector(".after")
        const $beforDay = document.querySelector(".before")
        this.$afterDay = $afterDay;
        this.$beforDay = $beforDay;

        this.$afterDay.addEventListener('click', (e) =>{
            this.Checkbox = e.target.textContent;
            <div className="lemonbox">
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}/> 종합비타민&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}/> 프로바이오틱스<br/>
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}/> 루테인&오메가3
            </div>
            this.setCheckbox(this.Checkbox)
        })

        this.$beforDay.addEventListener('click', (e) =>{
            this.Checkbox = e.target.textContent;
            <div className="lemonbox">
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}
            checkedIcon={<FaLemon color="#FFCC00" size="20px"/>}/> 종합비타민&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}
            checkedIcon={<FaLemon color="#333366" size="20px"/>}/> 프로바이오틱스<br/>
            <Checkbox {...label} icon={<FaRegLemon size="20px"/>}
            checkedIcon={<FaLemon color="#336600" size="20px"/>}/> 루테인&오메가3
            </div>
            this.setCheckbox(this.Checkbox)
        })

        this.info = info;
    }

    setCheckbox(nextData){
        this.Checkbox = nextData;
        console.log(nextData)
    }
    
    setState(nextData){
        this.data = nextData;
        this.render();
    }
    
}

export default SelectAll;