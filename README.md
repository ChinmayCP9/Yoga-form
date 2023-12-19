Yoga Classes Admission Form Application
Overview
This application serves as an admission form for monthly Yoga Classes. Users can enroll in any of the four batches offered each day and pay the monthly fee of 500 INR.

Dependencies
Node.js
nodemon
Express.js
MongoDB
Mongoose
Cors
Insomnia (for testing)
Setup Instructions
Clone the Repository:
git clone https://github.com/ChinmayCP9/Yoga-form
cd client

bash
install packege.json using
"git init"
add nodemon command to packege.json
"npx run nodemon index.js" as a script so we don't have to rerun our server and it will be automated 
git clone https://github.com/your-username/yoga-classes-admission-form.git
cd server
Install Dependencies:

bash
Copy code
npm install
MongoDB Cluster Setup:

Create an account on MongoDB Atlas.
Create a new cluster named "Cluster0" with your preferred configurations.
Obtain the connection string for your cluster.
Environment Variables:

Create a .env file in the root of your project.
Add the following variables:
env
Copy code
PORT=4000
MONGO_URI=your_mongo_connection_string
(In connections.js file)
Run the Application:

bash
Copy code
npm start
The server will start at http://localhost:4000.

Database Schema
ER Diagram with 3 tables:
The ER diagram can we seen in the Repository for Better Understanding

Users Table:

Columns: userID (Auto-generated), name, email, age, batch
Payments Table:

Columns: paymentID (Auto-generated), userID (Foreign Key), batchID (Foreign Key), date
Batch Table:

Columns: batchID (Auto-generated), start, end, capacity
Testing API Endpoints with Insomnia
Open Insomnia and create a new request.
Set the request method to POST.
Set the request URL to http://localhost:4000/.
Set the request body with the necessary user information (name, email, age, batch).
Send the request to enroll a user.
Important Notes
Ensure MongoDB is running and accessible.
Adjust the age limit, monthly fee, and batch timings as per your requirements in the code.

for the server, the logic is to use get and post and send data to the MongoDB server and Check Same Month Registration:

If an existing user is found, the code checks if the existing user was registered in the same month.
const existingUserMonth = existingUser.createdAt.getMonth();: Extracting the month of registration of the existing user.
const currentMonth = new Date().getMonth();: Getting the current month.
If the existing user was registered in the same month, it returns a 400 response with a message indicating the issue.
Creating and Saving New Users:

If no existing user is found or if the existing user is not registered in the same month, a new user is created and saved to the database.
const user = new User(req.body);: Creating a new user instance using the User model.
const result = await user.save();: Saving the new user to the database.

A basic React form is used with
The collectData function handles form submission by preventing the default form behavior and initiating an asynchronous HTTP POST request to the server endpoint "http://localhost:4000/".

It sends the user-provided data (name, email, age, batch) in JSON format, specifying the "Content-Type" as "application/json" in the request headers.

If the server responds with a successful status (HTTP 2xx), the result is parsed as JSON, stored in the local storage under the key "payment," and represents a successful registration.

If the server responds with an error status, the error message is displayed to the user via an alert, and any network or unexpected errors are logged to the console for further debugging.
