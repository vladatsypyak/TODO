import React from "react";
import {useState} from 'react';

function Modal(props) {

    let getData = props.getData
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    // let submit = props.onSubmit
    function clickHandler() {
        console.log(title, desc)
        getData(title, desc)
        props.changeHandler()
    }

    function titleValue(e) {
        setTitle(e.target.value)
    }

    function getDescValue(e) {
        setDesc(e.target.value)
    }


    return (
        <div >
            <div className="cover"></div>
            <div className="modal_wrap">
                <input className={"modal_input"} onChange={titleValue} id="title" type="text"/>
                <input className={"modal_input"}  onChange={getDescValue} id="description" type="text"/>
                <button className={"save_btn save_modal_btn"}   onClick={clickHandler}>save</button>
            </div>
        </div>
    )
}

export default Modal