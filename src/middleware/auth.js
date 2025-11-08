import jwt from 'jsonwebtoken';


export const protect = (req, res, next) => {
    const auth = req.headers.authorization || '';
    const token = auth.startsWith('Bearer ') ? auth.split(' ')[1] : null;
    if (!token) return res.status(401).json({ message: 'Not authenticated' });
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = payload; // { sub, type, userName }
        next();
    } catch (e) {
        return res.status(401).json({ message: 'Invalid or expired token' });
    }
};


export const restrictTo = (...roles) => (req, res, next) => {
    if (!req.user || !roles.includes(req.user.type)) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    next();
};