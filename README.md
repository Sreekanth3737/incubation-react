<h1>Incubation Management</h1>
<h4>Introduction</h4>
<p>An incubation management application for slot booking. This application is a for booking a slot for different companies to get an appointment.</p>
<h2>Run</h2>
<p>To run this application, you have to set your own environmental variables. For security reasons, some variables have been hidden from view and used as environmental variables with the help of dotenv package. Below are the variables that you need to set in order to run the application:</p>
<li>JWT_SECRET: This is the JWT AuthToken (string).</li>
<li>PORT: Port in which the application runs (string).</li>
<li>NODE_ENV: node environments (string).</li>
<p>After you've set these environmental variables in the .env file at the root of the project, and intsall node modules using npm installand install frontend packages.</p>
<p>Now you can run the backend using npm start in the terminal and run the frontend using npm run start, then the application should work.</p>
<h2>Technology</h2>
<p>The application is built with:</p>
<li>React js</li>
<li>Redux toolkit</li>
<li>MongoDb</li>
<li>Express js</li>
<li>Node Js</li>
<li>Rest API</li>

<h2>Features</h2>
<p>This application is a for booking a slot.</p>
<h6>Users can do the following:</h6>
<li>Signup.</li>
<li>User can login using the credentials.</li>
<li>Register thier company.</li>
<li>book an appointmnet.</li>
<h6>Admins can do the following:</h6>
<li>The Admin can become a controller of the APP by using the signup option and providing his role-based credentials, which he can later use to log in.</li>
<li>Admin can log in using registered credentials username and password, and can also end the session using the logout button</li>
<li>Admin can provide the slot based on the request of the users.
</li>
<h3>Author</h3>
<h6>Sreekanth ps</h6>


