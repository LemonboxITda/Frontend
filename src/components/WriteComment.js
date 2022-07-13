import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { MyCommentContext } from "../pages/PostDetail";
import { postApi } from "../api";
import styled from "styled-components";
import { Colors } from '../styles/ui';

const Wrapper = styled.div`
    textarea {
        resize: none;
    }

    .input-wrapper textarea,
    .input-wrapper button {
        height: 80px;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        .input-wrapper textarea,
        .input-wrapper button {
            height: 60px;
            font-size: 12px;
        }
    }
`

const WriteComment = ({ id }) => {
    const authContext = useContext(AuthContext);
    const myCommentContext = useContext(MyCommentContext);
    const [myComment, setMyComment] = useState('');
    // 댓글 작성 POST API
    const onCreateComment = async () => {
        if (!myComment) {
            alert('댓글을 입력해주세요.');
        } else {
            await postApi(
                { content: myComment },
                `/comment?postId=${id}`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    console.log('POST comment', status, data);
                    if (status === 200) {
                        myCommentContext.dispatch({
                            type: 'postMyComment',
                            commentChange: true,
                        });
                        setMyComment('');
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    return (
        <Wrapper>
            <div class="input-group mb-3 input-wrapper">
                <textarea type="text" class="form-control" placeholder="댓글을 입력하세요."
                    value={myComment}
                    onChange={
                        (e) => setMyComment(e.target.value)
                    } />
                <button class="btn btn-outline-secondary" type="button"

                    onClick={onCreateComment}
                >댓글 입력</button>
            </div>
        </Wrapper>
    )
}

export default WriteComment;