const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../services/db');
const User = require('../models/user');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

class AuthController {
  async register(req, res, next) {
    try {
      const { username, password } = req.body;
      const users = await db.users.get();

      if (users.find(u => u.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User(Date.now().toString(), username, hashedPassword);
      
      users.push(newUser);
      await db.users.save(users);

      res.status(201).json({
        message: 'User registered successfully',
        userId: newUser.id,
        username: newUser.username
      });
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { username, password } = req.body;
      const users = await db.users.get();
      const user = users.find(u => u.username === username);

      if (!user || !await bcrypt.compare(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ token });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthController();
