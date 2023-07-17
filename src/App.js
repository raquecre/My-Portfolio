import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import MyCV from "./pages/MyCv";
import ContactMe from "./pages/ContactMe";
import AllProyects from "./pages/AllProyects";


function App() {
  return (
    <div className="App ">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/MyCv' element={<MyCV />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/ContactMe' element={<ContactMe />} />
        <Route path='/AllProyects' element={<AllProyects/>} />


      </Routes>


    </div>
  );
}

export default App;
