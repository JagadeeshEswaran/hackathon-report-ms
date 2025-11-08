const catchAsync = require("../../utils/catchAsync");
const ProvidersService = require("../services/service.providers");

const getAllAssignedPatients = catchAsync(async (req, res) => {
  const result = await ProvidersService.getAllAssignedPatients();

  return res.send({
    message: "Patient list fetched Successfully..!",
    data: result,
  });
});

module.exports = { getAllAssignedPatients };
