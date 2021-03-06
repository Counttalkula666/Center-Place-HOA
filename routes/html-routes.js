//BOILERPLATE FILE WITHOUT CUSTOMIZATION TO USE AS TEMPLATE


// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // blog route loads blog.html
  app.get("/blog", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/blog.html"));
  });

  // authors route loads author-manager.html
  app.get("/authors", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/author-manager.html"));
  });

};

// for reference: local filepaths for html outside "src" folder:
// C:\Users\elena\Desktop\Bootcamp\Homework For Github\OOMPH\student_portal.html
// C:\Users\elena\Desktop\Bootcamp\Homework For Github\OOMPH\index.html
// C:\Users\elena\Desktop\Bootcamp\Homework For Github\OOMPH\client\public\index.html
// C:\Users\elena\Desktop\Bootcamp\Homework For Github\OOMPH\sequencerReact\public\index.html