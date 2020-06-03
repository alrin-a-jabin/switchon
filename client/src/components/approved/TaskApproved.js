import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { taskapproved } from '../../actions/formActions';
import TaskApproveTable from './TaskApproveTable';

 
class TaskApproved extends Component {
   
   
    componentDidMount(){
        const {user} = this.props.auth;

        console.log(user.id);
        const approved={
            approver:user.id
          };
       
       this.props.taskapproved(approved);
      }
    render() { 
      const  TaskApprovedLists= this.props.form;
        console.log(TaskApprovedLists)

         let  approvedLists ;
      
        
       approvedLists = TaskApprovedLists.map(TaskApprovedList => (
            <TaskApproveTable key={TaskApprovedList._id} TaskApprovedList={TaskApprovedList} />
          ));
        
        return (
            <div>
             <div style={{height:"80vh"}}>
          <h3 align="center">Approved task Lists</h3>
          
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Task </th>
                <th>Task Created By </th>
                <th>Task Created To The Department</th>
              </tr>
            </thead>
            <tbody>
              { approvedLists}
            </tbody>
          </table>
         <div style={{align:"center"}} >
            </div>
        </div>
            </div>
        )
    }
}


TaskApproved.propTypes = {
    taskapproved:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    taskapprovedlists: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    form:state.form.taskapprovedlists
  });
  
  export default connect(mapStateToProps, { taskapproved })(TaskApproved);

