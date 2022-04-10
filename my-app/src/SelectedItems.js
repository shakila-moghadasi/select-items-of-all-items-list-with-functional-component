import React, { Component, useDebugValue } from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { checkcontext } from './App';



export default class SelectedItems extends Component {

  render(){
  return (
    <div className="select" >
    <h4>Selected Items</h4>
    <checkcontext.Consumer>
        {(tasks) => tasks.map( (d) =>  
          <ListGroup className="select">
          {d}
          </ListGroup> )}
   </checkcontext.Consumer>
   </div>
   )
}
}



