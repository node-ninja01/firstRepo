/**
 * load controllers
 *
 *
 */

const Question = require('./../controller/question');
const question = new Question();

const Quiz = require('./../controller/quiz');
const quiz = new Quiz();

const Response = require('./../controller/response');
const response = new Response();


module.exports = (app) => {
  app.post('/v1/quiz', (req, res, next) => quiz.create(req, res, next), (req, res, next) => quiz.update(req, res, next));
  app.put('/v1/quiz/:quizId', (req, res, next) => quiz.update(req, res, next));
  app.get('/v1/quiz/:quizId', (req, res, next) => quiz.get(req, res, next));

  app.post('/v1/question', (req, res, next) => question.create(req, res, next));
  app.put('/v1/question/:questionId', (req, res, next) => question.update(req, res, next));
  app.get('/v1/question/:questionId', (req, res, next) => question.get(req, res, next));

  app.post('/v1/response', (req, res, next) => response.create(req, res, next));
  app.put('/v1/response/:responseId', (req, res, next) => response.update(req, res, next));
  app.get('/v1/response/:responseId', (req, res, next) => response.get(req, res, next));

};
