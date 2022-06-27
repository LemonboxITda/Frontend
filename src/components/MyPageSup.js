import styled from "styled-components";
import React, { useState, useEffect } from 'react';

const Wrapper = styled.div`
    margin-top: 40px;
    text-align: left;

    .title {
        font-weight: bold;
        margin: 30px 0;
    }
`

const MyPageSup = () => {
    // 영양제 이름, 남은 개수
    const [supInfo, setSupInfo] = useState({

    })

    return (
        <Wrapper>
            <h4 className='title'>영양제 정보</h4>
            <h5>내가 먹고 있는 영양제</h5>
            <button type="button" class="btn btn-secondary disabled">종합비타민</button>
            <button type="button" class="btn btn-outline-secondary disabled">종합비타민</button>

            <button type="button" class="btn btn-secondary disabled">프로바이오틱스</button>
            <button type="button" class="btn btn-outline-secondary disabled">프로바이오틱스</button>

            <button type="button" class="btn btn-secondary disabled">루테인 오메가3</button>
            <button type="button" class="btn btn-outline-secondary disabled">루테인 오메가3</button>

        </Wrapper>
    )
}

export default MyPageSup;