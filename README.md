# Template-agency

ProchainWeb is a showcase website developed to present the activities of a sole proprietor. It includes a contact form that is connected to a personalized messaging system.

### Table of Contents

- [Installation](#installation)
- [Prerequisites](#prerequisites)
- [Key Features](#key-features)
- [Nodemailer Configuration](#nodemailer-configuration)
- [Technologies Used](#technologies-used)
- [Production URL](#production-url)
- [Continuous Deployment](#continuous-deployment)
  
## Installation
Launch the fallowing commands to start server in development mode :

    cd ./server
    pnpm i
    pnpm start

  The client consists of a static `index.html` file. You can open it for exemple with Visual Studio Code and extension [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).

### Prerequisites

Before getting started, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

Ensure you have these tools installed locally before proceeding with the project installation.

### Key Features

- **Contact Form:** The site includes an integrated contact form.
- **Personalized Messaging:** The contact form is connected to Nodemailer, configured with a personalized messaging client.

### Nodemailer Configuration

To set up Nodemailer with a personalized messaging client, follow these steps:

1. Open the configuration file at `./server/src/sendMail.ts`.
2. Modify the following parameters with your information:
    ```js
    export async function sendMail(data: IMailInput) {
      const { email, message, subject, name, phone } = data;

      let transporter = nodemailer.createTransport({
        host: config.AUTH_DOMAIN_HOST,
        port: config.AUTH_DOMAIN_PORT,
        secure: true,
        auth: {
          user: config.AUTH_DOMAIN_USERNAME,
          pass: config.AUTH_DOMAIN_PASSWORD,
        },
    });

Remember to keep this sensitive information confidential. You may also consider using environment variables for more secure configurations.

### Technologies Used

#### Client-Side
- HTML
- SCSS
- Bootstrap
- jQuery

#### Server-Side
- Node.js
- Express
- Nodemailer
- JavaScript
- TypeScript

#### Additional Technologies
- Nginx
- Docker

### Continuous Deployment
The project is set up for continuous deployment. Pushes to the `main` branch trigger automatic deployment to the production environment.
