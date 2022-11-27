import React from "react";
import {useState, useEffect} from 'react';
import Modal from "./components/modal";
import todoData from "./components/data";
import Todo from "./components/todo";

function App(props) {
    const [showModal, setModal] = useState(false)
    const [todosData, setData] = useState(todoData.state)

    const [selectedStatus, setSelectedStatus] = useState("all")
    const [selectedDateFilter, setSelectedDateFilter] = useState("older")
    useEffect(()=>{
        console.log("+")
    },[todosData])

    function clickHandler() {
        setModal(true)
    }
    function changeHandler() {
        setData([...todoData.state])
    }
    function filterByStatus(status) {
        if (status === "all") {
            return todoData.state
        }
        return todoData.state.filter(el => el.status === status)

    }

    function filterByDate(dateFilter, data) {

        if (dateFilter === "newer") {
            return data.sort((a, b) => new Date(b.creationDate).getTime() - new Date(a.creationDate).getTime());

        } else {
            return data.sort((a, b) => new Date(a.creationDate).getTime() - new Date(b.creationDate).getTime());

        }
    }



    function handleStatusFilter(e) {
        setSelectedStatus(e.target.value)
        setData(filterByStatus(e.target.value));
    }
    function handleDateFilter(e) {
        setSelectedDateFilter(e.target.value)
        let filteredByStatus = filterByStatus(selectedStatus)
        setData(filterByDate(e.target.value, filteredByStatus))
        console.log(todosData)
        console.log(todoData.state)
    }
    function createTodo(title, description) {
        todoData.addData({
            id: Math.random(),
            title,
            description,
            status: "open",
            creationDate: new Date().toLocaleDateString(),
            updateDate: new Date().toLocaleDateString()
        })
        setModal(false)
    }



    function onDeleteClick(id) {
        todoData.deleteItem(id)
        setData(todoData.state)
    }

    return (
        <div>
            <header>
                <button className={"add_btn"} onClick={clickHandler}>add new task</button>
               <div className="filters">
                   <p>status:</p>
                   <select className={"filter_select"} onChange={handleStatusFilter} value={selectedStatus} name="status" id="status">
                       <option value="all">all</option>
                       <option value="open">open</option>
                       <option value="inProgress">in progress</option>
                       <option value="done">done</option>
                   </select>
                   <select className={"filter_select"} onChange={handleDateFilter} value={selectedDateFilter} name="status" id="status">
                       <option value="newer">newer</option>
                       <option value="older">older</option>

                   </select>
               </div>
            </header>
            {showModal ? <Modal getData={createTodo}/> : null}
            <div className="todos">
                {todoData.state ? todosData.map((el) => {
                    return <Todo
                        id={el.id}
                        title={el.title}
                        desc={el.description}
                        status={el.status}
                        creationDate={el.creationDate}
                        updateDate={el.updateDate}
                        onDeleteClick={() => onDeleteClick(el.id)}
                        onChange={changeHandler}
                    />
                }) : null}
            </div>
        </div>
    )
}

export default App