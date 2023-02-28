import React,{useState} from "react";
import { Link,useLocation,useNavigate } from "react-router-dom";

function AddNewNote(porps){
    const navigate=useNavigate()
    const [note,setNote]=useState({
        'id':useLocation().state||-1,
        'title':'',
        'description': ''
    });

    console.log(note)

function addNewNoteEventHandler(event){
    event.preventDefault();
    porps.onAddedNewNote(note)
    navigate("/")
    setNote({
        'title':'',
        'description': ''
    })
}
function titleChangeEventListner(event){
    setNote({
        ...note,
        'title': event.target.value
    });
}
function descriptionChangeEventListner(event){
    setNote({
        ...note,
        'description': event.target.value
    });
}
return <><form onSubmit={addNewNoteEventHandler}>
    <input type='text' placeholder="Enter Title" onChange={titleChangeEventListner} value={note['title']}/>
    <input type='text' placeholder="Enter Description" onChange={descriptionChangeEventListner} value={note['description']}/>
    <input type='submit'/>
    <Link to={"/"}>Go to Manage Notes</Link>
</form>
</>
}

export default AddNewNote;