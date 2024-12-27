import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { useEffect } from "react";
import { useState } from "react";
import useAuth from "./useAuth.js";
import axios from "axios";
import AlreadyLoggedIn from "./components/AlreadyLoggedIn.jsx";

const fetchAuth = async (setuser) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/users/check",
      {},
      {
        withCredentials: true,
      },
    );
    setuser(res.data.data.user);
  } catch (error) {
    console.error(error);
    setuser(null);
  }
};

function App() {
  const [user, setuser] = useState(null);
  useEffect(() => {
    fetchAuth(setuser);
  }, []);
  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <div className="h-full w-full">
      <BrowserRouter>
        <Header />
        <Navbar user={user?.username} />
        <Routes>
          <Route path="/home"></Route>
          <Route path="/users">
            <Route
              path="/users/register"
              element={!user ? <Register /> : <AlreadyLoggedIn />}
            />
            <Route
              path="/users/login"
              element={!user ? <Login /> : <AlreadyLoggedIn />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
