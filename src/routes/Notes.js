import React from "react";
import "./Notes.css";

// Import PDFs
import notes1 from "../assets/files/ml-notes/AI ML A-Z Notes 1 - Aravindh A E.pdf";
import notes2 from "../assets/files/ml-notes/AI ML A-Z Notes 2 - Aravindh A E.pdf";
import notes3 from "../assets/files/ml-notes/AI ML A-Z Notes 3 - Aravindh A E.pdf";
import notes4 from "../assets/files/ml-notes/AI ML A-Z Notes 4 - Aravindh A E.pdf";
import notes5 from "../assets/files/ml-notes/AI ML A-Z Notes 5 - Aravindh A E.pdf";

function Notes() {

  const notesList = [
    { name: "AI ML A-Z Notes 1", file: notes1 },
    { name: "AI ML A-Z Notes 2", file: notes2 },
    { name: "AI ML A-Z Notes 3", file: notes3 },
    { name: "AI ML A-Z Notes 4", file: notes4 },
    { name: "AI ML A-Z Notes 5", file: notes5 },
  ];

  return (
    <div className="notes">
      <div className="notes-content">
        <h2>📚 Download Notes</h2>

        <ul className="notes-list">
          {notesList.map((note, index) => (
            <li key={index} className="note-item">
              <span>{note.name}</span>

              <a
                href={note.file}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="download-btn"
              >
                ⬇ Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Notes;
