const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const User = require('../../models/User');
const Form = require('../../models/Form');

const validateFormInput = require('../../validation/form');

router.post('/pendinglist', (req,res) => {
  // const errors={};
 console.log("reqwas ", req.body.pend)
  // res.send("oi");
  Form.find({asigneduserid:req.body.pend,status:'pending'})
  // console.log("gdsgvd",req.body)
  .then(form =>{
      if(form){
          res.json(form);
      }
      else{
          errors.noform='There is no form  provider for this category '
      }
  })

  .catch(err => res.status(404).json(err));
});


router.post('/userlist',(req,res) =>{
    // const errors={};
   console.log("req is ", req.body.dep)
    // res.send("oi");
    User.find({department:req.body.dep})
    // console.log("gdsgvd",req.body)
    .then(user =>{
        if(user){
            res.json(user);
        }
        else{
            errors.nouser='There is no user  provider for this category '
        }
    })

    .catch(err => res.status(404).json(err));
});



router.post(
    '/addtask',
    // passport.authenticate('jwt', { session: false }),
    (req, res) => {
      // console.log(req)
      const { errors, isValid } = validateFormInput(req.body);
  
      // Check Validation
      if (!isValid) {
        // If any errors, send 400 with errors object
        return res.status(400).json(errors);
      }
  
  
      const newTask = new Form({
        userid: req.body.user,
        task: req.body.task,
        name: req.body.name,
        department: req.body.department,
      asigneduserid:req.body.assigneduserid,
        status:req.body.status
      });
      // console.log(newTask);
  
      newTask.save()
     
      .then(form => res.json(form))
      .catch(err => console.log(err));
    }
  );

//aprove the task

  router.post('/approvetask', (req,res) => {
   console.log("reqwas ", req.body._id)
    Form.updateOne({_id:req.body._id}, {status:"approved"})
    .then(form =>{
      console.log("updated")
        if(form){
            res.json(form);
        }
        else{
            errors.noform='There is a problem in rejecting the task '
        }
    })
    .catch(err => res.status(404).json(err));
  });


  //reject the task

  router.post('/rejecttask',(req,res) =>{
    Form.updateOne({_id:req.body._id},{status:"rejected"})
        .then(form =>{
      console.log("updated")
        if(form){
            res.json(form);
        }
        else{
            errors.noform='There is a problem in rejecting the task '
        }
    })
    .catch(err => res.status(404).json(err));
  });



//get the approved task
  router.post('/taskapproved', (req,res) => {
   console.log("reqwas ", req.body.approver)
    // res.send("oi");
    Form.find({asigneduserid:req.body.approver,status:"approved"})
    // console.log("gdsgvd",req.body)
    .then(form =>{
        if(form){
            res.json(form);
        }
        else{
            errors.noform='There is problem in approving the task '
        }
    })
  
    .catch(err => res.status(404).json(err));
  });
  
//get the approved task
router.post('/taskrejected', (req,res) => {
  console.log("reqwas ", req.body.approver)
   // res.send("oi");
   Form.find({asigneduserid:req.body.approver,status:"rejected"})
   // console.log("gdsgvd",req.body)
   .then(form =>{
       if(form){
           res.json(form);
       }
       else{
           errors.noform='There is problem in approving the task '
       }
   })
 
   .catch(err => res.status(404).json(err));
 });
 

 router.post('/dependingtask', (req,res) => {
  console.log("reqwas ", req.body.userdep)
   Form.find({department:req.body.userdep,
    $or:[{status:"rejected"},{status:"pending"}]
    })
   // console.log("gdsgvd",req.body)
   .then(form =>{
       if(form){
           res.json(form);
       }
       else{
           errors.noform='There is problem in '
       }
   })
 
   .catch(err => res.status(404).json(err));
 });
 

module.exports = router;