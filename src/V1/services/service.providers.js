const PatientProfile = require("../../models/PatientProfile");

const ProvidersService = {
  async getAllAssignedPatients(providerId) {
    const patients = PatientProfile.find({ where: { provider: providerId } });

    return [];
  },
};

module.exports = ProvidersService;
