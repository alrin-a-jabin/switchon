import React, {Component} from 'react';

import PropTypes from 'prop-types';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './userdashboard.css';
import Notification from '../notification/Notification';

class UserDashboard extends Component {
    render(){
        return(
            <div>
           

            <ul id="myMenu">
                <li> <Link to="/requestform">Request Form</Link></li>
                <li> <Link to="/pendingRequest"> Pending</Link></li>
                <li> <Link to="/approvereject"> Task Approve & Reject </Link></li>
                <li> <Link to="/taskrejected"> Rejected  Task Lists</Link></li>
                <li> <Link to="/taskapproved"> Approved Task Lists</Link></li>
                <li> <Link to="/departmentpendingtask"> Department Pending Task</Link></li>
                <li> <Link to="/notification"> Notification</Link></li>
              
            </ul>
            {/* <Notification/> */}
            </div>

        
        );
    
    }
}

UserDashboard.propTypes={
    auth:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,null)(UserDashboard);