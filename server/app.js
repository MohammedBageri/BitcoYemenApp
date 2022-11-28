require("dotenv").config();
require("express-async-errors");

const fs = require("fs");
const http = require("http");
const socket = require("socket.io");
const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");

const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const rateLimiter = require("express-rate-limit");
const helmet = require("helmet");
const xss = require("xss-clean");
const cors = require("cors");

// Swagger
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocumentation = YAML.load("./swagger.yaml");

// database
const connectDB = require("./db/connect");

//  routers
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const currencyRouter = require("./routes/currencyRoutes");
const exchangeDirectionRouter = require("./routes/exchangeDirectionRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const blogRouter = require("./routes/blogRoutes");
const settingRouter = require("./routes/settingRoutes");
const productRouter = require("./routes/productRoutes");
const orderRouter = require("./routes/orderRoutes");
const recommendationRouter = require("./routes/recommendationRoutes");
const emailRouter = require("./routes/emailRoutes");
const affiliateRouter = require("./routes/AffiliateRoutes");

// middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.set("trust proxy", 1);
app.use(
  cors({
    credentials: true,
    origin: process.env.ORIGIN,
  })
);

app.use(morgan("common"));
app.use(helmet());
app.use(xss());

app.use(express.static("./public"));
app.use(express.json());
app.use(fileUpload());
app.use(cookieParser(process.env.JWT_SECRET));

app.get("/", (req, res) => {
  res.send(`<h1>Bitco-Yemen API</h1><a href="/api-docs">Documentation</a>
  <script src="socket.io/socket.io.js"></script>`);
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/currency", currencyRouter);
app.use("/api/v1/direction", exchangeDirectionRouter);
app.use("/api/v1/transaction", transactionRouter);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/setting", settingRouter);
app.use("/api/v1/product", productRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/recommendation", recommendationRouter);
app.use("/api/v1/email", emailRouter);
app.use("/api/v1/affiliate", affiliateRouter);

app.get("/mit", (req, res) => {
  process.emit("newTransaction", "id");
  res.send("new emit");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3001;
const start = async () => {
  try {
    createFolders();
    await connectDB(process.env.MONGO_URL);
    await require("./utils/createInitialEmailTemplate")();
    const server = http.createServer(app);
    setupSocket(server);
    server.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

function setupSocket(server) {
  const io = socket(server);
  const transactionSocket = require("./socket/transactionSocket");
  const orderSocket = require("./socket/orderSocket");
  transactionSocket(io);
  orderSocket(io);
}

function createFolders() {
  const dirs = [
    "./public/blog-images",
    "./public/currency-images",
    "./public/transaction-images",
    "./public/identity-images",
    "./public/product-images",
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}
start();
