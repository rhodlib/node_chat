const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/', function(req, res) {
    controller.getMessage()
        .then((messageList) => {
            response.succes(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, "Unexpected Error", 500, e);
        })
});

router.post('/', function(req, res,) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, "Informacion invalida", 400, "Error para loguear");
        });
})

module.exports = router;