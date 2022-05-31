const { getObjectsToBucket } = require("../helpers/s3");

const getObjects = async (req, res) => {
  const bucket = req.params.bucket;

  const result = await getObjectsToBucket(bucket);

  res.json(result.Contents);
};

module.exports = {
  getObjects,
};
