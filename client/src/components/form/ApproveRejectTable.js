import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {approvetask} from '../../actions/formActions';
import {rejecttask } from '../../actions/formActions'
import { Link } from 'react-router-dom';


class ApproveRejectedTable extends Component {
  

    approveTask(_id){
        // console.log(_id)
        this.props.approvetask(_id)
    }
    refreshPage(){
        
      window.location.reload(false);
    
  }

    rejectedTask(_id){
      // console.log(_id,"reject")
       this.props.rejecttask(_id)
    }

  render() {

 const PendingTask= this.props.PendingTask;

    return (
    
           <tr>
                <td>{PendingTask.task}</td>
                <td>{PendingTask.name}</td>
                <td>{PendingTask.department}</td>
           
                <td>
                   <button className="btn btn-primary" onClick={(e) => {this.approveTask(PendingTask._id, e);this.refreshPage();}}>Approve</button>
                </td>
                <td>
                    <button className="btn btn-primary" onClick={(e)=>{this.rejectedTask(PendingTask._id, e);this.refreshPage();}}>Reject</button>
                </td>
             </tr>
  
    );
  }
}

ApproveRejectedTable.propTypes = {
  PendingTask: PropTypes.object.isRequired,
  approvetask: PropTypes.func.isRequired,
  rejecttask:PropTypes.func.isRequired
};
  


export default connect(null, { approvetask,rejecttask})(ApproveRejectedTable);