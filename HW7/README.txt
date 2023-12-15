
# Homework 7

## Part 1

Set up a Node.js Express web server with the following features:

Constants for host and port (default to localhost:3000)

Two GET routes: "/" and "/addname"

Use of the express body parser with extended set to true

Test the routes by returning string values for testing

Save, start the server, and test the two routes

## Part 2

Integrated Handlebars into the web server and use the .hbs extension

Set the default view to "basic_layout"
Create the "basic_layout.hbs" view in the "views/layouts" folder:

Set the title in the head section to "Register User"
Add a horizontal ruler
Place a handlebar variable named "body" followed by another horizontal ruler
Create the "get_request.hbs" view to render a form
Create the "post_request.hbs" view to render the output with handlebars variables:
datetime, first, and last
In the root route, render the "get_request" view
In the "/addname" route:
Render the "post_request" view

Added a context object with properties datetime (current date), first and last (set to "John Doe")
The context data should be added to the rendered "post_request" view
Save, start the server, and test the routes and handlebars views

## Part 3 

Create a "modules" folder and place "db.js" and "credentials.js" files for database connectivity
Create a new file "data.js" in the root folder

Loaded the mongoose library and db module, connected to the database using connectDB(true)
Define a userSchema with fields firstName, lastName, and DateTime (string types)

Created a User model using the userSchema
Created an object regUser with properties matching schema fields, provide test data (use new Date().toLocaleString() for DateTime)

Instantiated a User object with regUser and save it, then in the callback, display data in the console
Disconnect from the database using connectDB(false)

Saved and executed the file to verify data is saved in the database (for testing connectivity and creating the "users" collection)

## Part 4 

In the web server file:
Changed the "/addname" route to a POST route
Integrated the userSchema and User from Part 3 (load mongoose library)

Created a FormData variable, instantiate a new mongoose User, and pass the request body into it
Added DateTime property to FormData and assign current date and time

Saved FormData, and in the callback:
Created a context object with DateTime, firstName, and lastName properties from FormData

Passed context into rendering the "post_request" view (data gets merged into the handlebars view)
Save, start the server, and test entering data into the form and submitting