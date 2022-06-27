import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const MyPageComList = () => {
    const params = useParams();
    const [opt, setOpt] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        setOpt(params.id);
    }, [params]);

    useEffect(() => {
        // GET lists

    }, [opt]);

    return (
        <div>
            {opt}
        </div>
    )
}

export default MyPageComList;