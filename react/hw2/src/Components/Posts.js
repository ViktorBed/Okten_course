import React, { useEffect, useState } from 'react';

import {getPosts} from "../services/post.service";
import Post from "./Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => {
            setPosts(data);
        });
    }, []);

    return (
        <div>
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
}

export default Posts;
