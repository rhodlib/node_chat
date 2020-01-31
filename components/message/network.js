const express = require('express');
const router = express.Router();
const controller = require('./controller')
const response = require('../../network/response');

router.get('/', function(req, res) {
    controller.getMessage()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, "Unexpected Error", 500, e);
        })
});

router.post('/', function(req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, "Informacion invalida", 400, "Error para loguear");
        });
})

router.patch('/:id', function(req, res) {
    console.log(req.params.id);
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((err) => {
            response.error(req, res, "Error interno", 500, err);
        })
    res.send("OK");
})

module.exports = router;