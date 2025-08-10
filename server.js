require("dotenv").config();
const express = require("express");
const https = require("https");
const app = express();

app.use(express.static("public"));
app.use(express.json());

app.post("/ask", (req, res) => {
  const userMessage = req.body.message;

  const postData = JSON.stringify({
    model: "deepseek/deepseek-chat",
    messages: [{ role: "user", content: userMessage }]
  });

  const options = {
    hostname: "openrouter.ai",
    path: "/api/v1/chat/completions",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`,
      "HTTP-Referer": "http://localhost",
      "X-Title": "DeepSeek Local"
    }
  };

  const apiReq = https.request(options, (apiRes) => {
    let body = "";

    apiRes.on("data", (chunk) => (body += chunk));
    apiRes.on("end", () => {
      try {
        const json = JSON.parse(body);
        const reply = json.choices?.[0]?.message?.content;

        if (!reply) {
          console.error("⚠️ Reply not found in response!");
          return res.status(500).json({ reply: "No response from DeepSeek" });
        }

        console.log("✅ Final reply:", reply);
        res.json({ reply });
      } catch (err) {
        console.error("❌ JSON parse error:", err.message);
        res.status(500).json({ reply: "Error parsing DeepSeek response" });
      }
    });
  });

  apiReq.on("error", (err) => {
    console.error("❌ Request error:", err.message);
    res.status(500).json({ reply: "Request failed" });
  });

  apiReq.write(postData);
  apiReq.end();
});

app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
