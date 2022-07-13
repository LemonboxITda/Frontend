import React, { useContext, useEffect } from "react";
import { AuthContext } from "../App";
import { useParams } from 'react-router-dom';
import styled from "styled-components";
import { Colors } from '../styles/ui';
import { OnePostDetail, Comments, WriteComment } from "../components";


const PostDetail = () => {
    const authContext = useContext(AuthContext);
    const params = useParams();
    const id = params.id;
    console.log('안녕앙년앙아녕')
    
    return (
        <div class="container">
            
            <OnePostDetail id={id} />
            <Comments id={id} />
            <WriteComment id={id} />
        </div>
    )
}

export default PostDetail;