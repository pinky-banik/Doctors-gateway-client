import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Appointments from "./components/Appointments/Appointments";
import AuthProvider from "./components/Contexts/AuthProvider";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";

import Home from "./components/Homepage/Home/Home";
import LoginPage from "./components/Shared/Login/LoginPage/LoginPage";
import PrivateRoute from "./components/Shared/Login/PrivateRoute/PrivateRoute";
import Register from "./components/Shared/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Switch>
        <PrivateRoute path="/appointment">
            <Appointments></Appointments>
          </PrivateRoute>
          <PrivateRoute path="/mainboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/register">
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
