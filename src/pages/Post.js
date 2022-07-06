import { useState, useContext } from "react";
import styled from "styled-components";
import { AuthContext } from "../App";
import { postApi } from '../api';
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
    textarea {
        resize: none;
    }
`

const Post = () => { // 글 작성 페이지
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();

    const [contents, setContents] = useState({
        title: '',
        content: '',
    });

    const submitHandler = async (e) => {
        e.preventDefault();
        await postApi(
            contents,
            `/post`,  // 추후 변경
            authContext.state.token
        )
            .then(({ status, data }) => {
                // console.log('status:', status);
                if (status === 200) {
                    navigate("/community");
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }

    return (
        <Wrapper>
            <form class="container col-10" style={{ marginTop: '50px' }} onSubmit={submitHandler}>
                {/* <h3>글 작성하기</h3> */}
                <div class="row justify-content-center mb-4">
                    <textarea class="form-control" placeholder="글 제목 작성" rows={1}
                        onChange={
                            (e) => setContents({ ...contents, title: e.target.value })
                        } />
                </div>
                <div class="row justify-content-center mb-4">
                    <textarea class="form-control" placeholder="글 내용 작성" rows={15}
                        onChange={
                            (e) => setContents({ ...contents, content: e.target.value })
                        } />
                </div>
                <button type='submit' class="btn btn-primary btn-block mb-4 col-lg-3 col-5">글 작성하기</button>
            </form>
        </Wrapper>
    )
}

export default Post;