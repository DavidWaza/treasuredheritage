import React from "react";
import { saveAs } from "file-saver";

export default function FileSaver() {
    const Styles = {
        // border:'none',
        padding: '15px 50px',
        backgroundColor:'transparent',
        border:'2px solid #892362',
        fontWeight:900,
        margin: '0 0 0 auto',
        color: '#892362',
        display: 'block',
        marginTop:20,
    }
  const saveFile = () => {
    saveAs(
      "../../ACADEMIC CALENDER.docx",
      "calendar.docx"
    );
  };
  return (
    <div>
      <button onClick={saveFile} style={Styles}>Download Calendar</button>
    </div>
  );
}