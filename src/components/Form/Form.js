import React, { useContext } from "react";
import { NoteContext } from "../../contextApi/notes";
import { nanoid } from "nanoid";

import "./Form.css";

export function Form(props) {
  const { addNote, inputNote, setInputNote } = useContext(NoteContext);

  function handleChange({ target }) {
    setInputNote(target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNote({ id: nanoid(), text: inputNote, isEditing: false });
    setInputNote("");
  }

  return (
    <form className="inputContainer" onSubmit={handleSubmit}>
      <input type="text" value={inputNote} onChange={handleChange} required />
      {props.children}
    </form>
  );
}
