// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../app/data/friends");
// var path = require("path");
// var fs = require("fs");

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
        console.log(friendsData);

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
        //console.log(req.body);
        // req.body is available since we're using the body parsing middleware


        var newFriendScores = req.body.scores;
        var scoreArray = [];
        var bestMatch = 0;

        //Loop through friends list
        for (let i = 0; i < friendsData.length; i++) {
            var scoresDiff = 0;
            //now 2nd loop to parse Int scores to compare friends
            for (let j = 0; j < newFriendScores.length; j++) {
                scoresDiff += (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriendScores[j])));

            }
            //Push results into ScoreArray
            scoreArray.push(scoresDiff);
            console.log("Score array is here", scoreArray)

        }

        //After all friends are compared, now let's find the best match
        for (let a = 0; a < scoreArray.length; a++) {
            if (scoreArray[a] <= scoreArray[bestMatch]) {
                //if score is negative, then just set best match score to 0
                bestMatch = a;
            }

        }
        //return bestmatch data
        var bff = friendsData[bestMatch];
        res.json(bff);
        console.log("what is a bff here", bff)

        // //Push the new user submission to Friends.js
        friendsData.push(req.body);

    });



};
