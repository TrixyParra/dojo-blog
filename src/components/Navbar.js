import { Link } from 'react-router-dom'; 

export default function Navbar() {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1> 
            <div className="links">
                <Link to="/">Home</Link> 
                <Link to="/create">New Blog</Link> 
            </div>
        </nav>
    ); 
} 


{/* <a href="/create" style={{
    color: 'white', 
    backgroundColor: '#f1356d', 
    borderRadius: '5px'
}}>New Blog</a>  */}

// Router Links Notes 
// import { Link } from 'react-router-dom'; on Navbar.js file 
// To handle the routing only in the browser, replace anchor tags with Link 
// Link doesn't use href="__" it uses to="__" 
// - ex: <a href="/">Home</a> switches to <Link to="/">Home</Link> 
// using Link prevents from making request to the server and instead looks at url and matches it to the selected Route injecting only the needed content 
// makes it quicker switching to new pages compared to making a request to each page through the server 
// .... error not shown in this latest version 