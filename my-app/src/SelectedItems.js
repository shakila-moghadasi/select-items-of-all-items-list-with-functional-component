import React from 'react'
import {ListGroup} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function SelectedItems(props) {
  const { selectedItems } = props;
  return (
    <ListGroup className="select">
        <h4>Selected Items</h4>
            {selectedItems.map( (d) => <ListGroup.Item className="select">
                {d}
        </ListGroup.Item>
      )}
   </ListGroup>
  )
}



