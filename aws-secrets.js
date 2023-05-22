/**
* index.js 
**/



var http = require('http');

const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

 
http.createServer(async function (req, res) {
exports.handler = async (event, context) => {

  // Create a Secrets Manager client.

  const secretsManagerClient = new SecretsManagerClient({ region: 'us-east-2' });

 console.log('secret manager client',secretsManagerClient);

  // Get the secret value.

  const params = { secretId: 'test-secret-manager' };

  const command = new GetSecretValueCommand(params);

  console.log('command', command)

  const secretValue =  secretsManagerClient.send(command);

 

  // Print the secret value.

  console.log('secret Value',secretValue);

};
}).listen(80);