class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password; // In a real app, this would be hashed
  }
}

module.exports = User;
