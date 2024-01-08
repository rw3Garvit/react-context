import { Route, Routes } from "react-router";
import "./App.css";
import { adminNavbar } from "./components/Admin/Header/navbar";
import Navbar from "./components/Atoms/Header/Navbar";
import { facultyNavbar } from "./components/Faculty/Header/navbar";
import Login from "./components/Login/Login";
import Home from "./components/Admin/pages/Home";
import Subadmin from "./components/Admin/pages/Subadmin";
import Faculty from "./components/Admin/pages/Faculty";
import Notfound from "./components/Atoms/Notfound";
import { myCon } from "./components/Mycontext";
import { useState } from "react";

function App() {
  // const role = "admin";

  const [first, setfirst] = useState("Helloooo");
  // if (role === "admin") {
  //   return (
  //     <>
  //       <Navbar data={adminNavbar} />
  //       <Routes>
  //         <Route path="/" element={<Home />} />
  //         <Route path="/subadmin" element={<Subadmin />} />
  //         <Route path="/faculty" element={<Faculty />} />]
  //         <Route path="*" element={<Notfound />} />
  //       </Routes>
  //     </>
  //   );
  // } else if (role === "faculty") {
  //   return <Navbar data={facultyNavbar} />;
  // } else {
  //   return <Login />;
  // }

  return (
    <myCon.Provider value={[first, setfirst]}>
      <Home />
    </myCon.Provider>
  );
}

export default App;
