import { useEffect, useState } from "react";
import Note from "./components/Note";
import AddNote from "./components/AddNote";
import axios from "axios";

const apiUrl = import.meta.env.VITE_APP_API_URL;

function App() {
  const [notes, setNotes] = useState<stateType["stateList"]>([]);

  const fetchData = async () => {
    await axios
      .get(apiUrl)
      .then((res) => {
        setNotes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addNewNote = async (newNote: any) => {
    const title = newNote.title;
    const content = newNote.content;
    console.log(title);
    console.log(content);
    await axios
      .post(
        `${apiUrl}/add`,
        { title: title, content: content },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteNote = async (id: any) => {
    const noteId=notes[id]._id;
    await axios
      .post(
        `${apiUrl}/delete`,
        { id: noteId },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        fetchData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="add-container">
        <h2>Enter New</h2>
        <AddNote onAdd={addNewNote} />
      </div>
      <div className="note-list">
        <h1>Task List</h1>
        {notes.map((note, i) => {
          return (
            <Note
              title={note.title}
              content={note.content}
              key={i}
              id={i}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;

interface stateType {
  stateList: {
    _id: any;
    title: String;
    content: String;
  }[];
}
