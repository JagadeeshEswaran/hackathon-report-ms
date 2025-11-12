import PatientProfile from "../models/PatientProfile.js";
import UserGoal from "../models/UserGoal.js";
import catchAsync from "../utils/catchAsync.js";

export const getAllAssignedPatients = catchAsync(async (req, res) => {
  const providerId = req.query.uid;

  console.log(providerId);

  try {
    const result = await PatientProfile.find({ provider: providerId });

    return res.send({
      messgae: "Patients fetched Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});

export const getPatientGoals = catchAsync(async (req, res) => {
  const patientId = req.query.ptId;

  console.log(patientId);

  try {
    const result = await UserGoal.find({ patient_id: patientId });

    return res.send({
      messgae: "Patients Goals fetched Successfully !!",
      data: result,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Signup failed" });
  }
});
