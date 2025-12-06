export interface Project {
  _id: string;
  name: string;
  category: string;
  images: {
    backgroundImage: string;
    projectImages: string[];
  };
}

// Server action to fetch projects by category
export const fetchProjectsByCategory = async (category: string = "All"): Promise<Project[]> => {
  const queryParams = new URLSearchParams();

  if (category && category !== "All") {
    queryParams.append("category", category);
  }

  // Optionally, add pagination
  queryParams.append("_start", "0");
  queryParams.append("_end", "50");

  const res = await fetch(`http://localhost:8080/api/v1/projects?${queryParams.toString()}`, {
    cache: "no-store", // always fetch fresh data
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  const data: Project[] = await res.json();
  return data;
};
