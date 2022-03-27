const BASE_URL = "https://bayou-exotics.s3.us-east-2.amazonaws.com/";

export default function getAssetUrl(path: string) {
  return `${BASE_URL}${path}`;
}
