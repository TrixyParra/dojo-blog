import { useState, useEffect } from 'react'; 

const useFetch = (url) => { // pass endpoint into the function instead to make reuseable 
    const [data, setData] = useState(null)   // changed from blogs to data to make it reuseable 
    const [isPending, setIsPanding] = useState(true);  // new state for loading message/conditional 
    const [error, setError] = useState(null); 

    useEffect(() => { // passes as an argument a function 
        setTimeout(() => {
            fetch(url)  // GET request .. then returns a promise .. a promise - url will be the new fetch 
                .then(res => {      // response object - with it to then get the data 
                    // console.log(res); 
                    if (!res.ok) {
                        throw Error('could not fetch the data for that resource') 
                    } 
                    return res.json()      // gets the data .. returns a new promise 
                }) 
                .then(data => {   // takes in as a parameter the data the first promise gets us 
                    //console.log(data); 
                    setData(data);     // setData to update the state, the data .. takes in data to get the data 
                    setIsPanding(false);    // once false it won't show 
                    setError(null);     // set to null if there is no error 
                }) 
                .catch(err => {     // catch a network error 
                    //console.log(err.message);  // displays "Failed to fetch" on console 
                    // displays could not fetch the data for that resource - catches the res error message from above 
                    setIsPanding(false); 
                    setError(err.message);  // will catch any error message to display 
                })
        }, 1000)  // loading message shows and disappears after 1 second when then the data is revealed 
    }, [url]);  // Dependency Array - empty [] passes useEffect function once - first render 
    // A state in the array (second argument) becomes a dependency - will render useEffect function at beginning and also when a certain value changes 

    return { data, isPending, error } 
} 

export default useFetch; 


// Making/Creating a Custom Hook Notes 
// Custom Hook - externalizing the logic into its own file. 
// makes it reuasable for other components that need to use/fetch the same data without having to rewrite it in each component. 
// use____ - needs to start with use 
// ex: const useFetch = () => { } - will equal to an arrow function 
// bring the whole useEffect with fetch statement in it and also the states to this file 
// import useState and useEffect at top 
// change blogs, setBlods to data, setData - to make it reusable for other categories when fetching data 
// can return return{} some values - an object with values ex: the 3 objects we have - to be able to grab/use the properties from the hook 
// pass endpoint into the function - other components might not use the same url so we don't want to hard code it 
// (url) - is used instead - in function, in fetch, and as a dependency to useEffect - when url changes it will rerun the function to get the data for that endpoint 
// import useFetch component to Home 
// destructure the 3 properties that are returned 
// const { data, isPending, error } = useFetch('http://localhost:8000/blogs'); 
// - can return as objects because then the order of the properties doesn't matter when destructuring them - can use one or the other if not all 
// - equal it to useFetch and pass the url/fetch/endpoint link as a parameter 
// const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs'); 
// data: blogs - grab the data but call it blogs in this context (Home.js line 12) or switch { blogs } to { data } in line 12 