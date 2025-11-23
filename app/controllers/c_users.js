const m_users = require("../models/m_users");

module.exports = {
  getWelcome: async (req, res) => {
    try {
      const message = await m_users.getWelcome();
      res.send(message);
    } catch (error) {
      res.status(500).json({ error: "Error fetching welcome message" });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await m_users.getUsers();
      res.json(users);
    } catch (error) {
      console.error("❌ Error detail:", error);
      res.status(500).json({ error: "Error fetching users" });
    }
  },

  createUser: async (req, res) => {
    try {
      const user = await m_users.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: "Error creating user" });
    }
  },
};
