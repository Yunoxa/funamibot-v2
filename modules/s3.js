require("dotenv").config();
const AWS = require("@aws-sdk/client-s3");

async function getRandomS3Object(bucket, folder) {
  const client = new AWS.S3Client({
    region: "eu-central-2",
    credentials: {
      accessKeyId: process.env.AWS_ACCESSKEY,
      secretAccessKey: process.env.AWS_SECRETKEY
    }
  });

  const command = new AWS.ListObjectsV2Command({
    "Bucket": bucket,
    "Prefix": folder
  });

  console.log("Sending request for objects to S3...");
  const response = await client.send(command).catch(err => console.error(err));
  console.log(`Objects recieved from ${folder} folder in ${bucket} bucket.`);

  const objects = [];
  response.Contents.forEach(item => {
    objects.push(item.Key);
  });

  return objects[Math.floor(Math.random() * objects.length)];
}

module.exports = { getRandomS3Object };
