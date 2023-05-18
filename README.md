# Empowering Web Development with Node JS, Adonis Js, Inertia Js, Prisma, and MongoDB: Unleash Your Creativity!


### Installation Guide

Welcome, contributors! We appreciate your interest in helping out with this project and assisting Node.js newcomers. This project aims to provide a supportive environment for individuals learning Node.js. Follow the steps below to get started:

### Step 1: Clone the Repository

```bash
git clone <repository-url>
cd <repository-directory>
```

### Step 2: Install Dependencies
To install the necessary dependencies, run the following command:

```bash
npm install
```

### Step 3: Configure Environment Variables
Create a .env file in the root directory of your project and update the following variables:

```
PORT=3333
HOST=0.0.0.0
NODE_ENV=development
APP_KEY=iomDLKB2M2cVu5nNuWGYuOJKb7WHwp8x
DRIVE_DISK=local
SESSION_DRIVER=cookie
CACHE_VIEWS=false


# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mongodb://127.0.0.1:27017/adnis"
```

### Step 4: Setup Prisma
To initialize Prisma for the database setup, run the following command:

```bash
npx prisma init
```

This will generate the required files and folders for Prisma.

### Step 5: Generate Prisma Client
Generate the Prisma client using the following command:

```
npx prisma generate
```

This will create the Prisma client based on your database schema and configurations.

### Step 6: Start the Development Server
Finally, start the development server with the following command:

```
npm run dev
```

Congratulations! You've completed the installation and setup process. By contributing to this project, you'll be helping Node.js newcomers in their learning journey. If you have any questions or need further guidance, feel free to reach out to the project maintainers.

Thank you for your contribution, and happy coding!
