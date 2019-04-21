var friends = require("../data/friends");

module.exports = function(app) {
  // Return all data in friends.js as JSON
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  
};