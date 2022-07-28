import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";
import { OnePost } from "../components";
import Pagination from "react-js-pagination";
import { getApi } from '../api';
import styled from "styled-components";
import { Colors } from '../styles/ui';
import "bootstrap-icons/font/bootstrap-icons.css";

const Community = () => {
    const authContext = useContext(AuthContext);
    const params = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [keyword, setKeyword] = useState('');

    const size = 3;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        if (!!params.keyword) {
            setKeyword(params.keyword);
        } else {
            setKeyword('');
        }
    }, [params.keyword])

    useEffect(() => {
        const getPost = async () => {
            let key = ''
            if (!!params.keyword) {
                key = params.keyword;
            }
            await getApi(
                {},
                `/post?size=${size}&page=${params.page - 1}&keyword=${key}`,
                authContext.state.token,
            ).then(({ status, data }) => {
                // console.log('GET all post', status, data);
                if (status === 200 && data.statusCodeValue === undefined) {
                    setPosts(data.data);
                    setTotal(data.totalCount);
                }
            })
                .catch((e) => {
                    console.log(e);
                });
        }
        getPost();
    }, [authContext.state.token, params.page])


    const searchEvent = async () => {
        if (!!keyword) {
            navigate(`/community/page=1/keyword=${keyword}`);
        } else {
            navigate(`/community/page=1`);
        }
        await getApi(
            {},
            `/post?size=${size}&page=0&keyword=${keyword}`,
            authContext.state.token,
        )
            .then(({ status, data }) => {
                // console.log('GET search', status, data);
                if (status === 200 && data.statusCodeValue === undefined) {
                    setPosts(data.data);
                    setTotal(data.totalCount);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const onClickSearchBtn = (e) => {
        e.preventDefault();
        searchEvent();
    }

    const onClickSearchEnter = (e) => {
        if (e.key == 'Enter') {
            searchEvent();
        }
    }

    const handlePageChange = (page) => {
        navigate(`/community/page=${page}`);
    };

    return (
        <Wrapper>
            <div class="container">
                <div class="col-12 board">
                    <div class="row board-filter">
                        <div class="row col-10">
                            <div class="col-10 search-bar">
                                <input type="search" class="form-control input-sm " placeholder="제목, 내용으로 검색하기"
                                    value={keyword}
                                    onChange={(e) => setKeyword(e.target.value)}
                                    onKeyPress={(e) => onClickSearchEnter(e)} />
                            </div>
                            <div class="col-2 search-btn">
                                <button class="btn btn-primary col-12" onClick={(e) => onClickSearchBtn(e)}><i class="bi bi-search"></i></button>
                            </div>
                        </div>
                        <div class="col-2 post-btn">
                            <Link to='/write/new/0'>
                                <button class="btn btn-secondary col-12">글 작성</button>
                            </Link>
                        </div>
                    </div>

                    <div class="inbox-message">
                        {
                            posts && posts.length !== 0 ?
                                (
                                    posts.map(post => (
                                        <ul key={post.id}>
                                            <OnePost post={post} />
                                        </ul>
                                    ))
                                ) : (
                                    <div>
                                        글이 없어요.
                                    </div>
                                )
                        }
                    </div>
                    <PageWrapper>
                        <Pagination
                            activePage={params.page * 1}
                            currentPage={params.page * 1}
                            itemsCountPerPage={size}
                            totalItemsCount={total}
                            pageRangeDisplayed={size}
                            prevPageText={"‹"}
                            nextPageText={"›"}
                            onChange={handlePageChange}
                            renderOnZeroPageCount={null}
                        />
                    </PageWrapper>
                </div>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    .board {
        display: inline-block;
        width: 100%;
        padding: 0;
        border: 1px solid #e8eef1;
    }
    
    .board-filter {
        padding: 12px 0;
        margin: 0;
        border-bottom: 1px solid #e8eef1;
    }

    .search-bar {
        padding-right: 0;
    }
    .search-bar input {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }

    .search-btn {
        padding-left: 0;
    }
    .search-btn button {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
    }

    .post-btn {
        padding: 0;
    }

    @media (max-width: 768px) {
        .post-btn button, 
        .search-bar input, 
        .search-btn button {
            white-space: nowrap;
            font-size: 12px;
        }
    }

    @media (max-width: 576px) {
        .post-btn button, 
        .search-bar input, 
        .search-btn button {
            white-space: nowrap;
            font-size: 12px;
        }
    }
    
    /*=====================================
    Inbox Message Style
    =======================================*/
    .inbox-message ul {
        padding: 0;
        margin: 0;
    }
    .inbox-message ul li {
        list-style: none;
        position: relative;
        padding: 15px 20px;
        border-bottom: 1px solid #e8eef1;
    }
    .inbox-message ul li:hover, .inbox-message ul li:focus {
        background: #eff6f9;
    }
`

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

export default Community;