import React, { useState, useEffect } from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import PostService from '../../Services/PostService';

export default function UpdatePost(){
    const navigate = useNavigate();
    const location = useLocation();
    const [post, setPost] = useState({
        postId: '',
        name:'',
        subject:'',
        post:''
    });

    useEffect(() => {
        console.log(location.state);
        PostService.updatePost(location.state).then((res) => {
            console.log(res.data);
            setPost(res.data);
        });
    }, []);

    function handle(e) {
        const updatePost = { ...post };
        updatePost[e.target.id] = e.target.value;
        setPost(updatePost);
        console.log(updatePost);
    }

    function updatePost(e) {
        e.preventDefault();
        let updatePost = {
            userId : post.postId,
            name : post.name,
            subject : post.subject,
            post : post.post
        };

        PostService.updatePost(updatePost, location.state)
            .then((res) => {
                console.log(res.data);
                navigate("/updatePost");
                alert("Post has been updated.");
                window.location.href = "/getAll";
            })
            .catch((err) => {
                console.log("Post was not updated.");
                alert("Post Failed");
            });
    }

    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center">Update Post {post.userId}</h3>
                        <div className="card-body">
                            <form className="form">
                                <div className="form-group">
                                    <label>Post ID: </label>
                                    <input
                                        id="postId"
                                        placeholder="ID"
                                        name="postId"
                                        type="number"
                                        className="form-control"
                                        value={post.postId}
                                        onChange={(e) => handle(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Name: </label>
                                    <input
                                        id="name"
                                        placeholder="Name"
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        value={post.name}
                                        onChange={(e) => handle(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Subject: </label>
                                    <input
                                        id="subject"
                                        placeholder="Subject"
                                        name="subject"
                                        type="text"
                                        className="form-control"
                                        value={post.subject}
                                        onChange={(e) => handle(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Post: </label>
                                    <input
                                        id="post"
                                        placeholder="Post"
                                        name="post"
                                        type="text"
                                        className="form-control"
                                        value={post.post}
                                        onChange={(e) => handle(e)}
                                    />
                                    <button onClick={(e) => updatePost(e)}>Update</button>
                                </div>
                            </form>
                            <button onClick={(e) => (window.location.href = "/getAll")}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


