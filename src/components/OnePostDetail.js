import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { getApi, deleteApi, postApi } from "../api";
import styled from "styled-components";
import { Colors } from '../styles/ui';
import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

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
        .viewcnt {
            font-size: 12px;
            margin-left: 10px;
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
    const [postData, setPostData] = useState();
    const [heartChange, setHeartChange] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getPostDetail = async () => {
            await getApi(
                {},
                `/post/detail/${id}`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    console.log('GET post detail', status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setPostData(data);
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getPostDetail();
    }, [authContext.state.token, heartChange])

    const onClickDelete = async () => {
        if (window.confirm("정말 삭제하시겠습니까?")) {
            await deleteApi(
                {},
                `/post?postId=${id}`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    console.log('DEL post', status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        alert('삭제되었습니다.');
                        navigate('/community');
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    }

    const onClickModify = () => {
        navigate(`/write/modify/${id}`);
    }

    const delLike = async () => {
        await deleteApi(
            {},
            `/heart/${id}`,
            authContext.state.token,
        )
            .then(({ status, data }) => {
                console.log('DEL heart', status, data);
                if (status === 200 && data.statusCodeValue === undefined) {
                    setHeartChange(!heartChange);
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    const onClickLike = async () => {
        // post : 200(success) 400(이미 좋아요한 게시글) 404(error)
        await postApi(
            {}, 
            `/heart/${id}`, 
            authContext.state.token,
        )
        .then(({ status, data }) => {
            console.log('POST heart', status, data);
            if (status === 200 && data.statusCodeValue === undefined) {
                setHeartChange(!heartChange);
            }
        })
        .catch((e) => {
            console.log(e);
            if (e.response.status === 400) { //  && e.response.code === 'ALREADY_LIKED'
                delLike();
            }
        });
    }

    return (
        <Wrapper>
            <div class="row upper-section">
                <div class="col-8 mb-1 left-side">
                    <span class="writer">
                        {postData && postData.writer.nickname}
                    </span>
                    <span class="date">
                        {postData && postData.createdAt}
                    </span>
                    <span class="icons viewcnt"><i class="bi bi-eye"></i>{postData && postData.views}</span>

                </div>
                <div class="col-4 mb-1 right-side">
                    {postData && 
                    postData.writer.id === authContext.state.id &&
                        <>
                            <span style={{cursor: 'pointer'}} onClick={onClickModify}>수정</span>
                            <span> | </span>
                            <span style={{cursor: 'pointer'}} onClick={onClickDelete}>삭제</span>
                        </>
                    }
                </div>
            </div>

            <div class="middle-section mb-3">
                <h3 class="title">{postData && postData.title}</h3>
                <div class="content">{postData && postData.content}</div>
                <div class="mb-2 icons like" onClick={onClickLike}>
                    <i class="bi bi-heart"></i>{postData && postData.likeCount}
                </div>
            </div>
            
            {/* <div class="lower-section mb-2">
                <span class="icons viewcnt"><i class="bi bi-eye"></i>{postData.views}</span>
                <span class="icons"><i class="bi bi-chat-left-dots"></i>3</span>
            </div> */}
        </Wrapper>
    )
}

export default OnePostDetail;