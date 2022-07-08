require('dotenv').config();

const express = require('express');
const expressConfig = require('./config/express');
const cardsRouter = require('./routes/views/cards.routes');

// импортируем роутеры (там лежат наши ручки)
// const mainRouter = require('./routes/views/main.routes');
// const taskRouter = require('./routes/views/tasks.routes');
// const taskApiRouter = require('./routes/api/tasks.routes');
// const authRouter = require('./routes/views/auth.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
// app.use(mainRouter); // роутер главной страницы
app.use('/api/cards', cardsRouter); // роутер списка задач (все url начинаются с /tasks)
// app.use('/auth', authRouter);
// app.use('/api/tasks', taskApiRouter); // роутер списка задач (все url начинаются с /tasks)

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
