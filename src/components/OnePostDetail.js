import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { getApi } from "../api";
import styled from "styled-components";
import { Colors } from '../styles/ui';
import "bootstrap-icons/font/bootstrap-icons.css";

const Wrapper = styled.div`

    .upper-section {
        margin-top: 20px;
        margin-bottom: 20px;

        .left-side {
            text-align: left;
        }

        .left-side .writer {
            font-size: 14px;
        }

        .left-side .date {
            color: ${Colors.gray2};
            font-size: 12px;
            margin-left: 10px;
        }

        .right-side {
            text-align: right;
            color: ${Colors.gray2};
            font-size: 12px;
        }

        
    }

    .middle-section {
        text-align: left;

        .title { 
            font-weight: 600;
        }

        .content {
            font-size: 16px;
        }

        .like {
            text-align: right;
        }

        border-bottom: 1px solid #e8eef1;
    }
    .icons {
        color: ${Colors.gray2};
    }

    .icons i {
        padding-right: 3px;
    }

    .lower-section {
        text-align: left;
        padding-top: 10px;

        .viewcnt {
            margin-right: 10px;
        }
    }

    @media (max-width: 768px) {
        .upper-section .left-side .date,
        .upper-section .right-side {
            font-size: 10px;
        }
        .upper-section .left-side .writer, 
        .lower-section , 
        .middle-section .icons {
            font-size: 12px;
        }
    }
`

const OnePostDetail = ({ id }) => {
    const authContext = useContext(AuthContext);

    return (
        <Wrapper>
            <div class="row upper-section">
                <div class="col-8 mb-1 left-side">
                    <span class="writer">
                        작성자
                    </span>
                    <span class="date">
                        날짜 및 시간
                    </span>
                </div>
                <div class="col-4 mb-1 right-side">
                    <span>수정</span>
                    <span> | </span>
                    <span>삭제</span>
                </div>
            </div>

            <div class="middle-section">
                <h3 class="title">title</h3>
                <div class="content">content</div>
                <div class="mb-2 icons like"><i class="bi bi-heart"></i>12</div>
            </div>

            <div class="lower-section mb-2">
                <span class="icons viewcnt"><i class="bi bi-eye"></i>30</span>
                <span class="icons"><i class="bi bi-chat-left-dots"></i>3</span>
            </div>
        </Wrapper>
    )
}

export default OnePostDetail;