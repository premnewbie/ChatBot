import { useState } from "react";
import Homepage from "./Pages/Homepage";
import Historypage from "./Pages/Historypage";

function App() {

  const [open, setOpen] = useState(false);  

  return (
    <div className="App">
      <Homepage open={open} setOpen={setOpen}/>
      {/* <Historypage open={open} setOpen={setOpen}/> */}
    </div>
  );
}

export default App;
