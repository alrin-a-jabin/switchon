
import axios from 'axios';
import {
    GET_ERRORS,
    GET_USERSLISTS,
    GET_PENDINGLIST,
    GET_TASKAPPROVEDLIST,
    GET_TASKREJECTEDLIST,
    GET_DEPARTMENTPENDINGLIST

} from './types';

//get the user list
export const userdata = (req) => dispatch => {
  // console.log("gdsgvd",req)
    axios
     .post('/api/form/userlist',req)
      .then(res =>{
        // console.log(res)
       dispatch({
         type:GET_USERSLISTS,
         payload:res.data
       })
      })
    //  console.log(GET_SERVICELIST);
     .catch(err=>
      dispatch({
        type:GET_ERRORS,
        payload:err.response.data
      }))
  }
  
  //add the task 
  export const addTask = (newTask,history)=> dispatch => {

    axios
      .post('/api/form/addtask', newTask)
      .then(res => { history.push('/dashboard')}
      )
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err.response.data
        })
      );
  };
//get penging request
export const pendingtask = (pending) => dispatch => {
  console.log("req",pending)
  axios
  
   .post('/api/form/pendinglist',pending)
    .then(res =>{
    //  console.log(res)
     dispatch({
       type:GET_PENDINGLIST,
       payload:res.data
     
     })
    })
  //  console.log(GET_SERVICELIST);
   .catch(err=>
    dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))

}



export const approvetask = (_id,history) => dispatch => {
  console.log("req",_id)
  axios
   .post('/api/form/approvetask',{"_id":_id})
   .then(res =>{
    console.log(res)
    dispatch({
     
      payload:res.data
    
    })
   })
  .catch(err=>
   dispatch({
     type:GET_ERRORS
   }))
}



//to reject task
export const rejecttask = (_id) => dispatch=> {
console.log(_id)
  axios
    .post('/api/form/rejecttask',{"_id":_id})

    .then(res =>{
       console.log(res)
       dispatch({
         payload:res.data
       
       })
      })
     .catch(err=>
      dispatch({
        type:GET_ERRORS
      }))
};

//to get approve task list
export const taskapproved = (approved) => dispatch => {
  console.log("req",approved)
  axios
   .post('/api/form/taskapproved',approved)
    .then(res =>{
     console.log(res)
     dispatch({
       type:GET_TASKAPPROVEDLIST,
       payload:res.data
     })
    })
   .catch(err=>
    dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))
}

//to get rejected task list
export const taskrejected = (rejected) => dispatch => {
  console.log("req",rejected)
  axios
   .post('/api/form/taskrejected',rejected)
    .then(res =>{
     console.log(res)
     dispatch({
       type:GET_TASKREJECTEDLIST,
       payload:res.data
     })
    })
  //  console.log(GET_SERVICELIST);
   .catch(err=>
    dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))
}


// to get users pending task of the department
export const dependingtask = (userdepartment) => dispatch => {
  console.log("req",userdepartment)
  axios
   .post('/api/form/dependingtask',userdepartment)
    .then(res =>{
     console.log(res)
     dispatch({
       type:GET_DEPARTMENTPENDINGLIST,
       payload:res.data
     
     })
    })
  //  console.log(GET_SERVICELIST);
   .catch(err=>
    dispatch({
      type:GET_ERRORS,
      payload:err.response.data
    }))
}
