import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        ////////// 임의 코드
        authContext.dispatch({
            type: "logout",
            token: null,
            id: null,
            loginId: null,
        });
        localStorage.clear(); 
        navigate('/');
        ////////////////
        const getLogout = async () => {
            await getApi({}, "/auth/logout")
            .then(({ status, data }) => {
                // console.log('status:', status);
                if (status === 200 || status === 201 || status === 204) {
                    navigate('/');
                    authContext.dispatch({
                        type: "logout",
                        token: null,
                        id: null,
                        loginId: null,
                    });
                    alert('로그아웃');
                    localStorage.clear();
                }
            })
            .catch((e) => {
                console.log(e);
                alert('로그아웃 실패');
            });
        };
        // getLogout();
    }, [authContext, navigate]);

    return (
        <div>
            Logout
        </div>
    )
}

export default Logout;