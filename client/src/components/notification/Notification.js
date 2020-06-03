import React, { Component } from "react";
import { MDBNotification } from "mdbreact";
// import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pendingtask } from '../../actions/formActions';

class Notification extends Component {

  componentDidMount(){
    const {user} = this.props.auth;

    console.log(user.id);
    const pending={
        pend:user.id
      };
   
   this.props.pendingtask(pending);
  }
  render() {
    return (
      <MDBNotification
        show
        fade
        iconClassName="text-primary"
        title="Transaction Details"
        message="Airport Rules are Invoked."
        text="11 mins ago"
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          zIndex: 9999
        }}
      />
    );
  }
}


Notification.propTypes = {
  pendingtask:PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  pendinglists: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  form:state.form.pendinglists
});

export default connect(mapStateToProps, { pendingtask })(Notification);


   
 
 



  


