import React, {Component} from 'react'

class SignIn extends Component{

	constructor(props){
		super(props)
		this.state = {
			email: "",
			password: ""
		}
	}

	onEmailChange = (event) => {
		this.setState({email:event.target.value})
	}

	onPasswordChange = (event) =>{	
		this.setState({password:event.target.value})
	}

	onSignin = () =>{
		fetch('http://localhost:3001/signin',{
			method:'post',
			headers:{'content-type':'application/json'},
			body:JSON.stringify({
				email:this.state.email,
				password:this.state.password
			})
		})
		.then(response=>response.json())
		.then(data=>{
			if(data.id){
				this.props.loadUser(data)
				this.props.changeRoute('home')
			}
		})
		.catch(console.log)
	}
	
	render(){
		return(
			<main className="pa3 black-80 dib shadow-5">
			  <div className="measure center">
			      <legend className="f4 fw6 ph0 mh0">Sign In</legend>
			      <div className="mt3">
			        <label className="db fw6 lh-copy f6" for="email-address">Email</label>
			        <input onChange={this.onEmailChange} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
			      </div>
			      <div className="mv3">
			        <label className="db fw6 lh-copy f6" for="password">Password</label>
			        <input onChange={this.onPasswordChange} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
			      </div>
			    <div>
			      <input onClick={this.onSignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign In" />
			      <p onClick={() => this.props.changeRoute('register')} className="dim pointer">Register</p>
			    </div>
			  </div>
			</main>
		)
	}
}


export default SignIn;