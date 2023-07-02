import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataContextProvider } from "./components/data/data";
import Header from "./components/Header/Header";
import Man from "./components/Main/Man/Man";
import Woman from "./components/Main/Woman/Woman.jsx"
import Error from "./components/Error/Error";
import './styles/App.scss';


function App() {          
          return (
          <DataContextProvider>
            <Router>
              <Header/>
                <Routes>
                    <Route path="*" element={<Error/>} />
                    <Route path="/" element={<Man/>} />
                    <Route path="/man" element={<Man/>} />
                    <Route path="/woman" element={<Woman/>}/>
                </Routes>
            </Router>
          </DataContextProvider>
          );
        }

export default App;