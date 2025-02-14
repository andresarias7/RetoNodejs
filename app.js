const express = require('express');
const app = express();
const taskRoutes = require('./src/routes/task');
const UserRouter = require('./src/routes/user')
const logger = require('./src/routes/middlewares/logger');

const userRoutes = new UserRouter()

app.use(express.json());
app.use(logger);
app.use('/api/user', userRoutes.start())
// app.use('/api/tasks', taskRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));