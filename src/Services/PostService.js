import axios from 'axios';

const POST_API_BASE_URL = "http://localhost:8080/api";

class PostService{
    getPosts(){
        return axios.get(POST_API_BASE_URL+"/getAll/");
    }


    addPost(post){
        return axios.post(POST_API_BASE_URL+"/add",post);
    }

    getPostByUserId(postId){
        return axios.get(POST_API_BASE_URL+"/post/"+postId);
    }

    updatePost(post, postId){
        return axios.put(POST_API_BASE_URL+"/post/"+postId,post);
    }

    deletePost(postId){
        return axios.delete(POST_API_BASE_URL+"/post/"+postId);
    }


}

export default new PostService();