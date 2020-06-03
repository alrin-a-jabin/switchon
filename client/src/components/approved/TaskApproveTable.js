import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskApproveTable extends Component {
  render() {

 const TaskApprovedList= this.props.TaskApprovedList;

    return (
    
           <tr>
                <td>{TaskApprovedList.task}</td>
                <td>{TaskApprovedList.name}</td>
                <td> {TaskApprovedList.department}</td>
             </tr>
  
    );
  }
}
TaskApproveTable.propTypes = {
  TaskApprovedList: PropTypes.object.isRequired
  };
  

export default TaskApproveTable;