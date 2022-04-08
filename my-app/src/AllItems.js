import React, { useState,useEffect } from "react";
import { ListGroup , ListGroupItem } from "react-bootstrap";
import SelectedItems from "./SelectedItems";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


export default function AllItems() {
    const [data, setData] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("https://624c52f7d71863d7a8084ea7.mockapi.io/country")
        .then((e) => e.json())
        .then((res)=> setData(res))
},[])


const addTask = (event) => {
    var checkList = [...tasks];
    if (event.target.checked) {
        checkList = [...tasks, event.target.value];
    } else {
        checkList.splice(tasks.indexOf(event.target.value), 1);
    }
    setTasks(checkList);
} 

return (
    <div className="App" >
        <ListGroup>
            <h4>AllItems</h4>
            {data.map( (d) => <ListGroupItem variant="info">
               <Form.Check 
                type="checkbox"
                id={d.id}
                label={d.name}
                onClick={addTask} 
                />
            </ListGroupItem>
            )}
        </ListGroup>
        <SelectedItems 
            selectedItems={tasks}
        />    
    </div>
)
}