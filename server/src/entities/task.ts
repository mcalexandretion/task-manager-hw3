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
  {
    id: '2',
    title: 'Implement dark mode toggle',
    description: 'Add theme switcher in user settings',
    category: TaskCategory.Feature,
    status: TaskStatus.ToDo,
    priority: TaskPriority.Medium,
    createdAt: '2025-05-10',
  },
  {
    id: '3',
    title: 'Update API documentation',
    description: 'Document new endpoints for v2.1',
    category: TaskCategory.Documentation,
    status: TaskStatus.ToDo,
    priority: TaskPriority.Low,
    createdAt: '2025-05-18',
  },
  {
    id: '4',
    title: 'Refactor payment service',
    description: 'Split into smaller modules and improve error handling',
    category: TaskCategory.Refactor,
    status: TaskStatus.InProgress,
    priority: TaskPriority.Medium,
    createdAt: '2025-05-05',
  },
  {
    id: '5',
    title: 'Add unit tests for auth module',
    description: 'Cover all auth service methods with tests',
    category: TaskCategory.Test,
    status: TaskStatus.Done,
    priority: TaskPriority.High,
    createdAt: '2025-04-28',
  },
  {
    id: '6',
    title: 'Fix memory leak in dashboard component',
    description: 'Component doesnt clean up event listeners',
    category: TaskCategory.Bug,
    status: TaskStatus.ToDo,
    priority: TaskPriority.High,
    createdAt: '2025-05-20',
  },
  {
    id: '7',
    title: 'Create onboarding tutorial',
    description: 'Interactive guide for new users',
    category: TaskCategory.Feature,
    status: TaskStatus.InProgress,
    priority: TaskPriority.Medium,
    createdAt: '2025-05-12',
  },
  {
    id: '8',
    title: 'Update contribution guidelines',
    category: TaskCategory.Documentation,
    status: TaskStatus.ToDo,
    priority: TaskPriority.Low,
    createdAt: '2025-05-22',
  },
  {
    id: '9',
    title: 'Optimize database queries',
    description: 'Review and optimize slow queries in reporting module',
    category: TaskCategory.Refactor,
    status: TaskStatus.ToDo,
    priority: TaskPriority.Medium,
    createdAt: '2025-05-17',
  },
  {
    id: '10',
    title: 'Implement e2e tests for checkout flow',
    category: TaskCategory.Test,
    status: TaskStatus.InProgress,
    priority: TaskPriority.High,
    createdAt: '2025-05-08',
  },
];