import React, { useState } from "react";
import DropDown from "./DropDown";
import TranslatedResult from "./TranslatedResult";

const dropDownOptions = [
  {
    label: "Finnish",
    value: "fi",
  },
  {
    label: "French",
    value: "fr",
  },
  {
    label: "Italian",
    value: "it",
  },
  {
    label: "Russian",
    value: "ru",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(dropDownOptions[0]);
  const [text, setText] = useState("");

  return (
    <div>
     
      <div className="ui form">
        <div className="field">
          <label className="">Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
      </div>
      <DropDown
        label="Select Language"
        selected={language}
        onSelectedChange={setLanguage}
        dropDownOptions={dropDownOptions}
      ></DropDown>
      <hr />
      <h4 className="ui header">Translation</h4>
      <TranslatedResult text={text} language={language} />
    </div>
  );
};

export default Translate;
