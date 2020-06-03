import React, { Component } from 'react';
import PropTypes from 'prop-types';


class PendingTable extends Component {
  render() {

 const PendingTask= this.props.PendingTask;

    return (
    
           <tr>
                <td>{PendingTask.task}</td>
                <td>{PendingTask.name}</td>
                <td> {PendingTask.department}</td>
             </tr>
  
    );
  }
}
PendingTable.propTypes = {
  PendingTask: PropTypes.object.isRequired
  };
  

export default PendingTable;