import styled from "styled-components";
import { Colors } from '../styles/ui';
import React, { useState, useEffect, useContext } from 'react';
import { getApi } from "../api";
import { AuthContext } from "../App";


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MyPageInfo = () => {
    const authContext = useContext(AuthContext);

    const [nickname, setNickname] = useState('');

    useEffect(() => {
        const getInfo = async () => {
            await getApi(
                {},
                `/api`,  // 추후 변경
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    // console.log('status:', status);
                    if (status === 200) {
                        setNickname(data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getInfo();
    }, [])

    return (
        <Wrapper>
            <div>
                안녕하세요<br />
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{nickname}</span>님!
            </div>
            <div style={{ fontSize: '14px', color: Colors.gray1, cursor: 'pointer' }}>정보수정</div>
        </Wrapper>
    )
}

export default MyPageInfo;