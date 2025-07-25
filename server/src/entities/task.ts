export enum TaskCategory {
  Bug = 'Bug',
  Feature = 'Feature',
  Documentation = 'Documentation',
  Refactor = 'Refactor',
  Test = 'Test',
}

export enum TaskStatus {
  ToDo = 'To Do',
  InProgress = 'In Progress',
  Done = 'Done',
}

export enum TaskPriority {
  Low = 'Low',
  Medium = 'Medium',
  High = 'High',
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  category: TaskCategory;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
}

export const tasks: Task[] = [
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