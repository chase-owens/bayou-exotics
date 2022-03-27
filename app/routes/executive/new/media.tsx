import { UploadHandlerArgs } from "@remix-run/node/formData";
import type { ActionFunction } from "remix";
import { Form, redirect, useTransition } from "remix";
import { unstable_parseMultipartFormData } from "remix";

import { addAsset } from "~/assets";

export const action: ActionFunction = async ({ request }) => {
  const uploadHandler = async ({
    name,
    stream,
    filename,
  }: UploadHandlerArgs) => {
    if (name !== "image") {
      stream.resume();
      return;
    }
    // Get the file as a buffer
    const chunks = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    const buffer = Buffer.concat(chunks);

    // upload image to bucket
    const data = addAsset(filename, buffer);

    // return information about uploaded file
    return JSON.stringify({ data });
  };

  await unstable_parseMultipartFormData(request, uploadHandler);

  return redirect("/executive/media");
};

export default function NewFlower() {
  const transition = useTransition();

  return (
    <div className="container">
      <div className="content" data-light="">
        <h2>Add Image</h2>
        <Form
          className="col space-2"
          method="post"
          encType="multipart/form-data"
        >
          <label>
            Image: <input name="image" type="file" />
          </label>
          <p className="row space end">
            <button
              className="button"
              disabled={transition.submission ? true : undefined}
              type="reset"
            >
              Reset
            </button>
            <button
              disabled={transition.submission ? true : undefined}
              className="button"
              value="create"
            >
              {transition.submission ? "Adding..." : "Add Image"}
            </button>
          </p>
        </Form>
      </div>
    </div>
  );
}
