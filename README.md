# Promptopia

![Cover image](/public/image.png)

## Discover & Share AI-Powered Prompts

Promptopia is an open-source AI prompting tool designed for the modern world, enabling users to discover, create, and share creative prompts. Built with Next.js, this platform aims to foster a community of creativity and innovation.

### Features

- **Discover**: Explore a wide variety of AI-powered prompts shared by users worldwide.
- **Create**: Use our intuitive editor to craft and customize your own prompts.
- **Share**: Publish your prompts to the Promptopia community and beyond, inspiring creativity in others.

### Getting Started

#### Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14.x or later)
- npm (v6.x or later)
- A Google Cloud account for setting up OAuth 2.0 credentials.

#### Setting up Google Client ID

1. Visit the [Google Developers Console](https://console.developers.google.com/).
2. Create a new project or select an existing one.
3. Navigate to the "Credentials" page and click on "Create credentials" > "OAuth client ID".
4. Select "Web application" as the application type, provide a name for your OAuth 2.0 client, and add your project's redirect URIs.
5. Once the client is created, note down the Client ID and Client Secret for your application.

#### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/promptopia.git```
2. Navigate to the project directory:
    
    ```cd promptopia```

3. Install dependencies:

    ```npm install```

4. Create .env file and configure the following:

    ```
    GOOGLE_CLIENT_ID=
    GOOGLE_CLIENT_SECRET=

    ENV="prod or test"

    DB_NAME=
    DB_URI=
    DB_URI_PROD=

    NEXTAUTH_URL=http://localhost:3000
    NEXTAUTH_URL_INTERNAL=http://localhost:3000
    NEXTAUTH_SECRET=
    ```
5. Start the development server:
    
    ```npm run dev```

6. Open http://localhost:3000 with your browser to see the result.

Happy! Prompting!