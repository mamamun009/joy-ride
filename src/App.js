import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import PrivateRoute from "./component/privateRoute/PrivateRoute";
import RideLocation from "./component/rideLocation/RideLocation";
import SignIn from "./component/SignIn/SignIn";
import { createContext, useState } from 'react';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/rideType/:selectedVehicle">
            <RideLocation></RideLocation>
          </PrivateRoute>
          <Route path="/login">
            <SignIn></SignIn>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
export default App;