import mongoose from 'mongoose';


const userGoalTrackerSchema = new mongoose.Schema(
    {
        patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
        goal_id: { type: mongoose.Schema.Types.ObjectId, ref: 'UserGoal', required: true, index: true },
        curr_unit: { type: Number, required: true, min: 0 },
        is_achieved: { type: Boolean, default: false },
        activity_date: { type: Date, required: true }
    },
    { timestamps: true }
);


userGoalTrackerSchema.index({ patient_id: 1, goal_id: 1, activity_date: 1 }, { unique: true });


export default mongoose.model('UserGoalTracker', userGoalTrackerSchema);