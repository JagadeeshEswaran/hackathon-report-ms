import mongoose from 'mongoose';


const patientProfileSchema = new mongoose.Schema(
    {
        contact: { type: String, trim: true },
        patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
        dmi: { type: String, trim: true },
        dob: { type: Date },
        weight: { type: Number, min: 0 },
        allergies: [{ type: String, trim: true }],
        sex: { type: String, enum: ['male', 'female', 'other'] },
        provider: { type: mongoose.Schema.Types.ObjectId, ref: 'User', index: true }
    },
    { timestamps: true }
);


export default mongoose.model('PatientProfile', patientProfileSchema);