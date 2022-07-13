import { useParams } from "react-router-dom";
import { WritePost } from "../components";

const Post = () => { // 글 작성 페이지
    const params = useParams();
    const type = params.type;
    console.log(type);

    return (
        <WritePost type={type} />
    )
}

export default Post;