const express = require('express');
const {google} = require("googleapis");

const app = express();

app.get("/", async (req, res) => {
    const auth = new google.auth.GoogleAuth({
        keyFile: `credentials.json`,
        scopes: "http://www.googleapis.com/auth/spreadsheets",
    });

    // Create client instance for auth
    const client = await auth.getClient();


    // Create instance of Google sheets API
    const googleSheets = google.sheets({version: 'v4', auth: client});


    // Spreadsheet id
    const spreadsheetId = `1H3ulGgrxZQj3wDqfUnN2lTepFpLnGPlLVvoWa7Seplw`

    
    // Get metadata about spreadsheet
    const metadata = await googleSheets.spreadsheets.get({
        auth: auth,
        spreadsheetId: spreadsheetId,
    })


    res.send(metadata);
});

app.listen(1337, (req, res) => {
    console.log("running on 1337")
});