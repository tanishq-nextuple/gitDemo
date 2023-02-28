import { useState } from "react";
import { Link } from "react-router-dom";
import Note from "./Note";

function ManageNote(props){

const [notes,deleteNote] = useState(props.savedNotes);

function deleteNoteHandler(id){
    console.log(id);
    deleteNote(notes.filter((note)=>id!==note.id));
    props.deleteNoteHandler(id);
}

return (<>
    {
        notes.map((note)=>
            <Note key={note.id} note={note} deleteNoteHandler={deleteNoteHandler}/>
        )
    }
    <Link to="/add"><button>Add Note</button></Link>
</>)
}

export default ManageNote;