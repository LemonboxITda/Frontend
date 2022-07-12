import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
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
    // 댓글 작성 POST API

    return (
        <Wrapper>
            <div class="input-group mb-3 input-wrapper">
                <textarea type="text" class="form-control" placeholder="댓글을 입력하세요." />
                <button class="btn btn-outline-secondary" type="button">댓글 입력</button>
            </div>
        </Wrapper>
    )
}

export default WriteComment;