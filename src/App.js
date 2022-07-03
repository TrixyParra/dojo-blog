//import logo from './logo.svg';
//import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar /> 

      <div className="content">
        <Home /> 
      </div>
    </div>
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
