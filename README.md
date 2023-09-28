<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Getting Started

Follow these steps to run the project in a development environment.

## Prerequisites
- Node.js and npm (Node Package Manager) installed.
- [Yarn](https://classic.yarnpkg.com/en/docs/install/) installed.
- [Nest CLI](https://docs.nestjs.com/cli/overview) installed globally.
- Docker and [Docker Compose](https://docs.docker.com/compose/install/) installed if using MongoDB as the database.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lguisadom/pokedex
   ```
2. Navigate to the project directory:
   ```bash
   cd pokedex
   ```
3. If you haven't already, install the Nest CLI globally:
   ```bash
   npm install -g @nestjs/cli
    ```
4. Use Docker Compose to set up the mongo database container:
   ```bash
   docker-compose up -d
   ```

5. Clone the file ```.env.template``` and rename the copy to ```.env```

6. Fill the environment variables defined in the ```.env```

## Start the Development Server

Now that everything is set up, you can start the NestJS development server server:
   ```bash
   yarn start:dev
   ```
This will launch your NestJS application in development mode.

## Rebuild the database with the seed data
   ```bash
   http://localhost:3000/api/v2/seed
   ```