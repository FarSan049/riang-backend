const prisma = require("./m_prisma");

async function getProjects() {
  return await prisma.projects.findMany();
}

async function createProject(projectData) {
  return await prisma.projects.create({ data: projectData });
}

module.exports = { getProjects, createProject };
