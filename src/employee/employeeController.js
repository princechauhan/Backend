var employeeModel = require('./employeeModel');
var employeeService = require('./employeeService');
const mongodb = require('mongodb');

var createEmployeeController = async (req, res) => {
    try {
        const body = req.body
        const employeeModelData = new employeeModel()
        employeeModelData.name = body.name
        employeeModelData.address = body.address
        employeeModelData.phone = body.phone
        await employeeModelData.save()
        res.status(200).send({
            "status": true,
            "message": "User Created Successfully."
        });
    }
    catch (error) {
        res.status(200).send(error);
    }
}


const getDataController = async (req, res) => {
    const myData = await employeeModel.find({});
    res.send({
        "status": true,
        "data": myData
    });
    //  res.status(200).json({myData});
};

const findEmployeeByNameDataController = async (req, res) => {
    const myData = await employeeModel.findOne({ name: req.params.name }).exec();
    // res.send({
    //     "status": true,
    //     "data": myData,
    // });
    res.status(200).json({ myData });
};

const deleteEmployeeDataController = async (req, res) => {

    const myData = await employeeModel.deleteOne({ _id: new mongodb.ObjectId(req.params._id) });

    res.send({
        "status": res.status,
        "data": myData,
    });

};

const updateEmployeeDataController = async (req, res) => {

    // const myData = await employeeModel.updateOne({_id: new mongodb.ObjectId(req.params._id) });

    // res.send({
    //        "status": res.status,
    //         "data": myData,
    // });

    const myData = await employeeModel.updateOne({ _id: new mongodb.ObjectId(req.params._id) },
        {
            $set: {
                name: req.body.name,
                address: req.body.address,
                phone: req.body.phone,
            }
        });
    res.send({
        "status": res.status,
        "data": myData,
    });

};

module.exports = { createEmployeeController, updateEmployeeDataController, deleteEmployeeDataController, getDataController, findEmployeeByNameDataController };
