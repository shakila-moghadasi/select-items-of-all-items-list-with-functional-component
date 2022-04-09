import React from "react";
import { ListGroup , ListGroupItem } from "react-bootstrap";
import { useState , useEffect } from "react";
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SlelectedItems from './SelectedItems';


export const checkcontext = React.createContext()

export default function App() {
    const [data, setData] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/nshntarora/Indian-Cities-JSON/master/cities.json")
        .then((e) => e.json())
        .then((res)=> setData(res))
},[])



const addTask = (event) => {
    var checkList = [...tasks];
    const out = data[event.target.id-1]
    if (event.target.checked) {
        checkList = [...tasks, out["name"]];
        console.log(event.target.id);
    } else {
        checkList.splice(tasks.indexOf(out["name"]), 1);
    }
    setTasks(checkList);
}

return (
    <>
    <checkcontext.Provider value={tasks}>
    <ListGroup className="All">
            <h4>AllItems</h4>
            {data.map( (d) => <ListGroupItem className="All">
               <Form.Check 
                type="checkbox"
                id={d.id}
                label={d.name}
                onClick={addTask} 
                />
            </ListGroupItem>
            )}
    </ListGroup>
    <SlelectedItems value={tasks}/>
    </checkcontext.Provider>
    </>
)
}