import styled from "styled-components";
import { Colors } from '../styles/ui';
import React, { useState, useEffect, useContext } from 'react';
import { getApi } from "../api";
import { AuthContext } from "../App";
import { ModalInfo } from '../components';


const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const MyPageInfo = () => {
    const authContext = useContext(AuthContext);
    const [nickname, setNickname] = useState('');

    // 모달 창
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        const getInfo = async () => {
            await getApi(
                {},
                `/user`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    console.log('GET Info:', status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setNickname(data.nickname);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getInfo();
    }, [modalOpen])

    return (
        <>
        <Wrapper>
            <div>
                안녕하세요<br />
                <span style={{ fontSize: '20px', fontWeight: 'bold' }}>{nickname}</span>님!
            </div>
            <div style={{ fontSize: '14px', color: Colors.gray1, cursor: 'pointer' }} onClick={openModal}>정보수정</div>
            {/* <button class="btn btn-outline-secondary btn-sm mb-4 modify-btn" onClick={openModal}>정보수정</button> */}
            
        </Wrapper>
        <ModalInfo open={modalOpen} close={closeModal} header={"정보수정"} nickname={nickname} />
        </>
    )
}

export default MyPageInfo;