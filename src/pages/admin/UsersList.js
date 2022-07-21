import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getApi } from '../../api';
import styled from "styled-components";
import { Colors } from '../../styles/ui';

const UsersList = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [userList, setUserList] = useState([]);
    const size = 3;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    // useEffect(() => {
    //     console.log(authContext.state.role);
    //     if (authContext.state.role !== 'ROLE_ADMIN') {
    //         navigate('/');
    //     }
    // }, [authContext.state.role]);

    useEffect(() => {
        const getUserList = async () => {
            await getApi(
                {},
                `/admin/users?size=${size}&page=${page-1}`,
                authContext.state.token
            )
            .then(({ status, data }) => {
                console.log(status, data);
                if (status === 200 && data.statusCodeValue === undefined) {
                    setUserList(data.data);
                    setTotal(data.totalCount);
                }
            })
            .catch((e) => {
                console.log(e);
            });
        }
        getUserList();
    }, [authContext.state.token, page]);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const OneUserRow = ({ user }) => {
        let newId = user.id;
        if (user.role === 'ROLE_ADMIN') {
            newId = newId + '(관리자)';
        }
        return (
            <tr>
                <td scope="row">{newId}</td>
                <td>{user.loginId}</td>
                <td>{user.nickname}</td>
                <td><a href={`/admin/user/${user.loginId}`} style={{textDecoration: 'none'}}>상세보기</a></td>
            </tr>
        )
    }

    return (
        <div class="container">
            <h3 style={{marginTop: '5vh', textAlign: 'left'}}>회원 리스트</h3>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="col-1">#</th>
                            <th scope="col" class="col-3">ID</th>
                            <th scope="col" class="col-5">닉네임</th>
                            <th scope="col" class="col-3">상세보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userList && userList.length !== 0 &&
                                userList.map(user => (
                                    <OneUserRow key={user.id} user={user} />
                                ))
                        }
                    </tbody>
                </table>
            </div>
            <PageWrapper>
                <Pagination
                    activePage={page}
                    itemsCountPerPage={size}
                    totalItemsCount={total}
                    pageRangeDisplayed={5}
                    prevPageText={"‹"}
                    nextPageText={"›"}
                    onChange={handlePageChange}
                />
            </PageWrapper>
        </div>
    )
}

const PageWrapper = styled.div`
    .pagination {
        display: flex;
        justify-content: center;
        margin-top: 15px;
    }
    
    ul {
        list-style: none;
        padding: 0;
    }
    
    ul.pagination li {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 1px solid #e2e2e2;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1rem;
    }

    ul.pagination li:first-child{
        border-radius: 5px 0 0 5px;
    }

    ul.pagination li:last-child{
        border-radius: 0 5px 5px 0;
    }
    
    ul.pagination li a {
        text-decoration: none;
        color: #337ab7;
        font-size: 1rem;
    }
    
    ul.pagination li.active a {
        color: ${Colors.white};
    }

    ul.pagination li.active {
        background-color: ${Colors.blue};
    }
    
    ul.pagination li a:hover,
    ul.pagination li a.active {
        color: ${Colors.black};
    }
    
    .page-selection {
        width: 48px;
        height: 30px;
        color: ${Colors.white};
    }
`
export default UsersList;