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
    // const [idCheck, setIdCheck] = useState(null);
    // const [nameCheck, setNameCheck] = useState(null);
    const [idCheck, setIdCheck] = useState(true);
    const [nameCheck, setNameCheck] = useState(true);

    const submitHandler = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
        };
        if (idCheck !== true || nameCheck !== true || userData.password !== confirmPW) {
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
                    } else {
                        alert('회원가입에 실패했습니다.');
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    const clickCheckBtn = (c) => {
        if (c === 'id') {
            // id 중복체크 getAPI
        } else {
            // nickname 중복체크 getAPI
        }
    }

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
                    idCheck !== null && (
                        idCheck ? (
                            <p className="detail-text">사용가능한 아이디입니다.</p>
                        ) : (
                            <p className="detail-text">이미 사용중인 아이디입니다. 다른 아이디를 입력해주세요.</p>
                        )
                    )
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
                    idCheck !== null && (
                        idCheck ? (
                            <p className="detail-text">사용가능한 닉네임입니다.</p>
                        ) : (
                            <p className="detail-text">이미 사용중인 닉네임입니다. 다른 닉네임을 입력해주세요.</p>
                        )
                    )
                }

                <button type="submit" class="btn btn-primary btn-block mb-4 col-12">
                    회원가입
                </button>
            </form>
        </Wrapper>
    )
}

export default Signup;