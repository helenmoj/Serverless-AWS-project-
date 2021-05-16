// this set of functions are used to simplify the creation of the correct response needed when using a Lambda with API Gateway
// these methods add headers, a status code, and stringify any data that needs to be returned. 
// The JSON.stringify() method converts a JavaScript object or value to a JSON string


const Responses = {
    _200(data = {}) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 200,
            body: JSON.stringify(data),
        };
    },

    _400(data = {}) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Origin': '*',
            },
            statusCode: 400,
            body: JSON.stringify(data),
        };
    },
};

module.exports = Responses;