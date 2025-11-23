const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

require("./config/routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

