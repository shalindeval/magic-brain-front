import React, { Component } from 'react';
import './App.css';
import 'tachyons'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageInputForm from './components/ImageInputForm/ImageInputForm'
import FaceDetection from './components/FaceDetection/FaceDetection'
import Register from './components/Register/Register'
import SignIn from './components/SignIn/SignIn'

const initialState = {
      ImageInput:"",
      ImageURL:"",
      box:{},
      route:'signin',
      user:{
        name:"",
        email: "",
        password:""
      }
    }

class App extends Component {
  constructor(){
    super();
    this.state = initialState
  }

  calculateBox = (data) =>{
    const clarifaiData = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('image')
    const height = Number(image.height)
    const width = Number(image.width)
    return({
      top_row: height * clarifaiData.top_row,
      bottom_row: height - (height*clarifaiData.bottom_row),
      left_col: width * clarifaiData.left_col,
      right_col: width - (width * clarifaiData.right_col)
    })
  }

  displayBox = (box) =>{
    this.setState({box:box})
  }

  inputChange = (event) =>{
    this.setState({ImageInput:event.target.value})
  }

  detectClick = (event) =>{
    this.setState({ImageURL:this.state.ImageInput})
    //clarifai api
    fetch('http://localhost:3001/detect',{
      method: 'post',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({
        input: this.state.ImageInput
      })
    })
    .then(response=>response.json())
    .then(response=>this.displayBox(this.calculateBox(response)))
    .catch(console.log)
  }

  changeRoute = (route) =>{
    if(route==="signin"){
      return this.setState(initialState)
    }
    this.setState({route:route})
  }

  loadUser =(user) => {
    this.setState({
      user:{
        name: user.name,
        email:user.email,
        password:user.password
      }
    })
  }

  render() {
    return (
      <div className="App center">

        {
          this.state.route==='home'?
            <div>
            <Navigation changeRoute={this.changeRoute} />
            <Logo />
            <ImageInputForm inputChange={this.inputChange} detectClick={this.detectClick}/>
            <FaceDetection ImageURL={this.state.ImageURL} box={this.state.box} />
            </div>
          :this.state.route==='register'?
            <Register changeRoute={this.changeRoute} loadUser={this.loadUser}/>

            :<SignIn changeRoute={this.changeRoute} loadUser={this.loadUser}/>
        }
      </div>
    );
  }
}

export default App;
