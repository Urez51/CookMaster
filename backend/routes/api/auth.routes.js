const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { signedCookie } = require('cookie-parser');
const validator = require('validator');
const { User } = require('../../db/models');

authRouter
  .route('/register')
  // .get((req, res) => {
  //   res.renderComponent(Register);
  // })
  .post(async (req, res) => {
    const {
      name, surname, email, password,
    } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    // проверяем есть ли уже такой пользователь в БД
    if (existingUser) {
      res.json('Пользователь с таким email уже есть');
      return;
    }

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/)) {
      res.json('Пароль должен быть от 8 до 15 символов, которые содержат как минимум одну строчную букву, одну заглавную букву, одну цифровую цифру и один специальный символ');
      return;
    }

    if (!validator.isEmail(email)) {
      res.json('Email не верный');
      return;
    }
    // создаём нового пользователя
    const userNew = await User.create({
      name,
      surname,
      email,
      // хэшируем пароль, чтобы не хранить в открытом виде в БД
      password: await bcrypt.hash(password, 10),
    });

    const user = {
      id: userNew.id,
      name: userNew.name,
      surname: userNew.surname,
      email: userNew.email,
      img: userNew.img,
    };
    req.session.userId = user.id;
    req.session.user = user;
    res.json(user);
    // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
  });

authRouter
  .route('/login')
  // .get((req, res) => {
  //   res.renderComponent(Login);
  // })
  .post(async (req, res) => {
    const { email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    // проверяем, что такой пользователь есть в БД и пароли совпадают
    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      const user = {
        id: existingUser.id,
        name: existingUser.name,
        surname: existingUser.surname,
        email: existingUser.email,
        img: existingUser.img,
        role: existingUser.role,
      };
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.userId = user.id;
      req.session.user = user;
      res.json(user);
    } else {
      res.json('Неправильный email или пароль');
    }
  });

authRouter
  .route('/session')
  .get(async (req, res) => {
    if (req.session.userId) {
      const existingUser = await User.findOne({ where: { id: req.session.userId } });
      if (existingUser) {
        const user = {
          id: existingUser.id,
          name: existingUser.name,
          surname: existingUser.surname,
          email: existingUser.email,
          img: existingUser.img,
          role: existingUser.role,
        };
        res.json(user);
      } else {
        res.json({});
      }
    } else {
      res.json({});
    }
  });

authRouter.get('/logout', (req, res) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        return next(err);
      }
      res.clearCookie('user_sid');
      return res.sendStatus(200);
    });
  } catch (error) {
    res.json('Ошибка удаления');
  }
});

authRouter.route('/edit').put(async (req, res) => {
  const { name, surname, img } = req.body;
  const [count, updateUser] = await User.update(
    {
      name,
      surname,
      img,
    },
    {
      where: {
        id: req.session.userId,
      },
      returning: true,
      plain: true,
      raw: true,
    },
  );
  const user = {
    id: updateUser.id,
    name: updateUser.name,
    surname: updateUser.surname,
    email: updateUser.email,
    img: updateUser.img,
    role: updateUser.role,
  };
  req.session.userId = user.id;
  req.session.user = user;
  res.json(user);
});

module.exports = authRouter;
