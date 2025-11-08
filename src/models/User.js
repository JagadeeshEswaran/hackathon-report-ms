import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const USER_TYPES = ["patient", "provider", "admin"];

const userSchema = new mongoose.Schema(
  {
    userName: { type: String, trim: true, required: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    password: { type: String, required: true, minlength: 6, select: false },
    last_login: { type: Date },
    type: { type: String, enum: USER_TYPES, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model("Patients", userSchema);
