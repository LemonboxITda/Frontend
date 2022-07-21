import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";
import Pagination from "react-js-pagination";
import { getApi } from '../../api';
import styled from "styled-components";
import { Colors } from '../../styles/ui';

const CommuList = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [commuList, setCommuList] = useState([]);
    const size = 3;
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const getUserList = async () => {
            await getApi(
                {},
                `/admin/posts?page=${page - 1}&size=${size}`,
                authContext.state.token
            )
                .then(({ status, data }) => {
                    console.log(status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setCommuList(data.data);
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

    const OnePostRow = ({ post }) => {
        return (
            <tr>
                <td scope="row">{post.writer.loginId}</td>
                <td>{post.title}</td>
                <td>{post.createdAt}</td>
                <td>{post.likeCount}</td>
                <td>{post.views}</td>
                <td><a href={`/admin/post/${post.id}`} style={{ textDecoration: 'none' }}>상세보기</a></td>
            </tr>
        )
    }

    return (
        <div class="container">
            <h3 style={{ marginTop: '5vh', textAlign: 'left' }}>커뮤니티 리스트</h3>
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col" class="col-2">작성자</th>
                            <th scope="col" class="col-3">글 제목</th>
                            <th scope="col" class="col-3">작성 날짜 및 시간</th>
                            <th scope="col" class="col-1">좋아요</th>
                            <th scope="col" class="col-1">조회수</th>
                            <th scope="col" class="col-2">상세보기</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            commuList && commuList.length !== 0 &&
                            commuList.map(post => (
                                <OnePostRow key={post.id} post={post} />
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
export default CommuList;