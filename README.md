# Sports-Product-Store

# Project Title

## Overview

This project leverages Node.js to create a robust server, incorporating MongoDB to manage three distinct collections - `post`, `article`, and `category`. Notably, the `category` collection establishes a one-to-many relationship with the `article` object.

## Features

- **Express Routing:**
  - Utilizes Express routing to seamlessly create dynamic routes for editing, creating, and viewing articles, posts, and categories.

- **Category-Article Relationship:**
  - Each category hosts a comprehensive list of articles, showcasing the intricate one-to-many relationship between categories and articles.

- **Homepage Display:**
  - The homepage provides a user-friendly interface, displaying:
    - A comprehensive list of all categories.
    - The latest three posts for quick access to recent content.

- **Node.js Server:**
  - The server is powered by Node.js, providing a scalable and efficient runtime for handling server-side operations.

## Technologies Used

- Node.js
- Express.js
- MongoDB

## Usage

1. **Clone Repository:**
   ```bash
   git clone https://github.com/clauf14/sports-product-store.git