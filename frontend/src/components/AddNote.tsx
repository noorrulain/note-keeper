import { useState } from "react";

interface propsType {
  onAdd: (arg0: Object) => void;
}

interface stateType {
  stateList: {
    title: any;
    content: any;
  };
}

const AddNote: React.FC<propsType> = ({ onAdd }) => {
  const [note, setNote] = useState<stateType["stateList"]>({
    title: "",
    content: "",
  });

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event: any) => {
    event.preventDefault();
    onAdd(note);
    setNote({
        title: "",
        content: ""
    });
  };

  return (
    <>
      <form className="input-form" action="post">
        <input
          type="text"
          placeholder="Enter task"
          className="title-input"
          name="title"
          onChange={handleChange}
          value={note.title}
        ></input>
        <textarea
          placeholder="Enter details"
          name="content"
          onChange={handleChange}
          value={note.content}
        ></textarea>
        <button onClick={submitNote}>Submit</button>
      </form>
    </>
  );
};

export default AddNote;