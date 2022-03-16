import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const newsApiContext = createContext();

const API_KEY = "885f8ce59b9f40079db03a82c77fb48a";
const INITIAL_URL = "https://newsapi.org/v2/";

export const useNewsApi = () => {
  const context = useContext(newsApiContext);
  if (!context) throw new Error("Not newsApi provider");
  return context;
};

export const NewsApiContextProvider = ({ children }) => {
  const [dataApi, setDataApi] = useState();

  const getDataApi = () => {
    return axios
      .get(`${INITIAL_URL}everything?q=pokemon&apiKey=${API_KEY}`)
      .then((resp) => {
        setDataApi(resp.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <newsApiContext.Provider value={{ dataApi }}>
      {children}
    </newsApiContext.Provider>
  );
};
