
import React,{useState,useEffect} from "react";

function NoteForm({onAddNote,editNote}){
  const [title,setTitle]=useState('');
  const [content,setContent]=useState('');

  useEffect(()=>{
    if (editNote){
      setTitle(editNote.title)
      setContent(editNote.content)
    }
  },[editNote]);

  const handleSubmit=(e)=>{
    e.preventDefault();
    onAddNote({title,content});
    setContent('');
    setTitle('');
  };

  return(
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      placeholder="Note Title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}   
      required   
      ></input>
      <textarea 
      placeholder="Note content"
      value={content}
      required
      onChange={(e)=>setContent(e.target.value)}
      ></textarea>
      <button type="submit">{editNote ?'Update Note':'Add Note'}</button>
    </form>
  );
}

export default NoteForm;


