import { Link } from "react-router-dom";

function Note(props){
    const note = props.note;
return <>
title:{note['title']}
            description:{note['description']}
            <Link to="/add" state={note['id']}><button>Update</button></Link>
            <button onClick={()=>props.deleteNoteHandler(note['id'])}>Delete</button>
</>
}
export default Note;