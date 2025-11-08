import mongoose from 'mongoose';


const ACTIVITY_NAMES = ['walking', 'sleep', 'stress', 'heart_rate', 'drink_water'];
const GOAL_TYPES = ['gym', 'physical', 'personal'];


const goalSchema = new mongoose.Schema(
    {
        activity_name: { type: String, enum: ACTIVITY_NAMES, required: true },
        min_unit: { type: Number, required: true, min: 0 },
        is_active: { type: Boolean, default: true },
        type: { type: String, enum: GOAL_TYPES, required: true }
    },
    { timestamps: true }
);


export default mongoose.model('Goal', goalSchema);