import { BrowserRouter, Route, Routes } from "react-router-dom";

import Infinite from "./Infinite";
import Game from "./Game";
import Element from "./Element";
import NestedList from "./NestedList";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      
        <Route path="/infinite" element={<Infinite/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/" element={ <Element/>} />
        <Route path="/nested" element={<NestedList/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
