export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-10-21";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "Missing environment variable: NEXT_PUBLIC_SANITY_DATASET",
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID",
);

export const giscusRepo = assertValue(
  process.env.NEXT_PUBLIC_GISCUS_REPO,
  "Missing environment variable: NEXT_PUBLIC_GISCUS_REPO",
) as `${string}/${string}`;

export const giscusRepoId = assertValue(
  process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  "Missing environment variable: NEXT_PUBLIC_GISCUS_REPO_ID",
);

export const giscusCategory = assertValue(
  process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  "Missing environment variable: NEXT_PUBLIC_GISCUS_CATEGORY",
);

export const giscusCategoryId = assertValue(
  process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  "Missing environment variable: NEXT_PUBLIC_GISCUS_CATEGORY_ID",
);

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }

  return v;
}
