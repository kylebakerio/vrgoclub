  var http = require("https");




// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
  to: 'testto@kylebaker.io', // Change to your recipient
  from: 'vrgo.club@kylebaker.io', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })



// attempt to get list id

// got it working, not needed now


// var options = {
//   "method": "GET",
//   "hostname": "api.sendgrid.com",
//   "port": null,
//   "path": "/v3/marketing/lists", // documentation was wrong about this link, needed to put 'marketing' here instead of 'contactdb' or whatever it was
//   "headers": {
//     "authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
//     // "on-behalf-of": "finesttype@gmail.com", // "The subuser's username. This header generates the API call as if the subuser account was making the call.",
//     "content-type": "application/json"
//   }
// };

// var req = http.request(options, function (res) {
//   var chunks = [];

//   res.on("data", function (chunk) {
//     chunks.push(chunk);
//   });

//   res.on("end", function () {
//     var body = Buffer.concat(chunks);
//     console.log(body.toString());
//   });
// });

// req.write(JSON.stringify({}));
// req.end();







// attempting to add contact

// yaaay this worked


console.log('sengrid api key:', process.env.SENDGRID_API_KEY)

  // var http = require("https");

var options = {
  "method": "PUT",
  "hostname": "api.sendgrid.com",
  "port": null,
  "path": "/v3/marketing/contacts",
  "headers": {
    "authorization": `Bearer ${process.env.SENDGRID_API_KEY}`,
    "content-type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify({ list_ids: [ '32880072-71dc-44f8-8cde-52108ab83ddd' ],
  contacts: 
   [ { // address_line_1: 'string (optional)',
       // address_line_2: 'string (optional)',
       // alternate_emails: [ 'string' ],
       // city: 'austin',
       // country: 'usa',
       email: 'test-new-receiver@kylebaker.io',
       // first_name: 'myname',
       // last_name: 'string (optional)',
       // postal_code: 'string (optional)',
       // state_province_region: 'string (optional)',
       // custom_fields: {} 
   } ] }));
req.end();