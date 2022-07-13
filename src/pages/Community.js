import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import { OnePost } from "../components";
import { getApi } from '../api';
import styled from "styled-components";
import { Colors } from '../styles/ui';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

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
const Community = () => {
    const authContext = useContext(AuthContext);
    const [posts, setPosts] = useState([]);
    const [size, setSize] = useState(10);
    const [page, setPage] = useState(0);

    useEffect(() => {
        const getPost = async () => {
            await getApi(
                {},
                `/post?size=${size}&page=${page}`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    // console.log('GET post', status, data.data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setPosts(data.data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getPost();
    }, [authContext.state.token])

    return (
        <Wrapper>
            <div class="container">
                <div class="col-12 board">
                    <div class="row board-filter">
                        <div class="row col-10">
                            <div class="col-10 search-bar">
                                <input type="search" class="form-control input-sm " placeholder="Search" />
                            </div>
                            <div class="col-2 search-btn">
                                <button class="btn btn-primary col-12"><i class="bi bi-search"></i></button>
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
                            posts ?
                            (
                                posts.map(post => (
                                    <ul>
                                        <OnePost key={post.id} post={post} />
                                    </ul>
                                ))
                            ) : (
                                    <div>
                                        아직 글이 없어요.
                                    </div>
                                )
                        }
                        {/* <OnePost key={0} id={0} title={'룰루'} /> */}
                    </div>
                    pages
                </div>
            </div>
        </Wrapper>
    )
}

export default Community;