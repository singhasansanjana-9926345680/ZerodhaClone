import { Route, Routes } from "react-router-dom";

import Signup from "./landing_page/signup/Signup.jsx";
import Login from "./landing_page/login/Login.jsx";

 

function App() {
  return (
    <div className="App">
      <Routes>
      
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
    
      </Routes>
    </div>
  );
}

export default App;