import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/config", (req, res) => {
  res.json({
    botWsUrl: process.env.BOT_WS_URL || "",
    botName: process.env.BOT_NAME || "MIAS MDX",
    version: "3.1.0"
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Session site → port ${PORT}`));

export default app;
