const c_users = require("../app/controllers/c_users");
const c_projects = require("../app/controllers/c_projects");  
const c_auth = require("../app/controllers/c_auth");

module.exports = (app) => {
  app.get("/", c_users.getWelcome);

  app.post("/auth/login", c_auth.login);

  app.get("/users", c_users.getUsers);
  app.post("/users", c_users.createUser);

  app.get("/projects", c_projects.getProjects);
  
};
