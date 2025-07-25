import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useThemeContext } from '../../../shared/ui/ThemeProvider/ThemeProvider';
import { TaskItem } from '../TaskItem/TaskItem';
import { Box, FormControl, InputLabel, Select, MenuItem, Button, Typography, IconButton, TextField } from '@mui/material';
import { TaskStatus, TaskCategory, TaskPriority } from '../../../../entities/task/types/task';
import type { Task } from '../../../../entities/task/types/task';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { taskApi } from '../../api/taskApi';
import styles from './TaskList.module.css';

export const TaskList = () => {
  const navigate = useNavigate();
  const { themeMode, toggleTheme } = useThemeContext();
  const [filters, setFilters] = useState<{
    status?: TaskStatus;
    category?: TaskCategory;
    priority?: TaskPriority;
    title?: string;
    date?: string;
  }>({});
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    taskApi
      .getTasks(filters)
      .then((data) => setTasks(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [filters]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Box className={styles.taskListContainer}>
      <Box className={styles.header}>
        <Typography className="app-title">Task Manager</Typography>
        <IconButton onClick={toggleTheme}>
          {themeMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Box>
      <Box className={styles.filters}>
        <TextField
          label="Search by Title"
          value={filters.title || ''}
          onChange={(e) => setFilters({ ...filters, title: e.target.value })}
          variant="outlined"
          className={styles.formControl}
        />
        <TextField
          label="Search by Date"
          type="date"
          value={filters.date || ''}
          onChange={(e) => setFilters({ ...filters, date: e.target.value })}
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          className={styles.formControl}
        />

        <Button variant="contained" color="primary" onClick={() => navigate('/new')}>
          Add Task
        </Button>
      </Box>
      {tasks.length === 0 ? (
        <Typography variant="h6" className={styles.noTasks}>No tasks match the selected filters</Typography>
      ) : (
        <div className={styles.taskGrid}>
          {tasks.map((task) => (
            <div className={styles.taskGridItem} key={task.id}>
              <TaskItem task={task} />
            </div>
          ))}
        </div>
      )}
    </Box>
  );
};