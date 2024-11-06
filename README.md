# 🐱 CatApi - Nest Project

Welcome to CatApi! This is a simple yet powerful API built with NestJS, designed to provide fun and engaging information about our feline friends. Whether you're a cat lover or just curious, this project aims to offer a delightful experience while exploring cat breeds and their characteristics.

## 🚀 Features

- Fetch random cat images
- Retrieve detailed information about different cat breeds
- Docker support for easy setup and deployment

## 🛠️ Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeORM**: An ORM for TypeScript and JavaScript that works seamlessly with various databases.
- **MySQL**: A popular relational database management system.
- **Docker**: To containerise the application for consistent development and production environments.

## 📦 Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v20.9.0 or later)
- Docker (for containerisation)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/nest-project.git
   cd nest-project

   ```

2. **Install dependencies**

npm install

3. **Setup your environment variables**

Create a .env file in the root directory and add your MySQL credentials

4. **Run the application**

You can run the application in development mode:

npm run start:dev

Alternatively, if you prefer Docker, you can use the following command:

docker-compose up --build

5. **Access the API**

Once the application is running, you can access the API at http://localhost:3001/api.

### 📄 Database Migrations

The application uses TypeORM for database migrations.

### 🌟 Conclusion

CatApi is a fun and engaging project that not only showcases your skills with NestJS and TypeORM but also provides a delightful way for cat lovers to explore various breeds. We hope you enjoy using and contributing to this project!

Feel free to open issues or pull requests for enhancements or bug fixes. Happy coding! 🐾
