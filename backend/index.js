const express = require("express")

const app = express();
const cors = require('cors')
const { logger } = require('./middlewares')
app.use(logger)
app.use(cors())

// Statics
app.use(express.static('static'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// routers
const indexRouter = require('./routes/products')
const blogRouter = require('./routes/blog')
const commentRouter = require('./routes/comment')
const imageRouter = require('./routes/image')
const userRouter = require('./routes/user')
const wishlistRouter = require('./routes/wishlist')
const cartsRouter = require('./routes/carts')
const orderRouter = require('./routes/order')

app.use(indexRouter.router)
app.use(blogRouter.router)
app.use(commentRouter.router)
app.use(imageRouter.router)
app.use(userRouter.router)
app.use(wishlistRouter.router)
app.use(cartsRouter.router)
app.use(orderRouter.router)

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})