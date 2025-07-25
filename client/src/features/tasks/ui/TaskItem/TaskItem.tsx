import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Chip, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { TaskPriority, TaskStatus } from '../../../../entities/task/types/task';
import type { Task } from '../../../../entities/task/types/task';
import { taskApi } from '../../api/taskApi';
import styles from './TaskItem.module.css';
import React from 'react';

interface TaskItemProps {
  task: Task;
}

const getPriorityColor = (priority: TaskPriority) => {
  switch (priority) {
    case TaskPriority.High:
      return 'error';
    case TaskPriority.Medium:
      return 'warning';
    case TaskPriority.Low:
      return 'success';
    default:
      return 'default';
  }
};

const getStatusColor = (status: TaskStatus) => {
  switch (status) {
    case TaskStatus.Done:
      return 'success';
    case TaskStatus.InProgress:
      return 'warning';
    case TaskStatus.ToDo:
      return 'info';
    default:
      return 'default';
  }
};

export const TaskItem = React.memo(({ task }: TaskItemProps) => {
  const navigate = useNavigate();

  const handleDelete = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      await taskApi.deleteTask(task.id);
      navigate(0); // Перезагрузка страницы для обновления списка
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Card className={styles.taskCard} onClick={() => navigate(`/task/${task.id}`)}>
      <CardContent>
        <Box className={styles.tittleContainer}>
        <Typography variant="h6" className={styles.title}>
          {task.title}
        </Typography>          
        <IconButton color="error" onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Box>
        {task.description && (
          <Typography variant="body2" color="text.secondary" className={styles.description}>
            {task.description}
          </Typography>
        )}
        <Typography variant="caption" color="text.secondary" className={styles.createdAt}>
          Created: {new Date(task.createdAt).toLocaleDateString()}
        </Typography>
        <Box className={styles.chipsContainer}>
          <Chip label={task.category} color="secondary" size="small" />
          <Chip label={task.status} color={getStatusColor(task.status)} size="small" />
          <Chip label={task.priority} color={getPriorityColor(task.priority)} size="small" />
        </Box>
        

      </CardContent>
    </Card>
  );
});