import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import SelectListGroup from '../common/SelectListGroup';
 import { userdata,addTask } from '../../actions/formActions';

class Requestform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      department:'',
      status:'pending',
      assigneduserid:'',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


  componentWillReceiveProps(newProps) {
    if (newProps.errors) {
      this.setState({ errors: newProps.errors });
    }
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const { user } = this.props.auth;
    if(user.department =='aic'){
      this.setState.department='iiitk'
    }else{
      this.setState.department='aic'
    }

    const newTask = {
      task: this.state.task,
      name: user.name,
      department:this.setState.department,
      assigneduserid:this.state.assigneduserid,
      status:this.state.status,
      user:user.id
    };
    console.log("asa",newTask);
    this.props.addTask(newTask, this.props.history);
 
  }

 

  componentDidMount(){
    const { user } = this.props.auth;
    // const findDep={
    //   dep:user.department
    // }
    console.log(user.department);
if(user.department =='aic'){
  console.log("alrin")
  const selectdep={
    dep:'iiitk'
  };
  this.props.userdata(selectdep);
  console.log(selectdep);
}
else{
  const selectdep={
    dep:'aic'
  };
  this.props.userdata(selectdep)
}

  }
  render() {
    const { errors } = this.state;
    // const options = [
    //     { label: 'AIC', value: 'aic' },
    //     { label: 'IIITK', value: 'iiitk' }
    //   ];

    const AssignedUser= this.props.form;
    
    // console.log(AssignedUser)
    const optionsAssignedUser = AssignedUser.map((AssignedUser) =>
    <option 
      key={AssignedUser._id}
      value={AssignedUser._id}
      label={AssignedUser.name}
       />
  
);


    return (
     <div className="container">
        <div className="row">
          <div className="col-md-12 m-auto">
            <h1 className="display-4 text-center">Request Form</h1>
            <p className="lead text-center">
             Asign the task to the Department 
            </p>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <TextAreaFieldGroup
                  placeholder="Create a Task"
                  name="task"
                  required
                  value={this.state.task}
                  onChange={this.onChange}
                  error={errors.task}
                />
              </div>
              {/* <h5><label > Select Department:</label></h5>
                   <SelectListGroup
                  placeholder="Department"
                  name="department"
                  value={this.state.department}
                  onChange={this.onChange}
                  options={options}
                  error={errors.department}
                 
                /> */}
                    <h5><label > Assign the task to</label></h5>
               <select
                name="assigneduserid"
                className='form-control form-control-lg'
                onChange={this.onChange}>
                <option>Select people in the department</option>
                {optionsAssignedUser}
           </select>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
           </div>
        </div>
       </div>
    );
  }
}

Requestform.propTypes = {
  addTask:PropTypes.func.isRequired,
  userdata: PropTypes.func.isRequired,
  userdatas:PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  form:state.form.userdatas,
  errors: state.errors
});

// export default connect(mapStateToProps, { addPost })(Requestform);
export default connect(mapStateToProps, { userdata,addTask })(Requestform);