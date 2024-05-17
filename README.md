# Item List Project

This project is a simple React application that displays a list of items fetched from an API. Users can create, update, and delete items using tools like Postman or Thunder Client. Below are the steps to get started and the API endpoints available for interacting with the items.

## Features

- Fetch and display a list of items from an API.
- Automatically update the UI when the data changes.
- Use Postman or Thunder Client to create, update, and delete items.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A MongoDB instance (local or cloud).

### Installation

1. **Clone the repository:**

   git clone <repository-url>
   cd <repository-directory>

2. **Install dependencies**
 
   npm install

3. **Create a '.env' file:**
- In the root directory of the project, create a .env file and add the following environment variables:

  MONGODB_URL=<Your MongoDB URL>
  PORT=5000

4. **Start the Server**
  
   npm start


## Mock API Endpoints

To interact with the item list, use the following API endpoints:

 - GET http://localhost:5000/items - Fetch all items.
 - POST http://localhost:5000/items - Create a new item.
 - PUT http://localhost:5000/items/:id - Update an existing item.
 - DELETE http://localhost:5000/items/:id - Delete an item.

## Using Postman or Thunder Client
To create, update, or delete items, use Postman or Thunder Client with the following instructions:

1. **Create a new item:**

  - Method: POST
  - URL: http://localhost:5000/items
  
  {
  "name": "New Item"
  }

2. **Update an existing item:**

  - Method: PUT
  - URL: http://localhost:5000/items/:id
  
  {
  "name": "Updated Item"
  }

3. **Delete an item::**

  - Method: DELETE  
  - URL: http://localhost:5000/items/:id


## Running the React App
The React application will automatically fetch data from the server and update the UI when the data changes.

## License
This project is licensed under the MIT License.

