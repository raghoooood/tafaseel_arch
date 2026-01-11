import { dataset, projectId , apiVersion} from "@/sanity/env";
import { createClient } from "next-sanity";

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
