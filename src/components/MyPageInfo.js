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

    .info-title {
        font-size: 20px;
    }

    .info-title-nickname {
        font-size: 24px;
        font-weight: 600;
    }

    @media (max-width: 576px) {
        .info-title {
            font-size: 14px;
        }
        .info-title-nickname {
            font-size: 20px;
        }
    }
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
                    // console.log('GET Info:', status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setNickname(data.nickname);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getInfo();
    }, [authContext.state.token, modalOpen])

    return (
        <>
        <Wrapper>
            <div>
                <span class="info-title">안녕하세요<br /></span>
                <span class="info-title-nickname">{nickname}</span>님!
            </div>
            <div style={{ fontSize: '14px', color: Colors.gray1, cursor: 'pointer' }} onClick={openModal}>정보수정</div>
            
        </Wrapper>
        <ModalInfo open={modalOpen} close={closeModal} header={"정보수정"} nickname={nickname} />
        </>
    )
}

export default MyPageInfo;