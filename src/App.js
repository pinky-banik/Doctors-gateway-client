import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Appointments from "./components/Appointments/Appointments";
import AuthProvider from "./components/Contexts/AuthProvider";

import Home from "./components/Homepage/Home/Home";
import LoginPage from "./components/Shared/Login/LoginPage/LoginPage";
import Register from "./components/Shared/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <Route path="/appointment">
            <Appointments></Appointments>
          </Route>
          <Route path="/signup">
            <Register></Register>
          </Route>
          <Route path="/login">
            <LoginPage></LoginPage>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
