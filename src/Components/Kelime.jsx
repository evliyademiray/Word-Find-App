/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";

const Kelime = () => {
  const [word, setWord] = useState([]);
  const [search, setSearch] = useState("");

  const options = {
    method: "GET",
    url: "https://mashape-community-urban-dictionary.p.rapidapi.com/define",
    params: { term: search },
    headers: {
      "X-RapidAPI-Key": "4a33083243mshd021647818f6392p16c21cjsne7d5015d461b",
      "X-RapidAPI-Host": "mashape-community-urban-dictionary.p.rapidapi.com",
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then((res) => setWord(res.data.list))
      .catch((err) => console.log(err));
  };
  return (
    <div className="butun">
      <form className=" d-flex mt-3 gap-5" onSubmit={handleSubmit}>
        <img className="logo" src="/book.svg" width={60} />
        <div>
          <h2 className=" text-center">Word Finder</h2>
          <div className=" d-flex justify-content-center align-items-center">
            <input
              type="text"
              className="input"
              placeholder="Enter any word..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-warning search "
              type="submit"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>
      </form>
      <>
        {word.map((i, index) => (
          <div key={index} className="result">
            <div className="word"><span className="text-warning">Search Word:</span> {i.word}</div>
            <div className="author"><span className="text-warning">Author:</span> {i.author}</div>
            <div className="definition my-2"><span className="text-warning">Definition:</span>  {i.definition}</div>
            <div className="example">{i.example}</div>
            <div className="link">{i.link}</div>
          </div>
        ))}
      </>
    </div>
  );
};

export default Kelime;
