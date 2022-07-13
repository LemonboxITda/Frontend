import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../App";
import { MyCommentContext } from "../pages/PostDetail";
import { getApi } from '../api';
import { OneComment } from '../components';

const Comments = ({ id }) => {
    const authContext = useContext(AuthContext);
    const myCommentContext = useContext(MyCommentContext);
    const [comments, setComments] = useState([]);
    let size = 100;
    let page = 0;
    // 해당 글 id의 댓글 GET
    useEffect(() => {
        const getComments = async () => {
            await getApi(
                {},
                `/comment/${id}?size=${size}&page=${page}`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    // console.log('GET post', status, data.data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setComments(data.data);
                        myCommentContext.dispatch({
                            type: 'none',
                            commentChange: false,
                        });
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        getComments();
    }, [authContext.state.token, myCommentContext.state.commentChange])

    return (
        <div>
            {
                comments &&
                comments.map(comment => (
                    <OneComment key={comment.id} comment={comment} />
                ))
            }
            {/* <OneComment props={comment} /> */}
            {/* <OneComment />
            <OneComment />
            <OneComment /> */}

        </div>
    )
}

export default Comments;