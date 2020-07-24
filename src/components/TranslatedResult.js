import React, { useState, useEffect } from "react";
import axios from "axios";

const TranslatedResult = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedText(text);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [text]);

  useEffect(() => {
    const translateText = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {}, //en empty obj for the request body
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      //data.data <- one data axios, another response data obj containing translateText prop
      setTranslated(data.data.translations[0].translatedText);
    };
    translateText();
  }, [language, debouncedText]);

  return (
    <div>
      <h2 className="ui header">{translated}</h2>
    </div>
  );
};

export default TranslatedResult;
