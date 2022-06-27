import styled from "styled-components";
import { Colors } from '../styles/ui';
import React, { useState, useEffect } from 'react';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MyPageInfo = () => {
    const [nickname, setNickname] = useState('홍길동');
    
    return (
        <Wrapper>
            <div>
                안녕하세요<br />
                <span style={{fontSize: '20px', fontWeight: 'bold'}}>{nickname}</span>님!
            </div>
            <div style={{fontSize: '14px', color: Colors.gray1, cursor: 'pointer'}}>정보수정</div>
        </Wrapper>
    )
}

export default MyPageInfo;