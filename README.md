# CreAItion-React

Turn your ideas into stunning visuals with AI. Describe it, and CreAItion brings it to life!

## Features

- Simple and intuitive UI for entering text prompts.
- Generates high-quality images using Stability AI's API.
- Displays the generated image dynamically.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or later)
- A Stability AI API key (refer to the [Get an API Key](#get-an-api-key) section below).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Pushkaraj-Palli/CreAItion-React.git
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Get Api Key and store it in:

   ```bash
   const api_key = "Place your Api key";
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit:

   ```
   http://localhost:3000
   ```

## Usage

1. Enter a description of the image you want to generate in the text box (e.g., "A futuristic cityscape at sunset").
2. Click the **Generate Image** button.
3. Wait a few seconds for the image to be generated.
4. The generated image will appear below the button.

## Get an API Key

To use this application, you need an API key from Stability AI. Follow these steps to obtain your API key:

1. Go to the [Stability AI API Portal](https://platform.stability.ai/).
2. Sign up for an account or log in if you already have one.
3. Navigate to the API section and create a new API key.

## Project Structure

```
├── public
│   └── index.html
├── src
│   ├── Components
│   │   ├── Asserts
|   |   |   └── homeScreenImg.png
|   |   └── imageGenerator
|   |       ├── ImageGenerator.jsx
|   |       └──style.css
│   ├── App.js
│   ├── index.js
|   ├── package-lock.json
|   └── package.json

```

## Screenshots

### Gameplay UI

![homeScreen](https://github.com/user-attachments/assets/e71d6314-5f9c-4bae-bf9a-934d04adabf8)

![imageGenerated1](https://github.com/user-attachments/assets/e42bff95-a9ce-4c1f-a87c-feb38c60d445)
![imageGenerated2](https://github.com/user-attachments/assets/2eb35fca-7502-45e1-b140-ae9f29224704)

## Technologies Used

- **React.js**: For building the user interface.
- **Fetch API**: To make HTTP requests to Stability AI.
- **CSS**: For styling the application.
