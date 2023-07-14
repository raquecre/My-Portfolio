import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home/>} />
 
         <Route path='*' element={<ErrorPage/>} /> 
      </Routes>
      
     
    </div>
  );
}

export default App;
