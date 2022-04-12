import AWS from "aws-sdk";

import config from "./aws-config";

const s3 = new AWS.S3(config);

s3.config.update({
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

export const enum Keys {
  Cart = "exotics/thc/cart.json",
  Edible = "exotics/thc/edible.json",
  Flower = "exotics/thc/flower.json",
  MoonRock = "exotics/thc/moon-rock.json",
  PreRoll = "exotics/thc/pre-roll.json",
  User = "users.json",
  Wax = "exotics/thc/wax.json",
}

export const getFile = async (key: string) => {
  const file = await s3
    .getObject({ Bucket: "bayou-exotics", Key: key })
    .promise()
    .catch((error) => {
      console.log(`Error at path: ${key}, ${error.message}`);
    });

  if (!file || !file.Body) {
    return null;
  }

  const data = file.Body.toString();

  return JSON.parse(data);
};

export const deleteCurrentIndex = async (key: string, index: number) => {
  const data = await getFile(key);

  data.current.splice(index, 1);

  const minifiedData = JSON.stringify(data);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: key,
      Body: minifiedData,
    })
    .promise();
};

export default s3;
