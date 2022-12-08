import React from "react";
import {useState} from "react";
import {store} from "../store";
import {changeStatusInStore, changeDescription} from "../actions";


function Todo(props) {
    const id = props.id
    const [editText, setEditText] = useState(props.desc)
    const [showEditArea, setShowEditArea] = useState(false)

    function handleChange(e) {
        changeStatus(e.target.value);
        props.onChange()
    }

    function changeStatus(status) {
        console.log(status)
        store.dispatch(changeStatusInStore(id, status))
        console.log(store.getState())
    }

    function handleDeleteClick() {
        props.onDeleteClick()
    }

    function handleEditClick() {
        setShowEditArea(true)
    }

    function handleEditText(e) {
        setEditText(e.target.value)
    }

    function handleSaveClick() {
        store.dispatch(changeDescription(id, editText))
        setShowEditArea(false)
        props.onChange()
    }

    return (
        <div className={
            props.status === "done" ? `todo_item done` :
                props.status === "inProgress" ? `todo_item progress` : `todo_item open`
        }>
            <h2 className="todo_title">{props.title}</h2>
            <div className="desc_wrap">
                <p className={"description"}>{props.desc}</p>
                {showEditArea ? null : <button className="edit_btn" onClick={handleEditClick}>
                    <img src={require("../images/edit-246.png")} alt=""/>
                </button>}
            </div>
            <div className="edit_wrap">
                {showEditArea ?
                    <textarea onChange={handleEditText} cols="10" rows="2" value={editText}></textarea> : null}
                {showEditArea ? <button className="save_btn" onClick={handleSaveClick}><img
                    src={require("../images/success-green-check-mark-icon.png")}
                    alt=""/></button> : null}
            </div>
            <div className="flex_wrap"><p>{props.creationDate}</p>
                <select className={"status"} onChange={handleChange} value={props.status} name="status" id="status">
                    <option value="open">open</option>
                    <option value="inProgress">in progress</option>
                    <option value="done">done</option>
                </select>
                <button className="delete_btn" onClick={handleDeleteClick}><img src={require("../images/delete.png")}
                                                                                alt=""/></button>
            </div>
        </div>
    )
}

export default Todo