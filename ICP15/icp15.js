const host = 'localhost';
const port = 3000;

const express = require('express');
const app = express();
const session = require('express-session');
let html = require("./icp15_html.js");

let sSession;

app.use(session({
    secret: "USF cookie",
    resave: true,
    saveUninitialized: true
})
);

app.use(express.urlencoded({ extended: true }));


app.get("/", function (req, res) {
    sSession = req.session;
    if (sSession.user) {
        res.redirect(303, '/admin');
        return;
    } else {
        let page = html.top + html.login + html.bottom;
        return res.send(page);
    }

})

// admin page
app.get("/admin", function (req, res) {
    sSession = req.session;
    if (sSession.user) {
        let strHTML = html.top + html.admin + html.bottom;
        res.send(strHTML);
    } else {
        res.redirect(303, "/");
        return;
    }
})

app.post("/login", function (req, res) {
    sSession = req.session;
    sSession.user = req.body.user;
    res.redirect(303, "/admin");


})

// Logout page
app.get("/logout", function (req, res) {
    req.session.destroy(function (err) {
    if (err) {
        console.log(err);
    }
    let logoutPage = html.top + html.loggedOut + html.bottom;
    res.send(logoutPage);
    })

})

app.listen(port, host, function () {
    console.log(`Express server started on ${Date()} on server ${host}:${port}`);
})