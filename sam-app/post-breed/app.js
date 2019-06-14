const AWS = require('aws-sdk')
const uuidv4 = require('uuid/v4');
const docClient = new AWS.DynamoDB.DocumentClient({region: 'eu-west-1'})


exports.lambdaHandler = function(event, context, callback){
    console.log('processing event: ' + JSON.stringify(event, null, 2))

    const payload = JSON.parse(event.body)

    let params =  {
        Item: {
            id: uuidv4(),
            Breed: payload.breed            
        },

        TableName: 'catBreedTable'
    };

    docClient.put(params, function(err,data){
        if(err) {
            callback(err, null)
        }else{
            callback(null, data)
        }
    });

}
