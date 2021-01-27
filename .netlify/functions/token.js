/* netlify function */
exports.handler = function(event, context){
    if(event.httpMethod !== "POST") return { statusCode: 405 };
    
    var body = JSON.parse(event.body);

    return {
        statusCode: 200,
        body: ""
    }
}