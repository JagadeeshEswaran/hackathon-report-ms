import { Router } from 'express';
import { protect, restrictTo } from '../middleware/auth.js';
import {
    createGoal,
    getGoal,
    listGoals,
    replaceGoal,
    updateGoal,
    deleteGoal,
    setGoalActive,
} from '../controllers/goalController.js';

const router = Router();

router.use(protect);

router
    .route('/')
    .get(listGoals) // allow all authenticated
    .post(restrictTo('admin', 'patient'), createGoal);

router
    .route('/:id')
    .get(getGoal)
    .put(restrictTo('admin', 'patient'), replaceGoal)
    .patch(restrictTo('admin', 'patient'), updateGoal)
    .delete(restrictTo('admin', 'patient'), deleteGoal);

router.patch('/:id/active', restrictTo('admin', 'patient'), setGoalActive);

export default router;