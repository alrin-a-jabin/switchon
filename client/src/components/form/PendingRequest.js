import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { pendingtask } from '../../actions/formActions';
import PendingTable from './PendingTable';
 class PendingRequest extends Component {
   
   
    componentDidMount(){
        const {user} = this.props.auth;

        console.log(user.id);
        const pending={
            pend:user.id
          };
       
       this.props.pendingtask(pending);
      }
    render() { 
        const  PendingTasks= this.props.form;
        console.log(PendingTasks)
        // const  serviceLists= this.props.servicelists;
        // console.log("sel",serviceLists)
        let  pendingLists ;
      
        
       pendingLists = PendingTasks.map(PendingTask => (
            <PendingTable key={PendingTask._id} PendingTask={PendingTask} />
          ));
        
        return (
            <div>
             <div style={{height:"80vh"}}>
          <h3 align="center">Pending task assigned to you</h3>
          
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>task</th>
                <th>created by </th>
                <th> To department</th>
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


PendingRequest.propTypes = {
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
  
  export default connect(mapStateToProps, { pendingtask })(PendingRequest);

