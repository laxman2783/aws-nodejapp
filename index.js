/**
* index.js 
**/





const { SecretsManagerClient, GetSecretValueCommand } = require('@aws-sdk/client-secrets-manager');

 

exports.handler = async (event, context) => {

  // Create a Secrets Manager client.

  const secretsManagerClient = new SecretsManagerClient({ region: 'us-east-1' });

 

  // Get the secret value.

  const params = { secretId: 'test-secret-manager' };

  const command = new GetSecretValueCommand(params);

  const secretValue = await secretsManagerClient.send(command);

 

  // Print the secret value.

  console.log(secretValue);

};
