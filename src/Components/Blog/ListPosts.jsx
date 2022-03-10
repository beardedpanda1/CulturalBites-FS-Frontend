import React, { useEffect, useState } from 'react';
import PostService from '../../Services/PostService';
import {useNavigate} from 'react-router-dom';


export default function ListPosts() {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([""]); //calling posts
    
    useEffect(() => {
        PostService.getPosts().then((res) => {
            console.log(res.data);
            setPosts(res.data);
        });
    }, []);

    // console.log(posts);

    function addPost(){
        navigate("/add");
    }

    function updatePost(postId){
        navigate(`/updatePost/`, {state:postId});
    }

    function deletePost(postId){
        navigate(`/deletePost/`,{state:postId});
    }

    function viewPost(postId){
        navigate(`/viewPost/`, {state:postId});
    }
  
    return (
        <div>
            <h2 className="text-center">Posts List</h2>
            <div>
                <button className="primary-button" onClick={() => addPost()}>{" "}Add Post</button>
            </div>
            <div>
                <p></p>
            </div>
            <div className="row">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Post ID</th>
                            <th>Name</th>
                            <th>Subject</th>
                            <th>Post</th>
                            <th>Actions</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post, postId) =>
                            <tr key={postId}>
                                <td>{post.postId}</td>
                                <td>{post.name}</td>
                                <td>{post.subject}</td>
                                <td>{post.post}</td>
                                <td>
                                    
                                    <button onClick={() => updatePost(post.postId)} className="primary-button">Update</button>
                                    <button onClick={() => deletePost(post.postId)} className="primary-button">Delete</button>
                                    <button onClick={() => viewPost(post.subject)} className="primary-button">View</button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

