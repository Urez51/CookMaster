const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

authRouter
  .route('/register')
  // .get((req, res) => {
  //   res.renderComponent(Register);
  // })
  .post(async (req, res) => {
    const { name, surname, email, password } = req.body;
    console.log(req.body);
    const existingUser = await User.findOne({ where: { email } });
    // проверяем есть ли уже такой пользователь в БД
    if (existingUser) {
      res.send('Такой пользователь уже есть');
      return;
    }

    // создаём нового пользователя
    const user = await User.create({
      name,
      surname,
      email,
      // хэшируем пароль, чтобы не хранить в открытом виде в БД
      password: await bcrypt.hash(password, 10),
    });

    // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
    req.session.userId = user.id;
    res.redirect('/');
  });

authRouter
  .route('/login')
  // .get((req, res) => {
  //   res.renderComponent(Login);
  // })
  .post(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    console.log(existingUser);
    // проверяем, что такой пользователь есть в БД и пароли совпадают
    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.userId = existingUser.id;
      req.session.user = existingUser;
      const user = {
        id: existingUser.id,
        name: existingUser.name,
        surmane: existingUser.surname,
        email: existingUser.email,
        img: existingUser.img,
      }
      res.json(user)
    } else {
      res.json('Неправильный email или пароль');
    }
  });

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = authRouter;
