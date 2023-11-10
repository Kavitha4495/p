import React, { Component } from 'react'
import { FaCentercode } from 'react-icons/fa'
import ClassComponents from '../ClassComponents'

export default class ClassBasedCompon extends Component {
    state={
        name:"Matrical"
    }
  render() {
    return (
        <center>
            
            <ClassComponents file name={this.state.name}/>
        </center>
      
    )
  }
}
