const express = require('express');
const router = express.Router();
var employeeController = require('../src/employee/employeeController');

router.route("/user/create").post(employeeController.createEmployeeController);
router.route("/user/getEmployeeByName/:name").get(employeeController.findEmployeeByNameDataController);
router.route("/user/getAllEmployee/").get(employeeController.getDataController);
router.route("/user/deleteEmployee/:_id").delete(employeeController.deleteEmployeeDataController);
router.route("/user/updateEmployee/:_id").put(employeeController.updateEmployeeDataController);

module.exports = router;
