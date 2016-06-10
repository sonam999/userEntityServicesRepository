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
      var userEntityObject=req.body;
      console.log(userEntityObject);
      userEntityService.postUserEntity(userEntityObject,function(err,data){
        if(err){ console.log(err)}
        else{
          console.log(data);
          message="add successfully";
          res.json({result:message});
        }
      })
  });


router.route('/userEntity/:Id')

    .get(function(req,res,next){
       var userId=req.params.Id;
       console.log(userId);
       userEntityService.getUserEntity(userId,function(err,data){
         if(err) {
           console.log(err);
         }
         else{
           if(data==null){
             res.sendStatus(404);
           }
           else{
             res.json({result:data});
           }
         }
        });
  })

  .put(function(req,res,next){
      var userId=req.params.Id;
      var userEntityObject=req.body;
      console.log(userId);
      console.log("inside handler........");
      console.log(userEntityObject);
      userEntityService.putUserEntity(userId,userEntityObject,function(err,data){
          if(err){
            console.log(err);
          }
          else{
            if(data==null){
              res.sendStatus(404);
            }else{
               console.log(data);
               var message="update successfully";
               res.json({result:message});
            }
          }
      });
    })

  .delete(function(req,res,next){
     var userId=req.params.Id;
     userEntityService.deleteUserEntity(userId,function(err,data){
       if(err){
         console.log(err);
         res.send(err);
       }
       else{
         console.log(data);
         if(data==null){
           res.sendStatus(404);
         }
         else{
           message="delete successfully";
           res.json({result:message});
         }
       }
     })
});

module.exports=router;
