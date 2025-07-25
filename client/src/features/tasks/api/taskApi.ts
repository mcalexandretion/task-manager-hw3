import type { Task } from '../../../entities/task/types/task';

const API_URL = 'http://localhost:3001/tasks';

export const taskApi = {
  getTasks: async (filters: { title?: string; date?: string } = {}) => {
    const params = new URLSearchParams();
    if (filters.title) params.append('title', filters.title);
    if (filters.date) params.append('date', filters.date);
    const response = await fetch(`${API_URL}?${params.toString()}`);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return response.json() as Promise<Task[]>;
  },

  getTaskById: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error('Task not found');
    return response.json() as Promise<Task>;
  },

  createTask: async (task: Omit<Task, 'id' | 'createdAt'>) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to create task');
    return response.json() as Promise<Task>;
  },

  updateTask: async (id: string, task: Partial<Task>) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    if (!response.ok) throw new Error('Failed to update task');
    return response.json() as Promise<Task>;
  },

  deleteTask: async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
    return true;
  },
};