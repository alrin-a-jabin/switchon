import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TaskRejectedTable extends Component {
  render() {

 const TaskRejectedList= this.props.TaskRejectedList;

    return (
    
           <tr>
                <td>{TaskRejectedList.task}</td>
                <td>{TaskRejectedList.name}</td>
                <td> {TaskRejectedList.department}</td>
             </tr>
  
    );
  }
}
TaskRejectedTable.propTypes = {
  TaskRejectedList: PropTypes.object.isRequired
  };
  

export default TaskRejectedTable;