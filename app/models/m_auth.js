const prisma = require("./m_prisma");


async function login(email) {
  return await prisma.users.findUnique({ where: { email } });
}

module.exports = {
  login,
};
