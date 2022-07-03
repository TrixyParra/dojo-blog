export default function Home() {
    // e - event object 
    const handleClick = (e) => {
        console.log('hello, world', e);  // consoles properties of the event object 
    } 

    const handleClickAgain = (name, e) => {
        console.log('hello ' + name, e.target);  // gets the event target -> <button>Click Me Again!</button> 
    }

    return(
        <div className="home">
            <h2>Homepage</h2> 
            {/* Adding Click Events */} 
            <button onClick={handleClick}>Click Me!</button> 

            {/* Anonymous Function Example */} 
            <button onClick={(e) => handleClickAgain('Luigi', e)}>Click Me Again!</button>
        </div>
    )
}