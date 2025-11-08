import PatientProfile from "../models/PatientProfile.js";
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
