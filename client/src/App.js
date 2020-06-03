import React, { Component } from "react"; 
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import UserDashboard from './components/dashboard/UserDashboard';
import jwt_decode from 'jwt-decode';
import store from './store';
import { setCurrentUser, logoutUser } from './actions/authActions';
import setAuthToken from './utils/setAuthToken';
import {Provider} from 'react-redux';
import { BrowserRouter as Router,Route,Switch}  from 'react-router-dom';
import PrivateRoute from './components/common/PrivateRoute';


import './App.css';
import RequestForm from "./components/form/RequestForm";
import PendingRequest from "./components/form/PendingRequest";
import ApproveReject from "./components/form/ApproveReject";
import ApproveRejectTable from "./components/form/ApproveRejectTable";
import TaskApproved from "./components/approved/TaskApproved";
import TaskRejected from "./components/rejected/TaskRejected";
import DepPendingTask from "./components/department/DepPendingTask";
import Notification  from './components/notification/Notification';


// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    // store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store ={store}>
        <Router>
          <div className="App">
           <Header/>
           <Route exact path="/" component={Landing} />
            <div className="container-fluid">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <div className="row">
           <div className="col-2">
          
              <Switch>
                <PrivateRoute exact path="/dashboard" component={UserDashboard} />
              </Switch>
              </div>  
               <div className="col-12">
               <Switch>
                <PrivateRoute exact path="/requestform" component={RequestForm} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/pendingrequest" component={PendingRequest} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/approvereject" component={ApproveReject} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/approverejecttable" component={ApproveRejectTable} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/taskapproved" component={TaskApproved} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/taskrejected" component={TaskRejected} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/departmentpendingtask" component={DepPendingTask} />
              </Switch>
              <Switch>
                <PrivateRoute exact path="/notification" component={Notification} />
              </Switch>
           </div></div>

           



           </div>
           <Footer/>
          </div>
        </Router>
    </Provider>
    );
  }
}

export default App;