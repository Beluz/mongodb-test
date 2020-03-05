var express = require('express'),
router = express.Router();
itemCtrl = require('./item-controller');

// we reference the function in the get method by writin its name in this case item-controller
// getworld is like a method in the item-controller
router.get('/hello/:foo/:bar', itemCtrl.getWorld);
// itemCtrl.postWorld is another function inside of item-controller.js
router.post('/hello', itemCtrl.postWorld);

module.exports = router;