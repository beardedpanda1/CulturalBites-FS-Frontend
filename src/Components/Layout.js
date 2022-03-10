import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Home';
import RandomRecipes from './RandomRecipes';
import About from './About';
import Contact from './Contact';
import Nav from './Nav';
import Recipes from './Recipes';
import ListPosts from './Blog/ListPosts';
import AddPost from './Blog/AddPost';
import UpdatePost from './Blog/UpdatePost';
import DeletePost from './Blog/DeletePost';
import ViewPost from './Blog/ViewPost';



function Layout() {
  
  return( 
        
    <Router>
        <Nav /> 
        <br />
        <br />
        
        {/* context or useState == pass down to search to retrieve and then render*/}
        <div  className="App">
            <Routes>
                <Route path="home" element={<Home />} />
                <Route path="recipes" element={<Recipes />} />
                <Route path="randomRecipes" element={<RandomRecipes />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="/getAll" element={<ListPosts />} />
                <Route path="/add" element={<AddPost />} />
                <Route path="/updatePost/" element={<UpdatePost />} />
                <Route path="/deletePost/" element={<DeletePost />} />
                <Route path="/viewPost/" element={<ViewPost />} />
                
            </Routes>

        </div>
         
    </Router>

    
        
  )
}

export default Layout;
