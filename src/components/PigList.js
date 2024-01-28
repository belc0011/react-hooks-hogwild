import React from "react"
import Pig from "./Pig"

function PigList({ pigsToDisplay } ) {
    console.log(pigsToDisplay)
    
    return (
        <div className="ui grid container">
            {pigsToDisplay.map((pig) => {
                return (
                   <Pig key={pig.name} pig={pig} /> 
                )
            })}
        </div>
    )
}

export default PigList;