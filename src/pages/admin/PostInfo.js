import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from "../../App";
import { useNavigate, useParams } from "react-router-dom";
import { getApi } from '../../api';
import styled from "styled-components";

const PostInfo = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const params = useParams();
    const [postInfo, setPostInfo] = useState();

    useEffect(() => {
        const getUserList = async () => {
            await getApi(
                {},
                `/admin/post/${params.id}`,
                authContext.state.token
            )
            .then(({ status, data }) => {
                console.log(status, data);
                if (status === 200 && data.statusCodeValue === undefined) {
                    setPostInfo(data);
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
            <h3>글 상세보기</h3>
            <Wrapper>
                <div class="title">작성자 정보</div>
                <div class="sub">ID: {postInfo && postInfo.writer.loginId}</div>
                <div class="sub">닉네임: {postInfo && postInfo.writer.nickname}</div>
                <div class="title">글 정보</div>
                <div class="sub">작성 날짜 및 시간: {postInfo && postInfo.createdAt}</div>
                <div class="sub">글 제목: {postInfo && postInfo.title}</div>
                <div class="sub">글 내용: {postInfo && postInfo.content}</div>
                <div class="sub">좋아요: {postInfo && postInfo.likeCount}</div>
                <div class="sub">조회수: {postInfo && postInfo.views}</div>
                <button type="button" class="btn btn-primary" style={{marginTop: '20px'}}
                onClick={() => navigate(-1)}>목록보기</button>
            </Wrapper>
        </div> 
    )
}

const Wrapper = styled.div`
    .title {
        font-weight: 600;
    }
    .sub {
        margin-left: 20px;
    }
`

export default PostInfo;