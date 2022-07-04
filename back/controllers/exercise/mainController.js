import asyncHandler from "express-async-handler";
import Exercise from "../../models/exerciseModel.js";

// @desc    Create new exercise
// @route   POST /api/exercises
// @access  Private
export const createNewExercise = asyncHandler(async (req, res) => {
    const { name, times, imageIndex } = req.body;

    const exercise = await Exercise.create({
        name,
        times,
        image,
    });

    res.json(exercise);
});

// @desc    Update exercise
// @route   PUT /api/exercises
// @access  Private
export const updateExercise = asyncHandler(async (req, res) => {
    const { name, times, imageIndex, exerciseId } = req.body;

    const exercise = await Exercise.findById(exerciseId);

    if (!exercise) {
        res.status(404);
        throw new Error("Данное упражнение не найдено!");
    }

    exercise.name = name;
    exercise.times = times;
    exercise.imageIdx = imageIndex;

    const updateExercise = await exercise.save();

    res.json(updateExercise);
});
