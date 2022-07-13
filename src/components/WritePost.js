import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { AuthContext } from "../App";
import { getApi, putApi, postApi } from '../api';
import { useNavigate, useParams } from "react-router-dom";

const Wrapper = styled.div`
    h3 {
        text-align: left;
        margin-bottom: 20px;
    }
    textarea {
        resize: none;
    }
`

const WritePost = ({ type }) => {
    // type: new (새 글 post)
    // type: modify (글 수정)
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const params = useParams();

    const [contents, setContents] = useState({
        title: '',
        content: '',
    });

    useEffect(() => {
        const getPostDetail = async () => {
            await getApi(
                {},
                `/post/detail/${params.id}`,
                authContext.state.token,
            )
                .then(({ status, data }) => {
                    console.log('GET post detail', status, data);
                    if (status === 200 && data.statusCodeValue === undefined) {
                        setContents({...contents, title: data.title, content: data.content});
                        // setContents({...contents, content: data.content});
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
        }
        if (type === 'modify') {
            getPostDetail();
        }
    }, [type])

    const submitHandler = async (e) => {
        e.preventDefault();
        if (contents.title === '' || contents.content === '') {
            alert('제목과 내용을 작성해주세요.');
        } else {
            if (type === 'new') {
                await postApi(
                    contents,
                    `/post`,
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
            } else if (type === 'modify') {
                await putApi(
                    contents,
                    `/post?postId=${params.id}`,
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
                        if (e.response.status === 404) {
                            alert('해당 게시글을 찾을 수 없습니다.');
                        }
                    });
            }
        }
    }
    return (
        <Wrapper>
            <form class="container col-10" style={{ marginTop: '50px' }} onSubmit={submitHandler}>
                {type === 'modify' ? (
                    <h3>글 수정하기</h3>
                ) : (
                    <h3>글 작성하기</h3>
                )}
            <div class="row justify-content-center mb-4">
                <textarea class="form-control" placeholder="글 제목 작성" rows={1}
                    value={contents.title}
                    onChange={
                        (e) => setContents({ ...contents, title: e.target.value })
                    } />
            </div>
            <div class="row justify-content-center mb-4">
                <textarea class="form-control" placeholder="글 내용 작성" rows={15}
                    value={contents.content}
                    onChange={
                        (e) => setContents({ ...contents, content: e.target.value })
                    } />
            </div>
            <button type='submit' class="btn btn-primary btn-block mb-4 col-lg-3 col-5">완료</button>
            </form>
        </Wrapper>
    )
}

export default WritePost;