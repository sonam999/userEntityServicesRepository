var express=require('express');
var router=express.Router();
var userEntityService=require('../models/userEntityModel');

router.route('/userEntity')

  .get(function(req,res,next){
      userEntityService.getAll(function(err,result){
        if(err) res.send(err);
        console.log('Inside Get Promise');
        console.log(result);
        res.json(result);
      });
   })

  .post(function(req,res,next){
      console.log(req);
      var userEntityObject=req.body.userEntityObject;
      console.log(userEntityObject);
      userEntityService.postUserEntity(userEntityObject)
                        .then(function(err,result){
                          if(err) res.send(err);
                          console.log('data stored');
                          res.json({message:result});
     });
  });


router.route('/userEntity/:Id')

    .get(function(req,res,next){
       var userId=req.params.Id;
       console.log(userId);
       userEntityService.getUserEntity(userId)
                        .then(function(result){
                            console.log('inside get by id');
                            console.log(result);
                            res.json(result);
       }).catch(function(err){
          console.log(err);
          res.sendStatus(404);
       });
  })

  .put(function(req,res,next){
      var userId=req.params.Id;
      var userEntityObject=req.body;
      console.log(userId);
      console.log("inside handler........");
      console.log(userEntityObject);
      userEntityService.putUserEntity(userId,userEntityObject)
                       .then(function(result){
                         console.log(result);
                         console.log('inside put method');
                         res.json({msg:result});
     }).catch(function(err){
       res.sendStatus(404);
     });
  })

  .delete(function(req,res,next){
     var userId=req.params.Id;
     userEntityService.deleteUserEntity(userId)
                      .then(function(result){
                        console.log(result);
                        console.log('inside delete method');
                        res.json({msg:result});
   }).catch(function(err){
     res.send(err);
   })
});

module.exports=router;
