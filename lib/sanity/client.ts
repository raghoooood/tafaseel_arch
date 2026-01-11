import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "@/sanity/env";

/* =========================
   SAFETY CHECK
========================= */
if (!projectId || !dataset) {
  throw new Error(
    "Sanity client configuration error: projectId or dataset is missing."
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
