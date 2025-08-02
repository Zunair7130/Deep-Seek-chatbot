Deep-Seek-chatbot

A modern, local-first AI chatbot powered by the DeepSeek model via the OpenRouter API. This project provides a robust backend and a simple, customizable frontend, allowing for quick setup and interaction with a powerful large language model.

✨ Features:

•	Local-First Experience:  Run the chatbot entirely on your local machine.

•	DeepSeek Integration: Seamlessly connects to the DeepSeek AI model through the OpenRouter API.

•	Real-time Chat Simulation: Includes features like aligned messages and a typing animation for a dynamic user experience.

•	Clean Architecture: Well-structured Node.js Express backend and a simple HTML/CSS/Vanilla JavaScript frontend.

•	Easy UI Customization: The frontend is designed to be easily modified to suit your aesthetic preferences.

•	Secure API Key Handling: Utilizes environment variables for secure storage of your OpenRouter API key.

•	Robust Error Handling: The backend includes comprehensive error handling for API requests and JSON parsing.

⚙️ Technologies Used:

•	Backend:

o	Node.js: JavaScript runtime environment.

o	Express.js: Fast, unopinionated, minimalist web framework for Node.js.

o	dotenv: Module to load environment variables from a .env file.

o	https module: Node.js built-in module for making HTTP requests over SSL/TLS.

•	Frontend:

o	HTML5: Structure of the web page.

o	CSS3: Styling of the user interface.

o	Vanilla JavaScript: Client-side interactivity and logic.

•	AI Model Integration:

o	DeepSeek AI: The large language model providing the intelligence.
o	OpenRouter API: An API gateway to access various LLMs, including DeepSeek.

🚀 How It Works (Architecture & Data Flow):

The Deep-Seek-chatbot operates with a clear client-server architecture:

1.	Frontend (Client-side):
   
o	The user interacts with the interface defined by public/index.html and public/script.js.

o	When a user types a message and submits it, public/script.js captures this input.

o	A POST request containing the user's message is sent to the backend endpoint /ask.

2.	Backend (Server-side):

o	The server.js (an Express.js application) receives the POST request at the /ask endpoint.

o	It extracts the user's message from the request body.

o	Using the https module, the backend constructs and sends a POST request to the OpenRouter API (https://openrouter.ai/api/v1/chat/completions). This request includes the deepseek/deepseek-chat model identifier, the user's message, and necessary authentication headers (including your securely loaded DEEPSEEK_API_KEY).


o	The backend then waits for the response from the OpenRouter API.

o	Upon receiving the response, it parses the JSON payload. Crucially, it extracts the AI's reply from the nested json.choices[0].message.content path.

o	Robust error handling is in place to catch issues like invalid JSON or missing reply content from the API.

o	Finally, the AI's reply (or an error message) is sent back as a JSON response to the frontend.

3.	Frontend (Display):
   
o	public/script.js receives the AI's reply from the backend.

o	It then updates the chat interface to display the AI's response, maintaining the chat history and providing a smooth user experience with typing animations.

🛠️ Installation and Setup:

Follow these steps to get the Deep-Seek-chatbot running on your local machine:

1.	Clone the repository:
   
2.	git clone https://github.com/Zunair7130/Deep-Seek-chatbot.git

3.	cd Deep-Seek-chatbot
	
4.	Install dependencies:
	
5.	npm install
	
6.	Obtain your OpenRouter API Key:
    	
o	Go to OpenRouter AI Keys.

o	Sign up or log in.

o	Generate a new API key.

7.	Create a .env file:
    
o	In the root directory of the project (the Deep-Seek-chatbot folder), create a new file named .env.

o	Add your OpenRouter API key to this file in the following format:

o	DEEPSEEK_API_KEY=sk-your-openrouter-api-key-here

Important!: Replace sk-your-openrouter-api-key-here with the actual API key you obtained from OpenRouter.

8.	Start the server:
   
9.	node server.js

You should see a message in your console: 🚀 Server running at http://localhost:3000.

10.	Open in browser:
    
o	Navigate to http://localhost:3000 in your web browser.

o	You can now start chatting with the DeepSeek AI model!

🎨 UI Customization:

The frontend UI is kept basic to allow for easy customization. You can personalize the look and feel of your chatbot by modifying the following files in the public/ directory:

•	index.html: Adjust the HTML structure, add new elements, or modify existing ones.

•	style.css: Change colors, fonts, layouts, animations, and overall visual design.

•	script.js: Enhance interactivity, add new frontend features, or modify how messages are displayed.

Feel free to unleash your creativity and make the chatbot truly your own!

🧑💻 Developer:

This project was developed by Zunair7130.

📄 License:

This project is open-source and available under the MIT License.

