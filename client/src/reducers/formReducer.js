import {
    GET_USERSLISTS,
    GET_PENDINGLIST,
    GET_TASKAPPROVEDLIST,
    GET_TASKREJECTEDLIST,
    GET_DEPARTMENTPENDINGLIST
    
}from '../actions/types';

const initialState ={
   
userdatas:[],
pendinglists:[],
taskapprovedlists:[],
taskrejectedlists:[],
dependinglists:[]


    
    
};

export default function (state = initialState, action){
  switch (action.type){
   
            case GET_USERSLISTS:
              return{
                ...state,
                userdatas: action.payload
              };  
              case GET_PENDINGLIST:
                return{
                  ...state,
                  pendinglists: action.payload
                };  
                case GET_TASKAPPROVEDLIST:
                  return{
                    ...state,
                    taskapprovedlists: action.payload
                  };  
                  case GET_TASKREJECTEDLIST:
                    return{
                      ...state,
                      taskrejectedlists: action.payload
                    };
                    case GET_DEPARTMENTPENDINGLIST:
                    return{
                      ...state,
                      dependinglists: action.payload
                    };
         default:
           return state;
  }

}