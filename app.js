import express from 'express'
import cors from 'cors'

import TuitsController from "./controllers/tuits/tuits-controller.js"
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users/users-controller.js";

const app = express();
app.use(express.json())
app.use(cors())

TuitsController(app)
HelloController(app)
UsersController(app)
app.listen(process.env.PORT || 4000)