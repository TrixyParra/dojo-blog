// Props and Reusable Components Notes 

// Reusable Components - can be used repeatedly in other components without having to reapeat the logic 
// can pass data to external components in the form of props 

// Props - passes data from a parent component to a child component 
// makes data more reusable 
// ...  BlogList(props) 

// destructuring without storing the props -> ({blogs, title}) -> comment out const blogs and const title stored below 

export default function BlogList({ blogs, title, handleDelete }) { // receives/passes blogs/props into this component 
    // grabbing and storing the blogs/props in the constant 
    // const blogs = props.blogs; 
    // const title = props.title; 

    //console.log(props, blogs); 

    return (
        <div className="blog-list">
            <h2>{ title }</h2> 

            {/* Cycling through the constant */} 
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2> 
                    <p>Writen by: { blog.author }</p> 

                    {/* Pass in an anonymous function */}
                    <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
                </div> 
            ))} 
        </div> 
    ) 
} 


// Functions as Props Notes 
// Deleting and Item 
// Pass in an anonymous function on the onClick click event handler 
// handleDelete function is stored in the Home Component so it can interact with the data directly 
// which is then passed through as a prop to be qual to its function 
// the prop is then accepted here - passing a function as props 
// invoking the function here which is stored in the Home component which is going to pass the function in it 
// that's how to pass functions into other components as props 
// ...not a dependency 