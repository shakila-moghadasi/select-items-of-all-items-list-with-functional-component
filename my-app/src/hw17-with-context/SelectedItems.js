import React, { Component } from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkcontext } from './App';



export default class SelectedItems extends Component {

  render(){
  return (
    <checkcontext.Consumer>
    <ListGroup className="select">
        <h4>Selected Items</h4>
        {tasks => {  
          return  tasks.map( (d) =>  d )
        }}  
   </ListGroup>
   </checkcontext.Consumer>
  )
  }
}



