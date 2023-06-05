import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { useState } from "react";

function App() {
  const [userid,setUserid] = useState("");
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/register" render={(props) => <Registration {...props} />} />
        <Route exact path="/login" render={(props) => <Login {...props} setUserid={setUserid}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} userid={userid}/>} />
      </Switch>
    </>
  );
}

export default App;
