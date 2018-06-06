import React, {Component} from 'react'

class Register extends Component{
	
	constructor(props){
		super(props)
		this.state = {
			name: "",
			email: "",
			password: ""
		}
	}

	registerName = event =>{
		this.setState({name:event.target.value})
	}

	registerEmail = (event) =>{
		this.setState({email:event.target.value})
	}

	registerPassword = (event) =>{
		this.setState({password:event.target.value})
	}

	onRegister = () =>{
		fetch("http://localhost:3001/register",{
			method: 'post',
			headers: {
				'content-type':'application/json' 
			},
			body: JSON.stringify({
				name:this.state.name,
				email:this.state.email,
				password:this.state.password
			})
		})

		.then(response => response.json())
		.then(data => {
			if(data.id){
				this.props.loadUser(this.state)
				this.props.changeRoute('home')
			}else{
				console.log(data)
			}
		})

		.catch(err=>console.log(err))
	}
	


	render = () => {
		return(
		<main className="pa3 black-80 dib shadow-5">
		  <div className="measure center">
		      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="name">Name</label>
		        <input onChange={this.registerName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name"  id="name" />
		      </div>
		      <div className="mt3">
		        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
		        <input onChange={this.registerEmail} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
		      </div>
		      <div className="mv3">
		        <label className="db fw6 lh-copy f6" for="password">Password</label>
		        <input onChange={this.registerPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
		      </div>
		    <div>
		      <input onClick={this.onRegister} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Register" />
		      <p onClick={()=>this.props.changeRoute('signin')} className="dim pointer">Sign in</p>
		    </div>
		  </div>
		</main>
		)
	}

	
}

export default Register;