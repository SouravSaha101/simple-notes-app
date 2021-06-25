import React, { useContext } from "react";
import { NoteContext } from "../../contextApi/notes";

import "./Note.css";

export function Note() {
  const { notes, removeNote, editNote } = useContext(NoteContext);

  function getListItems() {
    return notes.map((note) => (
      <>
        <li key={note.id}>
          {note.isEditing ? (
            <>
              <textarea
                rows="10"
                type="text"
                value={note.text}
                onChange={(e) => {
                  note.text = e.target.value;
                  editNote(note);
                }}
              />
              <button
                type="button"
                className="save"
                onClick={() => {
                  note.isEditing = false;
                  editNote(note);
                }}
              >
                <i className="fa fa-edit"></i>
              </button>
            </>
          ) : (
            <>
              <input type="text" readOnly={true} value={note.text} />
              <button
                type="button"
                className="edit"
                onClick={() => {
                  note.isEditing = true;
                  editNote(note);
                }}
              >
                <i className="fa fa-pencil"></i>
              </button>
            </>
          )}

          <button
            className="delete"
            type="button"
            onClick={() => removeNote(note.id)}
          >
            <i className="fa fa-trash"></i>
          </button>
        </li>
        <hr />
      </>
    ));
  }

  function getNotes() {
    if (notes.length > 0) {
      return <ul className="noteContainer">{getListItems()}</ul>;
    }
  }

  return <>{getNotes()}</>;
}
