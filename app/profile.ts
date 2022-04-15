import { isPast } from "date-fns";

import s3 from "../aws/aws-exports";

export interface Profile {
  datesClosed: string[][];
  hourOpen: number;
  instagramUrl: string;
  name: string;
  update: string;
}

const PROFILE_KEY = "bayou-exotics.json";

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
      Key: PROFILE_KEY,
    })
    .promise()
    .catch((error) => {
      console.log(
        `Error fetching executive data from  ${PROFILE_KEY}: ${error.message}`
      );
    });

  if (!executive || !executive.Body) {
    throw new Error(`${PROFILE_KEY} has no Body`);
  }

  const data = executive.Body.toString();

  const profile: Profile = JSON.parse(data);

  profile.datesClosed = profile.datesClosed.filter(
    ([, date2]) => !isPast(new Date(date2))
  );

  return profile;
};
