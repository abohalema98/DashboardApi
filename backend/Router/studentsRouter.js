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

    .put(async (request, response) => {
        const Id = await request.body.id;
        const Name = await request.body.name;
        const Age = await request.body.age;

        const updateStudent = new Students({
            name: Name,
            age: Age,
        })
        Students.updateOne({ _id: Id }, updateStudent)
            .then((result) => { response.status(200).json({ message: "Update successful!" }) })
            .catch((err) => { throw new Error(err) })

    })

    .delete(async (request, response) => {
        await Students.deleteOne({ _id: request.body.id })
            .then((data) => { response.status(200).json(data) })
            .catch((err) => { throw new Error(err) })
    }) // Delete 

studentsRouter.get("/studentsInfo/:id?", (request, response) => {
    Students.findOne({ _id: request.params.id })
        .then((result) => { response.status(200).json(result) })
        .catch((err) => { throw new Error(err) })

})


module.exports = studentsRouter;