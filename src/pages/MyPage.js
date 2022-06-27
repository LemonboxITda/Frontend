import { MyPageInfo, MyPageCom, MyPageSup } from "../components";
import styled from "styled-components";
import React, { useState } from 'react';

const Wrapper = styled.div`
    width: 50vw;
    margin: 0 auto;
`

const MyPage = () => {
    const [click, setClick] = useState(true);

    return (
        <Wrapper>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                <ul class="nav nav-pills mb-4">
                    <li class="nav-item">
                        <button onClick={() => setClick(true)} class={click ? "nav-link active" : "nav-link"} type="button">영양제</button>
                    </li>
                    <li class="nav-item">
                        <button onClick={() => setClick(false)} class={!click ? "nav-link active" : "nav-link"} type="button">커뮤니티</button>
                    </li>
                </ul>
            </div>
            <MyPageInfo />

            {click ? (
                <MyPageSup />
            ) : (
                <MyPageCom />
            )}
            
        </Wrapper>
    )
}

export default MyPage;