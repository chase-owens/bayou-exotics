import s3 from "../aws/aws-exports";

export const addAsset = async (filename: string, base64data?: Buffer) => {
  return s3
    .upload({
      Bucket: "bayou-exotics/assets",
      Key: encodeURI(filename),
      Body: base64data,
    })
    .promise()
    .then((data) => data);
};

export const deleteAsset = async (filename: string) => {
  return s3
    .deleteObject({
      Bucket: "bayou-exotics",
      Key: filename,
    })
    .promise()
    .then((data) => data);
};

export const getAssets = async () => {
  const assets = await s3
    .listObjectsV2({
      Bucket: "bayou-exotics",
      Prefix: "assets/",
      StartAfter: "assets/",
    })
    .promise()
    .catch((error) => {
      console.log(`Error fetching assets path", ${error.message}`);
    });

  const assetKeys: string[] = [];

  if (!assets || !assets.Contents) {
    return assetKeys;
  }

  for (const asset of assets.Contents) {
    if (asset.Key) {
      assetKeys.push(asset.Key);
    }
  }

  return assetKeys;
};
