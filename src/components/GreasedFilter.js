import React from "react"
import Pig from "./Pig"

function GreasedFilter({pigs, setPigsToDisplay}) {
    console.log("greasedFilter")
    function handleChange(event) {
		const selection = event.target.value;
		let selectedValue
		if(selection === "true") selectedValue = true;
		else if(selection === "false") selectedValue = false;
		const filteredPigs = pigs.filter((pig) => {
			return pig.greased === selectedValue
		})
		setPigsToDisplay([...filteredPigs])
	}
    return(
        <div>
            <select onChange={handleChange}>
                    <option value="default">Select to view greased/non-greased pigs</option>
                    <option value={true}>Greased</option>
                    <option value={false}>Non-greased</option>
            </select>
        </div>
    )
}

export default GreasedFilter;