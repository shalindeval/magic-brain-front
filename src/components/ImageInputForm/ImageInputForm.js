import React from 'react'

const ImageInputForm = ({inputChange,detectClick}) => {
	return(
		<div className="centerClass mt3">
			<input onChange={inputChange} className="pa3 bg-lightest-blue f3" type="text" placeholder="Enter Image URL" />
			<button onClick={detectClick} className="pa3 bg-purple white f3 grow">Detect</button>
		</div>
	)
}

export default ImageInputForm;