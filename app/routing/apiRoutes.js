var friends = require("../data/friends");

module.exports = function(app) {
  // Return all data in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
      console.log("User input data: " + req.body.scores);

    // store user input (name, photo, scores)
    //=============================================
    var user = req.body;
    
    // parseInt for scores
    //=============================================
    for(var i = 0; i < user.scores.length; i++) {
      user.scores[i] = parseInt(user.scores[i]);
    }

    // default friend set, but will change to smallest score difference
    //=============================================
    var bestFriendIndex = 0;
    var minimumDifference = 40;

    // Zero difference to start then compare the user scores and the ith friend scores, one set at a time
    //  differneces are added to total difference
    //=============================================
    for(var i = 0; i < friends.length; i++) {
      var totalDifference = 0;
      for(var j = 0; j < friends[i].scores.length; j++) {
        var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
        totalDifference += difference;
      }

      // Update the best friend based on the current minimum difference
      //=============================================
      if(totalDifference < minimumDifference) {
        bestFriendIndex = i;
        minimumDifference = totalDifference;
      }
    }

    // push matches to friend array
    //=============================================
    friends.push(user);

    // return best friend result to browser
    //=============================================
    res.json(friends[bestFriendIndex]);
  });
};