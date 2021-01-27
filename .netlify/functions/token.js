/* netlify function */
exports.handler = function(event, context){
    console.log(event);

    return {
        statusCode: 200,
        body: ""
    }
}