var employeeModel = require('./employeeModel');

//    module.exports.findOneEmployeeDBService =  (userDetails)=>{
//       return  new  Promise(function myFn(resolve,reject){
//           employeeModel.findOne({name:userDetails}, function returnData(error,result){
//           if(error)
//           {
//               reject(false);
//           }
//           else{
//             resolve(result); 
//           }
//           });

//       });
//   }

const findEmployeeDBService = async (req,res)=>{
const myData = await employeeModel.find({});
res.status(200).json({myData});
};

module.exports = {findEmployeeDBService};

