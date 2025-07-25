# Task Manager
Домашнее задание №3
## Функционал

- **Управление задачами (CRUD)**:
  - Создание, просмотр, обновление и удаление задач.
  - Задачи содержат заголовок, описание, категорию, статус, приоритет и дату создания.
- **Фильтрация**:
  - Поиск задач по заголовку (без учета регистра).
  - Фильтрация задач по дате создания, статусу, категории и приоритету.
- **Интерфейс**:
  - Отзывчивый список задач в виде карточек.
  - Форма для создания/редактирования задач с валидацией.
  - Переключение светлой/темной темы с сохранением в localStorage.
 
## Инструкция по запуску

### Требования
- Node.js (версия 18 или выше)
- npm
- Git

### Установка
1. Клонируйте репозиторий:
```bash
git clone <repository-url>
cd task-manager
```
2. Настройка сервера:
```bash
cd server
npm install
npm run build
npm run dev
```
Сервер запускается на `http://localhost:3001`.  
3. Настройка клиента:
```bash
cd ../client
npm install
npm run dev
```
Клиент запускается на `http://localhost:5173`.

### Использование
- Откройте `http://localhost:5173` в браузере.
- Создавайте, редактируйте или удаляйте задачи через интерфейс.
- Используйте фильтры для поиска задач по заголовку, дате.

### Технологии и подходы
Сервер:
- Node.js + Express.
- TypeScript.
- CORS.
- UUID.

Клиент:
- React + TypeScript.
- Material-UI (MUI).
- React Router.
- fetch API.
- Vite.

### Архитектура
Сервер (Node.js + Express):
- REST API: Обработка CRUD-операций (GET /tasks, GET /tasks/:id, POST /tasks, PATCH /tasks/:id, DELETE /tasks/:id) с фильтрацией по заголовку и дате.
- Хранение данных: Массив задач в памяти.
- TypeScript: Обеспечивает типобезопасность для сущностей и маршрутов.
- Модульные маршруты: Эндпоинты задач в routes/tasks.ts.  

Клиент (React + TypeScript):
- Структура по функциям: Разделение на entities (типы), features (UI, API) и routes.
- Слой API: taskApi.ts инкапсулирует HTTP-запросы к серверу.
- Компоненты UI: TaskList, TaskForm, TaskItem для отображения и управления задачами.
- Управление состоянием: Локальное состояние (useState) для форм и списка, с сохранением темы в localStorage.
- Маршрутизация: React Router для навигации между списком задач и формой.
- Темы: Светлая/темная тема на базе MUI с использованием контекста.

## Скриншоты
<p align="center"> <img width="1896" height="899" alt="image" src="https://github.com/user-attachments/assets/ad82b0de-832d-4db7-ab91-54b3e47c1f3e" /> </p>
<p align="center"> <img width="1900" height="899" alt="image" src="https://github.com/user-attachments/assets/62a7f009-856e-4a8c-b62a-191935cd4d30" />
</p>
<p align="center"><img width="619" height="617" alt="image" src="https://github.com/user-attachments/assets/41b3553c-61aa-4cde-b8b0-6597eb971588" />
</p>
<p align="center"><img width="724" height="613" alt="image" src="https://github.com/user-attachments/assets/bd895ce7-2ae3-41af-9d8f-bc5fef85e7d3" />
</p>

