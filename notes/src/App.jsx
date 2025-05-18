import React, { useState } from 'react';
import NoteForm from './components/noteForm';
import NoteList from './components/noteList';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addNote = (note) => {
    if (editIndex !== null) {
      // Edit existing note
      const updatedNotes = [...notes];
      updatedNotes[editIndex] = note;
      setNotes(updatedNotes);
      setEditIndex(null);
    } else {
      // Add new note
      setNotes([...notes, note]);
    }
  };

  const deleteNote = (indexToDelete) => {
    setNotes(notes.filter((_, index) => index !== indexToDelete));
    if (editIndex === indexToDelete) setEditIndex(null); 
  };

  const startEdit = (index) => {
    setEditIndex(index);
  };

  return (
    <div>
      <h1>My Notes</h1>
      <NoteForm
        onAddNote={addNote}
        editNote={editIndex !== null ? notes[editIndex] : null}
      />
      <NoteList notes={notes} onDelete={deleteNote} onEdit={startEdit} />
    </div>
  );
}

export default App;







