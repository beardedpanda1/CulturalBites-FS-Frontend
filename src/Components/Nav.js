//import browser router component(maybe layout) 
import {Link} from "react-router-dom";

function Nav() {
  return (
    <div>
    <nav><center>
        <ul className="nav-links">
            <Link to="home" className="link">Home</Link>
            <Link to="recipes" className="link">Search by Letter</Link>
            <Link to="randomRecipes" className="link">Recipes</Link>
            <Link to="about" className="link">About</Link>
            <Link to="contact" className="link">Contact us</Link>
            <h3 className="PageTitle">Welcome to Cultural Bites!</h3>
        </ul>
    </center></nav>
            <Link to="/getAll" className="link">All Posts</Link>
            <Link to="/add" className="link">Add Post</Link>
            <Link to="/updatePost/" className="link">Update Post</Link>
            <Link to="/deletePost/" className="link">Delete Post</Link>
            <Link to="/viewPost/" className="link">View Post</Link>
            
    </div> 
            
  )
}

export default Nav;
