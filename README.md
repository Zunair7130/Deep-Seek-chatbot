Deep-Seek-chatbot
A modern, local-first AI chatbot powered by the DeepSeek model via the OpenRouter API. This project provides a robust backend and a simple, customizable frontend, allowing for quick setup and interaction with a powerful large language model.

You can see here how it looks like: https://ai.zazpro.online/

✨ Features
Local-First Experience: Run the chatbot entirely on your local machine.

DeepSeek Integration: Seamlessly connects to the DeepSeek AI model through the OpenRouter API.

Real-time Chat Simulation: Includes features like aligned messages and a typing animation for a dynamic user experience.

Chat History: Maintains a record of the conversation within the current session.

Clean Architecture: Well-structured Node.js Express backend and a simple HTML/CSS/Vanilla JavaScript frontend.

Easy UI Customization: The frontend is designed to be easily modified to suit your aesthetic preferences.

Secure API Key Handling: Utilizes environment variables for secure storage of your OpenRouter API key.

Robust Error Handling: The backend includes comprehensive error handling for API requests and JSON parsing.

⚙️ Technologies Used
Backend:

Node.js: JavaScript runtime environment.

Express.js: Fast, unopinionated, minimalist web framework for Node.js.

dotenv: Module to load environment variables from a .env file.

https module: Node.js built-in module for making HTTP requests over SSL/TLS.

Frontend:

HTML5: Structure of the web page.

CSS3: Styling of the user interface.

Vanilla JavaScript: Client-side interactivity and logic.

AI Model Integration:

DeepSeek AI: The large language model providing the intelligence.

OpenRouter API: An API gateway to access various LLMs, including DeepSeek.

🚀 How It Works (Architecture & Data Flow)
The Deep-Seek-chatbot operates with a clear client-server architecture:

Frontend (Client-side):

The user interacts with the interface defined by public/index.html and public/script.js.

When a user types a message and submits it, public/script.js captures this input.

A POST request containing the user's message is sent to the backend endpoint /ask.

Backend (Server-side):

The server.js (an Express.js application) receives the POST request at the /ask endpoint.

It extracts the user's message from the request body.

Using the https module, the backend constructs and sends a POST request to the OpenRouter API (https://openrouter.ai/api/v1/chat/completions). This request includes the deepseek/deepseek-chat model identifier, the user's message, and necessary authentication headers (including your securely loaded DEEPSEEK_API_KEY).

The backend then waits for the response from the OpenRouter API.

Upon receiving the response, it parses the JSON payload. Crucially, it extracts the AI's reply from the nested json.choices[0].message.content path.

Robust error handling is in place to catch issues like invalid JSON or missing reply content from the API.

Finally, the AI's reply (or an error message) is sent back as a JSON response to the frontend.

Frontend (Display):

public/script.js receives the AI's reply from the backend.

It then updates the chat interface to display the AI's response, maintaining the chat history and providing a smooth user experience with typing animations.

🛠️ Installation and Setup
Follow these steps to get the Deep-Seek-chatbot running on your local machine:

Clone the repository:

git clone https://github.com/Zunair7130/Deep-Seek-chatbot.git
cd Deep-Seek-chatbot

Install dependencies:

npm install

Obtain your OpenRouter API Key:

Go to OpenRouter AI Keys.

Sign up or log in.

Generate a new API key.

Create a .env file:

In the root directory of the project (the Deep-Seek-chatbot folder), create a new file named .env.

Add your OpenRouter API key to this file in the following format:

DEEPSEEK_API_KEY=sk-your-openrouter-api-key-here

Important: Replace sk-your-openrouter-api-key-here with the actual API key you obtained from OpenRouter.

Start the server:

node server.js

You should see a message in your console: 🚀 Server running at http://localhost:3000.

Open in browser:

Navigate to http://localhost:3000 in your web browser.

You can now start chatting with the DeepSeek AI model!

🎨 UI Customization
The frontend UI is intentionally kept basic to allow for easy customization. You can personalize the look and feel of your chatbot by modifying the following files in the public/ directory:

index.html: Adjust the HTML structure, add new elements, or modify existing ones.

style.css: Change colors, fonts, layouts, animations, and overall visual design.

script.js: Enhance interactivity, add new frontend features, or modify how messages are displayed.

Feel free to unleash your creativity and make the chatbot truly your own!

If you want to deploy it so you can visit my this repo where you can make the same project online: https://github.com/Zunair7130/Vercel-deployment

🧑‍💻 Developer
This project was developed by Zunair7130.

📄 License

This project is open-source and available under the MIT Lice



