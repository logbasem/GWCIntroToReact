import './Demo.css'
import { useState, useEffect } from 'react'

function Demo(props) {
    /* This is where the logic lives! */
    const [count, setCount] = useState(0)

    const animalNoises = ["Meow", "Woof", "Moo", "Quack", "Neigh"]

    useEffect(() => {
        console.log("Component rendered!")
    }, [])

    function handleButtonClicked() {
        setCount(count + 1)
        alert("Button clicked!")
    }

    useEffect(() => {
        console.log("Count: " + count)
    }, [count])

    return (
        <>
        <div className="header">
            <h1>Welcome, {props.name}!</h1>
        </div>
        <div className="main">
            <p>This is a demo component.</p>
            <button onClick={handleButtonClicked}>Woah, a button!</button>
            <button onClick={() => setCount(0)}>Reset Count</button>
        </div>
        <div className="counter">
            Count: {count}
        </div>
        </>
    )
}

export default Demo