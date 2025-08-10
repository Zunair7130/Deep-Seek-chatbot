// this file is created to counter or debug any error
require("dotenv").config(); // Load API key from .env file
const https = require("https");

const data = JSON.stringify({
  model: "deepseek/deepseek-chat", // ✅ Correct model ID for OpenRouter
  messages: [
    { role: "user", content: "Hello, are you working?" }   // This will ask deepseek "Hello, are you working?" as you can see in the header this file will check if backend is working correctly or to check the api key working fine!
  ]
});

const options = {
  hostname: "openrouter.ai",
  path: "/api/v1/chat/completions",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${process.env.DEEPSEEK_API_KEY}`, // ✅ from .env
    "HTTP-Referer": "http://localhost", // Required by OpenRouter
    "X-Title": "DeepSeek Test Script"   // Optional title
  }
};

const req = https.request(options, (res) => {
  let body = "";
  res.on("data", chunk => body += chunk);
  res.on("end", () => {
    console.log("🔍 DeepSeek API Raw Response:\n", body);
  });
});

req.on("error", (err) => {
  console.error("❌ Error:", err.message);
});

req.write(data);
req.end();
