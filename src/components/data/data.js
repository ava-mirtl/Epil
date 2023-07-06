import React, { useState, useEffect, createContext } from "react";
const DataContext = createContext();

function DataContextProvider(props) {
    const [active, setActive] = useState(false);
    const [modal, setModalActive] = useState(false);
    const [quiz, setQuiz] = useState(false);

    const [epilForm, setEpilForm] = useState(false);

    
    async function componentDidMount(){
      setActive(false);
      setModalActive(false);
      setEpilForm(false);
      setQuiz(false);
      }
    
  
        useEffect(() => {
    componentDidMount();
    },[])
  

  return (

    <DataContext.Provider value={{ active, modal, epilForm, setActive, setModalActive, setEpilForm, quiz, setQuiz}}>
      {props.children}
    </DataContext.Provider>
  );
}

export { DataContextProvider, DataContext };