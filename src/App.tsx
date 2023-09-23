import { Contact, Home, Register } from "./pages"
import { Routes, Route } from "react-router-dom";

const App = ()=> {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App