import styled from "styled-components";
import React, { useEffect, useState, useContext } from 'react';
import axios from "axios";
import { AuthContext } from "../App";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        loginId: "",
        password: "",
        role: "ROLE_USER", // admin -> ROLE_ADMIN
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        
        const post = async () => {
            try {
                const res = await axios.post(`${process.env.REACT_APP_BACK_BASE_URL}/auth/signin`,
                    userData, {
                        headers: {
                            'Content-Type': 'application/json',
                            Accept: "application/json",
                        }
                    }
                )
                // console.log(res.data);
                authContext.dispatch({
                    type: "login",
                    token: res.data.accessToken,
                    id: res.data.userInfo.id,
                    loginId: res.data.userInfo.loginId,
                    role: res.data.userInfo.role,
                });
                localStorage.setItem(
                    "loggedInfo",
                    JSON.stringify({ 
                        token: res.data.accessToken,
                        id: res.data.userInfo.id,
                        loginId: res.data.userInfo.loginId,
                        role: res.data.userInfo.role,
                    })
                );
            } catch (e) {
                console.log(e);
                if (e.response.status === 400 || e.response.status === 406) {
                    alert('ID 또는 비밀번호가 틀렸습니다.');
                } else {
                    alert('네트워크 에러');
                }
            }
        }
        await post();
    };

    useEffect(() => {
        if (authContext.state.token !== null) {
            if (authContext.state.role === 'ROLE_ADMIN') {
                navigate("/admin/users");
            } else {
                navigate("/"); // 로그인 성공 시 흠으로 이동
            }
        }
    }, [authContext.state.token])

    return (
        <div>
            <h3 style={{ margin: '50px 0' }}>로그인</h3>
            <form class="container col-lg-4 col-sm-6 col-10" onSubmit={submitHandler}>
                <div class="row justify-content-center">
                    <div class="mb-4">
                        <input type="text" class="form-control" placeholder="아이디" 
                            onChange={
                                (e) => setUserData({ ...userData, loginId: e.target.value })
                            } />
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="form-outline mb-4">
                        <input type="password" class="form-control" placeholder="비밀번호" 
                            onChange={
                                (e) => setUserData({ ...userData, password: e.target.value })
                            }/>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary btn-block mb-4 col-12">로그인</button>

                <div class="text-center">
                    <p>회원이 아니신가요? <a href="/signup">회원가입</a></p>
                </div>
            </form>
        </div>
    )
}

export default Login;