# Sports-Product-Store

# Click Here to test the app 

## Overview

This is a **Fullstack** project that leverages Node.js to create a robust server, incorporating MongoDB to manage three distinct collections - `post`, `article`, and `category`. Notably, the `category` collection establishes a one-to-many relationship with the `article` object. The project contains a secion with all categories, a section with last 3 posts, button for creating, deleting and editing all objects.

## Usage
**1. Clone the Repository and open with VSCode:**

   ```git bash
   git clone https://github.com/clauf14/Sports-Product-Store.git
   ```

**2. Add your MongoDB URI to the *.env* file:**

**3. Open the terminal and type:**

  ```git bash
   npm run devStart
  ```

**4. Click on the link and enjoy!**

  - Server started on [ http://localhost:8080 ]

## Features
- **Markdown for Posts**
  - Every Post has a markdown section where you can write actual markdowns and will be rendered as markdown.

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

  
