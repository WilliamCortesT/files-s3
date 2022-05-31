const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const region = process.env.AWS_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const storage = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

const getBuckets = () => {
  return storage.listBuckets().promise();
};

const uploadToBucket = (bucketName, file) => {
  const stream = fs.createReadStream(file.tempFilePath);
  const params = {
    Bucket: bucketName,
    Key: file.name,
    Body: stream,
  };
  return storage.upload(params).promise();
};

const getObjectsToBucket = (bucket) => {
  const params = {
    Bucket: bucket,
  };
  return storage.listObjects(params).promise();
};

const downloadToBucket = (bucket, key) => {
  const params = {
    Bucket: bucket,
    Key: key,
  };
  //   return storage.getObject(params).promise();
  return storage.getSignedUrlPromise("getObject", params);
};

const createBucker = (bucket) => {
  var params = {
    Bucket: bucket,
  };
  //ToDo: I not can return any value
  storage.createBucket(params, function (err, data) {
    if (err) {
      console.log("function- error: ", err);
    } else {
      console.log("function-data: ", data);
    }
  });
};

module.exports = {
  getBuckets,
  uploadToBucket,
  getObjectsToBucket,
  downloadToBucket,
  createBucker,
};
