import React, { createContext, useReducer } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { OnePostDetail, Comments, WriteComment } from "../components";
export const MyCommentContext = createContext();

const PostDetail = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const reducerCmt = (state, action) => {
        switch (action.type) {
            case "postMyComment":
                return {
                    commentChange: true,
                };
            case "none":
                return {
                    commentChange: false,
                };
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducerCmt, {
        commentChange: false,
    })
    
    return (
        <div class="container">
            <MyCommentContext.Provider value={{ state, dispatch }}>
                <OnePostDetail id={id} />
                <Comments id={id} />
                <WriteComment id={id} />
                <button type="button" class="btn btn-secondary" style={{ marginTop: '10px', fontSize: '14px' }}
                    onClick={() => navigate(-1)}>목록보기</button>
            </MyCommentContext.Provider>
        </div>
    )
}

export default PostDetail;