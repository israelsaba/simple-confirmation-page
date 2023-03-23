const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//


const url = require('url');
const querystring = require('querystring');

exports.sendMpDataAndForward = functions.https.onRequest((request, response) => {
    const parsedURL = url.parse(request.url, true);
    const queryData = querystring.parse(parsedURL.query);
    response.status(200).send(`Data is: ${JSON.stringify(queryData, null, 2)}`);
});
