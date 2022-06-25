import styled from "styled-components";
import React, { useState } from 'react';


const Wrapper = styled.div`
    .detail-text {
        font-size: 14px;
        text-align: right;
    }
`

const Signup = () => {
    const [idCheck, setIdCheck] = useState(null);
    const [pwCheck, setPwCheck] = useState(null);

    return (
        <Wrapper>
            <h3 style={{ margin: '50px 0' }}>회원가입</h3>

            <form class="container col-lg-4 col-sm-6 col-10" >
                <div class="row justify-content-center" style={{ marginRight: '0' }}>
                    <div class="form-outline mb-4 col-10">
                        <input type="text" id="form2Example1" class="form-control" placeholder="아이디" />
                    </div>
                    <button
                        type="button"
                        class="btn btn-primary btn-block mb-4 col-2"
                        style={{ fontSize: '12px', whiteSpace: 'nowrap' }}>
                        check
                    </button>
                </div>
                {
                    idCheck !== null && (
                        idCheck ? (
                            <p className="detail-text">사용가능한 아이디입니다.</p>
                        ) : (
                            <p className="detail-text">중복된 아이디입니다. 다른 아이디를 입력해주세요.</p>
                        )
                    )
                }
                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder="비밀번호" />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" id="form2Example2" class="form-control" placeholder="비밀번호 확인" />
                    </div>
                </div>
                {
                    pwCheck !== null && (
                        pwCheck ? (
                            <p className="detail-text">비밀번호가 일치합니다.</p>
                        ) : (
                            <p className="detail-text">비밀번호가 일치하지 않습니다.</p>
                        )
                    )
                }

                <div class="form-outline mb-4">
                    <input type="text" id="form2Example2" class="form-control" placeholder="닉네임" />
                </div>

                <button type="button" class="btn btn-primary btn-block mb-4 col-12">회원가입</button>
            </form>
        </Wrapper>
    )
}

export default Signup;