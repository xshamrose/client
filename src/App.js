import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import Home from "./components/Home/Home";
import Dashboard from "./components/Admin/Dashboard";
import FormBuilder from "./components/formbuilder/FormBuilder";
import Userlogin from "./components/userpage/login/Userlogin";
import UserRegister from "./components/userpage/Register/UserRegister";
import User from "./components/userpage/layout/User";
import Addform from "./components/userpage/addform/Addform";
import Myprofile from "./components/userpage/profile/Myprofile";
import Viewform from "./components/userpage/viewform/Viewform";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/adminDashboard" element={<Dashboard />} />
        <Route path="/formbuilder" element={<FormBuilder />} />
        <Route path="/userportal" element={<Userlogin />} />
        <Route path="/Register" element={<UserRegister />} />
        <Route path="/studentDashboard" element={<User />} />
        <Route
          path="/addForm"
          element={
            <User>
              <Addform />
            </User>
          }
        />
        <Route
          path="/myprofile"
          element={
            <User>
              <Myprofile />
            </User>
          }
        />
        <Route
          path="/viewform"
          element={
            <User>
              <Viewform />
            </User>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
