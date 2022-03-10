import{useNavigate} from 'react-router-dom';
import React, { useState } from 'react';
import PostService from '../../Services/PostService';

// const AddPost = ({
//     handleSubmit, name, setName, 
// })
export default function AddPost(){
    const navigate = useNavigate();
    const[post, setPost]=useState({
        postId: " ",
        name: " ",
        subject: " ",
        post: " "
    })

    function handle(e){
        const newPost = { ...post};
        newPost[e.target.id] = e.target.value;
        setPost(newPost);
        console.log(newPost);
    }

    function savePost(e){
        e.preventDefault();
        let newPost = {
            postId: post.postId,
            name: post.name,
            subject: post.subject,
            post: post.post
        };

        PostService.addPost(newPost)
            .then((res)=> {
                console.log(res.data);
                navigate("/add");
                alert("Post Saved!");
                window.location.href = "/getAll";
            })
            .catch((err) => {
                console.log("Post not saved");
                alert("Post not saved");
                window.location.href = "/getAll";
            });
    }

    
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="card">
                        <h3 className="text-center">Add Post</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label>Post ID: </label>
                                    <input 
                                    placeholder="Id" 
                                    name="postId" 
                                    className="form-control"
                                    value={post.postId} 
                                    onChange={(e) => handle(e)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Name: </label>
                                    <input 
                                    placeholder="Name" 
                                    name="name" 
                                    className="form-control"
                                    value={post.name} 
                                    onChange={(e) => handle(e)}
                                    required/>
                                </div>
                                <div className="form-group">
                                    <label>Subject: </label>
                                    <input 
                                    placeholder="Subject" 
                                    name="subject" 
                                    className="form-control"
                                    value={post.subject} 
                                    onChange={(e) => handle(e)}
                                    required />
                                </div>
                                <div className="form-group">
                                    <label>Post: </label>
                                    <input 
                                    placeholder="Start typing your post here..." 
                                    name="post" 
                                    className="form-control"
                                    value={post.post} 
                                    onChange={(e) => handle(e)}
                                    required />
                                </div>
                                <button className="button-success" onClick={(e) => savePost(e)}>Post!</button>
                                <button className="button-fail" onClick={(window.location.href = "/getAll")}>{" "}Cancel</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}




