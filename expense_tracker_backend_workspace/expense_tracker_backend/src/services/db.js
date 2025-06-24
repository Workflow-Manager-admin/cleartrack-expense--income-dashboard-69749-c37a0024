const fs = require('fs').promises;
const path = require('path');

const dataDir = path.join(process.cwd(), 'data');
const usersPath = path.join(dataDir, 'users.json');
const expensesPath = path.join(dataDir, 'expenses.json');
const incomesPath = path.join(dataDir, 'incomes.json');

// Ensure data directory exists
const ensureDataDir = async () => {
  try {
    await fs.mkdir(dataDir, { recursive: true });
  } catch (err) {
    console.error('Error creating data directory:', err);
  }
};

const readFile = async (filePath) => {
  try {
    await ensureDataDir();
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // if file does not exist, create it with empty array
      await writeFile(filePath, []);
      return [];
    }
    throw error;
  }
};

const writeFile = async (filePath, data) => {
  await ensureDataDir();
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
};

const db = {
  users: {
    async get() {
      return readFile(usersPath);
    },
    async save(data) {
      await writeFile(usersPath, data);
    },
  },
  expenses: {
    async get() {
      return readFile(expensesPath);
    },
    async save(data) {
      await writeFile(expensesPath, data);
    },
  },
  incomes: {
    async get() {
      return readFile(incomesPath);
    },
    async save(data) {
      await writeFile(incomesPath, data);
    },
  },
};

module.exports = db;
