import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Todo from './component/Todo'

function App() {
 
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <PrivateRoute path="/todoList" component={Todo} />
          </Switch>
        </div>
      </div>
    </div></Router>
  );
}
const PrivateRoute = ({ component: Component, ...rest }) => {
  //var user =false;
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.token  ? <Component {...props} /> : <Redirect to={{ pathname: "/sign-in" }} />
      }
    />
  );
};

export default App;