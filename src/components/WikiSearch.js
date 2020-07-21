import React, { useState, useEffect } from "react";
import axios from "axios";

const WikiSearch = () => {
  const [searchTerm, setSearchTerm] = useState("Wikipedia");
  const [results, setResults] = useState([]);
  const [debounceSearchTerm, setDebounceSearchTerm] = useState(searchTerm);
  
  useEffect(()=> {
    const timeoutId = setTimeout(()=>{
        if(searchTerm)
        setDebounceSearchTerm(searchTerm);
    }, 1000);
    return () => {
        clearTimeout(timeoutId);
    }
  }, [searchTerm]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debounceSearchTerm,
        },
      });
      setResults(data.query.search);
    };
        search()
  }, [debounceSearchTerm]);

  const renderResults = results.map((result) => {
    return (
      <div key={result.pageid} className="item">
          <div className="right floated content">
              <a
              className="ui button green"
              href={`https://en.wikipedia.org?curid=${result.pageid}`}
              >Go</a>
          </div>
        <div className="content">
          <div className="header">{result.title}</div>
         
          <span dangerouslySetInnerHTML={{__html: result.snippet}}></span> 
        </div>
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="ui form">
        <div className="field">
          <label className="">Search Wikipedia</label>
          <input
            placeholder="Search Wikipedia"
            className="input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default WikiSearch;
