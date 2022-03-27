import { isPast } from "date-fns";

import s3 from "../aws/aws-exports";

export interface Profile {
  datesClosed: string[][];
  hourClose: number;
  hourOpen: number;
  instagramUrl: string;
  name: string;
  update: string;
}

export const updateProfile = async (profile: Profile) => {
  const minifiedProfile = JSON.stringify(profile);

  return await s3
    .putObject({
      Bucket: "bayou-exotics",
      Key: "bayou-exotics.json",
      Body: minifiedProfile,
    })
    .promise();
};

export const getProfile = async () => {
  const executive = await s3
    .getObject({
      Bucket: "bayou-exotics",
      Key: "bayou-exotics.json",
    })
    .promise()
    .catch((error) => {
      console.log(`Error fetching assets path", ${error.message}`);
    });

  if (!executive || !executive.Body) {
    throw new Error("bayou-exotics.json has no Body");
  }

  const data = executive.Body.toString();

  const profile: Profile = JSON.parse(data);

  profile.datesClosed = profile.datesClosed.filter(
    ([, date2]) => !isPast(new Date(date2))
  );

  return profile;
};
