import React from "react"

function SortPigs({pigs, setPigsToDisplay}) {
    function handleChange(event) {
        const userInputName = event.target.value.toLowerCase()
        console.log(userInputName.toLowerCase())
        const sortedPigs = pigs.filter((pig) => {
            return pig.name.toLowerCase() === userInputName
        })
        if (sortedPigs.length > 0) {
            setPigsToDisplay(sortedPigs);
        }
    }
function handleWeightChange(event) {
    const userInputWeight = event.target.value;
    const sortedPigs = pigs.filter((pig) => {
        return pig.weight <= userInputWeight
    })
    if (sortedPigs.length > 0) {
        setPigsToDisplay(sortedPigs);
    }
}
    return (
        <div>
            <input placeholder="Sort by pig name" onChange={handleChange}></input>
            <input placeholder="Sorty by max weight" onChange={handleWeightChange}></input>
        </div>
    )
}

export default SortPigs;