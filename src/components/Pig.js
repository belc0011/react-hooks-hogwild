import React, {useState} from "react"

function Pig({ pig }) {
    const [displayedPig, setDisplayedPig] = useState([])
    function handleClick(event) {
        setDisplayedPig(pig);
    }
    return (
    <div key={pig.name} className="ui eight wide column">
        <div className="pigTile" onClick={handleClick}>
        <h1 >{pig.name}</h1>
        <img src={pig.image} alt={pig.name} />
        {(displayedPig.name === pig.name) ? <ul>
            <li>Specialty: {pig.specialty}</li>
            <li>Weight: {pig.weight}</li>
            <li>Greased: {(pig.greased) ? "Yes" : "No"}</li>
            <li>Highest medal achieved: {pig["highest medal achieved"]}</li>
        </ul> : null}
        </div>
    </div>
    )
}

export default Pig