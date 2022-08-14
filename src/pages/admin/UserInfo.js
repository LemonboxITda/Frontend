import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from '../../api';
import styled from "styled-components";

const UserInfo = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const params = useParams();
    const [userInfo, setUserInfo] = useState();
    const SupDataMap = {
        'vitamin': {
            "name": "비타민",
        }, 
        'probio': {
            "name": "프로바이오틱스",
        }, 
        'omega': {
            "name": "루테인&오메가3",
        }
    }

    useEffect(() => {
        const getUserList = async () => {
            await getApi(
                {},
                `/admin/user/${params.id}`,
                authContext.state.token
            )
                .then(({ status, data }) => {
                    // console.log(status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setUserInfo(data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getUserList();
    }, [authContext.state.token, params.id]);

    return (
        <div class="container" style={{ marginTop: '5vh', textAlign: 'left' }}>
            <Wrapper>
            <h3>회원 정보</h3>
            {userInfo && userInfo.role === 'ROLE_ADMIN' && <div>관리자</div>}
            <div>ID: {userInfo && userInfo.loginId}</div>
            <div>닉네임: {userInfo && userInfo.nickname}</div>
            <div>가입일자: {userInfo && userInfo.createdAt}</div>
            <br />
            <div>영양제 정보 및 재구매 횟수</div>
            {
                userInfo &&
                userInfo.supplements.length !== 0 &&
                userInfo.supplements.map(u => (
                    <div key={u.id}>
                        <span>{SupDataMap[u.name].name}</span>
                        <span>개수: {u.count}</span>
                        <span>재구매 {u.repill}회</span>
                    </div>
                ))
            }
            <button type="button" class="btn btn-primary" style={{ marginTop: '20px' }}
                onClick={() => navigate(-1)}>목록보기</button>
            
            </Wrapper>
        </div>
    )
}

const Wrapper = styled.div`
    span {
        margin: 0 10px;
    }
`

export default UserInfo;