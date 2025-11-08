import jwt from 'jsonwebtoken';
import User from '../models/User.js';


const signToken = (user) => {
    const payload = { sub: user._id, type: user.type, userName: user.userName };
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });
};


export const signup = async (req, res) => {
    try {
        const { userName, email, password, type } = req.body;
        if (!userName || !email || !password || !type)
            return res.status(400).json({ message: 'userName, email, password, type are required' });


        const exists = await User.findOne({ email });
        if (exists) return res.status(409).json({ message: 'Email already registered' });


        const user = await User.create({ userName, email, password, type });
        const token = signToken(user);
        res.status(201).json({
            token,
            user: { id: user._id, userName: user.userName, email: user.email, type: user.type }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Signup failed' });
    }
};


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) return res.status(400).json({ message: 'email and password are required' });


        const user = await User.findOne({ email, isActive: true }).select('+password');
        if (!user) return res.status(401).json({ message: 'Invalid credentials' });


        const ok = await user.comparePassword(password);
        if (!ok) return res.status(401).json({ message: 'Invalid credentials' });


        user.last_login = new Date();
        await user.save({ validateBeforeSave: false });


        const token = signToken(user);
        res.json({
            token,
            user: { id: user._id, userName: user.userName, email: user.email, type: user.type, last_login: user.last_login }
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Login failed' });
    }
};