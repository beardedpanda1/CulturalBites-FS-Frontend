import React, { useState, useEffect } from 'react';
import PostService from '../../Services/PostService';
import {useNavigate, useLocation} from 'react-router-dom';
function DeletePost () {
    const navigate = useNavigate();
    const location = useLocation();
    
    const[post,setPost]=useState({
        postId: '',
        name:'',
        subject:'',
        post:''
    });
            
    useEffect(() => {
        console.log(post);
        PostService.getPostByUserId(location.state)
        .then((res) =>{
            console.log(res.data);
            setPost(res.data);
        });
    }, []);
    
    function DelPost(e) {
        e.preventDefault();
        let Post = {
            postId: post.postId,
            name: post.name,
            subject: post.subject,
            post: post.post
        };
    

    let confirmation = window.confirm("Delete post?")

    if(confirmation){
        PostService.deletePost(Post.postId)
            .then((res) => {
                console.log(res.data);
                navigate('/deletePost');
                alert("Post Deleted!")
                window.location.href = "/getAll"; 
            })
            .catch((err) => {
                console.log("Post was not deleted");
            });
        }
    }

    

    
    return(
        <div>
            <table>
                <thread>
                    <tr>
                        <th>
                            <h3>Post ID: {post.postId}</h3>
                        </th>
                        <th></th>
                    </tr>
                </thread>
                <tbody>
                    <tr>
                        <td>Name: {post.name}</td>
                    </tr>
                    <tr>
                        <td>Subject: {post.subject}</td>
                    </tr>
                    <tr>
                        <td>Post: {post.post}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={(e) => DelPost(e)}>Delete</button>
            <button onClick={() => window.location.href = "/getAll"}>Cancel</button>
        </div>
    );
}


export default DeletePost;