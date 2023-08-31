import React from 'react';

const Post = ({ post }) => {
    return (
        <div>
            <h3>{post.id}</h3>
            <p>{post.userId}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>

        </div>
    );
}

export default Post;
