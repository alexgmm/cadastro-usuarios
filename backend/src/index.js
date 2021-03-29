const app = require("./app");

const PORT = 3333;

app.listen(PORT, () => {
  console.log("\x1b[34m%s\x1b[0m", `Listening on ${PORT}`);
});
