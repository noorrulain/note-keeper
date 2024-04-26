import React, { useRef, useState } from "react";

interface propsType {
  id: Number;
  title: String;
  content?: String;
  onDelete: (arg0: Number) => void;
}

const Note: React.FC<propsType> = ({ id, title, content, onDelete }) => {
  const checkRef = useRef<HTMLInputElement>(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleCheck = (event: any) => {
    if (checkRef.current !== null) {
      if (event.target.checked === true) {
        checkRef.current.style.textDecoration = "line-through";
      } else {
        checkRef.current.style.textDecoration = "none";
      }
    }
  };

  return (
    <>
      <div className="complete-note">
        <div className="note">
          <input
            type="checkbox"
            className="check-box"
            onChange={handleCheck}
          ></input>
          <p ref={checkRef}>{title}</p>
          <div className="note-buttons">
            <button
              className="svg"
              onClick={() => {
                !showDetails ? setShowDetails(true) : setShowDetails(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                height={10}
              >
                <path
                  fill="#ffffff"
                  d={
                    !showDetails
                      ? "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
                      : "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
                  }
                />
              </svg>
            </button>
            <button
              className="svg"
              onClick={() => {
                onDelete(id);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                height={10}
              >
                <path
                  fill="#ffffff"
                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                />
              </svg>
            </button>
          </div>
        </div>
        {showDetails ? <p className="note-content">{content}</p> : null}
      </div>
    </>
  );
};

export default Note;
