import React from "react";
import { Route, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";
import HomePage from "./components/HomePage";
import LandOwnerLogin from './components/LandOwnerLogin';
import RVOwnerLogin from './components/RVOwnerLogin';
import LandOwnerRegister from "./components/LandOwnerRegister";
import RVOwnerRegister from "./components/RVOwnerRegister";
import LandOwnerDashboard from './components/LandOwnerDashboard';
import Listings from './components/Listings';
import EditForm from "./components/EditForm";

function App() {

  function ProtectedLoginRoute({ children, ...rest}){
    const doesTokenExist = localStorage.getItem('token')
    return(
      <Route {...rest}>
        {
          doesTokenExist ? children : <Redirect to="/away" />
        }
      </Route>
    )
  }

  return (
    <div>
      <Route exact path="/home" component={HomePage} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/landOwnerLogin" component={LandOwnerLogin} />
      <Route exact path="/rvOwnerLogin" component={RVOwnerLogin} />
      <Route exact path="/landOwnerRegister" component={LandOwnerRegister}/>
      <Route exact path="/rvOwnerRegister" component={RVOwnerRegister}/>
      {/* <Route exact path="/landOwnerDashboard" component={LandOwnerDashboard} /> */}
      <ProtectedLoginRoute path="/landOwnerDashboard">
        <LandOwnerDashboard/>
      </ProtectedLoginRoute>
      <Route exact path="/seeAllListings" component={Listings}/>
      <ProtectedLoginRoute exact path="/editForm/:listingID">
        <EditForm />
      </ProtectedLoginRoute>
   </div>
  );
}

export default App;
