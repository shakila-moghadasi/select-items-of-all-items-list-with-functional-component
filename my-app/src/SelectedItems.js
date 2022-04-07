import React from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SelectedItems(props) {
  const { selectedItems } = props;
  return (
    <ListGroup>
        <h4>Selected Items</h4>
      {selectedItems.map( (d) => <ListGroup.Item>
       {d}
        </ListGroup.Item>
      )}
   </ListGroup>
  )
}



