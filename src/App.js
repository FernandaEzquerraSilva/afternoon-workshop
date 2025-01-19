import React from "react";
import { 
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Home from "./pages/home";
import Navigation from "./navbar";

function App() {
  return(
    <HashRouter>  
      <Navigation/>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </HashRouter>
  )
}
export default App;


