import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import styled from "styled-components";
import { Colors } from '../styles/ui';

const Wrapper = styled.div`
    text-align: left;
    margin-bottom: 10px;

    .writer {
        font-size: 14px;
    }

    .date {
        font-size: 12px;
        color: ${Colors.gray2};
    }

    .content {
        font-size: 16px;
    }

    @media (max-width: 768px) {
        .writer {
            font-size: 12px;
        }
        .date {
            font-size: 10px;
        }
        .content {
            font-size: 14px;
        }
    }
`

const OneComment = ({ comment }) => {
    return (
        <Wrapper>
            <div class="writer">작성자</div>
            <div class="content">댓글내용</div>
            <div class="date">날짜 및 시간</div>
        </Wrapper>
    )
}

export default OneComment;