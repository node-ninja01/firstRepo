const Message = require("../config/message");
const Constant = require("../config/constant");
const message = require("../config/message");

class Response {
    constructor() {
        this.resp = {};
        this.respId = 0;
    } 
    
    async create(req, res, next) {
        try {
            let respId = this.respId;
            let newrespId = respId + 1;

            this.resp[newrespId] = req.body;

            this.respId = newrespId;

            return res.status(200).json(Message.CREATED_SUCCESSFULLY);
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }

    async update(req, res, next) {
        try {
            let respId = req.body.respId || req.params.responseId;;
            
            this.resp[respId] = req.body;
            return res.status(200).json(Message.UPDATE_SUCCESSFULLY);
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }
    
    async get(req, res, next) {
        try {
            let respId = req.params.responseId;

            return res.status(200).json(this.resp[respId]);
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }
}

module.exports = Response;