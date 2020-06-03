import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pendingtask } from '../../actions/formActions';
import ApproveRejectTable from './ApproveRejectTable';
 class ApproveReject extends Component {
   
   constructor(){
     super()
     this.state={
       result: false
     }
   }
   approveTask(_id){
    // console.log(_id)
    this.props.approvetask(_id, this.props.history)
}

rejectedTask(_id){
  console.log(_id,"reject")
   this.props.rejecttask(_id)
}

    componentDidMount(){
        const {user} = this.props.auth;

        console.log(user.id);
        const pending={
            pend:user.id
          };
       
       this.props.pendingtask(pending);
       this.setState({result:false})
          console.log("alrin")

      }
    
    render() { 
        const  PendingTasks= this.props.form;
        console.log(PendingTasks)
        // const  serviceLists= this.props.servicelists;
        // console.log("sel",serviceLists)
        let  pendingLists ;
      if(PendingTasks.length === 0){
        pendingLists=<div class="font-weight-bold"><h1>There is no Pending List</h1></div>
      }else{
        
       pendingLists = PendingTasks.map(PendingTask => (
            <ApproveRejectTable key={PendingTask._id} PendingTask={PendingTask} />
          ));}
        
        return (
            <div>
             <div style={{height:"80vh"}}>
          <h3 align="center">Task to Approve and Reject</h3>
          {this.state.result ? <link to="/approvereject">k</link>:false}
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>task</th>
                <th>created by </th>
                <th> To department</th>
                <th>approve </th>
                <th>reject</th>
              </tr>
            </thead>
            <tbody>
              { pendingLists}
            </tbody>
          </table>
         <div style={{align:"center"}} >
            </div>
        </div>
            </div>
        )
    }
}


ApproveReject.propTypes = {
    pendingtask:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    pendinglists: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
    form:state.form.pendinglists,
  });
  
  export default connect(mapStateToProps, { pendingtask })(ApproveReject);

