const m_projects = require("../models/m_projects");

module.exports = {
    getProjects: async (req, res) => {
        try {
            const projects = await m_projects.getProjects();
            res.json(projects);
        } catch (error) {
            res.status(500).json({ error: "Error fetching projects" });
        }
    },
};