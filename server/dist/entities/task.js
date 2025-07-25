"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tasks = exports.TaskPriority = exports.TaskStatus = exports.TaskCategory = void 0;
var TaskCategory;
(function (TaskCategory) {
    TaskCategory["Bug"] = "Bug";
    TaskCategory["Feature"] = "Feature";
    TaskCategory["Documentation"] = "Documentation";
    TaskCategory["Refactor"] = "Refactor";
    TaskCategory["Test"] = "Test";
})(TaskCategory || (exports.TaskCategory = TaskCategory = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["ToDo"] = "To Do";
    TaskStatus["InProgress"] = "In Progress";
    TaskStatus["Done"] = "Done";
})(TaskStatus || (exports.TaskStatus = TaskStatus = {}));
var TaskPriority;
(function (TaskPriority) {
    TaskPriority["Low"] = "Low";
    TaskPriority["Medium"] = "Medium";
    TaskPriority["High"] = "High";
})(TaskPriority || (exports.TaskPriority = TaskPriority = {}));
exports.tasks = [
    {
        id: '1',
        title: 'Implement login feature',
        description: 'Create user authentication system',
        category: TaskCategory.Feature,
        status: TaskStatus.ToDo,
        priority: TaskPriority.High,
        createdAt: new Date().toISOString(),
    },
];
