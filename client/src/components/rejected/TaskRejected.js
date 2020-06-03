import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskrejected } from '../../actions/formActions';
import TaskRejectedTable from './TaskRejectedTable';

 
class TaskRejected extends Component {
   
   
    componentDidMount(){
        const {user} = this.props.auth;
        console.log(user.id);
        const rejected={
            approver:user.id
          };
       this.props.taskrejected(rejected);
      }
      
    render() { 
       const  TaskRejectedLists= this.props.form;
        console.log("re",TaskRejectedLists)
         let  rejectedLists ;
       rejectedLists = TaskRejectedLists.map(TaskRejectedList => (
            <TaskRejectedTable key={TaskRejectedList._id} TaskRejectedList={TaskRejectedList} />
          ));
        return (
            <div>
             <div style={{height:"80vh"}}>
          <h3 align="center">Rejected Task Lists</h3>
          
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Rejected Task </th>
                <th>Task Created By </th>
                <th>Task Created To The Department</th>
              </tr>
            </thead>
            <tbody>
              { rejectedLists}
            </tbody>
          </table>
         <div style={{align:"center"}} >
            </div>
        </div>
            </div>
        )
    }
}


TaskRejected.propTypes = {
    taskrejected:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    taskrejectedlists: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    form:state.form.taskrejectedlists
  });
  
  export default connect(mapStateToProps, {taskrejected})(TaskRejected);

