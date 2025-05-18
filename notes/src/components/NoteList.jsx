import React from "react";


function NoteList({notes,onEdit,onDelete}){
  return(
    <div>
      {notes.map((note,index)=>(
        <div key={index} style={{border:'1px solid gray',margin:'10px',padding:'10px'}}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <button onClick={()=>onEdit(index)}>Edit</button>
          <button onClick={()=>onDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
};

export default NoteList;