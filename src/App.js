
import './App.css';
import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import Form from './Component/Form';

const text= "Enter your text here"

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar title={"myweb"} home={"home"} about={"about"} />
        <Form text={text} />
        
      
      </div>
    )
  }
}


















