import React, { useState, useEffect} from 'react';
import PostService from '../../Services/PostService';
import {useLocation} from 'react-router-dom';

export default function ViewPost(){
    
    const location = useLocation();
    const [post, setPost] = useState({
        postId: "",
        name: "",
        subject: "",
        post: ""
    });

    useEffect(() => {
        console.log(post);
        PostService.getPostByUserId(location.state).then((res) => {
            console.log(res.data);
            setPost(res.data);
        });
    }, []);
    
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card">
                            <h3 className="text-center">View Post</h3>
                            <div className="card-body">
                                <table>
                                    <thead>
                                    <tr>
                                    <th>
                                        <h3>Post ID: {post.postId}</h3>
                                        
                                    </th>
                                    <th></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> Name: {post.name}</td>
                                        </tr>
                                        <tr>
                                            <td> Name: {post.subject}</td>
                                        </tr>
                                        <tr>
                                            <td> Name: {post.post}</td>
                                        </tr>
                                    </tbody>
                                    
                                </table>
                                <button onClick={() => (window.location.href = "/getAll")}>{" "}Home</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        )
    }


