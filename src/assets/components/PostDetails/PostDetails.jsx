import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post=useLoaderData();
    const nevigate=useNavigate();
    const {id,title,body}=post;
    const handleGoback=()=>{
        nevigate(-1);
    }
    return (
        <div>
            <h2>Post details</h2>
            <h4>Post of Id:{id}</h4>
            <h4>Post of Title:{title}</h4>
            <p>Post of body:{body}</p>
            <button onClick={handleGoback}>Go back</button>
        </div>
    );
};

export default PostDetails;