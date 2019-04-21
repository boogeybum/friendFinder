var path = require("path");

module.exports = function(app) {
	// the user can either click on the survey button on the home page or enter the URL directly
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// default to the homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};