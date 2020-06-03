import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { dependingtask } from '../../actions/formActions';
import DepPendingTaskTable from './DepPendingTaskTable';

 
class DepPendingTask extends Component {
   
   
    componentDidMount(){
        const {user} = this.props.auth;
        console.log(user.id);
        const userdepartment={
           userdep:user.department
          };
       this.props.dependingtask(userdepartment);
      }
      
    render() { 
       const  DepartmentPendingLists= this.props.form;
        console.log("re",DepartmentPendingLists)
         let  depPendingLists ;
         if(DepartmentPendingLists.length==='0'){
          depPendingLists=<div><h1>There is no Pending and Rejected list for your department</h1></div>
         }
       depPendingLists = DepartmentPendingLists.map(DepartmentPendingList => (
            <DepPendingTaskTable key={DepartmentPendingList._id} DepartmentPendingList={DepartmentPendingList} />
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
                <th>Task Status</th>
              </tr>
            </thead>
            <tbody>
              { depPendingLists}
            </tbody>
          </table>
         <div style={{align:"center"}} >
            </div>
        </div>
            </div>
        )
    }
}


DepPendingTask.propTypes = {
  dependingtask:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    dependinglists: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    form:state.form.dependinglists
  });
  
  export default connect(mapStateToProps, {dependingtask})(DepPendingTask);

