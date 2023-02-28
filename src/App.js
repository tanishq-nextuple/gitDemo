import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { useState } from 'react';
import ManageNote from './ManageNote';
import NewNote from './NewNote';

function App() {

  let [notes,deleteNote] = useState(JSON.parse(localStorage.getItem('Notes'))); 

  localStorage.setItem('Notes',JSON.stringify(notes))

  console.log();

    const addedNewNoteHandler=(addedNote)=>{
      if(addedNote.id===-1){
        const newNote={
          ...addedNote,
          'id':notes.length+1
        }
        notes.push(newNote);
      }else{
        let index = addedNote.id-1;
        notes[index]=addedNote;
      }
      localStorage.setItem('Notes',JSON.stringify(notes))
    }
  
  const deleteNoteHandler=(id)=>{
  deleteNote(notes.filter((note)=>note.id!==id));
  }

  const router = createBrowserRouter([
    {path: "/", element: <ManageNote savedNotes={notes} deleteNoteHandler={deleteNoteHandler}/>},
    {path: "/add", element: <NewNote onAddedNewNote={addedNewNoteHandler}/>}
  ]);


  return (
    <RouterProvider router={router}/>
  );
    
}

export default App;