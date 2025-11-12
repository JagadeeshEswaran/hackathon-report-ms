import Goal from "../models/Goal.js";
import PatientProfile from "../models/PatientProfile.js";
import User from "../models/User.js";
import catchAsync from "../utils/catchAsync.js";

export const addNewUser = catchAsync(async (req, res) => {
  const user = req.body;

  try {
    const result = await User.create(user);

    return res.send({
      messgae: "User Added Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const getAllUsers = catchAsync(async (req, res) => {
  try {
    const result = await User.find();

    return res.send({
      messgae: "User Added Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const removeUser = catchAsync(async (req, res) => {
  const id = req.query.delId;

  try {
    const result = await User.deleteOne({ _id: id });

    return res.send({
      messgae: "User Deleted Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const addNewPatient = catchAsync(async (req, res) => {
  const patient = req.body;

  try {
    const result = await PatientProfile.create(patient);

    return res.send({
      messgae: "Patients fetched Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const getAllPatients = catchAsync(async (req, res) => {
  try {
    const result = await PatientProfile.find();

    return res.send({
      messgae: "Patients List is Here !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const removePatient = catchAsync(async (req, res) => {
  const id = req.query.delId;

  try {
    const result = await PatientProfile.deleteOne({ _id: id });

    return res.send({
      messgae: "Patients deleted Successfully...!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const addNewGoal = catchAsync(async (req, res) => {
  const goal = req.body;

  try {
    const result = await Goal.create(goal);

    return res.send({
      messgae: "Activity Added Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const getAllGoals = catchAsync(async (req, res) => {
  try {
    const result = await Goal.find();

    return res.send({
      messgae: "All Goals are here...",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});
