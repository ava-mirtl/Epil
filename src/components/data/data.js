import React, { useState, useEffect,  createContext } from "react";
const DataContext = createContext();

function DataContextProvider(props) {
    const[flag, setFlag] = useState(false)
    const [data, setData] = useState(false);

 

      useEffect(() => {
setData("dfhfjfhjr") },[])


  return (

    <DataContext.Provider value={{ data, flag, setFlag, setData }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };