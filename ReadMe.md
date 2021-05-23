install node(8.11.3) and npm(5.6.0)

go to in the folder 
run npm install


Design and Develop APIs for a Quiz. 
As part of creating quiz, following actions have to be performed through APIs
Creating a Quiz, (A quiz will consist of multiple questions)
Creating a Question (One question could be part of multiple quiz)
Creating possible answers to a question
Listing the quizzes in a paginated manner.
Submitting response for a Quiz, a quiz could have multiple responses, one for each submission
Instructions:
Use an in-memory or an external database like HSQLDB, SQLite, Postgres etc for performing operations on the data.
Write a few Unit Tests as a demonstration.
Try to be as close as possible to production quality coding conventions
Handle failures wherever applicable
Since time is limited, please prioritize tasks in the order they have been mentioned in the problem.



**Tables**

__Quiz table__
id:,
name:,
questList:[quesId1, quesId2,..]


__Question table__
id: integer
statement text
type: <1,2,3> // 1 for simple, 2 for choice in options, 3 for multiple choice
options: ["","",""]




__response table__:
id:<>, // auto increament key
quizId: <>,
resp: {
    quesId: <value> // optionId in case options(2), text in case of simple(1) , for quesType 3 value is array,
    quesId2: <value>, // []
}


**API we need to created**

For quizzes
1. createQuiz it is POST API,     v1/quiz POST   
2. add Question to the Quiz  POST/put API, v1/quiz/:quizId Put
3. get Quiz, v1/quiz/:quizId, 

Question API:
1. create Question API
2. update Question API
3. getQustion


Response API
1. create Response for a quiz
2. update Response for the Quiz

curl -i "http://localhost:8080/v1/question"  -X POST -d '{"statement":"what is your name", "type": 1}' -H "Content-type:application/json"