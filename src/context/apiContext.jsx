import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const ApiContext = createContext(null);

const ApiContextProvider = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [newProduct, setNewProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, isLoading] = useState(false);

  const url = "http://3.88.1.181:8000/products/public/catalog";

  const fetchProduct = async () => {
    try {
      setError(null);
      isLoading(true);

      const res = await axios(`${url}?supplier=${searchTerm}&search=${searchTerm}`);
      setNewProduct(res.data);
    } catch (error) {
      setError(error.response.data.msg)
    }finally{
      isLoading(false);
    }
  };

  useEffect(() => {
  }, [searchTerm, fetchProduct]);

  const apiValue = { searchTerm, setSearchTerm , fetchProduct, newProduct, error, loading};

  return (
    <ApiContext.Provider value={apiValue}>{props.children}</ApiContext.Provider>
  );
};

export default ApiContextProvider;
