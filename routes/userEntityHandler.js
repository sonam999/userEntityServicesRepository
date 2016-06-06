var express=require('express');
var router=express.Router();
var userEntityService=require('../models/userEntityModel');

// router.route('/')
//    .get(function(req,res,next){
//     res.sendfile("userProfile.html");
// });

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
      var userEntityObject=req.body.userEntityObject;
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
          res.send(err);
       });
  })

  .put(function(req,res,next){
      var userId=req.params.Id;
      var userEntityObject=req.params.userEntityObject;
      userEntityService.putUserEntity(userId,userEntityObject)
                       .then(function(result){
                         console.log(result);
                         console.log('inside put method');
                         res.json({msg:result});
     }).catch(function(err){
       res.send(err);
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
