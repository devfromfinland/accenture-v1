const express = require('express')
// const cors = require('cors')
const indexRouter = require('./routes/index')
const pageRouter = require('./routes/page')
const app = express()

const PORT = 3001

// app.use(cors())

app.use('/', indexRouter)
app.use('/page', pageRouter)

app.use(express.static('./build'))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
