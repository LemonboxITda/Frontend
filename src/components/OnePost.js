import styled from "styled-components";
import { Colors } from '../styles/ui';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    .message-body-heading h5 {
        font-weight: 600;
        display:inline-block;
        color: ${Colors.black};
        margin-left: 7px;
        padding: 0;
    }

    .message-body-heading span {
        float: right;
        color: ${Colors.gray2};
        font-size: 12px;
    }
    .message-body p {
        margin: 0 15px;
        font-size: 15px;
        text-align: left;
        display: inline-block;
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        color: ${Colors.black};
    }

    .message-body .icons {
        color: ${Colors.gray2};
        font-size: 12px;
        text-align: right;
    }

    .message-body .icons span {
        margin: 0 5px;
    }

    .message-body .icons span i {
        margin: 0 2px;
    }

    a:hover{
        text-decoration: none;
    }
    a:link{
        text-decoration: none!important;
    }

    @media (max-width: 768px) {
        .message-body-heading h5 {
            font-size: 16px;
        }
        .message-body p {
            font-size: 12px;
        }
        .message-body-heading span,
        .message-body .icons {
            font-size: 10px;
        }
    }
`
const OnePost = ({ id }) => {
    return (
        <Wrapper>
            <li>
                <Link to={`/post/${id}`}>
                    <div class="message-body">
                        <div class="d-flex justify-content-between message-body-heading">
                            <h5>title {id}</h5>
                            <span>날짜 및 시간</span>
                        </div>
                        <p>Hello, Lididunt ut labore et dolorsdfs dfsd fsdfsd fsdfs.</p>
                        <div class="icons">
                            <span>작성자</span>
                            <span><i class="bi bi-eye"></i>5</span>
                            <span><i class="bi bi-chat-left-dots"></i>10</span>
                            <span><i class="bi bi-heart"></i>14</span>
                        </div>
                    </div>
                </Link>
            </li>
        </Wrapper>
    )
}

export default OnePost;