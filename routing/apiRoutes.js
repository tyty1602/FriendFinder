// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../app/data/friends");

//Try to grab userData from survey.HTML
// var userData = require("../public/survey");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
        //console.log(friendsData);

    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------


    //Add code here for matching friends list? 
    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body parsing middleware

    //     res.json(true);
    //     console.log("userResponses", JSON.stringify(userData));

    //     var matchName = "";
    //     var matchPic = "";
    //     var totalDiff = 100;

    //     //Loop through friends list
    //     for (let i = 0; i < friendsListArr.length; i++) {
    //         diff + -Math.abs(friendsListArr[i]).scores[i] - userData[i].scores[i];
    //         console.log(diff)
    //     }

    //     if (diff < totalDiff) {
    //         totalDiff = diff;
    //         matchName = friendsListArr[i].name;
    //         matchPic = friendsListArr[i].photo;
    //     }


    });

    // //Push userdata to Friends Array
    // friendsListArr.push(userData);

    // //Send JSON response
    // res.json({ status: 200, matchName: matchName, matchPic: matchPic })

};
