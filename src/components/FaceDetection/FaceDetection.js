import React from 'react'
import './FaceDetection.css'

const FaceDetection = ({ImageURL,box}) => {
	return(
		<div className="centerClass mt3">
			<div className="absolute">
				<img id="image" src={ImageURL} alt="" style={{width: '500px', height:'auto'}}/>
				<div className="boundingBox" style={{top:box.top_row, left: box.left_col, right: box.right_col, bottom: box.bottom_row }}></div>
			</div>
		</div>
	)
}

export default FaceDetection;