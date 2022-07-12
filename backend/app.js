require('dotenv').config();
const path = require('path');
// не забудь установить babel:
// npm i @babel/core @babel/preset - env @babel/preset-react @babel/register
// также не забудь положить файл .babelrc в корень проекта
const express = require('express');
const expressConfig = require('./config/express');
const cardsRouter = require('./routes/views/cards.routes');

// импортируем роутеры (там лежат наши ручки)
const authRouter = require('./routes/api/auth.routes');
const recipeRouter = require('./routes/api/recipe.routes');
const publishRouter = require('./routes/api/publish.routes');
const searchGlobalRouter = require('./routes/api/search_global.routes');

const app = express();
const PORT = process.env.PORT ?? 3000;

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры

app.use('/', authRouter);
app.use('/search', searchGlobalRouter);
app.use('/recipe', recipeRouter);
app.use('/publish', publishRouter);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(PORT, () => console.log(`server started at ${PORT}`));
