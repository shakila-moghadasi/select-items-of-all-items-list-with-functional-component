import React, { useState,useEffect } from "react";
import { ListGroup , ListGroupItem } from "react-bootstrap";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




export default function AllItems() {
    const [data, setData] = useState([])
    const [checked, setChecked] = useState([]);

    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
          updatedList = [...checked, event.target.value];
        } else {
          updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
      };

    useEffect(() => {
        fetch("https://624e08bc53326d0cfe566ebc.mockapi.io/country")
        .then((e) => e.json())
        .then((res)=> setData(res))
},[])

return (
    <div>
        <ListGroup>
            <h4>AllItems</h4>
            {data.map( (d) => <ListGroupItem variant="info">
               <Form.Check 
                type="checkbox"
                id={d.id}
                label={d.name}
                onClick={handleCheck}
                />
            </ListGroupItem>)}
        </ListGroup>
    </div>
)
}