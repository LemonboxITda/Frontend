import styled from "styled-components";
import React, { useEffect, useState } from 'react';

const Wrapper = styled.div`
    .detail-text {
        font-size: 14px;
        text-align: right;
    }
`

const Signup = () => {
    const [details, setDetails] = useState({
        id: "",
        password: "",
        password2: "",
        nickname: "",
    })
    const [idCheck, setIdCheck] = useState(null);
    const [nameCheck, setNameCheck] = useState(null);

    const clickSignupBtn = () => {
        if (idCheck !== true || nameCheck !== true || details.password !== details.password2) {
            alert('입력칸을 모두 작성하고 체크를 완료해주세요.');
        } else {
            // postAPI 회원가입 
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

            <form class="container col-lg-4 col-sm-6 col-10" >
                <div class="row justify-content-center" style={{ marginRight: '0' }}>
                    <div class="form-outline mb-4 col-10">
                        <input type="text" class="form-control" placeholder="아이디" />
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
                            onChange={(e) => setDetails({ ...details, password: e.target.value})} />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" class="form-control" placeholder="비밀번호 확인" 
                            onChange={(e) => setDetails({ ...details, password2: e.target.value})}/>
                    </div>
                </div>
                {
                    details.password2 !== "" && (
                        details.password2 === details.password ? (
                            <p className="detail-text">비밀번호가 일치합니다.</p>
                        ) : (
                            <p className="detail-text">비밀번호가 일치하지 않습니다.</p>
                        )
                    )
                }

                <div class="row justify-content-center" style={{ marginRight: '0' }}>
                    <div class="form-outline mb-4 col-10">
                        <input type="text" class="form-control" placeholder="닉네임" />
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

                <button type="button" class="btn btn-primary btn-block mb-4 col-12"
                    onClick={() => clickSignupBtn()}>
                    회원가입
                </button>
            </form>
        </Wrapper>
    )
}

export default Signup;