import styled from "styled-components";
import React from 'react';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    margin-top: 40px;
    text-align: left;

    .title {
        font-weight: bold;
        margin: 30px 0;
    }

    .content {
        cursor: pointer;
        margin: 10px 0;
    }
`

const MyPageCom = () => {
    return (
        <Wrapper>
            <h4 className='title'>커뮤니티 정보</h4>
            <div className='content'>
                <Link to='/mypage/community/post'>
                    내가 작성한 글 &gt;
                </Link>
            </div>
            <div className='content'>
                <Link to='/mypage/community/comment'>
                    내가 작성한 댓글 &gt;
                </Link>
            </div>
            <div className='content'>
                <Link to='/mypage/community/like'>
                    내가 좋아요한 글 &gt;
                </Link>
            </div>
        </Wrapper>
    )
}

export default MyPageCom;