import React, {useState} from "react";
import Nav from "./Nav";
import PigList from "./PigList"
import GreasedFilter from "./GreasedFilter"
import SortPigs from "./SortPigs"

import hogs from "../porkers_data";

function App() {
	const [pigsToDisplay, setPigsToDisplay] = useState(hogs)
	
	return (
		<div className="App">
			<Nav />
			<GreasedFilter pigs={hogs} setPigsToDisplay={setPigsToDisplay} />
			<SortPigs pigs={hogs} setPigsToDisplay={setPigsToDisplay}/>
			<PigList pigsToDisplay={pigsToDisplay} />
		</div>
	);
}

export default App;
