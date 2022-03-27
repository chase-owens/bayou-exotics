import { LinksFunction, LoaderFunction, useLoaderData } from "remix";

import Footer from "~/components/Footer";
import Header from "~/components/Header";
import { getProfile, Profile } from "~/profile";
import { User } from "~/users";
import { getUserBySession } from "~/utils/session.server";

import cssUrl from "../styles/index.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: cssUrl }];
};

interface LoaderData {
  profile: Profile;
  user: User | null;
}

export const loader: LoaderFunction = async ({ request }) => {
  const [user, profile] = await Promise.all([
    getUserBySession(request),
    getProfile(),
  ]);

  return { profile, user };
};

export default function Index() {
  const { profile, user } = useLoaderData<LoaderData>();

  return (
    <>
      <Header user={user} />
      <Footer {...profile} />
    </>
  );
}
