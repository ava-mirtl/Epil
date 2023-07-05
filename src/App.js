import React from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
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
                    <Route path="/man" element={<Man/>} />
                    <Route path="/woman1" element={<Woman/>}/>
                    <Route path="/woman2" element={<Woman/>}/>
                    <Route path="/woman3" element={<Woman/>}/>
                    <Route path="/woman4" element={<Woman/>}/>
                    <Route path="/woman5" element={<Woman/>}/>
                    <Route path="*" element={<Error/>} />
                    <Route path="/" element={<Woman/>} />
                </Routes>
            </Router>
          </DataContextProvider>
          );
        }

export default App;