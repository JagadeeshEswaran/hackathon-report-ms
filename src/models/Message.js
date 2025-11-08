import mongoose from 'mongoose';


const messageSchema = new mongoose.Schema(
    {
        text: { type: String, required: true, trim: true },
        patient_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
        provider_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
        message_by: { type: String, enum: ['patient', 'provider'], required: true }
    },
    { timestamps: true }
);


export default mongoose.model('Message', messageSchema);