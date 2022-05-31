const { downloadToBucket } = require("../helpers/s3");

const download = async (req, res) => {
  const bucket = req.query.bucket;
  const key = req.query.key;

  const result = await downloadToBucket(bucket, key);

  res.json(result);
};

module.exports = {
  download,
};
