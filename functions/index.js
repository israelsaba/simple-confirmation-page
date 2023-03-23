const functions = require("firebase-functions");
const Mixpanel = require('mixpanel');
const url = require('url');

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//

exports.sendMpAdsDataAndForward = functions.https.onRequest((request, response) => {
    const parsedURL = url.parse(request.url, true);
    const queryParams = parsedURL.query
    const mixpanel = Mixpanel.init('73b777655a43f335b97bc9bb8cbf4700');
    const combinedObj = Object.assign(parsedURL, queryParams); 
    mixpanel.track('Ad clicked', combinedObj);
    const forwardURL = `https://investorhub.app`
    response.redirect(forwardURL);
    //response.status(200).send(`URL parsed is ${JSON.stringify(parsedURL, null, 2)}`);
});

exports.sendMpAEmailConfirmationDataAndForward = functions.https.onRequest((request, response) => {
    const parsedURL = url.parse(request.url, true);
    const queryParams = parsedURL.query
    const mixpanel = Mixpanel.init('73b777655a43f335b97bc9bb8cbf4700');
    const combinedObj = Object.assign(parsedURL, queryParams); 
    mixpanel.track('Ad clicked', combinedObj);
    const forwardURL = `https://investorhub.app/obrigado-inscrito`
    response.redirect(forwardURL);
    //response.status(200).send(`URL parsed is ${JSON.stringify(parsedURL, null, 2)}`);
});
