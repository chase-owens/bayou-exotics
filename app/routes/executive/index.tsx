import { ActionFunction, Link, LoaderFunction } from "remix";
import { Form, redirect, useLoaderData, useTransition } from "remix";

import { getProfile, Profile, updateProfile } from "~/profile";
import formatDate from "~/utils/formatDate";

interface LoaderData {
  profile: Profile;
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const profile = (await getProfile()) as Profile;

  const instagramUrl = formData.get("insta");
  const name = formData.get("name");
  const date = formData.get("date");

  if (typeof date === "string" && !isNaN(+date)) {
    profile.datesClosed.splice(+date, 1);
  }

  if (instagramUrl === "string" && typeof name === "string") {
    profile.instagramUrl = instagramUrl;
    profile.name = name;
  }

  await updateProfile(profile);

  return redirect("/executive");
};

export const loader: LoaderFunction = async ({ request }) => {
  const profile = await getProfile();

  return { profile };
};

export default function ExecutiveIndex() {
  const {
    profile: { datesClosed, instagramUrl, name },
  } = useLoaderData<LoaderData>();
  const transition = useTransition();

  return (
    <div className=" row space wrap">
      <div className="content" data-light="">
        <h2>Update Profile</h2>
        <Form className="column space" method="post">
          <label>
            Instagram URL:
            <input type="text" name="insta" defaultValue={instagramUrl} />
          </label>
          <label>
            Company Name:
            <input type="text" name="name" defaultValue={name} />
          </label>
          <button className="button" type="submit" value="create">
            {transition.submission ? "Updating..." : "Update"}
          </button>
        </Form>
      </div>
      <div className="content" data-light="">
        <span className="row alignCenter spaceBetween">
          <h2>Dates Closed</h2>
          <Link className="button" to="/executive/new/close-date">
            Add
          </Link>
        </span>
        <ul className="col space">
          {datesClosed.map((date, index) => {
            const closeTime = new Date(date[0]);
            const openTime = new Date(date[1]);
            return (
              <li key={`${date[0]}-${index}`}>
                <Form name="date" method="post">
                  <input type="hidden" name="date" value={index} />
                  <div className="row spaceBetween alignCenter space">
                    <span>
                      {formatDate(closeTime)}-{formatDate(openTime)}
                    </span>
                    <button className="button" type="submit">
                      Delete
                    </button>
                  </div>
                </Form>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
