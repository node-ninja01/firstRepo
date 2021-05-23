class Quiz {
    constructor() {
        
    } 

    create(body) {
       
       console.log(body)
        let validationResult = {
            status: false,
            message: "created successfully",
            data: {},
        }
        if(!body.name) {
            validationResult.message = "mandatory keys are absent!!";
        } else {
            validationResult.status = true;
            validationResult.data.name = body.name;
        }
        console.log(validationResult)
        return validationResult;
    }

    async update(body) {
        
    }
    
    async get(body) {
        
    }
    
}

module.exports = Quiz;