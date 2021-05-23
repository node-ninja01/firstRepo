const Message = require("../config/message");
const Constant = require("../config/constant");
const message = require("../config/message");
class Question {
    constructor() {
        this.quesMap = {},
        this.quesId = 0;
    } 
    

    async create(req, res, next) {
        try {
            let curentQuesId = this.quesId;
            let quesId = curentQuesId + 1;

            let reqBody = req.body; 

            if(!reqBody.statement) {
                return res.status(400).json(Message.MISSING_KEYS);
            }

            if(!reqBody.type) {
                return res.status(400).json(Message.MISSING_KEYS);
            }

            this.quesMap[quesId] = {
                statement: reqBody.statement,
                type: reqBody.type,
            } 

            if(reqBody.type != Constant.QUESTION_TYPE.SIMPLE) {
                let options =req.body.options;
                if(Array.isArray(options)) {
                    this.quesMap[quesId]["options"] = req.body.options;
        
                } else {
                    return res.status(400).json(Message.INVALID_KEY);
                }
            }
            this.quesId = quesId;
            return res.status(200).json(Message.CREATED_SUCCESSFULLY);
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }

    async update(req, res, next) {
        try {
            let reqBody = req.body; 
            let questionId = reqBody.questionId || req.params.questionId;
    
            if(!questionId) {
                return res.status(400).json(Message.MISSING_KEYS);
            }
    
            let ques = this.quesMap[questionId];
    
            if(reqBody.statement) {
                this.quesMap[questionId].statement = reqBody.statement;
            }
    
            if(reqBody.type) {
                this.quesMap[questionId].type = reqBody.type;
            }
    
            if(reqBody.options) {
                this.quesMap[quesId]["options"] = req.body.options;
            }

            res.status(200).json(message.UPDATE_SUCCESSFULLY);
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }

    async get(req, res, next) {
        try {
            let questionId  = +req.params.questionId;
            if(!questionId ) {
                return  res.status(400).json(Message.MISSING_KEYS);
            } else if(typeof questionId != "number"){
                return res.status(400).json(Message.INVALID_KEY);
            }
    console.log(this.quesMap, questionId);
            let ques = this.quesMap[questionId];
            if(ques) {
                res.status(200).json(ques);   
            } else {
                res.status(404).json(message.NOT_FOUND);   
            }
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }
}

module.exports = Question;