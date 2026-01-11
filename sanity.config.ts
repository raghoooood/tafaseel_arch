/**
 * Sanity Studio config mounted on `/tafaseelblog`
 */

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

import { projectId, dataset, apiVersion } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

/* =========================
   SAFETY CHECK
========================= */
if (!projectId || !dataset) {
  throw new Error(
    "Sanity Studio configuration error: projectId or dataset is missing."
  );
}

const config = defineConfig({
  name: "tafaseel-blog",
  title: "Tafaseel Blog Studio",

  basePath: "/tafaseelblog",

  projectId,
  dataset,
  apiVersion,

  schema: {
    types: schemaTypes,
  },

  plugins: [structureTool({ structure })],
});

export default config;
