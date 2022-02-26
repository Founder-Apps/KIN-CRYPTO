/* Parse Server 4.5.0
Parse.Cloud.define("installdep", (request) => {
require("./installdep.js");;
});
/

/* Parse Server 4.5.0
Parse.Cloud.define("installdep", (request) => {
require("./installdep.js");;
});
/


// To see it working, you only need to call it through SDK or REST API.
// Here is how you have to call it via REST API:

/*
* curl -X POST /
* -H "X-Parse-Application-Id: 0uEqMNbB6x0BGLY6USEY4y4pYEfLQcBg1AVdSHLx" /
* -H "X-Parse-REST-API-Key: nHsHP2OBCCJyZ8aXSlEgtXfsH9GJ2UwXI33BonRc" /
* -H "Content-Type: application/json" /
* -d "{}" /
* https://parseapi.back4app.com/functions/installdep
*/

// If you have set a function in another cloud code file, called "test.js" (for example)
// you need to refer it in your main.js, as you can see below:

/* require("./test.js"); */
