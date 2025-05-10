import { Link } from "react-router-dom";


const Post = ({post}) => {
    const {id,title}=post;

     const postStyle={
        border:'2px solid red',
        padding:'10px',
        borderRadius:'10px'
    }
    return (
        <div style={postStyle}>
            <h2>Post of Id:{id}</h2>
            <p>Title:{title}</p>
            <Link to={`/post/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;