import AWS from "aws-sdk";

const myCredentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:6aebb5ad-dc8a-437f-b99a-90e347fd8023",
});

const config = new AWS.Config({
  credentials: myCredentials,
  region: "us-east-2",
});

export default config;
