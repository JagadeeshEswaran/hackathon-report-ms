import Goal from "../models/Goal.js";
import catchAsync from "../utils/catchAsync.js";

const getAllActivities = catchAsync(async (req, res) => {
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

export default { getAllActivities };
