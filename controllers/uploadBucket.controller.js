const { createBucker } = require("../helpers/s3");

const uploadBucket = async (req, res) => {
  const bucket = req.body.newBucket;

  await createBucker(bucket);
};

module.exports = { uploadBucket };
