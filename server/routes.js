var controllers = require('./controllers');
var router = require('express').Router();

for (var route in controllers) {
  router.route("/" + route)
    .get(controllers[route].get)
    .post(controllers[route].post); // i.e. route.post(controllers[users].post)
    // .options(controllers[route].options);
}

module.exports = router;

