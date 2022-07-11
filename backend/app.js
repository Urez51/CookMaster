require('dotenv').config();
const path = require('path')
// не забудь установить babel:
// npm i @babel/core @babel/preset - env @babel/preset-react @babel/register
// также не забудь положить файл .babelrc в корень проекта
const express = require('express');
const expressConfig = require('./config/express');

// импортируем роутеры (там лежат наши ручки)
const authRouter = require('./routes/api/auth.routes');
const recipeRouter = require('./routes/api/recipe.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры

app.use('/', authRouter);
app.use('/recipe', recipeRouter);
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
// })

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
