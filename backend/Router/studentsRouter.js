const studentsRouter = require("express").Router();
const mongoose = require("mongoose");

require("../Model/Students");
const Students = mongoose.model("studntInfo");

studentsRouter.route("/studentsInfo")

    .get(async (req, res) => {
        await Students.find({})
            .then((result) => {
                res.json(result);
            })
            .catch((err) => {
                throw new Error(err);
            });
    })

    .post((request, response) => {
        let newStudent = new Students({
            name: request.body.name,
            age: request.body.age,
        });
        // response.json(newStudent)
        newStudent.save()
            .then((createdStudent) => {
                response.status(201).json({
                    massage: "Student added successfully"
                });
            })
            .catch((err) => {
                response.status(500).send(err);
            });
    })

    .put((request, response) => {
        // let modifyUser = Students.find({ _id: request.body.id })


        const updateStudent = new Students({
            name: request.body.name,
            age: request.body.age,
        })
        // Students.updateOne({ _id: request.body.id }, {
        //     $set: {
        //         name: request.body.name,
        //     }
        // })
        Students.updateOne({ _id: request.body.id }, updateStudent)
            .then((result) => { response.status(200).json({ message: "Update successful!" }) })
            .catch((err) => { throw new Error(err) })

    })

    .delete(async (request, response) => {
        await Students.deleteOne({ _id: request.body.id })
            .then((data) => { response.status(200).json(data) })
            .catch((err) => { throw new Error(err) })
    }); // Delete 

module.exports = studentsRouter;