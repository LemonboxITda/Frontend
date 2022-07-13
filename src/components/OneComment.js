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
            <div class="writer">{comment && comment.writer.nickname}</div>
            <div class="content">{comment && comment.content}</div>
            <div class="date">{comment && comment.createdAt}</div>
        </Wrapper>
    )
}

export default OneComment;