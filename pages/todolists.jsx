import { useEffect, useState } from "react";
import Todo from "../components/Todo";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import MainLayout from "../layouts/MainLayout";

export default function todolists() {
  const [value, setValue] = useState(0);
  function ForceUpdate(){
    setValue(value+1);
    return;
  };

  const [todolists, setTodolists] = useState([]);

  const deleteTodo = (idx) => {
    todolists.splice(idx, 1);
    for(let i = 0; i < todolists.length; i++) todolists[i].id = i;
    ForceUpdate();
    saveTodo();
    return;
  };

  const markTodo = (idx) => {
    if(todolists[idx].done.textDecoration === "") todolists[idx].done = {textDecoration: "line-through"};
    else todolists[idx].done = {textDecoration: ""};
    //alert("Fucked you Mark Suckerberg.");
    ForceUpdate();
    saveTodo();
    return;
  };

  const moveUp = (idx) => {
    if(idx === 0) return;
    let temp = todolists[idx];
    todolists[idx].toggle = false;
    todolists[idx] = todolists[idx-1];
    todolists[idx-1] = temp
    todolists[idx].id = idx;
    todolists[idx-1].id = idx-1;
    ForceUpdate();
    saveTodo();
    return;
  };

  const moveDown = (idx) => {
    if(idx === todolists.length-1) return;
    let temp = todolists[idx];
    todolists[idx].toggle = false
    todolists[idx] = todolists[idx+1];
    todolists[idx+1] = temp
    todolists[idx].id = idx;
    todolists[idx+1].id = idx+1;
    ForceUpdate();
    saveTodo();
    return;
  };

  const doneUpdate = () =>{
    let count = 0;
    for(let i = 0; i < todolists.length; i++) if(todolists[i].done.textDecoration === "line-through") count++;
    return count;
  };

  const updateToggle = (id, event) => {
    if(event === "mouseIn") todolists[id].toggle = true;
    else if(event === "mouseOut") todolists[id].toggle = false;
    ForceUpdate();
    return;
  };

  const keyUpHandler = event => {
    if (event.key === 'Enter'){
      if(event.target.value === ""){
        alert("Todo cannot be empty");
        return;
      }
      let temp = [{id: 0, list: `${event.target.value}`, done:{textDecoration: ""}, toggle: false}];
      if(todolists){
        for(let i = 0; i < todolists.length; i++){
          temp[i+1] = todolists[i];
          temp[i+1].toggle = false;
        }
      }
      for(let i = 0; i < temp.length; i++) temp[i].id = i;
      setTodolists(todolists = temp);
      //console.log(todolists);
      event.target.value = "";
      saveTodo();
    }
    return;
  };

  const saveTodo = () => {
    localStorage.clear();
    const dataStr = JSON.stringify(todolists);
    if (typeof window !== 'undefined'){
      localStorage.setItem("todoListData", dataStr);
    }
    return;
  };

  const loadTodo = () => {
    const dataStr = [];
    if (typeof window !== 'undefined'){
      dataStr = localStorage.getItem("todoListData");
    }
    const data = JSON.parse(dataStr);
    if(!data) data = [];
    for(let i = 0; i < data.length; i++) data[i].toggle = false;
    setTodolists(todolists = data);
    return;
  };

  useEffect(() => { loadTodo(); }, []);

  return (
    <MainLayout>
        <div>
          {/* Entire App container (required for centering) */}
          <div style={{ maxWidth: "700px" }} className="mx-auto">
            {/* App header */}
            <p className="display-4 text-center fst-italic m-4">
              Minimal Todo List <span className="fst-normal">☑️</span>
            </p>
            {/* Input */}
            <input
              className="form-control mb-1 fs-4"
              placeholder="insert todo here..."
              onKeyUp={keyUpHandler}
            />
            {/* Todos */}
            {todolists.map((i) => (
              <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
                  onMouseOver={x => updateToggle(i.id, "mouseIn")}
                  onMouseOut={x => updateToggle(i.id, "mouseOut")}
                >
                <span className="me-auto" style={i.done}>{i.list}</span>
                {i.toggle &&
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={x => markTodo(i.id)}> <IconCheck /> </button>
                    <button className="btn btn-secondary" onClick={x => moveUp(i.id)}> <IconArrowUp /> </button>
                    <button className="btn btn-secondary" onClick={x => moveDown(i.id)}> <IconArrowDown /> </button>
                    <button className="btn btn-danger" onClick={x => deleteTodo(i.id)}> <IconTrash /> </button>
                  </div>
                }
              </div>
            ))}
    
            {/*
            <---Example 1--->
            <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
              <span className="me-auto">Todo</span>
            </div>
            <---Example 2--->
            <div className="border-bottom p-1 py-2 fs-2 d-flex gap-2">
              <span className="me-auto">Todo with buttons</span>
            
              <button className="btn btn-success">
                <IconCheck />
              </button>
              <button className="btn btn-secondary">
                <IconArrowUp />
              </button>
              <button className="btn btn-secondary">
                <IconArrowDown />
              </button>
              <button className="btn btn-danger">
                <IconTrash />
              </button>
            </div>
            */}
    
            {/* summary section */}
            <p className="text-center fs-4">
              <span className="text-primary">All ({todolists.length}) </span>
              <span className="text-warning">Pending ({todolists.length - doneUpdate()}) </span>
              <span className="text-success">Completed ({doneUpdate()})</span>
            </p>
          </div>
        </div>
    </MainLayout>
  );
}