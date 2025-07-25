import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TextField, Select, MenuItem, FormControl, InputLabel, Typography, Box, Button } from '@mui/material';
import { TaskCategory, TaskPriority, TaskStatus } from '../../../../entities/task/types/task';
import type { Task } from '../../../../entities/task/types/task';
import { taskApi } from '../../api/taskApi';
import styles from './TaskForm.module.css';

export const TaskForm = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const initialFormData: Task = {
    id: '',
    title: '',
    description: '',
    category: TaskCategory.Feature,
    status: TaskStatus.ToDo,
    priority: TaskPriority.Medium,
    createdAt: new Date().toISOString(),
  };

  const [formData, setFormData] = useState<Task>(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      setLoading(true);
      taskApi
        .getTaskById(id)
        .then((task) => setFormData(task))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id]);

  const handleSubmit = async () => {
    if (!formData.title.trim()) return;
    setLoading(true);
    try {
      if (id) {
        await taskApi.updateTask(id, formData);
      } else {
        await taskApi.createTask(formData);
      }
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (id) {
      setLoading(true);
      try {
        await taskApi.deleteTask(id);
        navigate('/');
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={styles.container}>
      <Typography className="app-title">{id ? 'Edit Task' : 'Create Task'}</Typography>
      <Box component="form" className={styles.form}>
        <TextField
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          fullWidth
        />
        <TextField
          label="Description"
          value={formData.description || ''}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          multiline
          rows={4}
          fullWidth
        />
        <TextField
          label="Created At"
          value={new Date(formData.createdAt).toLocaleDateString()}
          InputProps={{ readOnly: true }}
          fullWidth
          disabled
        />
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value as TaskCategory })}
          >
            {Object.values(TaskCategory).map((category) => (
              <MenuItem key={category} value={category}>{category}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Status</InputLabel>
          <Select
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value as TaskStatus })}
          >
            {Object.values(TaskStatus).map((status) => (
              <MenuItem key={status} value={status}>{status}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel>Priority</InputLabel>
          <Select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value as TaskPriority })}
          >
            {Object.values(TaskPriority).map((priority) => (
              <MenuItem key={priority} value={priority}>{priority}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Box className={styles.buttonsContainer}>
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            Save
          </Button>
          <Button variant="outlined" onClick={() => navigate('/')} disabled={loading}>
            Cancel
          </Button>
          {id && (
            <Button variant="contained" color="error" onClick={handleDelete} disabled={loading}>
              Delete
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};