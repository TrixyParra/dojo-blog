//import logo from './logo.svg';
//import './App.css';
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Create from './components/Create';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> 

        <div className="content">
          {/* <Home />  */} 
          <Routes>
            <Route path="/" element={ <Home /> } /> 
            <Route path="/create" element={ <Create /> } /> 
          </Routes> 
        </div> 
      </div> 
    </Router> 
  );
}

export default App; 





// NOTES
// App.js - Root Component of the Application 
// Component - is a function that returns a JSX template which is then exported to the Root file 

// function App() {
//   // Can output Strings, Numbers and Arrays 
//   const title = 'Welcome to the New Blog!'; 
//   const likes = 50; 
//   //const person = { name: 'Yoshi', age: '30' }; // Can't output Objects and Booleans 
//   const link = 'http://google.com'; 

//   return (
//     // JSX - allows to create React Components (HTML syntax in React) 
//     <div className="App">
//       <div className="content">
//         <h1>{ title }</h1>        {/*{____} is a Dynamic Value  */} 
//         <p>Liked { likes } times</p> 

//         {/* <p>{ person }</p> */} 

//         {/* JS statements and evaluations can be placed directly inside Dynamic Values - outputs into strings */}
//         <p>{ 10 }</p> 
//         <p>{ 'Hello, world' }</p> 
//         <p>{ [1,2,3,4,5] }</p> 
//         <p>{ Math.random() * 10 }</p>  

//         {/* in JSX Dynamic values can also be used to distribute Atrribute Values  */} 
//         <a href={ link }>Google Site</a> 
//       </div>
//     </div>
//   );
// }

// export default App;


// The React Router Notes 
// React Router - using/handling multiple pages 
// Non-React Websites - cycle from webpage (html) to server -> server returns to new html page -> cycle repeats to go to new pages 
// React Websites - makes request to server -> server returns empty html but also returns the React js bundle and injects all the data/components that were created - it controls the webpage and returns component based on selected link request in the browser - Makes less requests to the server making the website faster and slicker 
// Install react router - npm i react-router-dom 
// check package.json to see that it was installed and the version too 
// App.js - import few things from react-router-dom 
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; - Switch no longer works 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
// Step 1: surround the entire application with the router component so the whole application and components in it can have access to it. ex: shown on App.js 
// <Router></Router> 
// Step 2: decide where we want our page content to go when we go to different pages 
// Switch component <Switch></Switch> - will make sure that only one route shows at any one time. All routes go inside the Switch component 
// ** Switch is now Routes - rplace Switch with Routes 
// Step 3: Set up individual routes for each page we have using Route 
// Route component <Route></Route> - create route for each page 
// add property to route component which is going to be the path 
// <Route path="/" element={ _<Home />_ } /> - or can be "/about" "/contact" etc. - path after url 
// place the component inside the element property in Route 
// Content inisde Routes will change depending on the Route 

// import Home from './components/Home'; 
// import Navbar from './components/Navbar'; 
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar /> 

//         <div className="content">
//           {/* <Home />  */} 
//           <Routes>
//             <Route path="/" element={ <Home /> } /> 
//           </Routes> 
//         </div> 
//       </div> 
//     </Router> 
//   );
// }

// export default App; 


// More Routes and Exact Match Routes Notes 
// Ceate a new Route 
// - new File in src folder Create.js with function Create 
// - import and add to new Route in App.js 
// <Route path="/create" element={ <Create /> } /> 
// React scans from top to bottom to match onto which page to switch to/load - ex: /create 
// add "exact" prop to go to exact page match -> NO longer needed in version 6 