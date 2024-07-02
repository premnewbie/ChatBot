import { useState } from "react";
import Homepage from "./Pages/Homepage";
import Historypage from "./Pages/Historypage";
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' Component={Homepage} />
          <Route exact path='/history' Component={Historypage} />
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
