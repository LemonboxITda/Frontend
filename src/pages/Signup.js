import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
    .detail-text {
        font-size: 14px;
        text-align: right;
    }
`

const Signup = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        loginId: "",
        password: "",
        nickname: "",
    });
    const [confirmPW, setConfirmPW] = useState("");
    const [idCheck, setIdCheck] = useState(null);
    const [nameCheck, setNameCheck] = useState(null);
    const [idCheckMsg, setIdCheckMsg] = useState('');
    const [nameCheckMsg, setNameCheckMsg] = useState('');

    const config = {
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
        },
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        
        if (idCheck !== 200 
            || nameCheck !== 200
            || userData.password !== confirmPW) {
            alert('입력칸을 모두 작성하고 체크를 완료해주세요.');
        } else {
            // postAPI 회원가입 
            await axios.post(
                "http://localhost:8080/auth/signup",
                userData,
                config
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        navigate("/login"); // 회원가입 성공 시 로그인창으로 이동
                    }
                })
                .catch((e) => {
                    console.log(e);
                    alert('회원가입에 실패하였습니다.');
                });
        }
    }

    const clickCheckBtn = async (c) => {
        if (c === 'id') {
            // id 중복체크 getAPI
            await axios.get(
                `http://localhost:8080/auth/check/id?loginId=${userData.loginId}`,
                config
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        setIdCheck(200);
                    } 
                })
                .catch((e) => {
                    setIdCheck(e.response.status);
                    // console.log(e.response.status);
                });
        } else {
            // nickname 중복체크 getAPI
            await axios.get(
                `http://localhost:8080/auth/check/nickname?nickname=${userData.nickname}`,
                config
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200) {
                        setNameCheck(200);
                    } 
                })
                .catch((e) => {
                    setNameCheck(e.response.status);
                    // console.log(e.response.status);
                });
        }
    }

    useEffect(() => {
        if (idCheck === 200) {
            setIdCheckMsg('사용가능한 ID입니다.');
        } else if (idCheck === 401) {
            setIdCheckMsg('ID 형식이 올바르지 않습니다.');
        } else if (idCheck === 409) {
            setIdCheckMsg('이미 사용중인 ID입니다. 다른 ID을 입력해주세요.');
        }
        if (nameCheck === 200) {
            setNameCheckMsg('사용가능한 닉네임입니다.');
        } else if (nameCheck === 401) {
            setNameCheckMsg('닉네임 형식이 올바르지 않습니다.');
        } else if (nameCheck === 409) {
            setNameCheckMsg('이미 사용중인 닉네임입니다. 다른 닉네임을 입력해주세요.');
        }
    }, [idCheck, nameCheck])

    return (
        <Wrapper>
            <h3 style={{ margin: '50px 0' }}>회원가입</h3>

            <form class="container col-lg-4 col-sm-6 col-10" onSubmit={submitHandler}>
                <div class="row justify-content-center" style={{ marginRight: '0' }}>
                    <div class="form-outline mb-4 col-10">
                        <input type="text" class="form-control" placeholder="아이디"
                            onChange={(e) => {setUserData({...userData, loginId: e.target.value})}} />
                    </div>
                    <button
                        type="button" class="btn btn-secondary btn-block mb-4 col-2"
                        style={{ fontSize: '12px', whiteSpace: 'nowrap' }}
                        onClick={() => clickCheckBtn('id')}>
                        check
                    </button>
                </div>
                {
                    idCheck !== null && 
                    <p className="detail-text">{idCheckMsg}</p>
                }
                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" class="form-control" placeholder="비밀번호"
                            onChange={(e) => setUserData({ ...userData, password: e.target.value})} />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" class="form-control" placeholder="비밀번호 확인" 
                            onChange={(e) => setConfirmPW(e.target.value)} />
                    </div>
                </div>
                {
                    confirmPW !== "" && (
                        confirmPW === userData.password ? (
                            <p className="detail-text">비밀번호가 일치합니다.</p>
                        ) : (
                            <p className="detail-text">비밀번호가 일치하지 않습니다.</p>
                        )
                    )
                }

                <div class="row justify-content-center" style={{ marginRight: '0' }}>
                    <div class="form-outline mb-4 col-10">
                        <input type="text" class="form-control" placeholder="닉네임" 
                            onChange={(e) => setUserData({ ...userData, nickname: e.target.value})} />
                    </div>
                    <button
                        type="button" class="btn btn-secondary btn-block mb-4 col-2"
                        style={{ fontSize: '12px', whiteSpace: 'nowrap' }}
                        onClick={() => clickCheckBtn('nickname')}>
                        check
                    </button>
                </div>
                {
                    nameCheck !== null && 
                    <p className="detail-text">{nameCheckMsg}</p>
                }

                <button type="submit" class="btn btn-primary btn-block mb-4 col-12">
                    회원가입
                </button>
            </form>
        </Wrapper>
    )
}

export default Signup;