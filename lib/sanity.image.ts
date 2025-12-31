import createImageUrlBuilder, { SanityImageSource } from "@sanity/image-url";

import { dataset, projectId } from "@/lib/env";

const builder = createImageUrlBuilder({ projectId, dataset });

export const urlFor = (source: SanityImageSource) => {
  return builder.image(source);
};
