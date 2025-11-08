import mongoose from 'mongoose';


const FREQUENCIES = ['daily'];


const userGoalSchema = new mongoose.Schema(
    {
        patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
        title: { type: String, required: true, trim: true },
        unit: { type: Number, required: true, min: 0 },
        frequency: { type: String, enum: FREQUENCIES, default: 'daily' },
        goal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Goal', required: true, index: true }
    },
    { timestamps: true }
);


export default mongoose.model('UserGoal', userGoalSchema);