import mongoose from 'mongoose';


const providerSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        specialization: { type: String, trim: true },
        years_of_exp: { type: Number, min: 0, default: 0 },
        provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true }
    },
    { timestamps: true }
);


export default mongoose.model('Provider', providerSchema);