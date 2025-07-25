"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const task_1 = require("../entities/task");
const uuid_1 = require("uuid");
const router = (0, express_1.Router)();
// GET /tasks - Получение всех задач с фильтрацией
router.get('/', (req, res) => {
    const { title, date } = req.query;
    let filteredTasks = task_1.tasks;
    if (typeof title === 'string') {
        filteredTasks = filteredTasks.filter((task) => task.title.toLowerCase().includes(title.toLowerCase()));
    }
    if (typeof date === 'string') {
        filteredTasks = filteredTasks.filter((task) => new Date(task.createdAt).toLocaleDateString() === date);
    }
    res.json(filteredTasks);
});
// GET /tasks/:id - Получение задачи по ID
router.get('/:id', (req, res) => {
    const task = task_1.tasks.find((t) => t.id === req.params.id);
    if (!task) {
        return res.status(404).json({ error: 'Task not found' });
    }
    res.json(task);
});
// POST /tasks - Создание новой задачи
router.post('/', (req, res) => {
    const { title, description, category, status, priority } = req.body;
    if (!title || !category || !status || !priority) {
        return res.status(400).json({ error: 'Missing required fields' });
    }
    const newTask = {
        id: (0, uuid_1.v4)(),
        title,
        description,
        category,
        status,
        priority,
        createdAt: new Date().toISOString(),
    };
    task_1.tasks.push(newTask);
    res.status(201).json(newTask);
});
// PATCH /tasks/:id - Обновление задачи
router.patch('/:id', (req, res) => {
    const taskIndex = task_1.tasks.findIndex((t) => t.id === req.params.id);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    const updatedTask = { ...task_1.tasks[taskIndex], ...req.body };
    task_1.tasks[taskIndex] = updatedTask;
    res.json(updatedTask);
});
// DELETE /tasks/:id - Удаление задачи
router.delete('/:id', (req, res) => {
    const taskIndex = task_1.tasks.findIndex((t) => t.id === req.params.id);
    if (taskIndex === -1) {
        return res.status(404).json({ error: 'Task not found' });
    }
    task_1.tasks.splice(taskIndex, 1);
    res.status(204).send();
});
exports.default = router;
