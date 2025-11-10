// src/controllers/goalController.js
import Goal from '../models/Goal.js';

// Create
export const createGoal = async (req, res) => {
    try {
        const { activity_name, min_unit, type } = req.body;
        if (!activity_name || min_unit == null || !type) {
            return res.status(400).json({ message: 'activity_name, min_unit and type are required' });
        }
        const goal = await Goal.create({ activity_name, min_unit, type });
        res.status(201).json(goal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Read (one)
export const getGoal = async (req, res) => {
    try {
        const goal = await Goal.findById(req.params.id);
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        res.json(goal);
    } catch (err) {
        res.status(400).json({ message: 'Invalid goal id' });
    }
};

// List (with filters + pagination + sorting)
export const listGoals = async (req, res) => {
    try {
        const { page = 1, limit = 10, sort = '-createdAt', activity_name, type } = req.query;
        const q = {};
        if (activity_name) q.activity_name = activity_name;
        if (type) q.type = type;

        const skip = (Number(page) - 1) * Number(limit);

        const [items, total] = await Promise.all([
            Goal.find(q).sort(sort).skip(skip).limit(Number(limit)),
            Goal.countDocuments(q)
        ]);

        res.json({
            items,
            page: Number(page),
            limit: Number(limit),
            total,
            pages: Math.ceil(total / Number(limit))
        });
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch goals' });
    }
};

// Update (replace)
export const replaceGoal = async (req, res) => {
    try {
        const { activity_name, min_unit, type } = req.body;
        if (!activity_name || min_unit == null || type == null) {
            return res.status(400).json({ message: 'activity_name, min_unit and type are required' });
        }
        const goal = await Goal.findByIdAndUpdate(
            req.params.id,
            { activity_name, min_unit, type },
            { new: true, runValidators: true, overwrite: true }
        );
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        res.json(goal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update (partial)
export const updateGoal = async (req, res) => {
    try {
        const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        res.json(goal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete
export const deleteGoal = async (req, res) => {
    try {
        const goal = await Goal.findByIdAndDelete(req.params.id);
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ message: 'Invalid goal id' });
    }
};

// Toggle active helper
export const setGoalActive = async (req, res) => {
    try {
        const { is_active=true } = req.body;
        const goal = await Goal.findByIdAndUpdate(req.params.id, { is_active }, { new: true });
        if (!goal) return res.status(404).json({ message: 'Goal not found' });
        res.json(goal);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
