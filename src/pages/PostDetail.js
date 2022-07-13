import React, { createContext, useContext, useReducer } from "react";
import { AuthContext } from "../App";
import { useParams } from 'react-router-dom';
import { OnePostDetail, Comments, WriteComment } from "../components";
export const MyCommentContext = createContext();

const PostDetail = () => {
    const authContext = useContext(AuthContext);
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
            </MyCommentContext.Provider>
        </div>
    )
}

export default PostDetail;