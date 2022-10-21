const { v4: uuidv4 } = require("uuid");
const User = require("../models/user.model");

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send(error.message)
    };
};


const getOneUser = (req, res) => {
    res.status(200).json({
        message: "Getting one users",
    });
};


const createUser = async (req, res) => {
    try {
        const newUser = new User({
            id: uuidv4(),
            role: req.body.role,
            name: req.body.name,
            email: req.body.email,
            phone: Number(req.body.phone),
<<<<<<< HEAD
            image: req.body.image,
            age: req.body.age,
=======
            date: req.body.date
>>>>>>> 7349f9f940b693fdabd17959cc87f58db901248f
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.log('error', error)
        res.status(500).send(error.message);
    }
};


const updateUser = (req, res) => {
    res.status(200).json({
        message: "user is updated",
    });
};


const deleteUser = (req, res) => {
    res.status(201).json({
        message: "user is deleted",
    });
};

module.exports = { getAllUsers, getOneUser, createUser, updateUser, deleteUser };