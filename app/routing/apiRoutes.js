var friends = require("../data/friends.js");
module.exports = function(app) {
    app.get("/api/friends", function (req, res) {

        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        console.log(req.body);

        var user = req.body;
        var leastDiff = 41;
        var index = 0;

        for(var i = 0; i < friends.length; i++){

            var currentDiff = 0;
            

            for (var j = 0; j < friends[i].scores.length; j++){

                currentDiff = currentDiff  + Math.abs(friends[i].scores[j] - user.scores[j]);

            }

            if (currentDiff < leastDiff){

                leastDiff = currentDiff;
                index = i;

            }

        }

        friends.push(user);

        res.json(friends[index]);
        
    });
}

