import React, { useState, useEffect, createContext } from "react";
const DataContext = createContext();

function DataContextProvider(props) {
    const [active, setActive] = useState(false);
    const [modal, setModalActive] = useState(false);

    async function componentDidMount(){
      setActive(false);
      setModalActive(false)
      }
    
  
        useEffect(() => {
    componentDidMount();
    },[])
  

  return (

    <DataContext.Provider value={{ active, modal, setActive, setModalActive }}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };