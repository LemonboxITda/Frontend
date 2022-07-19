import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from '../../api';

const UserInfo = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const params = useParams();
    const [userInfo, setUserInfo] = useState();

    useEffect(() => {
        const getUserList = async () => {
            await getApi(
                {},
                `/admin/user/${params.id}`,
                authContext.state.token
            )
            .then(({ status, data }) => {
                console.log(status, data);
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
        <div class="container" style={{marginTop: '5vh', textAlign: 'left'}}>
            <h3>회원 정보</h3>
            <div>ID: {userInfo && userInfo.loginId}</div>
            <div>닉네임: {userInfo && userInfo.nickname}</div>
            <div>가입일자: </div>
            <div>복용 중인 영양제</div>
            <button type="button" class="btn btn-primary" style={{marginTop: '20px'}}
            onClick={() => navigate(-1)}>목록보기</button>
        </div> 
    )
}

export default UserInfo;