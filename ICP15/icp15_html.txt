module.exports = {
    top: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>icp15</title>
</head>
<body>
`,

    login: `<form action = "/login", method = "post">
<input type = "text" name= "user" placeholder = "Type your username" type= "required">
<br>
<br>
<input type = "password" name="password" placeholder = "Type your password" type= "required">
<br>
<br>
<input type= "submit">
</form>`,

    admin: `<h1>Admin Page</h1>
<p>You are logged in</p>
<hr>
<a href="/logout">Logout</a>`,

    loggedOut: `<h1>Logged Out</h1>
<p>You are logged out</p>
<hr>
<a href="/">Login again</a>`,

    bottom: `</body></html>`

};

// let top = `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>icp15</title>
// </head>
// <body>
// `;

// let login = `<form action = "/login", method = "post"`;
// login+=`<input type = "text" name= "user" placeholder = "Type your username" type= "required">`;
// login+=`<br>`;
// login+=`<br>`;
// login+=`<input type = "password" name="password" placeholder = "Type your password" type= "required">`;
// login+=`<br>`;
// login+=`<br>`;
// login+=`<input type= "submit">`
// login+=`</form>`;

// let admin = `<h1>Admin Page</h1>`;
// admin += `<br>`;
// admin += `<p>You are logged in</p>`;
// admin += `<hr>`;
// admin += `<a href="/logout">Logout</a>`;

// let loggedOut = `<h1>Logged Out</h1>`;
// admin += `<br>`;
// admin += `<p>You are logged out</p>`;
// admin += `<hr>`;
// admin += `<a href="/">Login again</a>`;

// let bottom = `</body></html>`;

