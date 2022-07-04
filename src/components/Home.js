import { useState, useEffect } from "react";  // Grabs the useState hook function from the React library 
import BlogList from "./BlogList"; 

export default function Home() { // parent component 
    const [blogs, setBlogs] = useState([  // an array of objects 
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },  // Each id must be unique 
        { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Luigi', id: 2 }, 
        { title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'Mario', id: 3 } 
    ]) 

    // Creating a new piece of state 
    const [name, setName] = useState('Mario'); 

    // Stored in the Home Component to interact with the data directly and then passed as a prop to equal its function 
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id); // Doesn't change blogs data just filters a new array. Fires a function for each blog - filters - returns a boolean 

        setBlogs(newBlogs); // using the function to set/change to the new value 
    } 

    useEffect(() => { // passes as an argument a function 
        console.log('use effect ran'); 
        //console.log(blogs); 
        console.log(name); 
    }, [name]);  // Dependency Array - empty [] passes useEffect function once - first render 
    // A state in the array (second argument) becomes a dependency - will render useEffect function at beginning and also when a certain value changes 

    return(
        <div className="home">
            <BlogList blogs={ blogs } title='All Blogs!' handleDelete={handleDelete} />  {/* child component */} 
            {/* create any property name to access the data to pass in as a prop - it's a prop. Can pass multiple props- string or dynamic values */} 

            {/* Change to the new state */} 
            <button onClick={() => setName('Luigi')}>Change Name</button> 
            <p>{ name }</p> 
        </div> 
    ) 
} 

// useEffect Hook Notes 
// useEffect Hook - runs code/function on every render of the component 
// import it at the top from the React library 
// placed above return 
// passes as an argument a function which will run each time there is a re-render - when it first loads and each time the data changes 
// usually in the function is used to fetch data or communicate with an authentication service known as "Side Effects" 
// useEffect can also access the state 
// best to not change the state in useEffect - result in a loop of renders changing the state 

// useEffect Dependencies Notes 
// To do only certain renders instead of every render 
// Dependency Array - passing an array inside the useEffect hook as a second argument 
// [] - an empty array makes the above useEffect function only run once on the first render (good to only run once) 
// Adding actual dependencies (state values) in the [] array that should trigger the useEffect function to run when it changes -> new state example  
// a state in the array (second argument) becomes a dependency ex: ...[name]); - will render useEffect function at beginning and also when a certain value changes 



// Click Event Notes 
// e - event object 
// e.target - an event property which gets the event target (where it comes from) 
// e function 
// Anonymous function 

// export default function Home() {
//     // e - event object 
//     const handleClick = (e) => {
//         console.log('hello, world', e);  // consoles properties of the event object 
//     } 

//     const handleClickAgain = (name, e) => {
//         console.log('hello ' + name, e.target);  // gets the event target -> <button>Click Me Again!</button> 
//     }

//     return(
//         <div className="home">
//             <h2>Homepage</h2> 

//             {/* Adding Click Events */} 
//             <button onClick={handleClick}>Click Me!</button> 

//             {/* Anonymous Function Example */} 
//             <button onClick={(e) => handleClickAgain('Luigi', e)}>Click Me Again!</button>
//         </div>
//     )
// } 


// useState Hook Notes 
// Hook - a type of function that does a certain job -> Always starts with "use" 
// useState - creates a state for a component - to make a reactive value (a number, object, array, boolean, string) which can then be changed whenever needed 
// [] - Array destructuring to grab two values the hook is returning ex: const [_value_, _function_] 
// _Value_ - anything we want to call the value 
// _Function_ -> _set'Name of value'_ - the function will usually be 'set____' and the name of the value 

// export default function Home() {
//     // Adding variables to then be changed 
//     //let name = 'mario';  // not reactive - react doesn't watch if it changes -> have to make the value reactive 

//     // Reactive Value
//     const [name, setName] = useState('Mario'); 
//     const [age, setAge] = useState(25); 

//     const handleClick = () => {
//         // name = 'Luigi'; 
//         // console.log(name);  // will console the name but not change it when the button is clicked - not reactive

//         // Using the function to Change the Value - will render the new value 
//         setName('Luigi'); 
//         setAge(30); 
//     } 

//     return(
//         <div className="home">
//             <h2>Homepage</h2> 

//             <p>{ name } is { age } years old.</p> 

//             <button onClick={handleClick}>Click Me!</button> 
//         </div>
//     ) 
// } 


// Outputting Lists Notes 
// Outputting Lists of Data 
// An array of objects 
// Cycle through the array to template/return JSX template for each one 
// Map Method - cycles through the array and can display each item in it by using JS in {} 
// {_value_.map((_'name of choice'_) => ( ))}  -> returns a function 
// Each element that is returned must have a Key property key{} to distinguish each item 
// key{} - this property keeps track of each item as it outputs it, new items added too 
// Unique "id" or property is needed for each object in the array for it to work 

// export default function Home() {
//     const [blogs, setBlogs] = useState([  // an array of objects 
//         { title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },  // Each id must be unique 
//         { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Luigi', id: 2 }, 
//         { title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'Yoshi', id: 3 }, 
//     ])
//     return(
//         <div className="home">
//             {blogs.map((blog) => (
//                 <div className="blog-preview" key={blog.id}>
//                     <h2>{ blog.title }</h2> 
//                     <p>Writen by: { blog.author }</p> 
//                 </div> 
//             ))} 
//         </div> 
//     ) 
// } 


// Reusing Componenets 
// filter() - method can be used to filter an array and a callback function as a Boolean (true or false) 
// filters what you want to see and filters out what is not asked for 
// ex: {blogs.filter((blog) => blog.author === 'Mario")} 

// export default function Home() { // parent component 
//     const [blogs, setBlogs] = useState([  // an array of objects 
//         { title: 'My New Website', body: 'lorem ipsum...', author: 'Mario', id: 1 },  // Each id must be unique 
//         { title: 'Welcome Party!', body: 'lorem ipsum...', author: 'Luigi', id: 2 }, 
//         { title: 'Web Dev Top Tips', body: 'lorem ipsum...', author: 'Mario', id: 3 }, 
//     ])

//     return(
//         <div className="home">
//             <BlogList blogs={ blogs } title='All Blogs!' />  {/* child component */} 
//             {/* create any property name to access the data to pass in as a prop - it's a prop. Can pass multiple props- string or dynamic values */} 

//             <BlogList blogs={ blogs.filter((blog) => blog.author === 'Mario') } title="Mario's Blogs!" /> 
//             {/* filter() method used to filter the array and return a boolean on the callback function */} 
//         </div> 
//     ) 
// } 
