import { app } from "./app";

const PORT = process.env.PORT || 7071;

app.listen(PORT, () => {
  console.info(`CEP API running on port: ${PORT}`);
});
