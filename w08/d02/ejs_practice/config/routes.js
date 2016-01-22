var express = require('express')
router = express.Router()
var CandiesController = require('../controllers/CandiesController')

router.route('/candies')
  .get(CandiesController.all)
  .post(CandiesController.create)
router.route('/candies/:name')
  .get(CandiesController.show)
  .post(CandiesController.update)

module.exports = router
