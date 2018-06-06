import React from 'react'

const Navigation = ({changeRoute}) => {
	return(
		<div>
			<nav className="pa3" style={{display:"flex", justifyContent: "flex-end"}}>
				<p onClick={() => changeRoute('signin')} className="f3 dim pointer underline">Sign Out</p>
			</nav>	
		</div>
	)
}

export default Navigation;