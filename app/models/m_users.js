const prisma = require("./m_prisma");

async function getWelcome() {
  return "Welcome to riang dev website kamu!";
}

async function getUsers() {
  return await prisma.users.findMany();
}

async function createUser(userData) {
  return await prisma.users.create({ data: userData });
}

module.exports = { getUsers, createUser, getWelcome };
