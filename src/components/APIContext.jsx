/* eslint-disable react/prop-types */
import { useState, useEffect, createContext } from "react";

const APIContext = createContext({});

export function APIContextProvider({ children }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // fetch("https://my-json-server.typicode.com/Darshan-Bitla7/mockapi/Models")
    fetch(
      "https://raw.githubusercontent.com/Darshan-Bitla7/mockapi/main/db2.json"
    )
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleFavorite = (id) => {
    setModels((prevModels) =>
      prevModels.map((model) =>
        model.id === id ? { ...model, favorite: !model.favorite } : model
      )
    );
  };

  return (
    <APIContext.Provider value={{ models, toggleFavorite }}>
      {children}
    </APIContext.Provider>
  );
}

export default APIContext;
