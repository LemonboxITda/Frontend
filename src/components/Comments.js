
import { OneComment } from '../components';

const Comments = ({ id }) => {

    // 해당 글 id의 댓글 GET

    return (
        <div>
            {/* <OneComment props={comment} /> */}
            <OneComment />
            <OneComment />
            <OneComment />

        </div>
    )
}

export default Comments;