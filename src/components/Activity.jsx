import { useState } from "react"

function Activity({ level, children }){
    const [done, setDone] = useState(false);

    const toggleActivity = () =>{
        setDone(!done);
    }

    return (
        <div style={{ backgroundColor: done ? "green" : "red" }}>
            <h3>Importanza {level}</h3>
            <p>{children}</p>
            <button onClick={toggleActivity}>Done</button>
        </div>
    )
}

export default Activity;

