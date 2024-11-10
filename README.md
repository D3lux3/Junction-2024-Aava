# Aava Backend (Mostly similar workflow on frontend)

## Overview

Aava Backend is a Node.js application built with TypeScript. It provides a backend service using Express, Sequelize, and PostgreSQL.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd aava-backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. In project root run command `docker-compose up db -d`

4. Create a `.env` file in the `aava-backend` directory and add your environment variables.
```
DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres
```
## Scripts

- `tsc`: Compiles the TypeScript code.
    ```sh
    npm run tsc
    ```

- `dev`: Runs the application in development mode using `ts-node-dev`.
    ```sh
    npm run dev
    ```
