import React, { Component } from 'react';
import PropTypes from 'prop-types';


class DepPendingTaskTable extends Component {
  render() {

 const DepartmentPendingList= this.props.DepartmentPendingList;

    return (
    
           <tr>
                <td>{DepartmentPendingList.task}</td>
                <td>{DepartmentPendingList.name}</td>
                <td> {DepartmentPendingList.department}</td>
                <td>{DepartmentPendingList.status}</td>
             </tr>
  
    );
  }
}
DepPendingTaskTable.propTypes = {
  DepartmentPendingList: PropTypes.object.isRequired
  };
  

export default DepPendingTaskTable;