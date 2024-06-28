Made By Kelvin Njuguna
---

# Product Management API

This RESTful API allows clients to manage a collection of products stored in a PostgreSQL database using Prisma as the ORM. It supports CRUD (Create, Read, Update, Delete) operations on products.

## Table of Contents

- [Setup](#setup)
- [Endpoints](#endpoints)
  - [GET /products](#get-products)
  - [GET /products/:id](#get-product-by-id)
  - [POST /products](#create-product)
  - [PATCH /products/:id](#update-product)
  - [DELETE /products/:id](#delete-product)
- [Running the Project](#running-the-project)

## Setup

To run this project locally, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/njugus/PRODUCT-MANAGEMENT-API
   cd repository-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up your PostgreSQL database**:

   - Ensure PostgreSQL is installed and running on your machine.
   - Create a new database for this project.
   - Set up your `.env` file with the database URL:

     ```env
     DATABASE_URL="postgresql://user:password@localhost:5432/your-database-name"
     ```

   - Generate Prisma client and set up the database schema:

     ```bash
     npx prisma init
     npx prisma migrate dev --name init
     npx prisma generate
     ```

4. **Create the `Product` model in Prisma schema**:

   Add the following to your `prisma/schema.prisma` file:

   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }

   generator client {
     provider = "prisma-client-js"
   }

   model Product {
     id                 String   @id @default(uuid())
     productThumbnail   String   @db.VarChar(500)
     productTitle       String   @db.VarChar(50)
     productDescription String   @db.Text
     productCost        String   @db.VarChar(50)
     onOffer            Boolean
   }
   ```

5. **Start the server**:

   ```bash
   npm start
   ```

## Endpoints

### GET /products

Retrieves a list of all products from the database.

### GET /products/:id

Retrieves a single product from the database based on its `id`.

### POST /products

Creates a new product and adds it to the database.

### PATCH /products/:id

Updates an existing product based on its `id`.

### DELETE /products/:id

Deletes a product from the database based on its `id`.

## Running the Project

Ensure that PostgreSQL is running and your database is set up correctly with the `products` table. Then, follow these steps:

1. Start the server:

   ```bash
   npm start
   ```

2. Use a tool like Postman or curl to interact with the API endpoints.

3. Refer to the endpoint descriptions above for detailed usage of each API endpoint.

---

### Example Code for Endpoints

Here is how the routes could be implemented with Prisma in your Express app:


This implementation ensures your API uses Prisma to interact with a PostgreSQL database, providing a robust and maintainable way to manage product data.
