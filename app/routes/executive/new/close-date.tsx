import { isPast } from "date-fns";
import { ActionFunction } from "remix";
import { Form, redirect, useTransition } from "remix";
import invariant from "tiny-invariant";

import { getProfile, Profile, updateProfile } from "~/profile";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();

  const currentProfile = (await getProfile()) as Profile;

  const close = formData.get("close");
  const open = formData.get("open");

  invariant(typeof close === "string");
  invariant(typeof open === "string");

  const closing = [close, open];

  const datesClosed = currentProfile.datesClosed.filter(
    ([date1, date2]) => !isPast(new Date(date1)) && !isPast(new Date(date2))
  );

  datesClosed.push(closing);

  await updateProfile({ ...currentProfile, datesClosed });

  return redirect("/executive");
};

export default function NewCloseDate() {
  const transition = useTransition();

  const date = new Date();

  return (
    <div className="content" data-light="">
      <h2>Add Date Closed</h2>
      <Form className="col space" method="post">
        <label>
          Time Closing:
          <input
            type="datetime-local"
            min={date.toLocaleString()}
            name="close"
          />
        </label>
        <label>
          Time Re-opening:
          <input
            type="datetime-local"
            min={date.toLocaleString()}
            name="open"
          />
        </label>
        <button className="button" type="submit" value="create">
          {transition.submission ? "Updating..." : "Add Dates Closing"}
        </button>
      </Form>
    </div>
  );
}
