import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: "ba70b84e-43c5-4e94-a642-43444673f327",
  // Get this from tina.io
  token: "e3d2d49e5f335d0585c8875f3fa22d947c8da9ec",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "publishDate",
            label: "Publish Date",
          },
          {
            type: "image",
            name: "image",
            label: "Image",
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            list: true,
            options: [
              { value: "news", label: "News" },
              { value: "documentation", label: "Documentation" },
            ],
          },
          {
            type: "string",
            name: "tags",
            label: "Tags",
            list: true,
            options: [
              { value: "data engineering", label: "Data Engineering" },
              { value: "data analytics", label: "Data Analytics" },
              { value: "data science", label: "Data Science" },
            ],
          },
          {
            type: "object",
            name: "metadata",
            label: "Metadata",
            fields: [
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "keywords",
                label: "Keywords",
              },
            ],
          },
        ],
      },
    ],
  },
});
