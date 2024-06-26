import axios from "axios";
import { useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      //e.preventDefault();
      const res = await axios.get(`/api/search/${query}`);
      setResults(res.data.results.hits);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <div className="w-full max-w-4xl mx-auto p-4 bg-gray-800 rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-white">
          Buscador de imagenes
        </h1>
        <div className="flex flex-wrap items-center mb-6">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-grow p-2 border border-gray-300 text-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="..."
          />
          <button
            type="button"
            onClick={handleSearch}
            className="flex-shrink-0 p-2 bg-black text-white rounded-r-md hover:bg-gray-800"
          >
            Buscar
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          {results.map((result, index) => (
            <div
              key={index}
              className="w-full h-auto flex items-center justify-center"
            >
              <img
                src={result.previewURL}
                alt={`Result ${index}`}
                className="max-h-full max-w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SearchBox;
