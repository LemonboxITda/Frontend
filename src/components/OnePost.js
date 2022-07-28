import styled from "styled-components";
import { Colors } from '../styles/ui';
import { Link } from "react-router-dom";


const Wrapper = styled.div`
    .message-body-heading h5 {
        font-weight: 600;
        text-align: left;
        display:inline-block;
        color: ${Colors.black};
        padding: 0;
        width: 70%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .message-body-heading span {
        float: right;
        color: ${Colors.gray2};
        font-size: 14px;
    }
    .message-body p {
        font-size: 16px;
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
        font-size: 14px;
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
            font-size: 14px;
        }
        .message-body-heading span,
        .message-body .icons {
            font-size: 12px;
        }
    }
`
const OnePost = ({ post }) => {
    const writerData = post.writer
    return (
        <Wrapper>
            <li>
                <Link to={`/post/${post.id}`}>
                    <div class="message-body">
                        <div class="d-flex justify-content-between message-body-heading">
                            <h5>{post.title}</h5>
                            <span>{post.createdAt}</span>
                        </div>
                        <p>{post.content}</p>
                        <div class="icons">
                            <span>{writerData.nickname}</span>
                            <span><i class="bi bi-eye"></i>{post.views}</span>
                            {/* <span><i class="bi bi-chat-left-dots"></i>10</span> */}
                            <span><i class="bi bi-heart"></i>{post.likeCount}</span>
                        </div>
                    </div>
                </Link>
            </li>
        </Wrapper>
    )
}

export default OnePost;