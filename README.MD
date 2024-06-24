Made By Kelvin Njuguna
---

# Product Management API

This RESTful API allows clients to manage a collection of products stored in a PostgreSQL database. It supports CRUD (Create, Read, Update, Delete) operations on products.

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
   - Use the provided SQL script to create the `products` table:

     ```sql
     CREATE TABLE products (
       product_id SERIAL PRIMARY KEY,
       productThumbnail VARCHAR(500) NOT NULL,
       productTitle VARCHAR(50) NOT NULL,
       productDescription TEXT NOT NULL,
       productCost VARCHAR(50) NOT NULL,
       onOffer BOOLEAN NOT NULL
     );
     ```

   - Optionally, insert some initial data into the `products` table.



5. **Start the server**:

   ```bash
   npm start
   ```

## Endpoints

### GET /products

Retrieves a list of all products from the database.

### GET /products/:id

Retrieves a single product from the database based on its `product_id`.

### POST /products

Creates a new product and adds it to the database.

### PATCH /products/:id

Updates an existing product based on its `product_id`.

### DELETE /products/:id

Deletes a product from the database based on its `product_id`.

## Running the Project

Ensure that PostgreSQL is running and your database is set up correctly with the `products` table. Then, follow these steps:

1. Start the server:

   ```bash
   npm start
   ```

2. Use a tool like Postman or curl to interact with the API endpoints.

3. Refer to the endpoint descriptions above for detailed usage of each API endpoint.

