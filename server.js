const express = require("express")
const app = express()
const port = 3000
app.use(express.json());
const { User } = require("./routes/usersRouter");

const usersRouter = require("./routes/usersRouter")

app.use("/users", usersRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

