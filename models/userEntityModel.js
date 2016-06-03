var mongoose=require('mongoose');

var Q=require('q');
var schema=mongoose.Schema;

var userEntitySchema= new schema({
             picture :  String ,
             id :   String ,
             role :   String ,
             band :   String ,
             gender :   String ,
             first_name :   String ,
             last_name :   String ,
             date_of_birth :  Date ,
             residential_address :   String ,
             mobile :   String ,
             other_contacts :   String ,
             date_of_joining :  Date ,
             work_experience_in_year : Number,
             language : [String],
             work_location :   String ,
             projects : [{
               project_id :  String  ,
               project_name :   String ,
               team_name :   String ,
               project_role :   String ,
               manager :   String
            }],
             passport_details : {
               passport_number : Number,
               date_of_expiry :  Date ,
               date_of_issue :  Date ,
               issuing_authority :   String
            },
             preferences : {
               stay : [{
                 rating : [Number],
                 location : [String],
                 amenities : [String],
                 price : [String]
              }],
               booking : [{
                 airlines : [String],
                 fare_type : Boolean,
                 departure_time : [String],
                 arrival_time : [String],
                 no_of_stop : Number,
                 price : [String]
              }],
               local_travel : [{
                 price : [String],
                 local_type : [String]
              }]
            },
             favorite_travel : {
               travel_plan_id :   String,
               comment :   String
            },
             visa_availability : [{
               from :   String ,
               to :   String ,
               visa_category :  Boolean
            }],
             cost_code : String,
             country : String
     });

var userEntityModel=mongoose.model('userEntityModel',userEntitySchema,'userEntityCollection');
var userEntityService={};

userEntityService.getAll=function(callback){
  return userEntityModel.find({},callback);
};

userEntityService.postUserEntity=function(newUserEntityObject){
   var newModel=new userEntityModel(newUserEntityObject);
   return newModel.save();
};

userEntityService.getUserEntity=function(userId){
   var deferred=Q.defer();
   console.log('inside get model');
   console.log(userId);
   userEntityModel.find({id:userId})
                  .exec(function(err,data){
                    console.log(err);
                    userEntityObject=data;
                    console.log(userEntityObject);
                    deferred.resolve(userEntityObject);
                  });
          return deferred.promise;
};

userEntityService.putUserEntity=function(userId,newUserEntityObject){
   var deferred=Q.defer();
   userEntityModel.find({id:userId})
                  .exec(function(err,data){
                    console.log(err);
                    console.log(data);
                    userEntityObject=data;
                    newModel=new userEntityModel(newUserEntityObject);
                    userEntityObject=newModel;
                    userEntityObject.save();
                    message="updated successfully";
                    deferred.resolve(message);
      })
      return deferred.promise;
};

userEntityService.deleteUserEntity=function(userId){
   var deferred=Q.defer();
   userEntityModel.remove({id:userId})
                  .exec(function(err){
                    console.log(err);
                    message="deleted successfully";
                    deferred.resolve(message);
   })
   return deferred.promise;
};

module.exports=userEntityService;
