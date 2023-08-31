import React, {useEffect, useState} from 'react';

import {getComments} from "../services/coment.service";
import Comment from "./Coment";

const Comments = () => {
    const [comment, setComments] = useState([]);

    useEffect(() => {
        getComments().then(data => {
            setComments(data);
        });
    }, []);

    return (
        <div>
            {comment.map(comment => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </div>
    );
}

export default Comments;
