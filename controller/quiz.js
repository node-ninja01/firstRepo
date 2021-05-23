const QuizValidator = require("../lib/quiz");
const Message = require("../config/message");
const Constant = require("../config/constant");
const message = require("../config/message");

class Quiz {
    constructor() {
        this.quizzes = {};
        this.totalQuiz = 0;
        this.quizValidator = new QuizValidator();
    } 

    async create(req, res, next) {
       try {
        let curentQuizId = this.totalQuiz;
        let quizId = curentQuizId + 1;

        let reqBody = req.body; 
    
        let validationResult = this.quizValidator.create(reqBody);
        console.log(validationResult);
        if(validationResult.status) {
        
            this.quizzes[quizId] = validationResult.data;
            this.totalQuiz = quizId;
            if(reqBody.questList) {
                next();
            } else {
                res.status(200).json(validationResult.message);
            }

            return;
        } else {
            res.status(400).json(validationResult.message);
        }
       } catch (error) {
         console.log(error);
         res.status(500).json(message.INTERNAL_ERROR);
       }
    }

    async update(req, res, next) {
        try {
            let reqBody = req.body; 
            let quizId = reqBody.quizId || req.params.quizId;
    
            if(!quizId) {
                return res.status(400).json(Message.MISSING_KEYS);
            }
    
            let quiz = this.quizzes[quizId];
    
            if(reqBody.name) {
                this.quizzes[quizId].name = reqBody.name;
            }
    
            if(reqBody.questList) {
                this.quizzes[quizId].questList = reqBody.questList;
            }
    
            if(reqBody.quesId) {
                if(reqBody.action == Constant.ADD_QUESTION_IN_QUIZ) {
                    if(quiz.questList.indexOf(reqBody.quesId) < -1) {
                        quiz.questList.push(reqBody.quesId);
                    }
                } else if(reqBody.action == Constant.REMOVE_QUESTION_FROM_QUIZ) {
                    let index = quiz.questList.indexOf(reqBody.quesId);
    
                    if(index > -1) {
                        quiz.questList.splice(index, 1);
                    }
                }
            }
    
            res.status(200).json(message.UPDATE_SUCCESSFULLY);
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    }
    
    async get(req, res, next) {
        try {
            let quizId  = +req.params.quizId;
            if(!quizId ) {
                return  res.status(400).json(Message.MISSING_KEYS);
            } else if(typeof quizId == "number"){
                return res.status(400).json(Message.INVALID_KEY);
            }
    
            let quiz = this.quizzes[quizId];
            if(quiz) {
                res.status(200).json(quiz);   
            } else {
                res.status(404).json(message.NOT_FOUND);   
            }
            
        } catch (error) {
            console.log(error);
            res.status(500).json(message.INTERNAL_ERROR);
        }
    } 
    
}

module.exports = Quiz;