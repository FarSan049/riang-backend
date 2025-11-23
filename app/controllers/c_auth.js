const m_auth = require("../models/m_auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = {
    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await m_auth.login(email);
            if (!user) return res.status(400).json({ error: "User not found" });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(401).json({ error: "Invalid password" });

            const token = jwt.sign(
                { userId: user.id }, 
                process.env.JWT_SECRET || "rianggembira", 
                { expiresIn: "1h" }
            );
            
            res.json({ token, user });
        } catch (error) {
            res.status(500).json({ error: "Login failed" });
        }
    }
};

