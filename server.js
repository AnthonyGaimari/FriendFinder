// DEPENDENCIES
const express = require('express');

// INSTANTIATING SERVER
const PORT = process.env.PORT || 3000;
const app = express();

//Serve public folder
app.use(express.static("public"));

// INCORPORATING MIDDLEWARE
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// SERVER SET UP
app.listen(PORT, () =>{
    console.log(`APP is listening on PORT: ${PORT}`)
});