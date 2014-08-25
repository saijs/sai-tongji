
var Sai = require("sai");
var win = window;

Sai.on("jserror", function(err){

  var catched = false;
  var category = "jserror";
  var action = err.message;
  var label = err.file + "#L" + err.line;

  var _hmt = win._hmt;

  if (_hmt && typeof _hmt.push === "function"){

    _hmt.push(['_trackEvent', category, action, label]);
    catched = true;

  }

  err.catched = catched;

});
