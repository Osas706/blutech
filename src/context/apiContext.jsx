import React, { createContext } from 'react';

export const ApiContext = createContext(null);

const ApiContextProvider = (props) => {
    const apiValue = { };

  return (
   <ApiContext.Provider value={apiValue}> 
    {props.children}
   </ApiContext.Provider>
  )
}

export default ApiContextProvider;
