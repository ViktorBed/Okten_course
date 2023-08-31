import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            {/*<h1>{comment.postId}</h1>*/}
            <p>{comment.id}</p>
            <h3>{comment.name}</h3>
            <p>{comment.email}</p>
            <p>{comment.body}</p>
        </div>
    );
}

export default Comment;
